import {parseWorkout,makeEntry,findWorkoutMatches,catalogueEntry,matchEntry,keepWritten,confirmWorkout,chooseForOccurrence,movePosition,restartWorkout,workoutStore,usableMatch,usableChoice,alternativesFor,otherOccurrences,MAX_ENTRIES} from './workout.mjs?v=2.8.0';
import {captureSwap, undoSwap} from './swap-undo.mjs';
import {searchWorkoutCatalogue,activeWorkoutLine,completeWorkoutLine,matchWorkoutOccurrence} from './workout-search.mjs';
import {workoutLibraryStore} from './workout-library.mjs';

const esc=text=>String(text??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const button=(action,label,style='secondary',extra='')=>`<button type="button" class="button ${style}" data-workout="${action}" ${extra}>${label}</button>`;
export function mountWorkout({root,resumeRoot,host,localPilot = null}) {
  const hasAlternatives = id => localPilot?.supports(id) || alternativesFor(id).length > 0;
  const choiceUsable = e => localPilot?.supports(e.matchId) ? localPilot.usableChoice(e) : usableChoice(e);
  const storage=workoutLibraryStore(()=>window.localStorage),loaded=storage.load();
  let workout=loaded.workout,draft=null,page='',cardsOpen=false,editing=false;
  let message=loaded.message,restored=!!workout,error='',confirmation='',pasteText='',pasteTitle='';
  let lastSaved=!!workout,recoveredWorkout=null;
  let draftMode='new';
  const swapUndos = new Map();
  let pasteCaret=0,repairOpen=false,repairMessage='';
  const searches=new Map(),visibleCounts=new Map();
  const entry=()=>workout?.entries[workout.position];
  const focus=(id='workout-heading')=>{const node=document.getElementById(id);node?.focus({preventScroll:true});node?.scrollIntoView({block:'start'});};
  function persist(replaceId=null){const result=storage.save(workout,{replaceId});lastSaved=result.saved;message=result.message;return result.saved;}
  function changePage(next,{clear=true}={}) {page=next;cardsOpen=false;repairOpen=false;repairMessage='';error='';confirmation='';if(clear)host.clearCards();render();host.render();focus();}
  function choiceText(e) {return e.choice?.kind==='original'?'Original kept':e.choice?.kind==='alternative'?(catalogueEntry(e.choice.id)?.label??e.choice.id):'No choice yet';}
  function savedNotice(){return message?`<div class="workout-warning" role="status"><p>${esc(message)}</p>${button('retry','Retry saving / reading','secondary')}${storage.locked&&page?button('discard','Discard protected saved data'):''}</div>`:workout?`<p class="help" role="status">${lastSaved?'Saved in this browser.':'Using this workout for this visit.'}${restored?' Workout restored. Check equipment again if needed.':''}</p>`:'';}
  function storageLimit(){return '<p class="help">Saved in this browser on this device. Other devices and the local preview have separate storage. Clearing browser data can remove it.</p>';}
  function originalText(data){return `<details class="workout-source"><summary>View pasted text</summary><pre>${esc(data.sourceText)}</pre></details>`;}
  function management(){return `<details class="workout-management"><summary>Manage this workout</summary><label for="saved-workout-name">Saved workout name</label><input id="saved-workout-name" maxlength="200" value="${esc(workout.title)}">${button('rename','Save name')}<div class="workout-actions">${button('restart','Restart this workout')}${button('replace','Replace this workout')}${button('delete','Delete this workout')}</div>${storageLimit()}</details>`;}
  function libraryList(){return `<section aria-label="Saved workouts"><h2>Saved workouts</h2><p class="help">Up to 20 workouts in this browser. Each keeps its own choices and position.</p><ul class="workout-library-list">${storage.list().map(w=>`<li><strong>${esc(w.title)}</strong><small>${w.entries.length} exercises · resume at ${w.position+1}${w.id===workout?.id?' · current':''}</small>${button('open-saved','Open workout','secondary',`data-workout-id="${w.id}" aria-label="Open ${esc(w.title)}"`)}</li>`).join('')||'<li>No saved workouts yet.</li>'}</ul></section>`;}
  function prompt(){
    const unidentified=draft?.entries.filter(e=>!usableMatch(e)&&e.review!=='written')??[];
    const prompts={restart:['Restart this workout?','Clear its choices, return to the first entry, and clear temporary equipment reports. The original list and exercise preferences stay.','Restart'],delete:['Delete saved workout?','Remove only this workout and its choices from this browser. Other saved workouts and exercise preferences stay.','Delete'],replace:['Replace saved workout?','Replace only the current workout with this reviewed draft. Its old choices and position will be removed; other saved workouts stay.','Replace'],discard:['Discard protected saved data?','Stored data was protected after a read problem. This explicitly removes it so the current in-memory workout can be saved.','Discard protected data']};
    prompts.recover=['Restore the saved workout?','Reading storage now works. Restoring the saved workout replaces the unsaved workout currently open on this page.','Restore saved workout'];
    if(confirmation==='unidentified')return `<section class="workout-confirm" role="alertdialog" aria-labelledby="confirm-heading" aria-describedby="confirm-description"><h2 id="confirm-heading" tabindex="-1">Continue with unidentified exercises?</h2><p id="confirm-description">${unidentified.length} ${unidentified.length===1?'entry has':'entries have'} no confirmed library match. Their written names and notes will stay. You can identify them during the workout; instructions and swaps remain unavailable until then.</p><div class="workout-actions">${button('identify-first','Identify exercises','primary')}${button('continue-unidentified','Continue without identifying')}${button('cancel-confirm','Cancel')}</div></section>`;
    if(confirmation==='discard')prompts.discard[1]='Explicitly discard the protected saved-workout collection in this browser. Other app preferences remain. Your current in-memory workout can then be saved.';
    const p=prompts[confirmation];return p?`<section class="workout-confirm" role="alertdialog" aria-labelledby="confirm-heading" aria-describedby="confirm-description"><h2 id="confirm-heading" tabindex="-1">${p[0]}</h2><p id="confirm-description">${p[1]}</p><div class="workout-actions">${button('confirm',p[2],'primary')}${button('cancel-confirm','Cancel')}</div></section>`:'';
  }
  function matchOptions(e,query=e.label,mode='review'){
    const key=mode==='paste'?'paste':e.id;
    const preferred=localPilot?.candidateMatches(query)??[];
    const matches=[...preferred,...searchWorkoutCatalogue(query).filter(m=>!preferred.some(p=>p.id===m.id))];
    const count=visibleCounts.get(key)??8;
    const action=mode==='paste'?'paste-match':mode==='current'?'match-current':'match';
    return `<p class="help" role="status">${matches.length?`${matches.length} name ${matches.length===1?'match':'matches'} found. Choose the exact original exercise. These identify its name; reviewed swaps are shown after continuing to the workout.`:'No supported name found. Try fewer words or Browse all exercises. You can keep your entry as written.'}</p>`+matches.slice(0,count).map(m=>button(action,`<span><strong>${esc(m.label)}</strong><small>${esc(m.setup)}</small></span>`,'secondary',`data-entry="${e.id}" data-match="${m.id}"`)).join('')+(matches.length>count?button('more-matches','Show more exercises','secondary',`data-key="${key}" data-mode="${mode}"`):'');
  }
  function picker(e,index,mode='review'){
    const query=searches.get(e.id)??e.label;
    return `<div class="workout-picker"><label for="match-${e.id}">Find a library exercise${mode==='review'?` for exercise ${index+1}`:''}</label><input id="match-${e.id}" data-match-search="${e.id}" data-mode="${mode}" value="${esc(query)}" placeholder="Name, partial name or spelling guess" autocomplete="off" aria-controls="options-${e.id}">${button('browse-matches','Browse all exercises','secondary',`data-entry="${e.id}" data-mode="${mode}"`)}<div class="workout-match-options" id="options-${e.id}">${matchOptions(e,query,mode)}</div>${mode==='review'?button('written','Keep as written','secondary',`data-entry="${e.id}"`):button('close-repair','Cancel')}</div>`;
  }
  function updatePasteSuggestions(){
    const field=document.getElementById('workout-text'),target=document.getElementById('paste-suggestions');
    if(!field||!target)return;
    pasteCaret=field.selectionStart??pasteText.length;
    const query=activeWorkoutLine(pasteText,pasteCaret).query;
    visibleCounts.delete('paste');
    target.innerHTML=query?matchOptions({id:'paste'},query,'paste'):'<p class="help">Start an exercise name on this line to see library suggestions.</p>';
  }
  function reviewEntry(e,index){
    const matched=catalogueEntry(usableMatch(e));
    return `<article class="workout-review-entry" data-entry-row="${e.id}"><div class="section-top"><h2>Exercise ${index+1}</h2><div class="workout-row-actions">${button('up','↑ <span class="sr-only">Move exercise up</span>','secondary',`data-entry="${e.id}" ${index===0?'disabled':''}`)}${button('down','↓ <span class="sr-only">Move exercise down</span>','secondary',`data-entry="${e.id}" ${index===draft.entries.length-1?'disabled':''}`)}${button('remove','Remove','secondary',`data-entry="${e.id}"`)}</div></div>
      <label for="label-${e.id}">Exercise name</label><input id="label-${e.id}" data-field="label" data-entry="${e.id}" value="${esc(e.label)}">
      <label for="notes-${e.id}">Original workout notes</label><textarea id="notes-${e.id}" data-field="notes" data-entry="${e.id}" rows="2">${esc(e.notes)}</textarea>
      <p class="match-summary">${matched?`${e.review==='matched'?'Matched':'Proposed match'}: <strong>${esc(matched.label)}</strong>`:e.review==='written'?'Kept as written · no catalogue match':e.review==='ambiguous'?'Choose a match · setup needs review':'No supported match yet'}</p>${matched?`<p class="help">${esc(matched.setup)}</p>`:''}
      ${matched&&!hasAlternatives(matched.id)?'<p class="help">Instructions available; no reviewed alternatives yet.</p>':''}
      ${matched&&alternativesFor(matched.id).length?`<p class="help">${alternativesFor(matched.id).length} reviewed swaps available after continuing to the workout.</p>`:''}
      ${e.warning?`<p class="workout-review-hint">${esc(e.warning)}</p>`:''}
      <details class="workout-match" ${!matched?'open':''}><summary>${matched?'Find / replace library match':'Find this exercise or browse the library'}</summary>${picker(e,index)}</details>${button('add-after','Add exercise here','secondary',`data-entry="${e.id}"`)}</article>`;
  }
  function review(){const unresolved=draft.entries.filter(e=>!usableMatch(e)&&e.review!=='written').length;return `<h1 id="workout-heading" tabindex="-1">Review exercises</h1><p class="help">${unresolved?`${unresolved} ${unresolved===1?'entry needs':'entries need'} a match or can stay as written. Review these first; the workout stays in source order.`:'Check the names, setups and notes, then confirm the list.'}</p>${draft.warnings.map(w=>`<p class="workout-review-hint">${esc(w)}</p>`).join('')}<label for="review-title">Workout name</label><input id="review-title" value="${esc(draft.title)}"><label for="review-notes">Workout notes / headings</label><textarea id="review-notes" rows="2">${esc(draft.notes)}</textarea>${originalText(draft)}<div class="workout-review-list">${draft.entries.map(reviewEntry).join('')}</div><div class="workout-actions">${button('add','Add exercise')}${button('use',editing?'Save reviewed matches':'Use this workout','primary')}${button('cancel-draft','Cancel')}</div><p class="help">Any unresolved entries stay as written. A catalogue match is never implied.</p>`;}
  function currentEntry(){
    const e=entry(),id=usableMatch(e),matched=catalogueEntry(id),selected=e.choice?.kind==='alternative',validSelected=choiceUsable(e);
    const originalInstructions=matched?.instructionId;
    return `<div class="section-top"><p class="eyebrow">${esc(workout.title)} · Exercise ${workout.position+1} of ${workout.entries.length}</p><div>${button('overview','Overview')}${button('start','My workouts')}</div></div><h1 id="workout-heading" tabindex="-1">${esc(e.label)}</h1>${matched&&e.label!==matched.label?`<p class="help">Catalogue match: ${esc(matched.label)}</p>`:''}
      ${!id?`<p class="workout-review-hint">${e.matchId?'This library record is missing or has changed. Find the exact library match.':'Kept as written · no confirmed catalogue match. Find this exercise below to unlock its existing instructions and swaps.'}</p>`:''}
      ${repairMessage?`<p class="help" role="status">${esc(repairMessage)}</p>`:''}
      ${button('repair',id?'Find / replace library match':'Find this exercise / browse library')}${repairOpen?picker(e,workout.position,'current'):''}
      <div class="workout-notes"><strong>Original workout notes</strong><p>${esc(e.notes)||'No notes supplied.'}</p>${workout.notes?`<details><summary>Workout notes</summary><p>${esc(workout.notes)}</p></details>`:''}</div>
      <div class="workout-choice"><p><strong>${esc(choiceText(e))}</strong></p>${swapUndos.has(e.id)?`<p role="status">Swap applied to this occurrence. ${button('undo-swap','Undo swap')}</p>`:''}${selected?`<p class="help">Original targets are unchanged; they haven't been converted for this exercise.</p>${!validSelected?'<p class="workout-review-hint">The saved alternative is missing or changed. Choose again or keep the original; nothing has been automatically substituted.</p>':''}`:''}<div id="workout-choice-equipment"></div></div>
      <div class="workout-actions">${button('keep','Keep original',cardsOpen?'secondary':'primary')}${id&&hasAlternatives(id)?button('alternatives',selected?'Change choice':'See alternatives'):''}${e.choice?button('clear-choice','Clear choice'):''}${cardsOpen?button('close-cards','Back to workout entry'):''}</div>
      ${id&&alternativesFor(id).length?`<p class="help">${alternativesFor(id).length} reviewed swaps · open See alternatives to compare the existing cards.</p>`:''}
      ${id&&!hasAlternatives(id)?'<p class="help">Instructions available; no reviewed alternatives yet.</p>':''}
      ${!cardsOpen&&originalInstructions?`<details class="workout-original"><summary>Original exercise instructions</summary>${host.originalDetails(originalInstructions)}</details>`:''}
      ${!cardsOpen&&validSelected?`<details class="workout-original"><summary>Chosen exercise instructions</summary>${host.originalDetails(e.choice.id)}</details>`:''}
      <nav class="workout-navigation" aria-label="Workout entries">${button('previous','Previous','secondary',workout.position===0?'disabled':'')}${workout.position<workout.entries.length-1?button('next','Next','primary'):button('overview','Back to workout overview','primary')}</nav><p class="help">Choices are plans, not a record of exercises or sets completed.</p>`;
  }
  function overview(){return `<h1 id="workout-heading" tabindex="-1">${esc(workout.title)}</h1><p class="help">${workout.entries.length} entries · ${workout.entries.filter(e=>e.choice).length} choices recorded. No completion is tracked.</p><ol class="workout-overview">${workout.entries.map((e,i)=>`<li><button class="workout-overview-entry" type="button" data-workout="jump" data-position="${i}"><strong>${i+1}. ${esc(e.label)}</strong><span>${esc(choiceText(e))}</span>${!usableMatch(e)?'<small>No confirmed catalogue match</small>':''}${i===workout.position?'<small>Resume here</small>':''}</button></li>`).join('')}</ol>${button('resume',`Resume — exercise ${workout.position+1} of ${workout.entries.length}`,'primary')}${originalText(workout)}${management()}`;}
  function render(){
    root.hidden=!page;
    resumeRoot.hidden=!!page||!workout&&!message;
    resumeRoot.innerHTML=`${workout?`${button('resume',`Resume ${esc(workout.title)} — exercise ${workout.position+1} of ${workout.entries.length}`,'primary')}${button('new','New workout')}${button('start','My workouts')}`:''}${savedNotice()}`;
    if(!page)return;
    let html='';
    if(page==='start')html=`<h1 id="workout-heading" tabindex="-1">My workouts</h1><div class="workout-actions">${button('new','New workout','primary')}${workout?button('resume',`Resume — exercise ${workout.position+1} of ${workout.entries.length}`):''}${workout?button('overview','Workout overview'):''}</div>${workout?`<p>Current: ${esc(workout.title)}.</p>${management()}`:''}${libraryList()}${storageLimit()}`;
    if(page==='paste')html=`<h1 id="workout-heading" tabindex="-1">Type or paste a workout</h1><form id="workout-paste-form"><label for="workout-title">Workout name <span class="help">Optional</span></label><input id="workout-title" value="${esc(pasteTitle)}" autocomplete="off"><label for="workout-text">Workout text</label><p class="help" id="paste-hint">Type or paste one exercise per line, with any notes. Tap a suggestion to replace only the name on your current line; its notes stay.</p><textarea id="workout-text" rows="6" aria-describedby="paste-hint" spellcheck="true">${esc(pasteText)}</textarea><section aria-label="Exercise suggestions for current line" class="workout-live-suggestions"><strong>Suggestions for your current line</strong><div class="workout-match-options" id="paste-suggestions"><p class="help">Start an exercise name to see library suggestions, including possible spelling corrections.</p></div></section><div class="workout-actions"><button class="button primary" type="submit">Review exercises</button>${button('cancel-draft','Cancel')}</div><p class="help">Processed only in this browser. Up to 24,000 characters. ${workout?(draftMode==='replace'?'Only the current saved workout will be replaced after confirmation.':'Your saved workouts stay unchanged. This adds a separate workout.'):''}</p></form>`;
    if(page==='review')html=review();
    if(page==='entry'&&workout)html=currentEntry();
    if(page==='overview'&&workout)html=overview();
    root.innerHTML=`${savedNotice()}${error?`<p id="workout-error" tabindex="-1" class="workout-warning" role="alert">${esc(error)}</p>`:''}${prompt()}${html}`;
    refreshVisit();
  }
  function refreshVisit(){const target=root.querySelector('#workout-choice-equipment'),e=entry();if(target)target.innerHTML=e?.choice?.kind==='alternative'&&choiceUsable(e)?`<p class="help">${esc(host.choiceStatus(e.matchId,e.choice.id,e.choice.pilot?.mustPreserve??[]))}</p>`:'';}
  function ask(action){confirmation=action;render();focus('confirm-heading');}
  function acceptDraft(){
    try {
      const confirmed=confirmWorkout(draft);
      if(editing){confirmed.position=Math.min(workout.position,confirmed.entries.length-1);confirmed.entries=confirmed.entries.map(e=>{const old=workout.entries.find(x=>x.id===e.id);return old&&old.matchId===e.matchId&&old.matchSignature===e.matchSignature?{...e,choice:old.choice}:e;});}
      const replaceId=draftMode==='replace'&&!editing?workout?.id:null;
      swapUndos.clear();workout=confirmed;draft=null;editing=false;restored=false;persist(replaceId);host.clearCards();changePage('entry');
    }catch(e){error=e.message;confirmation='';render();}
  }
  function continueDraft(){
    try{confirmWorkout(draft);if(workout&&!editing&&draftMode==='replace')ask('replace');else acceptDraft();}
    catch(error){confirmation='';renderError(error);}
  }
  function renderError(reason){error=reason.message;render();const blank=draft?.entries.find(e=>!e.label.trim());focus(blank?`label-${blank.id}`:'workout-error');}
  function requestAlternatives(){
    const e=entry();if(!usableMatch(e)||!hasAlternatives(e.matchId))return;
    cardsOpen=true;render();host.openAlternatives(e);
  }
  function handle(event){
    const b=event.target.closest('[data-workout]');if(!b||b.disabled)return;
    const action=b.dataset.workout,e=draft?.entries.find(x=>x.id===b.dataset.entry);
    if(action==='paste-match'){
      const matched=catalogueEntry(b.dataset.match);if(!matched)return;
      const result=completeWorkoutLine(pasteText,pasteCaret,matched.label);pasteText=result.text;pasteCaret=result.caret;
      const field=document.getElementById('workout-text');field.value=pasteText;field.focus({preventScroll:true});field.setSelectionRange(pasteCaret,pasteCaret);updatePasteSuggestions();return;
    }
    if(action==='repair'&&workout){repairOpen=!repairOpen;repairMessage='';render();if(repairOpen)document.getElementById(`match-${entry().id}`)?.focus({preventScroll:true});return;}
    if(action==='close-repair'){repairOpen=false;render();return;}
    if(action==='match-current'&&workout){
      const current=entry(),next=matchWorkoutOccurrence(workout,current.id,b.dataset.match);
      if(current.matchId!==next.entries[next.position].matchId||current.matchSignature!==next.entries[next.position].matchSignature)swapUndos.delete(current.id);
      workout=next;repairOpen=false;repairMessage=`Library match saved: ${catalogueEntry(b.dataset.match).label}. Your written name and notes are unchanged. Check equipment separately.`;persist();host.clearCards();cardsOpen=false;render();host.render();focus();return;
    }
    if(action==='browse-matches'||action==='more-matches'){
      const mode=b.dataset.mode,key=b.dataset.key??b.dataset.entry;
      const item=mode==='paste'?{id:'paste'}:mode==='current'?entry():draft?.entries.find(x=>x.id===key);if(!item)return;
      if(action==='browse-matches'){searches.set(key,'');visibleCounts.delete(key);document.getElementById(`match-${key}`).value='';}
      else visibleCounts.set(key,(visibleCounts.get(key)??8)+8);
      const query=mode==='paste'?activeWorkoutLine(pasteText,pasteCaret).query:searches.get(key)??item.label;
      const target=document.getElementById(mode==='paste'?'paste-suggestions':`options-${key}`),previous=target.querySelectorAll('[data-match]').length;
      target.innerHTML=matchOptions(item,query,mode);
      if(action==='more-matches')target.querySelectorAll('[data-match]')[previous]?.focus({preventScroll:true});
      else document.getElementById(`match-${key}`)?.focus({preventScroll:true});
      return;
    }
    if(action==='resume'&&workout){restored=false;changePage('entry');}
    else if(action==='start')changePage('start');
    else if(action==='open-saved'){
      if(workout&&!lastSaved&&!persist()){render();focus('workout-error');return;}
      const result=storage.select(b.dataset.workoutId);message=result.message;
      if(result.saved){swapUndos.clear();workout=result.workout;lastSaved=true;restored=false;changePage('entry');}else render();
    }
    else if(action==='rename'&&workout){const title=document.getElementById('saved-workout-name').value.trim();if(!title){error='Give this workout a name.';render();focus('workout-error');}else{workout={...workout,title};persist();render();}}
    else if(action==='overview'&&workout)changePage('overview');
    else if(['paste','replace','new'].includes(action)){if(workout&&!lastSaved&&!persist()){render();return;}draftMode=action==='replace'?'replace':'new';pasteText='';pasteTitle='';draft=null;editing=false;changePage('paste');}
    else if(action==='cancel-draft'){draft=null;editing=false;pasteText='';pasteTitle='';changePage(workout?'start':'');}
    else if(action==='cancel-confirm'){if(confirmation==='recover'){message='Your unsaved workout is still open. The stored workout has not been replaced.';storage.protect();}confirmation='';render();focus();}
    else if(action==='restart'||action==='delete'||action==='discard')ask(action);
    else if(action==='confirm'){
      const action=confirmation;confirmation='';
      if(action==='restart'){swapUndos.clear();workout=restartWorkout(workout);restored=false;persist();host.resetVisit();changePage('entry');}
      if(action==='delete'){const result=storage.remove(workout?.id);message=result.message;if(result.removed){swapUndos.clear();workout=result.workout;lastSaved=!!workout;host.clearCards();changePage('start');}else render();}
      if(action==='replace')acceptDraft();
      if(action==='discard'){const result=storage.discard();message=result.message;if(result.removed&&workout)persist();render();}
      if(action==='recover'){const result=storage.load();if(result.workout?.id===recoveredWorkout?.id){swapUndos.clear();workout=result.workout;recoveredWorkout=null;lastSaved=true;restored=true;message='';changePage('start');}else{storage.protect();message=result.message||'The saved record changed. Your current workout is still open; retry reading before replacing it.';render();}}
    }
    else if(action==='use'){try{confirmWorkout(draft);if(draft.entries.some(e=>!usableMatch(e)&&e.review!=='written'))ask('unidentified');else continueDraft();}catch(error){renderError(error);}}
    else if(action==='identify-first'){confirmation='';const first=draft.entries.find(e=>!usableMatch(e)&&e.review!=='written');render();if(first)focus(`match-${first.id}`);}
    else if(action==='continue-unidentified'){draft.entries=draft.entries.map(e=>!usableMatch(e)?keepWritten(e):e);confirmation='';continueDraft();}
    else if(action==='match'&&e){Object.assign(e,matchEntry(e,b.dataset.match));render();document.getElementById(`label-${e.id}`)?.focus();}
    else if(action==='written'&&e){Object.assign(e,keepWritten(e));render();document.getElementById(`label-${e.id}`)?.focus();}
    else if(action==='add'||action==='add-after'){if(draft.entries.length>=MAX_ENTRIES){error='This workout has reached the 120-entry limit.';render();return;}const item=makeEntry();draft.entries.splice(e?draft.entries.indexOf(e)+1:draft.entries.length,0,item);render();document.getElementById(`label-${item.id}`)?.focus();}
    else if(action==='remove'&&e){draft.entries=draft.entries.filter(x=>x.id!==e.id);render();}
    else if(['up','down'].includes(action)&&e){const index=draft.entries.indexOf(e),next=index+(action==='up'?-1:1);if(next>=0&&next<draft.entries.length){[draft.entries[index],draft.entries[next]]=[draft.entries[next],draft.entries[index]];render();document.getElementById(`label-${e.id}`)?.focus();}}
    else if(['previous','next','jump'].includes(action)&&workout){const pos=action==='jump'?Number(b.dataset.position):workout.position+(action==='next'?1:-1);if(pos>=0&&pos<workout.entries.length){workout=movePosition(workout,pos);persist();changePage('entry');}}
    else if(action==='keep'||action==='clear-choice'){swapUndos.delete(entry().id);workout=chooseForOccurrence(workout,entry().id,action==='keep'?{kind:'original'}:null);persist();changePage('entry');}
    else if(action==='undo-swap'&&swapUndos.has(entry().id)){workout=undoSwap(workout,swapUndos.get(entry().id));swapUndos.delete(entry().id);persist();changePage('entry');}
    else if(action==='alternatives')requestAlternatives();
    else if(action==='close-cards')changePage('entry');
    else if(action==='rematch'){draft=structuredClone(workout);editing=true;changePage('review');}
    else if(action==='retry'){
      if(!page){page='start';host.clearCards();host.render();}
      if(storage.locked){const result=storage.load();message=result.message;if(result.workout){if(workout){recoveredWorkout=result.workout;storage.protect();ask('recover');}else{workout=result.workout;lastSaved=true;restored=true;changePage('start');}}else if(result.locked){error='Stored data is still unreadable. You may retry later or explicitly discard it.';render();}else if(workout){persist();render();}else render();}
      else if(workout){persist();render();}
    }
  }
  root.addEventListener('click',handle);resumeRoot.addEventListener('click',handle);
  root.addEventListener('input',event=>{
    const t=event.target;
    if(t.id==='workout-text'){pasteText=t.value;updatePasteSuggestions();}if(t.id==='workout-title')pasteTitle=t.value;
    if(t.id==='review-title')draft.title=t.value;if(t.id==='review-notes')draft.notes=t.value;
    const e=(t.dataset.mode==='current'?workout:draft)?.entries.find(x=>x.id===(t.dataset.entry??t.dataset.matchSearch));
    if(e&&t.dataset.field){e[t.dataset.field]=t.value;if(t.dataset.field==='label'){e.matchId=null;e.matchSignature=null;e.review='unmatched';e.choice=null;e.warning='Name edited. Choose a catalogue match or keep as written.';searches.set(e.id,t.value);visibleCounts.delete(e.id);const row=t.closest('[data-entry-row]');row.querySelector('.match-summary').textContent=e.warning;row.querySelector('.workout-match').open=true;document.getElementById(`match-${e.id}`).value=t.value;document.getElementById(`options-${e.id}`).innerHTML=matchOptions(e,t.value);}}
    if(e&&t.dataset.matchSearch){searches.set(e.id,t.value);visibleCounts.delete(e.id);document.getElementById(`options-${e.id}`).innerHTML=matchOptions(e,t.value,t.dataset.mode);}
  });
  for(const type of ['click','keyup','select'])root.addEventListener(type,event=>{if(event.target.id==='workout-text')updatePasteSuggestions();});
  root.addEventListener('submit',event=>{
    if(event.target.id!=='workout-paste-form')return;event.preventDefault();
    try {if(pasteTitle.length>200)throw new Error('Use a workout name of up to 200 characters.');draft=parseWorkout(pasteText,pasteTitle);if(localPilot)draft=localPilot.reviewDraft(draft);changePage('review');}catch(e){error=e.message;render();}
  });
  render();
  return {
    currentEntry(){return entry()?structuredClone(entry()):null;},
    get active(){return !!page;},get showingCards(){return cardsOpen&&page==='entry';},get occurrenceId(){return cardsOpen?entry()?.id:null;},
    activate(){changePage('start');},leave(){page='';cardsOpen=false;confirmation='';host.clearCards();render();},
    newSession(){swapUndos.clear();cardsOpen=false;restored=false;render();},refreshVisit,
    chooseAlternative(id, mustPreserve = []){if(!cardsOpen)return false;try {const previous=captureSwap(workout,entry().id);workout=localPilot?.supports(entry().matchId)&&localPilot.supports(id)?localPilot.choose(workout,entry().id,id,mustPreserve):chooseForOccurrence(workout,entry().id,{kind:'alternative',id});swapUndos.set(entry().id,previous);persist();changePage('entry');return true;}catch(e){error=e.message;render();return false;}},
    backToEntry(){if(!cardsOpen)return false;changePage('entry');return true;},
    alsoInWorkout(id){if(!cardsOpen)return '';const positions=otherOccurrences(workout,id,entry().id);return positions.length?`Also in this workout · ${positions.length===1?'exercise':'exercises'} ${positions.join(', ')}`:'';},
  };
}
