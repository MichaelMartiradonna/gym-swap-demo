import {workoutCatalogue,normalizeWorkoutName,workoutLineParts,matchEntry,validateWorkout} from './workout.mjs?v=2.8.0';

// Discovery only: typo/prefix suggestions never participate in automatic import
// matching, equipment eligibility, prescriptions or substitute selection.
function distance(a,b) {
  const rows=Array.from({length:a.length+1},(_,i)=>[i]);
  for(let j=0;j<=b.length;j++)rows[0][j]=j;
  for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++) {
    rows[i][j]=Math.min(rows[i-1][j]+1,rows[i][j-1]+1,rows[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
    if(i>1&&j>1&&a[i-1]===b[j-2]&&a[i-2]===b[j-1])rows[i][j]=Math.min(rows[i][j],rows[i-2][j-2]+1);
  }
  return rows[a.length][b.length];
}
const index=workoutCatalogue.map(item=>({item,names:item.aliases.map(normalizeWorkoutName)}));
export function searchWorkoutCatalogue(query='') {
  const text=normalizeWorkoutName(query).replace(/\b(?:bumbells?|dumbells?|dbs?)\b/g,'dumbbell').replace(/\bkbs?\b/g,'kettlebell').replace(/\bbb\b/g,'barbell').replace(/\b(?:with|using)\b/g,' ').replace(/\bromain(?:ian)?\b/g,'romanian').replace(/\s+/g,' ').trim().slice(0,200);
  if(!text)return [...workoutCatalogue].sort((a,b)=>a.label.localeCompare(b.label));
  const words=text.split(' ').filter(Boolean);
  return index.map(({item,names})=>({item,score:Math.max(...names.map(name=>{
    if(name===text)return 1000;
    const terms=name.split(' ');let score=0;
    for(const word of words) {
      if(terms.includes(word)){score+=30;continue;}
      if(terms.some(term=>term.startsWith(word))){score+=20;continue;}
      // Short fragments are too ambiguous for spelling guesses; cap work on
      // pasted prose and permit two edits only for long exercise-name tokens.
      if(word.length<4||word.length>30)return 0;
      const limit=word.length>=6?2:1;
      const best=Math.min(...terms.filter(term=>Math.abs(term.length-word.length)<=limit).map(term=>distance(word,term)));
      if(best>limit)return 0;
      score+=10-best;
    }
    return score+words.length/Math.max(terms.length,1);
  }))})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||a.item.label.localeCompare(b.item.label)).map(x=>x.item);
}

// Replace only the caret's line name, retaining numbering, raw dose/notes,
// other lines and source order. Inserting a suggestion is an explicit edit.
export function activeWorkoutLine(text,caret=text.length) {
  const at=Math.max(0,Math.min(text.length,caret));
  const start=at===0?0:text.lastIndexOf('\n',at-1)+1;
  const next=text.indexOf('\n',at),end=next<0?text.length:next;
  const line=text.slice(start,end),parts=workoutLineParts(line);
  const prefix=/^\s*(?:(?:[-*•]|\d+[.)])\s+)?/.exec(line)[0];
  const from=start+prefix.length;
  const nameStart=parts.label?text.indexOf(parts.label,from):from;
  return {query:parts.label,start:Math.max(from,nameStart),end:Math.max(from,nameStart)+parts.label.length,lineStart:start,lineEnd:end};
}
export function completeWorkoutLine(text,caret,label) {
  const line=activeWorkoutLine(text,caret);
  return {text:text.slice(0,line.start)+label+text.slice(line.end),caret:line.start+label.length};
}

export function matchWorkoutOccurrence(workout,entryId,matchId) {
  if(!workout.entries.some(e=>e.id===entryId))throw new Error('Workout entry not found.');
  return validateWorkout({...workout,entries:workout.entries.map(e=>{
    if(e.id!==entryId)return e;
    const matched=matchEntry(e,matchId);
    return {...matched,choice:e.matchId===matched.matchId&&e.matchSignature===matched.matchSignature?e.choice:null};
  })});
}
