import {BUILD} from './release.mjs?v=2.8.1';
import {cardsFor, exercises, exerciseById, sourceFor, originalFor, sourceNote, cards, cardById, copies, copyFor, similarityFor, similarityLabels, requirementGroups, requirementKeys, equipmentLabels, capabilities, benchTypes, requirementLabel, isDumbbellPress, allowsExplanation} from './scenario.mjs?v=2.8.0';
import {contentById, comparisonFor, originalInstructionId} from './content.mjs?v=2.8.0';
import {freshSession, transition, assess, candidates, requestCards, supportsCard, equipmentConflict} from './state.mjs?v=2.8.0';
import {preferenceStore} from './preferences.mjs?v=2.8.0';
import {mountExplanation} from './explanation.mjs?v=2.8.0';
import {search, submittedEntry, searchScope, searchEntries, categories, categoryById, discoveryCopy, exerciseName} from './discovery.mjs?v=2.8.0';

import {detailSections} from './card-details.mjs?v=2.8.0';
import {mountEquipmentNotes} from './equipment-notes-ui.mjs';
import {mountWorkout} from './workout-ui.mjs?v=2.8.0';

// The preview server alone supplies this marker and module. The normal app
// keeps its existing behavior and production explanation allowlist.
const localPilot = document.documentElement.dataset.libraryPilot === 'rows' ? await import('/library-pilot.mjs') : null;
let pilotView = null, equipmentNotes = null, selectionUndo = null;

const $=id=>document.getElementById(id);
const escape=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const store=preferenceStore(()=>window.localStorage), loaded=store.load();
let state=freshSession(loaded.preferences);
let alternativesOpen=false, preferencesOpen=false, equipmentOpen=false, filterOpen=false, allOptionsOpen=false;
let storageMessage=loaded.message, notice='', renderedContext='', activeIndex=-1, matches=[], browseGroup='', searchIntent='browse', reviewDay1=false;
const explanation=mountExplanation($('explanation'));
const workout=mountWorkout({root:$('workout-workspace'),resumeRoot:$('workout-resume'),localPilot:localPilot?.workoutPolicy,host:{
  render,
  clearCards(){pilotView?.close(false);clearPanels();state=transition(state,{type:'next'});},
  resetVisit(){equipmentNotes?.reset();pilotView?.reset();clearPanels();state=freshSession(state.preferences);},
  openAlternatives(entry){
    if(pilotView?.supports(entry.matchId)){clearPanels();state=transition(state,{type:'next'});pilotView.openForWorkout(entry);render();return;}
    openLegacyAlternatives(entry);
  },
  choiceStatus(originalId,id,preserve=[]){return pilotView?.supports(originalId)&&pilotView.supports(id)?pilotView.choiceStatus(originalId,id,preserve):statusLabel(assess({...state,mode:'replace',exerciseId:originalId,requested:true},id));},
  originalDetails(id){return (writtenDetails(id)+sourceDetails(id)).replace(/id="([^"]+)"/g,`id="workout-${id}-$1"`);},
}});
pilotView=localPilot?.mountRowPilot({workout,onExisting:openLegacyAlternatives,onClearVisit:()=>equipmentNotes?.clearReports(),onVisitChange:(visit,previous)=>equipmentNotes?.syncPilotReports(visit,previous)})??null;
equipmentNotes=mountEquipmentNotes({root:$('equipment-note-panel'),getState:()=>state,setState:next=>{state=next;},pilot:pilotView,onChange:render});
$('equipment-note-panel').addEventListener('change',equipmentChange);
function openLegacyAlternatives(entry){
  clearPanels();state=transition(state,{type:'exercise',id:entry.matchId});state=transition(state,{type:'find'});
  state.viewedId=null;
  state.selectedId=entry.choice?.kind==='alternative'&&supportsCard(state,entry.choice.id)?entry.choice.id:null;
  render();focus('workout-heading',true);
}
const name=id=>state.mode==='discover'?exerciseName(id):copies[id]?.name ?? '';
const selectableCards=()=>requestCards(state).filter(card=>state.preferences[card.id]!=='hidden'&&!state.skipped.includes(card.id));
const knownIssue=a=>['busy','absent','different_bench','setup_needed','different_pair','count_conflict'].includes(a.kind);
const comparisonBase=()=>state.mode==='replace'?state.exerciseId:state.discovery?.kind==='related'?state.discovery.id:null;
function matchBadge(id) {
  const tier=comparisonBase()?similarityFor(id,comparisonBase()):null;
  return tier?`<span class="match-badge match-${tier}">${similarityLabels[tier]}</span>`:'';
}
function statusLabel(a) {
  return ({count_conflict:'Physical unit count conflict',ready:'Equipment ready', access_unknown:'Availability to check', different_bench:'Different bench needed', equipment_unknown:'Equipment not checked', bench_unknown:'Bench position to check', setup_unknown:'Setup to check', setup_needed:'Setup needs changing', busy:'Equipment in use', absent:'Not available in this setup', pressing_pair_unknown:'Pressing pair to check', different_pair:'Different dumbbells needed'})[a.kind]??'Setup to check';
}
function reportValue(key) {const item=state.equipment[key];return item.presence==='absent'?'absent':item.access;}
function reportControl(key,id,prefix='card') {
  const pressing=isDumbbellPress(id), value=key==='dumbbells'&&pressing&&state.pressingPair!=='yes'&&reportValue(key)==='available'?'unknown':reportValue(key);
  return `<label class="equipment-report" for="${prefix}-${key}"><span>${escape(requirementLabel(id,key))}</span><select id="${prefix}-${key}" data-equipment="${key}" data-purpose="${pressing?'press':'row'}">${[['unknown','Not sure'],['available','Available now'],['busy','This setup is in use'],['absent','Not at this gym']].map(([v,label])=>`<option value="${v}" ${v===value?'selected':''}>${label}</option>`).join('')}</select></label>`;
}
function capabilityControl(id) {
  if(!capabilities[id])return '';
  const cap=capabilities[id], known=state[cap.key]!=='unknown';
  const inferred=(state.benchType==='flat'&&cap.equipment==='bench')||(state.benchType==='fixed_incline'&&cap.key==='benchFlat');
  const label=state[cap.key]==='yes'?cap.yes:cap.no;
  if(inferred)return `<p class="help">${escape(label)}.</p>`;
  const question=cap.key==='benchIncline'&&state.benchType==='fixed_incline'?'Is the fixed backrest at roughly a 30–45° incline?':cap.question;
  const control=`<fieldset class="incline-control"><legend>${escape(question)}</legend><div class="incline-choices">${[['yes','Yes'],['no','No'],['unknown','Not sure']].map(([value,label])=>`<label><input type="radio" name="${cap.key}" data-capability="${cap.key}" value="${value}" ${state[cap.key]===value?'checked':''}><span>${label}</span></label>`).join('')}</div></fieldset>`;
  return known?`<details class="confirmed-capability"><summary>${escape(cap.label)}: ${escape(label)} · Change</summary>${control}</details>`:control;
}
function benchControl(id) {
  return `<fieldset class="bench-type-control"><legend>Which bench?</legend><div class="incline-choices bench-types">${benchTypes.map(([value,label])=>`<label><input type="radio" name="bench-type" data-bench-type value="${value}" ${state.benchType===value?'checked':''}><span>${label}</span></label>`).join('')}</div></fieldset>${capabilityControl(id)}<button class="text-button" type="button" data-action="different-setup" data-key="bench">Check a different bench</button>`;
}
function equipmentEditor(id) {
  const cap=capabilities[id];
  const fields=requirementGroups(id).map(group=>group.length===1?reportControl(group[0],id):`<fieldset class="equipment-or"><legend>${id==='negative_pullup'?'One access setup — either option is enough':'One weight — either option is enough'}</legend>${group.map(key=>reportControl(key,id)).join('')}</fieldset>`).join('');
  return `<details class="card-detail" id="equipment-detail" ${equipmentOpen?'open':''}><summary>Check equipment <span class="optional-label">Optional</span></summary><div class="equipment-editor" id="equipment-editor"><div class="equipment-fields">${fields}</div>${cap?.equipment==='bench'?benchControl(id):id==='db_floor_press'?'':capabilityControl(id)}${cap&&cap.equipment!=='bench'?`<button class="text-button" type="button" data-action="different-setup" data-key="${cap.equipment}">Check a different setup</button>`:''}</div></details>`;
}
function writtenDetails(id, originalId) {
  return detailSections(id,{mode:state.mode,originalId}).map(section=>`<details class="card-detail" id="${section.id}"><summary>${escape(section.title)}</summary><div class="detail-copy">${section.subject?`<p><strong>${escape(section.subject)}</strong> compared with <strong>${escape(exerciseById(originalId).label)}</strong>.</p>`:''}${section.steps?`<ol>${section.steps.map(step=>`<li>${escape(step)}</li>`).join('')}</ol>`:''}${section.paragraphs.map(text=>`<p>${escape(text)}</p>`).join('')}</div></details>`).join('');
}
function renderFilter() {
  $('filter-panel').hidden=!filterOpen;
  $('filter-toggle').setAttribute('aria-expanded',String(filterOpen));
  $('equipment-filter').checked=state.equipmentFilter;
  $('filter-toggle').textContent='Edit equipment';
  if(!filterOpen)return;
  const offered=requestCards(state), keys=[...new Set(offered.flatMap(card=>requirementKeys(card.id)))];
  $('filter-panel').innerHTML=`<div class="section-top"><h2 id="filter-heading" tabindex="-1">Equipment for this visit</h2><button class="text-button" type="button" data-action="close-filter">Done</button></div>${offered.some(card=>card.id==='goblet_squat')?'<p class="help">Goblet squat needs one suitable dumbbell OR kettlebell, not both.</p>':''}<div class="equipment-fields">${keys.map(key=>reportControl(key,offered.find(card=>requirementKeys(card.id).includes(key)).id,'filter')).join('')}</div><p class="help">Unknown equipment stays unknown. Turn the filter on to prioritize confirmed setups and leave out known equipment conflicts.</p>`;
}
function recovery() {
  const hidden=requestCards(state).filter(card=>state.preferences[card.id]==='hidden').length;
  return hidden||state.skipped.length?`<div class="recovery-controls"><button class="text-button" type="button" data-action="preferences">${hidden} hidden · ${state.skipped.length} skipped — review options</button></div>`:'';
}
function optionCard(card) {
  const a=assess(state,card.id);
  return `<li><button class="alternative-card" type="button" data-action="view" data-id="${card.id}">${matchBadge(card.id)}<span class="alternative-title">${escape(name(card.id))}${state.preferences[card.id]==='favorite'?' <span class="favorite-label">★ Favorite</span>':''}</span><span>${escape(state.mode==='discover'&&state.discovery?.kind!=='related'?discoveryCopy[card.id].focus:copyFor(card.id,comparisonBase()).changes)}</span><span class="help">${escape(discoveryCopy[card.id].needs)}</span>${workout.alsoInWorkout(card.id)?`<span class="help">${escape(workout.alsoInWorkout(card.id))}</span>`:''}<span class="status-label ${a.kind==='ready'?'ready':knownIssue(a)?'check':'neutral'}">${escape(statusLabel(a))}${state.selectedId===card.id?' · Selected':''}</span></button></li>`;
}
function optionList(heading, isMain=false) {
  const options=candidates(state).filter(card=>card.id!==state.viewedId);
  const visible=allOptionsOpen?options:options.slice(0,3);
  const excluded=state.equipmentFilter?selectableCards().filter(card=>equipmentConflict(assess(state,card.id).kind)&&card.id!==state.viewedId):[];
  return `<section class="alternatives ${isMain?'main-options':''}" aria-labelledby="${isMain?'result-heading':'alternatives-heading'}"><div class="section-top"><${isMain?'h2':'h3'} id="${isMain?'result-heading':'alternatives-heading'}" tabindex="-1">${escape(heading)}</${isMain?'h2':'h3'}>${!isMain?'<button class="text-button" type="button" data-action="close-alternatives">Close options</button>':''}</div>${comparisonBase()&&options.some(card=>similarityFor(card.id,comparisonBase()))?`<p class="help">Similarity to ${escape(exerciseById(comparisonBase()).label)}. Equipment availability is checked separately.</p>`:''}${options.length?`<ul class="alternative-list">${visible.map(optionCard).join('')}</ul>${visible.length<options.length?`<button class="button secondary" type="button" data-action="more-options">Show ${options.length-visible.length} more</button>`:''}`:'<p>No options are showing with these choices. Review equipment or restore hidden and skipped exercises.</p>'}${excluded.length?`<button class="text-button" type="button" data-action="show-all">Explore without equipment filter (${excluded.length} more)</button>`:''}${recovery()}</section>`;
}
function renderPreferences() {
  $('preferences-toggle').setAttribute('aria-expanded',String(preferencesOpen));
  $('preferences-panel').hidden=!preferencesOpen;
  if(preferencesOpen) {
    const rows=(ids,action,label)=>ids.length?`<ul class="preference-list">${ids.map(id=>`<li><span>${escape(exerciseName(id))}</span><button class="text-button" type="button" data-action="${action}" data-id="${id}">${label}<span class="sr-only"> ${escape(exerciseName(id))}</span></button></li>`).join('')}</ul>`:'<p class="help">None yet.</p>';
    $('preferences-panel').innerHTML=`<div class="section-top"><h2 id="preferences-heading" tabindex="-1">Exercise preferences</h2><button class="text-button" type="button" data-action="close-preferences">Close preferences</button></div><p class="help">Saved in this browser, including on a shared device. Not synced to other devices.</p><h3>Favorites</h3>${rows(cards.filter(c=>state.preferences[c.id]==='favorite').map(c=>c.id),'normal','Remove favorite')}<h3>Hidden exercises</h3>${rows(cards.filter(c=>state.preferences[c.id]==='hidden').map(c=>c.id),'normal','Restore')}<h3>Skipped for this request</h3>${rows(state.skipped,'restore-skip','Restore')}${storageMessage?'<button class="button secondary" type="button" data-action="retry-save">Retry saving preferences</button>':''}`;
  }
  $('preference-feedback').hidden=!notice&&!storageMessage;
  $('preference-feedback').innerHTML=`${notice?`<p>${escape(notice)} ${state.undo?'<button class="text-button" type="button" data-action="undo">Undo</button>':''}</p>`:''}${storageMessage?`<p>${escape(storageMessage)}</p>`:''}`;
}
function sourceDetails(id) {
  const record=contentById(id), edge=state.mode==='replace'?comparisonFor(id,state.exerciseId):null;
  if(record)return `<details class="card-detail" id="source-detail"><summary>Sources</summary><div class="source-content"><p>Gym Swap instructions, with references for this setup.</p>${record.references.map(ref=>`<p><a href="${escape(ref.url)}" target="_blank" rel="noopener noreferrer">${escape(ref.label)} (opens in a new tab)</a></p>`).join('')}${edge?'<p>Swap comparison: Michael Martiradonna’s reviewed coaching notes.</p>':''}<p class="help">Exercise: ${escape(id)}</p></div></details>`;
  const original=originalFor(id), source=sourceFor(original.id);
  const refs=id==='incline_db_row'?source.references.slice(0,1):original.id==='chest_press_machine'?source.references:[];
  return `<details class="card-detail" id="source-detail"><summary>Sources</summary><div class="source-content"><p><strong>${escape(source.title)}</strong><br>Reviewed exercise notes by Michael Martiradonna.</p>${refs.map(ref=>`<p><a href="${escape(ref.url)}" target="_blank" rel="noopener noreferrer">${escape(ref.label)} (opens in a new tab)</a></p>`).join('')}${id==='incline_db_row'?`<p>${escape(sourceNote)}</p><p class="help">AI-generated exercise illustration.</p>`:''}<p class="help">Guide: ${escape(original.source)} · Exercise: ${escape(id)}</p></div></details>`;
}
function render() {
  const original=exerciseById(state.exerciseId), discovery=state.mode==='discover', id=state.viewedId, card=cardById(id), copy=copyFor(id,state.exerciseId);
  const valid=state.requested&&supportsCard(state,id), context=valid?JSON.stringify([workout.occurrenceId,state.mode,state.exerciseId,state.discovery,id,requirementKeys(id).map(key=>state.equipment[key]),state[capabilities[id]?.key],state.benchType,state.pressingPair]):'';
  const same=renderedContext===context, details=same?new Set([...$('result').querySelectorAll('details[open]')].map(node=>node.id)):new Set();
  renderedContext=context;
  $('search-section').hidden=state.requested||workout.active;
  $('results-workspace').hidden=!state.requested;
  document.querySelectorAll('[data-intent]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.intent===(workout.active?'workout':searchIntent))));
  workout.refreshVisit();equipmentNotes?.refresh();
  $('change-search').textContent=workout.showingCards?'Back to workout entry':discovery?'Change search':'Change exercise';
  document.querySelector('.skip-link').href=workout.active?'#workout-heading':state.requested?'#result-heading':'#search-section';
  $('build-label').textContent=`Build ${BUILD}`;
  renderPreferences();renderFilter();
  const canExplain=!discovery&&valid&&allowsExplanation(original?.id,id);
  explanation.setContext(canExplain?context:null,canExplain,canExplain?{id,name:copy.name,originalId:original.id,originalName:original.label}:null);
  if(!state.requested){$('result').replaceChildren();return;}
  const selected=state.selectedId?`<div class="selected-banner">${selectionUndo?'<button class="text-button" type="button" data-action="undo-selection">Undo selection</button>':''}<span>Selected: ${escape(name(state.selectedId))} · ${escape(statusLabel(assess(state,state.selectedId)))}</span>${state.selectedId!==id?`<button class="text-button" type="button" data-action="view" data-id="${state.selectedId}">View selection</button>`:''}</div>`:'';
  if(!valid||!card) {
    const heading=discovery?(state.discovery?.kind==='related'?`Similar to ${exerciseName(state.discovery.id)}`:categoryById(state.discovery?.id)?.label??'Explore exercises'):`Swaps for ${original.label}`;
    const collectionNote=state.discovery?.id==='movement_practice'?'<p class="collection-note">Pattern practice, trunk control, and flexibility. Explore each purpose below.</p>':state.discovery?.id==='hinge'?'<p class="collection-note">Loaded exercise and unloaded practice have different purposes.</p>':'';
    const back=discovery&&state.discovery?.kind==='related'?`<button class="text-button original-link" type="button" data-action="back-to-exercise" data-id="${state.discovery.id}">Back to ${escape(exerciseName(state.discovery.id))}</button>`:'';
    $('result').innerHTML=selected+collectionNote+back+optionList(heading,true)+`<button class="button secondary continue-button" type="button" data-action="next">${reviewDay1?'Back to Day 1 review':'Explore another exercise'}</button>`;
    return;
  }
  const a=assess(state,id), favorite=state.preferences[id]==='favorite', info=discoveryCopy[id], record=contentById(id);
  const issue=a.kind==='busy'?'This setup is in use. You can check another setup or keep exploring.':a.kind==='absent'?'Equipment is marked not at this gym. Correct the report only if it has changed.':['different_bench','setup_needed','different_pair','count_conflict'].includes(a.kind)?statusLabel(a)+'. Check another suitable setup to use this exercise.':'';
  const comparison=discovery?`<dl class="quick-comparison discovery-comparison"><div><dt>Main focus</dt><dd>${escape(info.focus)}</dd></div><div><dt>What to expect</dt><dd>${escape(info.expect)}</dd></div></dl>`:`<dl class="quick-comparison"><div class="keeps"><dt>Keeps</dt><dd>${escape(copy.keeps)}</dd></div><div class="changes"><dt>Changes</dt><dd>${escape(copy.changes)}</dd></div></dl>${copy.load||copy.check?`<p class="load-note"><strong>Check${copy.limited?' · Limited alternative':''}</strong> ${[...new Set([copy.load,copy.check].filter(Boolean))].map(escape).join(' ')}</p>`:''}`;
  $('result').innerHTML=`${selected}<article class="swap-card"><div class="result-navigation"><span class="eyebrow">${discovery?(state.discovery?.kind==='related'?`Exploring · Similar to ${escape(exerciseName(state.discovery.id))}`:'Explore exercise'):`${reviewDay1?'Day 1 review · ':''}Replacing ${escape(original.label)}`}</span></div><h2 id="result-heading" tabindex="-1">${escape(name(id))}</h2>${discovery?'':matchBadge(id)}${copy.image?`<figure class="exercise-visual"><img src="${copy.image}" alt="${escape(copy.imageAlt)}" width="1536" height="1024" decoding="async"></figure>`:''}${comparison}<p class="essential-cue"><strong>Setup</strong> ${escape(record?.setup??card.setup??card.cues?.[0]??'')}</p>${record?.context?`<p class="help">${escape(record.context)}</p>`:''}<p class="card-citation">Card: ${escape(id)} · Gym Swap reviewed instructions${record?.references?.[0]?` · <a href="${escape(record.references[0].url)}" target="_blank" rel="noopener noreferrer">${escape(record.references[0].label)}</a>`:` · ${escape(sourceFor(originalFor(id)?.id)?.title??'Reviewed exercise notes by Michael Martiradonna')}`}</p>${discovery&&cardsFor(id).length?`<button class="button secondary similar-action" type="button" data-action="similar" data-id="${id}">See similar exercises</button>`:''}${record&&!discovery?`<p class="essential-cue"><strong>Focus cue</strong> ${escape(record.cue)}</p>`:''}${!discovery||state.equipmentFilter?`<div class="equipment-summary"><p><strong>Needs</strong> ${escape(info.needs)}</p><div class="section-top"><span class="status-label ${a.kind==='ready'?'ready':knownIssue(a)?'check':'neutral'}">${escape(statusLabel(a))}</span></div></div>`:''}${equipmentNotes?.questionMarkup()??''}${issue?`<p class="issue-note">${escape(issue)}</p>`:''}<div class="card-actions">${state.selectedId!==id||workout.showingCards?`<button class="button primary" type="button" data-action="choose" data-id="${id}">${discovery?'Use this exercise':'Use this swap'}</button>`:'<p class="chosen-note">Exercise selected</p>'}${requestCards(state).length>1?`<button class="button secondary" type="button" data-action="alternatives" aria-expanded="${alternativesOpen}">${discovery?'See other exercises':'See other swaps'}</button>`:''}</div><div class="preference-actions"><button class="text-button favorite-button" id="favorite-button" type="button" data-action="favorite" data-id="${id}" aria-pressed="${favorite}"><span aria-hidden="true">${favorite?'★':'☆'}</span> ${favorite?'Remove favorite':'Favorite'}</button><details class="more-options" id="more-options"><summary>More options</summary><button class="text-button" type="button" data-action="skip" data-id="${id}">Skip for now <small>For this request</small></button><button class="text-button" type="button" data-action="hide" data-id="${id}">Hide this exercise <small>Don’t suggest again in this browser</small></button></details></div>${!discovery&&cardById(originalInstructionId(original?.id))?`<button class="text-button original-link" type="button" data-action="view-original">View original exercise: ${escape(original.label)}</button>`:discovery&&state.discovery?.kind==='related'?`<button class="text-button original-link" type="button" data-action="back-to-exercise" data-id="${state.discovery.id}">Back to ${escape(exerciseName(state.discovery.id))}</button>`:''}${writtenDetails(id,original?.id)}${equipmentEditor(id)}${sourceDetails(id)}</article>${alternativesOpen?optionList(discovery?(state.discovery?.kind==='related'?`Similar to ${exerciseName(state.discovery.id)}`:'Other exercises'):'Other swaps'):recovery()}<button class="button secondary continue-button" type="button" data-action="next">${reviewDay1?'Back to Day 1 review':discovery?'Explore another exercise':'Swap another exercise'}</button>`;
  if(workout.alsoInWorkout(id))$('result-heading').insertAdjacentHTML('afterend',`<p class="help">${escape(workout.alsoInWorkout(id))}</p>`);
  if(workout.showingCards){const back=$('result').querySelector('.continue-button');if(back)back.textContent='Back to workout entry';}
  for(const detailId of details)if($(detailId)&&!['more-options','equipment-detail'].includes(detailId))$(detailId).open=true;
}
function focus(id,scroll=false) {
  const target=$(id);if(!target)return;target.focus({preventScroll:!scroll});
  if(scroll)target.scrollIntoView({block:'start',behavior:'instant'});
}
function update(action,message='') {
  const before=JSON.stringify(state.preferences);state=transition(state,action);
  if(JSON.stringify(state.preferences)!==before)storageMessage=store.save(state.preferences).message;
  notice=message;render();$('announcer').textContent=message;
}
function clearPanels(){selectionUndo=null;alternativesOpen=false;equipmentOpen=false;filterOpen=false;allOptionsOpen=false;}
function choose(entry, fromDay1=false) {
  if(!entry)return;
  reviewDay1=fromDay1;
  clearPanels();activeIndex=-1;matches=[];$('exercise-search').value='';renderSearch();
  if(entry.kind==='replace'){state=transition(state,{type:'exercise',id:entry.id});update({type:'find'});}
  else update({type:'discover',target:{kind:entry.kind,id:entry.id}});
  focus('result-heading',true);
}
function renderSearch(submitted=false) {
  const query=$('exercise-search').value;matches=search(query,searchIntent);
  if(activeIndex>=matches.length)activeIndex=-1;
  const open=!!query.trim()&&matches.length>0;
  $('exercise-search').setAttribute('aria-expanded',String(open));
  $('search-suggestions').hidden=!open;
  $('search-suggestions').innerHTML=matches.map((entry,index)=>`<li role="option" id="suggestion-${index}" data-search-key="${entry.key}" aria-selected="${index===activeIndex}"><span><strong>${escape(entry.label)}</strong><small>${escape(entry.group)} · ${escape(entry.action)}</small></span></li>`).join('');
  if(activeIndex>=0)$('exercise-search').setAttribute('aria-activedescendant',`suggestion-${activeIndex}`);else $('exercise-search').removeAttribute('aria-activedescendant');
  $('search-message').textContent=query.trim()?(searchScope(query)||(!matches.length?(searchIntent==='browse'&&search(query,'replace').length?'No standalone guide yet. Choose Replace an exercise to see its reviewed swaps.':'No reviewed match yet. Try another name or browse below.'):submitted?'Choose one of the suggestions.':'')):'';
  $('quick-starts').hidden=!!query.trim();
}
$('exercise-search').addEventListener('input',()=>{activeIndex=-1;renderSearch();});
$('exercise-search').addEventListener('keydown',event=>{
  if(event.key==='ArrowDown'||event.key==='ArrowUp'){
    if(!matches.length)return;event.preventDefault();activeIndex=event.key==='ArrowDown'?(activeIndex+1)%matches.length:(activeIndex<0?matches.length-1:(activeIndex-1+matches.length)%matches.length);renderSearch();$(`suggestion-${activeIndex}`)?.scrollIntoView({block:'nearest'});
  } else if(event.key==='Escape'){event.preventDefault();activeIndex=-1;$('search-suggestions').hidden=true;$('exercise-search').setAttribute('aria-expanded','false');$('exercise-search').removeAttribute('aria-activedescendant');}
});
$('search-form').addEventListener('submit',event=>{event.preventDefault();const entry=submittedEntry($('exercise-search').value,matches[activeIndex]?.key,searchIntent);if(entry)choose(entry);else renderSearch(true);});
$('search-suggestions').addEventListener('click',event=>{const key=event.target.closest('[data-search-key]')?.dataset.searchKey;const entry=matches.find(item=>item.key===key);if(entry)choose(entry);});
document.querySelectorAll('[data-browse]').forEach(button=>button.addEventListener('click',()=>{
  browseGroup=browseGroup===button.dataset.browse?'':button.dataset.browse;
  document.querySelectorAll('[data-browse]').forEach(item=>item.setAttribute('aria-expanded',String(item.dataset.browse===browseGroup)));
  $('browse-options').hidden=!browseGroup;
  $('browse-options').innerHTML=categories.filter(item=>item.group===browseGroup).map(item=>`<button class="start-option" type="button" data-category="${item.id}">${item.short?`<strong>${item.short}</strong> `:''}${item.short?`<span>${escape(item.label)}</span>`:escape(item.label)}</button>`).join('');
}));
$('quick-starts').addEventListener('click',event=>{const id=event.target.closest('[data-start]')?.dataset.start;if(id)choose(searchEntries.find(item=>item.kind===(searchIntent==='replace'?'replace':'card')&&item.id===id));});
$('browse-options').addEventListener('click',event=>{const id=event.target.closest('[data-category]')?.dataset.category;if(id)choose(searchEntries.find(item=>item.kind==='category'&&item.id===id));});
$('new-session').addEventListener('click',()=>{reviewDay1=false;setIntent('browse');clearPanels();$('site-menu').open=false;preferencesOpen=false;state=transition(state,{type:'new_session'});equipmentNotes?.reset();workout.newSession();update({type:'new_session'},'New session. Equipment cleared; saved workout and preferences kept.');focus(workout.active?'workout-heading':'exercise-search',true);});
function equipmentChange(event) {
  const target=event.target;
  if(target.hasAttribute('data-bench-type')){const value=target.value;update({type:'bench_type',value});document.querySelector(`[data-bench-type][value="${value}"]`)?.focus({preventScroll:true});return;}
  const key=target.dataset.equipment??target.dataset.capability;if(!key)return;
  const inputId=target.id,radioName=target.name,value=target.value;
  update(target.dataset.equipment?{type:'report',key,report:value,purpose:target.dataset.purpose}:{type:'capability',key,value});
  if(inputId)focus(inputId);else {const radio=document.querySelector(`input[name="${radioName}"][value="${value}"]`);(radio?.closest('details:not([open])')?.querySelector('summary')??radio)?.focus({preventScroll:true});}
}
$('result').addEventListener('toggle',event=>{if(event.target.id==='equipment-detail')equipmentOpen=event.target.open;},true);
$('equipment-filter').addEventListener('change',event=>{update({type:'equipment_filter',enabled:event.target.checked},event.target.checked?'Equipment filter on. Unchecked options remain visible.':'Equipment filter off. Reports kept.');focus('equipment-filter');});
$('result').addEventListener('change',equipmentChange);$('filter-panel').addEventListener('change',equipmentChange);
document.body.addEventListener('click',event=>{
  const button=event.target.closest('button[data-action]');if(!button)return;
  const {action,id}=button.dataset;
  if(action==='choose'&&workout.chooseAlternative(id))return;
  if(['next','view-original'].includes(action)&&workout.backToEntry())return;
  if(action==='preferences'){$('site-menu').open=false;preferencesOpen=true;renderPreferences();focus('preferences-heading',true);}
  else if(action==='close-preferences'){preferencesOpen=false;renderPreferences();focus(state.requested?'result-heading':'exercise-search');}
  else if(action==='retry-save'){storageMessage=store.save(state.preferences).message;notice=storageMessage?'':'Preferences saved.';renderPreferences();focus('preferences-heading');}
  else if(action==='filter'){filterOpen=!filterOpen;renderFilter();focus(filterOpen?'filter-heading':'filter-toggle',true);}
  else if(action==='close-filter'){filterOpen=false;renderFilter();focus('filter-toggle');}
  else if(action==='alternatives'){alternativesOpen=true;render();focus('alternatives-heading',true);}
  else if(action==='more-options'){allOptionsOpen=true;render();focus(alternativesOpen?'alternatives-heading':'result-heading');}
  else if(action==='view-original'){choose({kind:'card',id:originalInstructionId(state.exerciseId)},reviewDay1);}
  else if(action==='similar'){choose({kind:'related',id});}
  else if(action==='back-to-exercise'){choose({kind:'card',id});}
  else if(action==='close-alternatives'){alternativesOpen=false;render();focus('result-heading');}
  else if(action==='show-all'){update({type:'equipment_filter',enabled:false},'Equipment filter off. Reports kept.');focus('result-heading',true);}
  else if(action==='view'){alternativesOpen=false;equipmentOpen=false;update({type:'view',id});focus('result-heading',true);}
  else if(action==='different-setup'){equipmentOpen=true;update({type:'replace_setup',key:button.dataset.key},'Different setup. Check its availability and features.');focus(`card-${button.dataset.key}`,true);}
  else if(action==='undo-selection'&&selectionUndo){state={...state,selectedId:selectionUndo.selectedId};selectionUndo=null;render();}
  else if(action==='choose'){selectionUndo={selectedId:state.selectedId};update({type:'choose',id},'Exercise selected. Equipment reports unchanged.');focus('result-heading',true);}
  else if(action==='next'){const wasReview=reviewDay1;clearPanels();update({type:'next'},'Equipment kept for this visit.');if(wasReview){$('day1-review').open=true;focus('day1-review-heading',true);}else focus('exercise-search',true);}
  else if(action==='favorite'){const value=state.preferences[id]==='favorite'?'normal':'favorite';update({type:'preference',id,value},value==='favorite'?'Added to favorites.':'Removed from favorites.');focus('favorite-button');}
  else if(action==='skip'||action==='hide'){const selected=state.selectedId===id;alternativesOpen=true;equipmentOpen=false;update(action==='skip'?{type:'skip',id}:{type:'preference',id,value:'hidden'},`${exerciseName(id)} ${action==='skip'?'skipped for this request.':'hidden in this browser.'}${selected?(workout.showingCards?' Saved workout choice kept.':' Selection cleared.'):''}`);focus('result-heading',true);}
  else if(action==='normal'||action==='restore-skip'){update(action==='normal'?{type:'preference',id,value:'normal'}:{type:'restore_skip',id},'Preference updated. Equipment checks stay separate.');focus('preferences-heading');}
  else if(action==='undo'){update({type:'undo'},'Last change undone.');focus(preferencesOpen?'preferences-heading':state.requested?'result-heading':'exercise-search');}
});
const startingIds=['goblet_squat','dumbbell_rdl','barbell_split_squat','single_leg_floor_bridge','bodyweight_rfess'];
const startButton=(exercise,attr='data-start')=>`<button class="start-option" type="button" ${attr}="${exercise.id}">${escape(exercise.label)} <span>${attr==='data-review'||searchIntent==='replace'?`${exercise.options.length} alternatives`:'Explore'}</span></button>`;
function setIntent(intent){
  searchIntent=intent;
  document.querySelectorAll('[data-intent]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.intent===intent)));
  $('search-heading').textContent=intent==='replace'?'Replace an exercise':'Explore exercises';
  $('exercise-search').placeholder=intent==='replace'?'Exercise to replace':'Exercise, movement, or muscle';
  document.querySelector('.browse-controls').hidden=intent==='replace';
  $('browse-options').hidden=true;browseGroup='';
  document.querySelectorAll('[data-browse]').forEach(button=>button.setAttribute('aria-expanded','false'));
  $('quick-starts').innerHTML=intent==='replace'?`<p class="eyebrow">Choose the exercise to replace</p>${exercises.map(ex=>startButton(ex)).join('')}`:`<p class="eyebrow">Explore the library</p>${startingIds.map(id=>startButton(exerciseById(id))).join('')}`;
  activeIndex=-1;renderSearch();
}
document.querySelectorAll('[data-intent]').forEach(button=>button.addEventListener('click',()=>{reviewDay1=false;if(button.dataset.intent==='workout'){workout.activate();return;}workout.leave();setIntent(button.dataset.intent);render();focus('exercise-search',true);}));
$('day1-exercises').innerHTML=startingIds.map(id=>startButton(exerciseById(id),'data-review')).join('');
$('day1-exercises').addEventListener('click',event=>{const id=event.target.closest('[data-review]')?.dataset.review;if(id)choose(searchEntries.find(item=>item.kind==='replace'&&item.id===id),true);});
setIntent('browse');
$('library-size').textContent=`${cards.length} exercises · ${exercises.length} starting exercises`;
render();renderSearch();
