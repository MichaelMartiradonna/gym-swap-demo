// Hosting regressions for the public static demo, ported from the Lab where a
// static host makes them meaningful, plus the demo-specific guarantees.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir,lstat,access} from 'node:fs/promises';
import {resolve,dirname,extname} from 'node:path';
import {createHash} from 'node:crypto';
import {createContext,runInContext} from 'node:vm';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {startPreview} from '../scripts/preview.mjs';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const dist=resolve(root,'dist');
const labRoot=resolve(root,process.env.GYM_SWAP_LAB??'../gym-swap-lab');
const read=path=>readFile(resolve(dist,path),'utf8');
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const BANNER='Portfolio demo · reviewed library · AI explanations disabled';
const labPresent=await access(resolve(labRoot,'snapshot/manifest.json')).then(()=>true,()=>false);
const labManifest=async()=>JSON.parse(await readFile(resolve(labRoot,'snapshot/manifest.json'),'utf8'));

async function walk(dir,base=''){
  const out=[];
  for(const name of (await readdir(dir)).sort()){
    const file=resolve(dir,name),stat=await lstat(file),key=base?base+'/'+name:name;
    out.push({key,name,stat});
    if(stat.isDirectory())out.push(...await walk(file,key));
  }
  return out;
}
const textFiles=async()=>(await walk(dist)).filter(f=>f.stat.isFile()&&['.html','.mjs','.js','.css','.json','.svg','.txt','.mts',''].includes(extname(f.name)));
const script=(html,id)=>{const m=new RegExp(`<script data-demo="${id}">([\\s\\S]*?)<\\/script>`).exec(html);assert.ok(m,`inline script ${id} present`);return m[1];};
function fakeStorage(initial={}){
  const map=new Map(Object.entries(initial)),writes=[];
  return {writes,getItem:k=>map.has(k)?map.get(k):null,setItem(k,v){map.set(k,String(v));writes.push([k,String(v)]);},removeItem:k=>map.delete(k)};
}
const workoutModule=()=>import(pathToFileURL(resolve(dist,'prototype/workout.mjs')).href+'?v=2.8.0');
const libraryModule=()=>import(pathToFileURL(resolve(dist,'prototype/workout-library.mjs')).href);

test('demo-build.json records the Lab snapshot fingerprint and the public output fingerprint',async()=>{
  const record=JSON.parse(await read('demo-build.json'));
  if(labPresent){const manifest=await labManifest();assert.equal(record.source.snapshotId,manifest.snapshotId);assert.equal(record.source.sourceRevision,manifest.sourceRevision);}
  assert.equal(record.source.snapshotId,'84beb762a173d64d9d4c8d19174d7c1f2a6b3e7df185c36775b87495b6bf95f7');
  assert.equal(record.source.sourceRevision,'11e4acedad8ab082c18ab74b54b5253a4d1a6ed62578ac3d21f9db2b15a1e9ff');
  assert.equal(record.modelCalls,'disabled');assert.equal(record.source.labBuild.modelCalls,'disabled');
  assert.ok(record.source.verifiedFiles>=48);
  const files={};
  for(const f of await walk(dist))if(f.stat.isFile()&&f.key!=='demo-build.json')files[f.key]=hash(await readFile(resolve(dist,f.key)));
  assert.deepEqual(files,record.files);
  assert.equal(hash(JSON.stringify(files)),record.publicFingerprint);
});

test('every frozen app module and asset is byte-identical to the Lab snapshot; only the wrapper pages differ',{skip:!labPresent&&'Lab checkout not present'},async()=>{
  const manifest=await labManifest();
  let checked=0;
  for(const [file,digest]of Object.entries(manifest.files)){
    if(file==='routes.mjs'||file==='client/index.html'||file==='client/about/index.html')continue;
    const rel=file.replace(/^client\//,'');
    assert.equal(hash(await readFile(resolve(dist,rel))),digest,rel);checked++;
  }
  assert.ok(checked>=46);
  assert.doesNotMatch(await read('prototype/explanation.mjs'),/demo|portfolio/i);
});

test('standard and pilot pages are separate entry paths with the demo banner and no Lab identity',async()=>{
  for(const [path,pilot]of[['index.html',false],['pilot/index.html',true]]){
    const html=await read(path);
    assert.ok(html.includes(BANNER),path);assert.match(html,/<title>Demo · Gym Swap/);
    assert.match(html,/equipment-note-panel/);assert.match(html,/Early beta/);assert.match(html,/Build 2\.8\.1/);
    assert.equal(html.includes('data-library-pilot="rows"'),pilot,path);
    assert.doesNotMatch(html,/Gym Swap Lab|Private testing copy|Live app ↗|lab\.css|lab-banner/);
    assert.match(html,/href="\/demo\.css"/);assert.match(html,/class="demo-banner"/);
    assert.match(html,/github\.com\/MichaelMartiradonna/);
  }
  const css=await read('demo.css');
  assert.match(css,/\.demo-banner\{/);assert.doesNotMatch(css,/lab-banner/);
  if(labPresent)assert.equal(css,(await readFile(resolve(labRoot,'worker/lab.css'),'utf8')).replaceAll('.lab-banner','.demo-banner')+'\n.demo-note{margin-top:4px}\n');
});

test('existing About content and footer survive the demo wrapper, with one public-demo line',async()=>{
  const html=await read('about/index.html');
  assert.ok(html.includes(BANNER));
  assert.match(html,/Professional guidance/);assert.match(html,/Return to app/);assert.match(html,/Gym%20Swap%20beta%20feedback/);assert.match(html,/Limits and responsible use/);
  assert.match(html,/public demo of <a href="https:\/\/github\.com\/MichaelMartiradonna"[^>]*>Michael Martiradonna<\/a>'s project/);
  assert.equal(html.match(/demo-note/g).length,1);
  assert.doesNotMatch(html,/Gym Swap Lab|data-demo=/);
});

test('old bookmarks still resolve on a static host',async()=>{
  const rules=(await read('_redirects')).trim().split('\n');
  assert.deepEqual(rules,['/prototype / 301','/prototype/ / 301','/prototype/index.html / 301']);
  assert.match(await read('prototype/index.html'),/http-equiv="refresh" content="0; url=\/"/);
  assert.equal(await read('.nojekyll'),'');
  assert.match(await read('_headers'),/X-Content-Type-Options: nosniff/);
  assert.ok((await read('404.html')).includes(BANNER));
});

test('all API requests are answered in-page as unavailable; the frontend keeps the written card on any failure',async()=>{
  const html=await read('index.html');
  const calls=[];
  const window={location:{href:'https://demo.example/pilot/'},fetch:(...args)=>{calls.push(args);return Promise.resolve('original');}};
  const context=createContext({window,URL,Response,Promise});
  runInContext(script(html,'api-shim'),context);
  for(const path of['/api/explain','/api/row-trial','https://demo.example/api/other'])for(const method of['GET','POST']){
    const response=await window.fetch(path,{method,body:'{"question":"x"}'});
    assert.equal(response.status,503,path);
    const result=await response.json();
    assert.equal(result.status,'unavailable');assert.deepEqual(result.citations,[]);assert.equal(typeof result.answer,'string');
  }
  assert.equal(calls.length,0);
  assert.equal(await window.fetch('/prototype/app.mjs'),'original');assert.equal(calls.length,1);
  assert.doesNotMatch(script(html,'api-shim'),/OPENAI|api\.openai|XMLHttpRequest/);
  // The untouched explanation module degrades to its written fallback when a
  // static host answers with an HTML 404 (json() throws) or when the request fails.
  const {questionController}=await import(pathToFileURL(resolve(dist,'prototype/explanation.mjs')).href);
  for(const send of[async()=>{throw new TypeError('Failed to fetch');},async()=>JSON.parse('<!doctype html>')]){
    const states=[];const controller=questionController(send,s=>states.push(s));
    await controller.ask('What changes?');
    assert.equal(states.at(-1).status,'unavailable');assert.match(states.at(-1).answer,/unavailable.*written card/);assert.deepEqual(states.at(-1).citations,[]);
  }
});

test('test_demo_has_no_private_files',async()=>{
  const forbidden=[/^\.env/i,/^\.openai$/,/^server$/,/^db$/,/\.sqlite/i,/^evaluation$/,/^lab-build\.json$/,/^\.runtime$/,/^\.git$/,/^hosting\.json$/,/^node_modules$/,/^lab\.css$/,/\.pem$/,/\.key$/];
  const entries=await walk(dist);
  assert.ok(entries.length>50);
  for(const {key,name,stat}of entries){
    assert.ok(!stat.isSymbolicLink(),'symlink: '+key);
    for(const pattern of forbidden)assert.doesNotMatch(name,pattern,key);
  }
  assert.equal(entries.filter(e=>e.name.startsWith('.')).map(e=>e.key).join(','),'.nojekyll');
});

test('test_demo_preloads_sample_workout',async()=>{
  const {WORKOUT_LIBRARY_KEY,validateWorkoutLibrary}=await libraryModule();
  const {WORKOUT_KEY,usableMatch,alternativesFor,catalogueEntry}=await workoutModule();
  assert.equal(WORKOUT_LIBRARY_KEY,'gym-swap.workouts.v1');
  for(const page of['index.html','pilot/index.html']){
    const html=await read(page),seed=script(html,'sample-workout');
    assert.ok(html.indexOf('data-demo="sample-workout"')<html.indexOf('src="/prototype/app.mjs'),'seed runs before the app module');
    assert.ok(seed.includes(JSON.stringify(WORKOUT_LIBRARY_KEY)),'references the real library key');
    assert.ok(seed.includes(JSON.stringify(WORKOUT_KEY)),'respects the legacy single-workout key');
    // Seeds only when neither key exists.
    for(const initial of[{[WORKOUT_LIBRARY_KEY]:'{"version":1,"activeId":null,"workouts":[]}'},{[WORKOUT_KEY]:'{}'}]){
      const storage=fakeStorage(initial);runInContext(seed,createContext({window:{localStorage:storage}}));
      assert.deepEqual(storage.writes,[],'existing saved data is never overwritten');
    }
    const storage=fakeStorage();runInContext(seed,createContext({window:{localStorage:storage}}));
    assert.equal(storage.writes.length,1);assert.equal(storage.writes[0][0],WORKOUT_LIBRARY_KEY);
    const library=validateWorkoutLibrary(JSON.parse(storage.getItem(WORKOUT_LIBRARY_KEY)));
    assert.equal(library.workouts.length,1);assert.equal(library.activeId,library.workouts[0].id);
    const workout=library.workouts[0];
    assert.equal(workout.title,'Sample workout');assert.equal(workout.entries.length,6);assert.equal(workout.position,0);
    for(const entry of workout.entries){
      assert.equal(entry.review,'matched');assert.equal(entry.choice,null);
      assert.equal(usableMatch(entry),entry.matchId,entry.label);
      assert.equal(catalogueEntry(entry.matchId).signature,entry.matchSignature);
      assert.ok(alternativesFor(entry.matchId).length>0,'reviewed swaps for '+entry.label);
    }
    assert.deepEqual(workout.entries.map(e=>e.matchId),['goblet_squat','dumbbell_rdl','seated_cable_row','chest_press_machine','barbell_split_squat','single_leg_floor_bridge']);
    // A storage failure must not break page load.
    runInContext(seed,createContext({window:{get localStorage(){throw new Error('blocked');}}}));
  }
  const record=JSON.parse(await read('demo-build.json'));
  assert.equal(record.sampleWorkout.storageKey,WORKOUT_LIBRARY_KEY);
});

test('no Lab or production hostnames, Site identities or personal workout text in the public output',async()=>{
  const forbidden=[/mjmartiradonna\.chatgpt\.site/,/chatgpt\.site/,/gym-swap-lab\.[a-z]/i,/appgprj_/,/appgdep_/,/hosting\.json/,/OPENAI_API_KEY/,/sk-[A-Za-z0-9]{20,}/,/Michael's workout/i,/my workout\s*[-—:]/i,/Private testing copy/];
  for(const file of await textFiles()){
    const text=await readFile(resolve(dist,file.key),'utf8');
    for(const pattern of forbidden)assert.doesNotMatch(text,pattern,file.key);
  }
  // The only stored workout is the synthetic sample.
  const html=await read('index.html');
  assert.equal((html.match(/storage\.setItem\(/g)??[]).length,1);
  assert.match(script(html,'sample-workout'),/"title\\":\\"Sample workout\\"/);
});

test('the preview server behaves like a static host: pages, modules, redirects, 404 for APIs and private paths',async()=>{
  const {server,url}=await startPreview(0);
  try{
    const get=(path,init)=>fetch(url.slice(0,-1)+path,{redirect:'manual',...init});
    for(const path of['/','/pilot/','/about/']){
      const r=await get(path);assert.equal(r.status,200,path);assert.ok((await r.text()).includes(BANNER),path);
    }
    const about=await get('/about');assert.equal(about.status,301);assert.equal(about.headers.get('location'),'/about/');
    for(const path of['/prototype/app.mjs?v=2.8.1','/prototype/workout-library.mjs','/library-pilot.mjs','/demo.css','/demo-build.json','/icon.svg','/prototype/assets/chest-supported-row.png']){
      const r=await get(path);assert.equal(r.status,200,path);assert.equal(r.headers.get('cache-control'),'no-cache');
    }
    for(const path of['/prototype','/prototype/','/prototype/index.html']){
      const r=await get(path+'?from=old');assert.equal(r.status,301,path);assert.equal(r.headers.get('location'),'/?from=old');
    }
    const api=await get('/api/explain',{method:'POST',body:'{}'});assert.equal(api.status,405);
    assert.equal((await get('/api/explain')).status,404);
    for(const path of['/.env','/.openai/hosting.json','/server/index.js','/lab-build.json','/snapshot/manifest.json','/package.json','/../package.json','/scripts/build.mjs'])assert.equal((await get(path)).status,404,path);
    const missing=await get('/nope');assert.equal(missing.status,404);assert.ok((await missing.text()).includes('Page not found'));
    const head=await get('/',{method:'HEAD'});assert.equal(head.status,200);assert.equal(await head.text(),'');
  }finally{server.close();}
});
