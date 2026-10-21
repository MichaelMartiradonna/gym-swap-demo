// Build the public, fully static Gym Swap portfolio demo from the Lab's built
// frontend snapshot. Reads gym-swap-lab/ only; never writes there.
import {readFile,writeFile,mkdir,rm,readdir,lstat,access} from 'node:fs/promises';
import {resolve,relative,dirname,sep} from 'node:path';
import {createHash} from 'node:crypto';
import {pathToFileURL,fileURLToPath} from 'node:url';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const labRoot=resolve(root,process.env.GYM_SWAP_LAB??'../gym-swap-lab');
const source=resolve(labRoot,'dist/client');
const output=resolve(root,'dist');
if(relative(root,output)!=='dist')throw new Error('Unsafe build destination');
if(!relative(root,labRoot).startsWith('..')&&relative(root,labRoot)!=='')throw new Error('The Lab checkout must sit outside the demo checkout.');
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
// Private or Lab-only material never enters the public output.
const PRIVATE_PATTERNS=[/^\.env/i,/^\.openai$/,/^server$/,/^db$/,/\.sqlite/i,/^evaluation$/,/^lab-build\.json$/,/^\.runtime$/,/^\.git$/,/^node_modules$/,/^snapshot$/,/^worker$/,/^\.wrangler$/,/^wrangler\.toml$/,/^hosting\.json$/];
const isPrivate=name=>PRIVATE_PATTERNS.some(p=>p.test(name));
// Hosting CI has no Lab checkout: verify the committed dist/ against its own
// recorded fingerprint instead of rebuilding, then exit successfully.
async function verifyOnly(){
  const record=JSON.parse(await readFile(resolve(output,'demo-build.json'),'utf8'));
  const files={};
  async function scanDist(dir,base=''){
    for(const name of (await readdir(dir)).sort()){
      const path=resolve(dir,name),stat=await lstat(path),key=base?base+'/'+name:name;
      if(key==='demo-build.json')continue;
      if(isPrivate(name))throw new Error('Private file in output: '+key);
      if(stat.isDirectory())await scanDist(path,key);else if(stat.isFile())files[key]=hash(await readFile(path));else throw new Error('Special file in output: '+key);
    }
  }
  await scanDist(output);
  if(hash(JSON.stringify(files))!==record.publicFingerprint||JSON.stringify(files)!==JSON.stringify(record.files))throw new Error('dist/ does not match demo-build.json. Rebuild with the Lab checkout present.');
  console.log(`Lab checkout not found at ${labRoot}; verified committed dist/ against public fingerprint ${record.publicFingerprint.slice(0,12)} (snapshot ${record.source.snapshotId.slice(0,12)}). Nothing rebuilt.`);
}
const labPresent=await access(resolve(labRoot,'snapshot/manifest.json')).then(()=>true,()=>false);
const esc=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

if(!labPresent){await verifyOnly();process.exit(0);}

// ---------------------------------------------------------------- inputs
const manifest=JSON.parse(await readFile(resolve(labRoot,'snapshot/manifest.json'),'utf8'));
const labBuild=JSON.parse(await readFile(resolve(source,'lab-build.json'),'utf8'));
if(labBuild.snapshotId!==manifest.snapshotId||labBuild.sourceRevision!==manifest.sourceRevision)throw new Error('Lab build output does not match its snapshot manifest.');
const revision=manifest.sourceRevision.slice(0,12);
const label=String(manifest.label??'M3').replace(/[&<>"']/g,'');

// Lab wrapper files are replaced by demo equivalents rather than copied.
const LAB_ONLY=new Set(['lab.css']);

// ---------------------------------------------------------------- copy
await rm(output,{recursive:true,force:true});
await mkdir(output,{recursive:true});
const copied={};
async function copyTree(rel=''){
  for(const item of (await readdir(resolve(source,rel),{withFileTypes:true})).sort((a,b)=>a.name.localeCompare(b.name))){
    const part=rel?rel+'/'+item.name:item.name;
    if(isPrivate(item.name)||LAB_ONLY.has(part))continue;
    const stat=await lstat(resolve(source,part));
    if(stat.isSymbolicLink())throw new Error('Refusing to copy a symbolic link: '+part);
    if(item.isDirectory()){await mkdir(resolve(output,part),{recursive:true});await copyTree(part);}
    else if(item.isFile()){const bytes=await readFile(resolve(source,part));await writeFile(resolve(output,part),bytes);copied[part]=hash(bytes);}
    else throw new Error('Only ordinary files may enter the demo: '+part);
  }
}
await copyTree();

// ---------------------------------------------------------------- integrity
// Every frozen public asset the Lab manifest lists must be byte-identical,
// except the two HTML pages the Lab decorated; those are undecorated below and
// then checked, so the demo provably derives from the reviewed snapshot.
const decoratedPages=['client/index.html','client/about/index.html'];
const labBannerPattern=/<aside class="lab-banner"[\s\S]*?<\/aside>/;
function undecorate(html){
  return html.replace('<title>Lab · ','<title>').replace('<link rel="stylesheet" href="/lab.css"></head>','</head>').replace(labBannerPattern,'');
}
let verified=0;
for(const [file,digest] of Object.entries(manifest.files)){
  const rel=file==='library-pilot.mjs'?'library-pilot.mjs':file==='routes.mjs'?null:file.replace(/^client\//,'');
  if(rel===null)continue; // Worker routing helper; the static demo has no Worker.
  if(decoratedPages.includes(file)){
    const html=await readFile(resolve(output,rel),'utf8');
    if(hash(undecorate(html))!==digest)throw new Error('Snapshot integrity mismatch after removing the Lab wrapper: '+file);
  }else if(copied[rel]!==digest)throw new Error('Snapshot integrity mismatch: '+file);
  verified++;
}

// ---------------------------------------------------------------- sample workout
// Generated by the snapshot's own parser/validator so the stored record matches
// the exact schema and catalogue signatures of this build. Deterministic ids.
const workoutModule=await import(pathToFileURL(resolve(output,'prototype/workout.mjs')).href+'?v=2.8.0');
const libraryModule=await import(pathToFileURL(resolve(output,'prototype/workout-library.mjs')).href);
const SAMPLE_LINES=[
  'Goblet squat — 3 x 8; rest 60 sec',
  'Dumbbell RDL — 3 x 10',
  'Seated cable row — 3 x 12',
  'Machine chest press — 3 x 10',
  'Barbell split squat — 2 x 8 each leg; bar on upper back, both feet on the floor',
  'Single-leg floor bridge — 2 x 12 each side',
];
const SAMPLE_TITLE='Sample workout';
const draft=workoutModule.parseWorkout(SAMPLE_LINES.join('\n'),SAMPLE_TITLE);
if(draft.entries.length!==6||draft.warnings.length)throw new Error('Sample workout did not parse into six clean lines.');
for(const entry of draft.entries){
  if(entry.review!=='proposed'||!entry.matchId)throw new Error('Sample line is not an exact catalogue match: '+entry.label);
  if(!workoutModule.alternativesFor(entry.matchId).length)throw new Error('Sample line has no reviewed swaps: '+entry.label);
}
const confirmed=workoutModule.confirmWorkout(draft);
const sampleWorkout=workoutModule.validateWorkout({...confirmed,id:'demo-sample-workout',entries:confirmed.entries.map((e,i)=>({...e,id:'demo-sample-line-'+(i+1)}))});
const sampleLibrary=libraryModule.validateWorkoutLibrary({version:1,activeId:sampleWorkout.id,workouts:[sampleWorkout]});
const LIBRARY_KEY=libraryModule.WORKOUT_LIBRARY_KEY,LEGACY_KEY=workoutModule.WORKOUT_KEY;
for(const key of [LIBRARY_KEY,LEGACY_KEY])if(!/^[\w.-]+$/.test(key))throw new Error('Unexpected storage key: '+key);
if(!/^[a-z0-9_-]+$/i.test(label.replace(/\s/g,'')))throw new Error('Unexpected snapshot label');

const seedScript=`<script data-demo="sample-workout">
// Portfolio demo: preload one synthetic sample workout on first visit only.
// Runs before the app module. Never overwrites an existing saved workout.
(function(){try{
  var KEY=${JSON.stringify(LIBRARY_KEY)},LEGACY=${JSON.stringify(LEGACY_KEY)},storage=window.localStorage;
  if(storage.getItem(KEY)!==null||storage.getItem(LEGACY)!==null)return;
  storage.setItem(KEY,${JSON.stringify(JSON.stringify(sampleLibrary))});
}catch(e){}})();
</script>`;

// ---------------------------------------------------------------- API shim
// The frontend already treats any failed /api/ call as "unavailable" and keeps
// the written card. This shim answers /api/ in-page with the same JSON shape the
// Lab Worker returns, so no request leaves the browser and the hosted 404/405
// never shows up in the console. Original modules stay byte-identical.
const unavailable={status:'unavailable',answer:'Live AI is disabled in this portfolio demo. Use the written card and deterministic comparison.',citations:[]};
const shimScript=`<script data-demo="api-shim">
// Portfolio demo: all /api/ routes are unavailable, exactly as in the Lab.
(function(){var original=window.fetch;window.fetch=function(input,init){
  var path='';try{path=new URL(typeof input==='string'?input:input&&input.url||'',window.location.href).pathname;}catch(e){}
  if(path.indexOf('/api/')===0)return Promise.resolve(new Response(${JSON.stringify(JSON.stringify(unavailable))},{status:503,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}}));
  return original.apply(this,arguments);};})();
</script>`;

// ---------------------------------------------------------------- pages
const banner=`<aside class="demo-banner" aria-label="Portfolio demo"><strong>Gym Swap</strong><span>Portfolio demo · reviewed library · AI explanations disabled</span><nav aria-label="Demo pages"><a href="/">Standard app</a><a href="/pilot/">Six-row pilot</a><a href="/about/">About</a><a href="https://github.com/MichaelMartiradonna" target="_blank" rel="noopener">GitHub ↗</a></nav><small>Public read-only snapshot of reviewed build ${esc(label)} ${esc(revision)}. A sample workout is preloaded; everything you enter stays in this browser. Written cards and deterministic comparisons work; "Ask about this swap" returns the written fallback.</small></aside>`;
const demoNote=`<p class="about-intro demo-note">This is a public demo of <a href="https://github.com/MichaelMartiradonna" target="_blank" rel="noopener">Michael Martiradonna</a>'s project. The reviewed library is complete; AI explanations are disabled and nothing you enter leaves this browser.</p>`;
function decorate(html,{scripts=false}={}){
  let next=undecorate(html);
  next=next.replace('<title>','<title>Demo · ').replace('</head>','<link rel="stylesheet" href="/demo.css"></head>').replace('<body>','<body>'+banner);
  if(scripts)next=next.replace('  <script type="module" src="/prototype/app.mjs',shimScript+'\n'+seedScript+'\n  <script type="module" src="/prototype/app.mjs');
  if(!next.includes('demo-banner')||!next.includes('/demo.css')||(scripts&&!next.includes('data-demo="sample-workout"')))throw new Error('Demo wrapper did not apply');
  return next;
}
const home=decorate(await readFile(resolve(output,'index.html'),'utf8'),{scripts:true});
await writeFile(resolve(output,'index.html'),home);
await mkdir(resolve(output,'pilot'),{recursive:true});
await writeFile(resolve(output,'pilot/index.html'),home.replace('<html','<html data-library-pilot="rows"'));
let about=decorate(await readFile(resolve(output,'about/index.html'),'utf8'));
if(!about.includes('<p class="about-intro">'))throw new Error('About intro not found');
about=about.replace(/(<p class="about-intro">[^<]*<\/p>)/,'$1\n    '+demoNote);
await writeFile(resolve(output,'about/index.html'),about);

// Banner styling: the Lab stylesheet with its selector renamed.
const css=(await readFile(resolve(labRoot,'worker/lab.css'),'utf8')).replaceAll('.lab-banner','.demo-banner')
  +'\n.demo-note{margin-top:4px}\n';
await writeFile(resolve(output,'demo.css'),css);

// ---------------------------------------------------------------- static hosting helpers
// Old bookmarks the Lab Worker redirected to "/". Cloudflare Pages reads
// _redirects; GitHub Pages gets a meta-refresh page instead.
await writeFile(resolve(output,'_redirects'),['/prototype / 301','/prototype/ / 301','/prototype/index.html / 301',''].join('\n'));
await writeFile(resolve(output,'_headers'),['/*','  X-Content-Type-Options: nosniff','  Referrer-Policy: strict-origin-when-cross-origin',''].join('\n'));
await writeFile(resolve(output,'prototype/index.html'),`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=/"><title>Gym Swap</title></head>
<body><p>The app moved to <a href="/">the home page</a>.</p></body></html>
`);
await writeFile(resolve(output,'404.html'),`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Demo · Gym Swap · Not found</title><link rel="stylesheet" href="/demo.css"></head>
<body>${banner}<main style="max-width:960px;margin:24px auto;padding:0 12px;font:16px/1.5 system-ui,sans-serif"><h1>Page not found</h1><p>This static demo serves the app at <a href="/">/</a>, the six-row pilot at <a href="/pilot/">/pilot/</a> and the scope notice at <a href="/about/">/about/</a>. API routes are intentionally unavailable.</p></main></body></html>
`);
await writeFile(resolve(output,'.nojekyll'),'');

// ---------------------------------------------------------------- record
const files={};
async function scan(dir,base=''){
  for(const name of (await readdir(dir)).sort()){
    const path=resolve(dir,name),stat=await lstat(path),key=base?base+'/'+name:name;
    if(isPrivate(name))throw new Error('Private file in output: '+key);
    if(stat.isDirectory())await scan(path,key);else if(stat.isFile())files[key]=hash(await readFile(path));else throw new Error('Special file in output: '+key);
  }
}
await scan(output);
const record={
  demo:'gym-swap-demo',
  modelCalls:'disabled',
  source:{
    lab:'private Lab built frontend (dist/client) plus its snapshot manifest',
    snapshotId:manifest.snapshotId,
    sourceRevision:manifest.sourceRevision,
    sourceBuild:manifest.sourceBuild,
    label:manifest.label,
    scope:manifest.scope,
    labBuild,
    verifiedFiles:verified,
  },
  sampleWorkout:{storageKey:LIBRARY_KEY,title:SAMPLE_TITLE,lines:SAMPLE_LINES,entries:sampleWorkout.entries.map(e=>({label:e.label,matchId:e.matchId,matchSignature:e.matchSignature}))},
  publicFingerprint:hash(JSON.stringify(files)),
  files,
};
await writeFile(resolve(output,'demo-build.json'),JSON.stringify(record,null,2)+'\n');
console.log(`Built public Gym Swap demo from Lab snapshot ${manifest.snapshotId.slice(0,12)} (source ${revision}); ${verified} frozen assets verified; public fingerprint ${record.publicFingerprint.slice(0,12)}. No live AI backend.`);
