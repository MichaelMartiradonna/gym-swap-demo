// Loopback-only static preview of dist/, behaving like a static host:
// directory index pages, the _redirects rules, a 404 page and no API routes.
// No dependencies. Usage: node scripts/preview.mjs [port]
import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,dirname,sep,extname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'../dist');
const types={'.html':'text/html; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.json':'application/json; charset=utf-8','.txt':'text/plain; charset=utf-8'};
const baseHeaders={'Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'};

export async function loadRedirects(){
  try{
    return (await readFile(resolve(root,'_redirects'),'utf8')).split('\n').map(l=>l.trim()).filter(l=>l&&!l.startsWith('#')).map(l=>{const [from,to,status]=l.split(/\s+/);return {from,to,status:Number(status)||301};});
  }catch{return [];}
}

export async function respond(method,rawUrl,redirects){
  const url=new URL(rawUrl,'http://127.0.0.1');
  let path;try{path=decodeURIComponent(url.pathname);}catch{return {status:400,headers:baseHeaders,body:'Bad request'};}
  if(!['GET','HEAD'].includes(method))return {status:405,headers:{...baseHeaders,Allow:'GET, HEAD'},body:'Static demo: read-only'};
  const rule=redirects.find(r=>r.from===path);
  if(rule)return {status:rule.status,headers:{...baseHeaders,Location:rule.to+url.search},body:''};
  if(path.endsWith('/'))path+='index.html';
  let file=resolve(root,'.'+path);
  if(file!==root&&!file.startsWith(root+sep)||path.split('/').some(part=>part.startsWith('.')&&part!=='.'))return notFound();
  try{
    const info=await stat(file);
    if(info.isDirectory()){return {status:301,headers:{...baseHeaders,Location:path+'/'+url.search},body:''};}
  }catch{
    try{await stat(file+'/index.html');return {status:301,headers:{...baseHeaders,Location:path+'/'+url.search},body:''};}catch{return notFound();}
  }
  try{
    const body=await readFile(file);
    return {status:200,headers:{...baseHeaders,'Content-Type':types[extname(file)]??'application/octet-stream'},body};
  }catch{return notFound();}
}
async function notFound(){
  try{return {status:404,headers:{...baseHeaders,'Content-Type':types['.html']},body:await readFile(resolve(root,'404.html'))};}
  catch{return {status:404,headers:{...baseHeaders,'Content-Type':types['.txt']},body:'Not found'};}
}

export function startPreview(port=0,host='127.0.0.1'){
  return new Promise(async(done,fail)=>{
    const redirects=await loadRedirects();
    const server=createServer(async(req,res)=>{
      try{const r=await respond(req.method,req.url,redirects);res.writeHead(r.status,r.headers);res.end(req.method==='HEAD'?undefined:r.body);}
      catch{res.writeHead(500,baseHeaders);res.end('Preview unavailable');}
    });
    server.once('error',fail);
    server.listen(port,host,()=>done({server,port:server.address().port,url:`http://${host}:${server.address().port}/`}));
  });
}

if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  const {server,url}=await startPreview(Number(process.argv[2]??process.env.PORT??50813));
  console.log('Demo preview (static, no API): '+url);
  process.on('SIGINT',()=>server.close(()=>process.exit()));
}
