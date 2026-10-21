import {normalize} from './discovery.mjs?v=2.8.0';
import {cardsFor} from './scenario.mjs?v=2.8.0';
import {comparisonOriginalId} from './content.mjs?v=2.8.0';
import {legacyWorkoutCatalogue} from './library.mjs?v=1';

export const WORKOUT_KEY = 'gym-swap.active-workout.v1';
export const MAX_TEXT = 24000;
export const MAX_ENTRIES = 120;
export const unsavedMessage = "Changes aren't being saved; keep this page open.";
const uid = () => globalThis.crypto.randomUUID();
// Local name cleanup only; never rewrite the source or prescription. Expanded
// abbreviations such as "Dumbbell (DB)" are common in pasted training sheets.
export const normalizeWorkoutName = value => normalize(value).replace(/\bdumbbells? db\b/g,'dumbbell').replace(/\bbarbells? bb\b/g,'barbell').replace(/\b(squats|bridges|deadlifts|rdls|rows|lunges|pullups|pushups)\b/g,w=>w.slice(0,-1));

// Catalogue identities are shared by import, Browse and Replace. A category is
// never a workout exercise; legacy instruction/original aliases share one ID.
export const workoutCatalogue = legacyWorkoutCatalogue;
export const catalogueEntry = id => workoutCatalogue.find(x=>x.id===id);
export const alternativeSignature = id => catalogueEntry(comparisonOriginalId(id))?.signature ?? null;
export const alternativesFor = id => cardsFor(id);
export const usableMatch = entry => entry.matchId && catalogueEntry(entry.matchId)?.signature===entry.matchSignature ? entry.matchId : null;
export const usableChoice = entry => !entry.choice?.pilot && entry.choice?.kind==='alternative' && usableMatch(entry) && alternativesFor(entry.matchId).some(x=>x.id===entry.choice.id) && alternativeSignature(entry.choice.id)===entry.choice.signature;

export function findWorkoutMatches(label) {
  const text=normalizeWorkoutName(label);
  if(!text)return [];
  const words=text.split(' ');
  return workoutCatalogue.map(item=>{
    const names=item.aliases.map(normalizeWorkoutName);
    const exact=names.includes(text);
    const all=names.some(name=>words.every(w=>name.split(' ').some(term=>term.startsWith(w))));
    return {item,score:exact?3:all?2:0};
  }).filter(x=>x.score).sort((a,b)=>b.score-a.score).slice(0,8).map(x=>x.item);
}

export function proposeMatch(label, notes='') {
  const matches=findWorkoutMatches(label), text=normalizeWorkoutName(label), context=normalizeWorkoutName(label+' '+notes);
  const exact=matches.filter(x=>x.aliases.some(a=>normalizeWorkoutName(a)===text));
  // Search aliases aid discovery, but must not silently assign an imported
// workout's loading, elevation or bar position from an abbreviated name.
  const setupUnclear = /\b(bb|barbell) split squat\b/.test(text) && !(/\b(upper back|back loaded|back rack)\b/.test(context)&&/\b(feet on (the )?floor|both feet|floor)\b/.test(context))
    || /\b(rear elevated|rear foot elevated|bulgarian|rfess)\b/.test(text) && !/\b(bodyweight|unloaded|dumbbell|db|barbell|bb|goblet)\b/.test(context)
    || /\b(single leg|single limb|unilateral) (glute )?bridge\b/.test(text) && !/\b(floor|foot elevated|feet elevated|shoulder|shoulders)\b/.test(context);
  const match=exact.length===1&&!setupUnclear?exact[0]:null;
  return {matchId:match?.id??null,matchSignature:match?.signature??null,review:match?'proposed':matches.length?'ambiguous':'unmatched',
    candidates:matches.map(x=>x.id),warning:setupUnclear?'Confirm the exact loading and support setup.':matches.length&&!match?'Choose a match, or keep this entry as written.':''};
}

export function makeEntry(label='',notes='',sourceText=label) {
  return {id:uid(),sourceText,label,notes,...proposeMatch(label,notes),choice:null};
}
const prescription=/\b(?:\d+(?:\.\d+)?\s*(?:[x×]\s*\d|sets?\b|reps?\b|kg\b|lbs?\b|seconds?\b|secs?\b|minutes?\b|mins?\b|%))|\b(?:sets?|reps?|load|tempo|rest)\s*[:=]/i;
const continuation=/^(?:\d|sets?\b|reps?\b|load\b|tempo\b|rest\b|each\b|per\b|hold\b|pause\b|lower\b|notes?\b|use\b|keep\b|[([])/i;
export function workoutLineParts(line) {
  const cleaned=line.trim().replace(/^(?:[-*•]\s+|\d+[.)]\s+)/,'');
  if(workoutCatalogue.some(x=>x.aliases.some(a=>normalizeWorkoutName(a)===normalizeWorkoutName(cleaned))))return {label:cleaned,notes:''};
  const separator=/\t+|\s{2,}|\s+[—–-]\s+|:\s+/.exec(cleaned);
  const dose=prescription.exec(cleaned);
  const index=Math.min(separator?.index??Infinity,dose?.index??Infinity);
  if(index===Infinity||index===0)return {label:cleaned,notes:''};
  return {label:cleaned.slice(0,index).trim(),notes:cleaned.slice(index).trim().replace(/^[—–:-]\s*/,'')};
}

export function parseWorkout(text,title='') {
  if(typeof text!=='string'||!text.trim())throw new Error('Paste a workout before reviewing exercises.');
  if(text.length>MAX_TEXT)throw new Error(`This paste is too long. Paste one workout, up to ${MAX_TEXT.toLocaleString('en-US')} characters. Nothing has been replaced.`);
  const entries=[];let notes='';const warnings=[];
  for(const line of text.split(/\r\n|\n|\r/)) {
    if(!line.trim())continue;
    const parts=workoutLineParts(line), prior=entries.at(-1);
    const candidates=findWorkoutMatches(parts.label);
    if(/^(?:(?:week|day)\s*\d+|workout\s*[:\d])/i.test(line.trim())&&!candidates.length){
      notes+=(notes?'\n':'')+line;
      if(entries.length)warnings.push('More than one workout heading may be present. Keep only the workout you want; check the original text.');
      continue;
    }
    if(prior&&!candidates.length&&continuation.test(line.trim())) {
      prior.notes+=(prior.notes?'\n':'')+line.trim();prior.sourceText+='\n'+line;
      Object.assign(prior,proposeMatch(prior.label,prior.notes));
    } else {
      const entry=makeEntry(parts.label,parts.notes,line);
      if(!candidates.length)entry.warning='Unrecognized line. Keep as written, match it, or move its text into the correct notes.';
      entries.push(entry);
    }
  }
  if(!entries.length)throw new Error('No exercise entries were found. Add an exercise name and review again.');
  if(entries.length>MAX_ENTRIES)throw new Error(`This looks like more than one workout. Use up to ${MAX_ENTRIES} entries. Nothing has been replaced.`);
  if(/\b(?:either|or|superset|circuit)\b|\//i.test(text))warnings.push('Check any either/or choices, circuits, or group instructions manually. They have not been interpreted as a program.');
  return {version:1,id:uid(),title:title.trim()||'My workout',sourceText:text,notes,entries,position:0,warnings:[...new Set(warnings)]};
}

export function matchEntry(entry,id) {
  const record=catalogueEntry(id);
  if(!record)throw new Error('Choose an exercise from the library.');
  return {...entry,matchId:id,matchSignature:record.signature,review:'matched',warning:'',choice:null};
}
export const keepWritten = entry => ({...entry,matchId:null,matchSignature:null,review:'written',warning:'',choice:null});
export function confirmWorkout(draft) {
  if(!draft.entries.length||draft.entries.some(x=>!x.label.trim()))throw new Error('Give each entry a name, or remove empty entries.');
  if(draft.title.length>200)throw new Error('Use a workout name of up to 200 characters.');
  if(draft.notes.length>MAX_TEXT||draft.entries.some(e=>e.notes.length>MAX_TEXT||e.label.length>2000))throw new Error('An entry is too long. Use up to 2,000 characters per name and 24,000 per notes field. Your source text is unchanged.');
  const workout={...draft,position:0,entries:draft.entries.map(e=>({...e,review:e.review==='proposed'?'matched':e.review,choice:null}))};
  return validateWorkout(workout);
}
export function chooseForOccurrence(workout,entryId,choice) {
  if(!workout.entries.some(e=>e.id===entryId))throw new Error('Workout entry not found.');
  return {...workout,entries:workout.entries.map(e=>{
    if(e.id!==entryId)return e;
    if(choice?.kind==='alternative'&&(!usableMatch(e)||!alternativesFor(e.matchId).some(x=>x.id===choice.id)))throw new Error('This alternative is not reviewed for the original.');
    if(choice!==null&&!['original','alternative'].includes(choice?.kind))throw new Error('Invalid choice.');
    return {...e,choice:choice?.kind==='alternative'?{kind:'alternative',id:choice.id,signature:alternativeSignature(choice.id)}:choice?{kind:'original'}:null};
  })};
}
export function movePosition(workout,position) {
  if(!Number.isInteger(position)||position<0||position>=workout.entries.length)throw new Error('Invalid workout position.');
  return {...workout,position};
}
export const restartWorkout = workout => ({...workout,position:0,entries:workout.entries.map(e=>({...e,choice:null}))});
export function otherOccurrences(workout,id,currentId) {
  return workout.entries.flatMap((e,i)=>e.id!==currentId&&(comparisonOriginalId(e.matchId)===comparisonOriginalId(id)||e.choice?.kind==='alternative'&&e.choice.id===id)?[i+1]:[]);
}

export function validateWorkout(value) {
  const string=(x,max)=>typeof x==='string'&&x.length<=max;
  const id=x=>string(x,160)&&/^[a-zA-Z0-9_-]+$/.test(x);
  if(!value||value.version!==1||!id(value.id)||!string(value.title,200)||!string(value.sourceText,MAX_TEXT)||!string(value.notes,MAX_TEXT)||!Array.isArray(value.entries)||!value.entries.length||value.entries.length>MAX_ENTRIES||!Number.isInteger(value.position)||value.position<0||value.position>=value.entries.length)throw new Error('invalid_workout');
  const ids=new Set();
  const entries=value.entries.map(e=>{
    if(!e||!id(e.id)||ids.has(e.id)||!string(e.label,2000)||!e.label.trim()||!string(e.notes,MAX_TEXT)||!string(e.sourceText,MAX_TEXT)||!(e.matchId===null||id(e.matchId))||!(e.matchSignature===null||id(e.matchSignature))||!['proposed','matched','ambiguous','unmatched','written'].includes(e.review))throw new Error('invalid_entry');
    ids.add(e.id);
    let choice=null;
    if(e.choice!==null){if(e.choice?.kind==='original')choice={kind:'original'};else if(e.choice?.kind==='alternative'&&id(e.choice.id)&&id(e.choice.signature)){
      choice={kind:'alternative',id:e.choice.id,signature:e.choice.signature};
      if(e.choice.pilot!==undefined){
        const p=e.choice.pilot;
        if(!p||p.version!==1||!id(p.revision)||!id(p.baselineId)||!id(p.dependencySignature)||!Array.isArray(p.mustPreserve)||p.mustPreserve.length>20||Array.from(p.mustPreserve).some(x=>!id(x))||new Set(p.mustPreserve).size!==p.mustPreserve.length||Object.keys(p).some(key=>!['version','revision','baselineId','dependencySignature','mustPreserve'].includes(key)))throw new Error('invalid_pilot_choice');
        choice.pilot={version:1,revision:p.revision,baselineId:p.baselineId,dependencySignature:p.dependencySignature,mustPreserve:[...p.mustPreserve]};
      }
    }else throw new Error('invalid_choice');}
    return {id:e.id,label:e.label,notes:e.notes,sourceText:e.sourceText,matchId:e.matchId,matchSignature:e.matchSignature,review:e.review,choice,candidates:Array.isArray(e.candidates)?e.candidates.filter(id).slice(0,8):[],warning:string(e.warning,1000)?e.warning:''};
  });
  return {version:1,id:value.id,title:value.title,sourceText:value.sourceText,notes:value.notes,entries,position:value.position,warnings:Array.isArray(value.warnings)?value.warnings.filter(x=>string(x,1000)).slice(0,10):[]};
}

// A failed read locks writes. Never replace potentially recoverable bytes with
// an empty/default record. localStorage.setItem is atomic on quota failure.
export function workoutStore(getStorage) {
  let locked=false;
  return {
    protect(){locked=true;},
    load(){try {const raw=getStorage().getItem(WORKOUT_KEY);const workout=raw===null?null:validateWorkout(JSON.parse(raw));locked=false;return {workout,message:'',locked:false};}
      catch {locked=true;return {workout:null,locked:true,message:`Saved workout could not be read. ${unsavedMessage} Existing stored data has been left untouched.`};}},
    save(workout){if(locked)return {saved:false,message:`${unsavedMessage} Existing stored data has been left untouched.`};try {getStorage().setItem(WORKOUT_KEY,JSON.stringify(validateWorkout(workout)));return {saved:true,message:''};}catch{return {saved:false,message:unsavedMessage};}},
    remove(){try {getStorage().removeItem(WORKOUT_KEY);locked=false;return {removed:true,message:''};}catch{return {removed:false,message:'The saved workout could not be deleted. It is still available here. '+unsavedMessage};}},
    get locked(){return locked;},
  };
}
