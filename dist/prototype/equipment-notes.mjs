// Visit-only recognition. This module reports facts; it never assigns eligibility.
import {capabilities} from './scenario.mjs?v=2.8.0';

export const noteTypes = {
  dumbbell: {label: 'Dumbbells', pattern: '(?:dumbbells?|dbs?)', keys: ['dumbbells', 'single_dumbbell', 'goblet_dumbbell', 'row_dumbbell_pair', 'renegade_dumbbells', 'side_deadlift_dbs', 'front_deadlift_dbs', 'unequal_deadlift_dbs', 'incline_press_dbs', 'fly_dbs']},
  kettlebell: {label: 'Kettlebells', pattern: '(?:kettlebells?|kbs?)', keys: ['single_kettlebell', 'goblet_kettlebell', 'gorilla_kettlebells', 'row_kettlebell_pair', 'side_deadlift_kbs', 'central_deadlift_kb']},
  bench: {label: 'Bench', pattern: '(?:(?:adjustable|flat|fixed incline) )?bench(?:es)?', keys: ['bench', 'row_flat_bench', 'low_incline_press_bench', 'hip_thrust_bench']},
  smith: {label: 'Smith machine', pattern: 'smith(?: machine)?', keys: ['smith_machine', 'vertical_smith_deadlift_setup', 'dual_axis_deadlift_setup', 'vertical_smith_squat_setup']},
  barbell: {label: 'Barbell', pattern: '(?:barbells?|bb)', keys: ['barbell_load', 'landmine_setup', 'barbell_bench_station']},
  band: {label: 'Resistance band', pattern: '(?:resistance )?bands?', keys: ['band', 'long_band', 'thigh_band', 'overhead_pulldown_band', 'overhead_pullup_band', 'dip_band_setup', 'band_chest_press_setup']},
  cable_row_station: {label: 'Seated cable-row station', pattern: '(?:seated )?cable[ -]row (?:station|machine)', keys: ['seated_row_station']},
  chest_row_machine: {label: 'Chest-pad row machine', pattern: 'chest[ -](?:pad|supported) row machine', keys: ['row_machine']},
};
const numbers = {one: 1, a: 1, an: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10};
export const emptyNotes = () => ({text: '', history: [], facts: {}, unresolved: []});
const unknownFact = () => ({presence: 'unknown', access: 'unknown', count: null, benchType: 'unknown'});

export function recognizeEquipment(text) {
  if (typeof text !== 'string' || text.length > 4000) throw new TypeError('Use an equipment note of up to 4,000 characters.');
  const reports = new Map(), unresolved = [];
  const clauses = text.toLowerCase().replace(/[’]/g, "'").split(/[.!?;\n,]+|\s+(?:and|but)\s+/).map(s => s.trim()).filter(Boolean);
  for (const original of clauses) {
    const clause = original.replace(/\s+/g,' ').replace(/^(?:i have|we have|there is|there are|the|i've got)\s+/, '').replace(/\s+(?:now|today|here)$/, '');
    let matched = false;
    for (const [type, def] of Object.entries(noteTypes)) {
      // Entire clauses must match. Extra qualifiers, uncertain language and pronouns
      // stay visible rather than being silently discarded after a keyword match.
      const match = clause.match(new RegExp(`^(?:(clear|forget|no|not present) )?(?:(one|two|three|four|five|six|seven|eight|nine|ten|a|an|\\d+) )?(${def.pattern})(?: (?:is |are )?(busy|in use|occupied|free|available|absent|not here|present|unknown))?$`));
      if (!match) continue;
      matched = true;
      const [, prefix, quantity, noun, status] = match;
      const count = quantity ? numbers[quantity] ?? Number(quantity) : null;
      if (count !== null && (!Number.isInteger(count) || count < 1 || count > 100)) {unresolved.push({text: original, types: [type], reason: 'Count must be 1–100 physical units.'});break;}
      const clear = ['clear', 'forget'].includes(prefix) || status === 'unknown';
      const absent = ['no', 'not present'].includes(prefix) || ['absent', 'not here'].includes(status);
      const access = ['busy', 'in use', 'occupied'].includes(status) ? 'busy' : ['free', 'available'].includes(status) ? 'available' : 'unknown';
      const fact = clear ? unknownFact() : {presence: absent ? 'absent' : 'present', ...(absent ? {access:'unknown'} : access !== 'unknown' ? {access} : {}), ...(count !== null ? {count} : {}),
        ...(type === 'bench' && /adjustable|flat|fixed incline/.test(noun) ? {benchType: noun.startsWith('adjustable') ? 'adjustable' : noun.startsWith('flat') ? 'flat' : 'fixed_incline'} : {})};
      const existing = reports.get(type);
      const conflict = existing && (Object.keys(fact).some(key => Object.hasOwn(existing.fact, key) && existing.fact[key] !== fact[key] && !(key === 'access' && [existing.fact[key], fact[key]].includes('unknown')))
        || (existing.fact.presence === 'absent' && access !== 'unknown'));
      reports.set(type, {fact: {...existing?.fact, ...fact}, conflict: existing?.conflict || conflict || absent && access !== 'unknown', text: [...existing?.text ?? [], original]});
      break;
    }
    if (!matched) unresolved.push({text: original, types: [], reason: 'Not applied. Name, reference, restriction or setup needs manual review.'});
  }
  const facts = {};
  for (const [type, report] of reports) {
    facts[type] = report.conflict ? unknownFact() : report.fact;
    if (report.conflict) unresolved.push({text: report.text.join('; '), types: [type], reason: 'Conflicting reports. Cleared to unknown until corrected.'});
  }
  return {facts, unresolved};
}

export function mergeNote(notes, text, parsed = recognizeEquipment(text)) {
  const facts = structuredClone(notes.facts);
  for (const [type, patch] of Object.entries(parsed.facts)) {
    const old = facts[type] ?? unknownFact();
    facts[type] = {...old, ...patch};
    if (patch.presence !== 'present') facts[type] = {...unknownFact(), presence: patch.presence};
  }
  const changed = Object.keys(parsed.facts).filter(type => parsed.facts[type].presence === 'unknown' || JSON.stringify(facts[type]) !== JSON.stringify(notes.facts[type]));
  return {notes: {text, history: [...notes.history, text], facts,
    unresolved: [...notes.unresolved.filter(issue => !issue.types.some(type => Object.hasOwn(parsed.facts, type))), ...parsed.unresolved]}, changed};
}

export const equipmentStateKeys = ['equipment', 'physicalReports', 'benchType', 'benchIncline', 'benchFlat', 'benchChecked', 'bandAnchor', 'machineSetup', 'floorLying', 'pressMachineSetup', 'pressingPair', 'rdlPair'];
export const captureEquipment = state => structuredClone(Object.fromEntries(equipmentStateKeys.map(key => [key, state[key]])));
export const restoreEquipment = (state, snapshot) => ({...state, ...structuredClone(snapshot)});

export function adaptStandard(state, notes, changed) {
  const next = {...state, equipment: structuredClone(state.equipment), physicalReports: structuredClone(notes.facts)};
  for (const type of changed) {
    const fact = notes.facts[type], def = noteTypes[type];
    for (const key of def.keys.filter(key => Object.hasOwn(next.equipment, key))) {
      // Physical positive reports cannot certify the legacy composite labels.
      const direct = key === 'bench' || key === 'single_dumbbell' || key === 'single_kettlebell';
      next.equipment[key] = fact.presence === 'absent' ? {presence: 'absent', access: 'unknown'}
        : fact.access === 'busy' ? {presence: 'present', access: 'busy'}
        : direct ? {presence: fact.presence, access: fact.access} : {presence: 'unknown', access: 'unknown'};
      for (const cap of Object.values(capabilities)) if (cap.equipment === key) next[cap.key] = 'unknown';
      if (key === 'dumbbells') {next.pressingPair = 'unknown'; next.rdlPair = 'unknown';}
    }
    if (type === 'bench') {next.benchType = fact.benchType ?? 'unknown'; next.benchChecked = false;}
  }
  return next;
}

export function adaptPilot(visit, notes, changed) {
  const next = structuredClone(visit), unresolved = [], affected = new Set();
  for (const type of changed) {
    const fact = notes.facts[type];
    if (!['dumbbell', 'kettlebell', 'bench', 'band', 'cable_row_station', 'chest_row_machine'].includes(type)) {
      unresolved.push(`${noteTypes[type].label}: outside the six-row physical-item adapter.`);continue;
    }
    const matches = next.items.filter(item => item.type === type);
    if (matches.length > 1) {matches.forEach(item => affected.add(item.id));unresolved.push(`${noteTypes[type].label}: multiple physical records; edit them in the manual pilot form.`);continue;}
    if (!matches.length && next.items.length >= 12) {unresolved.push('Physical-item limit reached; use the manual pilot form.');continue;}
    const item = matches[0] ?? {id: `note_${type}`, type, reportedWeightKg: null, capabilities: {}};
    Object.assign(item, {count: fact.count, presence: fact.presence, access: fact.access, capabilities: {}});
    if (!matches.length) next.items.push(item);
    affected.add(item.id);
  }
  next.handlingChecks = next.handlingChecks.filter(check => !check.itemIds.some(id => affected.has(id)));
  next.revision++;
  return {visit: next, unresolved};
}

export function physicalConflicts(state, keys) {
  const facts = Object.entries(state.physicalReports ?? {}).filter(([type]) => noteTypes[type].keys.some(key => keys.includes(key)));
  return {absent: facts.some(([, fact]) => fact.presence === 'absent'), busy: facts.some(([, fact]) => fact.access === 'busy'),
    count: ['dumbbell','kettlebell'].some(type => {
      const pairs=type==='dumbbell'?['dumbbells','row_dumbbell_pair','renegade_dumbbells','side_deadlift_dbs','front_deadlift_dbs','unequal_deadlift_dbs','incline_press_dbs','fly_dbs']:['gorilla_kettlebells','row_kettlebell_pair','side_deadlift_kbs'];
      const fact=state.physicalReports?.[type];return pairs.some(key=>keys.includes(key)) && fact?.presence==='present' && fact.count!==null && fact.count<2;
    })};
}
