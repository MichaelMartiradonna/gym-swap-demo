import {noteTypes, emptyNotes, mergeNote, recognizeEquipment, captureEquipment, restoreEquipment, adaptStandard, physicalConflicts} from './equipment-notes.mjs';
import {equipmentLabels, resolvedRequirements, capabilities, isDumbbellPress} from './scenario.mjs?v=2.8.0';
import {freshSession} from './state.mjs?v=2.8.0';
import {equipmentCompletions,insertEquipmentCompletion} from './equipment-suggestions.mjs';

const esc = text => String(text ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const select = (attrs, value, options) => `<select ${attrs}>${options.map(([id, label]) => `<option value="${id}" ${id === value ? 'selected' : ''}>${label}</option>`).join('')}</select>`;
export function mountEquipmentNotes({root, getState, setState, pilot, onChange}) {
  let notes = emptyNotes(), draft = '', undo = null, message = '', manualOpen = false;
  root.innerHTML = `<h2>Equipment for this visit <span class="optional-label">Optional</span></h2><form data-note-form><label for="equipment-note">Equipment note</label><p class="help" id="equipment-note-help">Type or use your phone keyboard’s dictation. For example: “Two dumbbells and an adjustable bench. The Smith machine is busy.” Supported names and short updates only; check the interpretation below.</p><textarea id="equipment-note" rows="2" maxlength="4000" aria-describedby="equipment-note-help" placeholder="What equipment is here or in use?"></textarea><button class="button secondary" type="submit">Apply equipment note</button></form><div data-note-summary></div><div data-note-question></div><details data-note-manual><summary>Manual equipment checks</summary><p class="help">These controls report the complete named setup. Clear a physical report in the summary to return it to unknown.</p><div data-note-manual-fields></div></details>`;
  const input = root.querySelector('textarea');
  const suggestions=document.createElement('div');suggestions.className='equipment-name-suggestions';suggestions.setAttribute('aria-label','Equipment name suggestions');input.after(suggestions);
  let suggestionsEnabled=true,completions=[];
  function suggest(){
    completions=suggestionsEnabled?equipmentCompletions(input.value,input.selectionStart):[];
    suggestions.innerHTML=completions.length?`<p class="help">Optional equipment names. Tap to insert, then apply your note.</p>${completions.map((item,index)=>`<button class="button secondary" type="button" data-note-complete="${index}">${esc(item.label)}</button>`).join('')}<button type="button" class="text-button" data-note-hide>Hide suggestions</button>`:!suggestionsEnabled?'<button type="button" class="text-button" data-note-show>Show equipment suggestions</button>':'';
  }
  function capture() {return {standard: captureEquipment(getState()), pilot: pilot?.captureVisit(), notes: structuredClone(notes), draft: notes.text};}
  function apply(text, parsed) {
    const before = capture(), merged = mergeNote(notes, text, parsed);
    notes = merged.notes; draft = text; input.value = draft;
    setState(adaptStandard(getState(), notes, merged.changed));
    const extra = pilot?.applyNoteFacts(notes, merged.changed) ?? [];
    undo = before;
    message = `Equipment reports updated.${extra.length ? ' ' + extra.join(' ') : ''}`;
    onChange(); refresh();
    suggestions.innerHTML='';completions=[];
  }
  function question() {
    const state = getState(), id = state.viewedId;
    if (!state.requested || !id) return '';
    const keys = resolvedRequirements(state, id), physical=physicalConflicts(state,keys);
    if(physical.count)return '<p class="help">The physical report has fewer than two required weight units. Correct the count in the equipment summary if it has changed.</p>';
    const blocked = physical.absent || physical.busy || keys.some(key => state.equipment[key].presence === 'absent' || state.equipment[key].access === 'busy');
    if (blocked) return '<p class="help">This candidate has an equipment conflict. Correct the identified report if it changes.</p>';
    const key = keys.find(key => state.equipment[key].presence === 'unknown' || state.equipment[key].access === 'unknown');
    if (key) return `<label class="equipment-report">For this candidate: ${esc(equipmentLabels[key])}${select(`data-equipment="${key}"`, 'unknown', [['unknown','Not checked'],['available','Complete named setup available now'],['busy','In use'],['absent','Not at this gym']])}</label>`;
    const cap = capabilities[id];
    if (cap && state[cap.key] === 'unknown') return `<label class="equipment-report">${esc(cap.question)}${select(`data-capability="${cap.key}"`, 'unknown', [['unknown','Not checked'],['yes','Yes'],['no','No']])}</label>`;
    if (isDumbbellPress(id) && state.pressingPair !== 'yes') return `<label class="equipment-report">${esc(equipmentLabels.dumbbells)} for pressing${select('data-equipment="dumbbells" data-purpose="press"', 'unknown', [['unknown','Not checked'],['available','Suitable pressing pair available now'],['busy','In use'],['absent','Not at this gym']])}</label>`;
    return '';
  }
  function refresh() {
    root.querySelector('[data-note-summary]').innerHTML = `<p role="status">${esc(message)} ${undo ? '<button type="button" class="text-button" data-note-undo>Undo equipment update</button>' : ''}</p>${Object.keys(notes.facts).length ? `<p class="help">Physical reports below. Presence, access and count do not confirm a suitable exercise setup or load. Unchecked requirements stay conditional.</p><ul class="equipment-note-facts">${Object.entries(notes.facts).map(([type, fact]) => `<li><strong>${esc(noteTypes[type].label)}</strong> · ${esc(fact.presence)} · ${esc(fact.access)} · ${fact.count ?? 'unknown'} units${type === 'bench' ? ` · ${esc(fact.benchType)}` : ''}<details><summary>Edit ${esc(noteTypes[type].label)}</summary><label>Presence${select(`data-note-type="${type}" data-note-field="presence"`, fact.presence, [['unknown','Unknown'],['present','Present'],['absent','Absent']])}</label><label>Access${select(`data-note-type="${type}" data-note-field="access"`, fact.access, [['unknown','Unknown'],['available','Available'],['busy','Busy']])}</label><label>Physical units (blank means unknown)<input type="number" min="1" max="100" step="1" data-note-type="${type}" data-note-field="count" value="${fact.count ?? ''}"></label><button class="text-button" type="button" data-note-count="${type}">Apply count</button>${type === 'bench' ? `<label>Bench type${select('data-note-type="bench" data-note-field="benchType"', fact.benchType, [['unknown','Unknown'],['adjustable','Adjustable'],['flat','Flat'],['fixed_incline','Fixed incline']])}</label>` : ''}<button class="text-button" type="button" data-note-clear="${type}">Clear report to unknown</button></details></li>`).join('')}</ul>` : ''}${pilot?.noteIssues(notes)?.length ? `<p class="help"><strong>Unresolved in the six-row pilot:</strong> ${esc(pilot.noteIssues(notes).join(' '))}</p>` : ''}${notes.unresolved.length ? `<p><strong>Unresolved — not applied</strong></p><ul>${notes.unresolved.map(issue => `<li>${esc(issue.text)} — ${esc(issue.reason)}</li>`).join('')}</ul>` : ''}${notes.history.length ? `<details><summary>Original equipment notes (${notes.history.length})</summary>${notes.history.map(text => `<p class="equipment-original-note">${esc(text)}</p>`).join('')}</details>` : ''}`;
    root.querySelector('[data-note-question]').innerHTML = '';
    const manual = root.querySelector('[data-note-manual]');
    manual.open = manualOpen;
    if (manualOpen) root.querySelector('[data-note-manual-fields]').innerHTML = Object.entries(getState().equipment).map(([key, fact]) => `<label class="equipment-report">${esc(equipmentLabels[key])}${select(`data-equipment="${key}"`, fact.presence === 'absent' ? 'absent' : fact.access, [['unknown','Not checked'],['available','Complete named setup available now'],['busy','In use'],['absent','Not at this gym']])}</label>`).join('');
  }
  input.addEventListener('input', () => {draft = input.value;suggest();});
  for(const type of ['click','keyup','select'])input.addEventListener(type,suggest);
  root.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    try {if (!draft.trim()) return;apply(draft, recognizeEquipment(draft));} catch (error) {message = error.message;refresh();}
  });
  root.querySelector('[data-note-manual]').addEventListener('toggle', event => {if (manualOpen !== event.target.open) {manualOpen = event.target.open;refresh();}});
  root.addEventListener('change', event => {
    const field = event.target, type = field.dataset.noteType;
    if (!type) return;
    const fact = {...notes.facts[type]}, key = field.dataset.noteField;
    if (key === 'count') return;
    fact[key] = field.value;
    if (key === 'access' && fact.access !== 'unknown') fact.presence = 'present';
    if (key === 'presence' && fact.presence !== 'present') fact.access = 'unknown';
    apply(notes.text, {facts: {[type]: fact}, unresolved: []});
  });
  root.addEventListener('click', event => {
    const completion=event.target.closest('[data-note-complete]');
    if(completion){
      try{const item=completions[Number(completion.dataset.noteComplete)];if(!item)return;const result=insertEquipmentCompletion(draft,item);draft=result.text;input.value=draft;input.focus({preventScroll:true});input.setSelectionRange(result.caret,result.caret);suggest();}catch(error){message=error.message;refresh();}return;
    }
    if(event.target.closest('[data-note-hide]')){suggestionsEnabled=false;suggest();input.focus({preventScroll:true});return;}
    if(event.target.closest('[data-note-show]')){suggestionsEnabled=true;suggest();input.focus({preventScroll:true});return;}
    const countButton=event.target.closest('[data-note-count]');
    if(countButton) {
      const type=countButton.dataset.noteCount, field=countButton.closest('li').querySelector('[data-note-field="count"]');
      const count=field.value===''?null:Number(field.value);
      if(count!==null&&(!Number.isInteger(count)||count<1||count>100)){message='Count not applied. Use 1–100 units, or leave blank for unknown.';refresh();return;}
      apply(notes.text,{facts:{[type]:{...notes.facts[type],count}},unresolved:[]});return;
    }

    if (event.target.closest('[data-note-undo]') && undo) {
      const previous = undo;undo = null;
      setState(restoreEquipment(getState(), previous.standard));
      pilot?.restoreVisit(previous.pilot);notes = previous.notes;draft = previous.draft;input.value = draft;suggestions.innerHTML='';completions=[];
      message = 'Equipment update undone. Workout choices unchanged.';onChange();refresh();
    }
    const type = event.target.closest('[data-note-clear]')?.dataset.noteClear;
    if (type) apply(notes.text, {facts: {[type]: {presence:'unknown',access:'unknown',count:null,benchType:'unknown'}}, unresolved: []});
  });
  refresh();
  function reset() {notes = emptyNotes();draft = '';undo = null;message = '';input.value = '';suggestions.innerHTML='';completions=[];refresh();}
  return {refresh, questionMarkup: question, reset,
    clearReports() {setState(restoreEquipment(getState(),captureEquipment(freshSession())));reset();onChange();},
    syncPilotReports(visit, previous) {
      const before=capture();before.pilot=previous;
      const changed=[];
      for(const type of Object.keys(notes.facts)) {
        const items=visit.items.filter(item=>item.type===type), old=previous.items.filter(item=>item.type===type);
        if(JSON.stringify(items)===JSON.stringify(old))continue;
        const fact=notes.facts[type];
        notes.facts[type]=items.length===1?{...fact,count:items[0].count,presence:items[0].presence,access:items[0].access}:{presence:'unknown',access:'unknown',count:null,benchType:'unknown'};
        changed.push(type);
      }
      if(changed.length){undo=before;notes.unresolved=notes.unresolved.filter(issue=>!issue.types.some(type=>changed.includes(type)));setState(adaptStandard(getState(),notes,changed));message='Physical reports corrected in the manual pilot form.';onChange();refresh();}
    },
  };
}
