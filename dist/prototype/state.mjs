import {cardIds, cardsFor, exerciseIds, resolvedRequirements, equipmentLabels, capabilities, isDumbbellPress, benchTypes, similarityRank} from './scenario.mjs?v=2.8.0';
import {validatePreferences} from './preferences.mjs?v=2.8.0';
import {discoveryCards} from './discovery.mjs?v=2.8.0';
import {physicalConflicts} from './equipment-notes.mjs';

export function freshSession(preferences = {}) {
  return {
    exerciseId: '', mode: 'replace', discovery: null, requested: false, selectedId: null, viewedId: null, skipped: [],
    preferences: validatePreferences(preferences), undo: null, equipmentFilter: false, physicalReports: {},
    equipment: Object.fromEntries(Object.keys(equipmentLabels).map(key => [key, {presence: 'unknown', access: 'unknown'}])),
    benchIncline: 'unknown', benchChecked: false, bandAnchor: 'unknown', machineSetup: 'unknown',
    benchType: 'unknown', benchFlat: 'unknown', floorLying: 'unknown', pressMachineSetup: 'unknown', pressingPair: 'unknown', rdlPair: 'unknown',
  };
}

export const requestCards = state => state.mode === 'discover' ? discoveryCards(state.discovery) : cardsFor(state.exerciseId);
export const supportsCard = (state,id) => requestCards(state).some(card=>card.id === id);

export function assess(state, id = state.viewedId ?? 'incline_db_row') {
  if (!state.requested) return {kind: 'start', equipmentReady: false};
  if (!supportsCard(state,id)) return {kind: 'unsupported', equipmentReady: false};
  const keys = resolvedRequirements(state, id), capability = capabilities[id];
  const absent = keys.filter(key => state.equipment[key].presence === 'absent');
  const busy = keys.filter(key => state.equipment[key].access === 'busy');
  const missingPresence = keys.filter(key => state.equipment[key].presence === 'unknown');
  const missingAccess = keys.filter(key => state.equipment[key].access === 'unknown');
  const physical = physicalConflicts(state, keys);
  let kind;
  if (absent.length || physical.absent) kind = 'absent';
  else if (busy.length || physical.busy) kind = 'busy';
  else if (physical.count) kind = 'count_conflict';
  else if (capability && state[capability.key] === 'no') kind = capability.equipment === 'bench' ? 'different_bench' : 'setup_needed';
  else if (missingPresence.length) kind = 'equipment_unknown';
  else if (capability && state[capability.key] === 'unknown') kind = capability.equipment === 'bench' ? 'bench_unknown' : 'setup_unknown';
  else if (isDumbbellPress(id) && state.pressingPair !== 'yes') kind = state.pressingPair === 'no' ? 'different_pair' : 'pressing_pair_unknown';
  else if (missingAccess.length) kind = 'access_unknown';
  else kind = 'ready';
  return {kind, absent, busy, missingPresence, missingAccess, equipmentReady: kind === 'ready'};
}

export const equipmentConflict = kind => ['absent', 'busy', 'different_bench', 'setup_needed', 'different_pair', 'count_conflict'].includes(kind);
export function candidates(state) {
  const rank = kind => state.equipmentFilter && kind !== 'ready' ? 1 : 0;
  return requestCards(state).filter(card => state.preferences[card.id] !== 'hidden' && !state.skipped.includes(card.id)
      && (!state.equipmentFilter || !equipmentConflict(assess(state, card.id).kind)))
    .map(card => ({...card, assessment: assess(state, card.id)}))
    .sort((a, b) => rank(a.assessment.kind) - rank(b.assessment.kind)
      || Number(state.preferences[b.id] === 'favorite') - Number(state.preferences[a.id] === 'favorite')
      || (state.mode === 'replace' || state.discovery?.kind === 'related'
        ? similarityRank(a.id,state.exerciseId || state.discovery.id) - similarityRank(b.id,state.exerciseId || state.discovery.id) : 0)
      || (state.mode === 'replace' || state.discovery?.kind === 'related' ? requestCards(state).findIndex(c=>c.id===a.id)-requestCards(state).findIndex(c=>c.id===b.id) : cardIds.indexOf(a.id)-cardIds.indexOf(b.id)));
}

function clearRequest(state) {
  return {...state, exerciseId: '', mode:'replace', discovery:null, requested: false, selectedId: null, viewedId: null, skipped: [], undo: null};
}

export function transition(state, action) {
  if (action.type === 'new_session') return freshSession(state.preferences);
  if (action.type === 'equipment_filter') {
    if (typeof action.enabled !== 'boolean') throw new Error('Invalid equipment filter');
    const next = {...state, equipmentFilter: action.enabled};
    // Filtering changes the viewed list, never the user's choice or reports.
    if (next.viewedId && !candidates(next).some(card => card.id === next.viewedId)) next.viewedId = null;
    return next;
  }
  if (action.type === 'example') {
    if (!['confirmed', 'bench-unknown'].includes(action.name)) throw new Error('Unknown preview example');
    const next = freshSession(state.preferences);
    next.exerciseId = 'seated_cable_row'; next.requested = true;
    next.equipment.dumbbells = {presence: 'present', access: 'available'};
    next.equipment.bench = {presence: 'present', access: 'available'};
    next.benchIncline = action.name === 'confirmed' ? 'yes' : 'unknown';
    next.viewedId = candidates(next)[0]?.id ?? null;
    return next;
  }
  if (action.type === 'next') return clearRequest(state);
  if (action.type === 'discover') {
    if(!discoveryCards(action.target).length) throw new Error('Unsupported discovery request');
    const next={...clearRequest(state), mode:'discover', discovery:{...action.target}, requested:true};
    return {...next, viewedId:action.target.kind === 'card' ? candidates(next)[0]?.id ?? null : null};
  }
  if (action.type === 'exercise') {
    if (!['', ...exerciseIds].includes(action.id)) throw new Error('Unsupported exercise');
    return {...clearRequest(state), exerciseId: action.id};
  }
  if (action.type === 'find') {
    if (!state.exerciseId) return state;
    const next = {...state, requested: true};
    return {...next, viewedId: next.viewedId ?? candidates(next)[0]?.id ?? null};
  }
  if (action.type === 'view') {
    if (!supportsCard(state,action.id) || !state.requested || state.preferences[action.id] === 'hidden' || state.skipped.includes(action.id)) return state;
    return {...state, viewedId: action.id};
  }
  if (action.type === 'bench_type') {
    if (!benchTypes.some(([type]) => type === action.value)) throw new Error('Invalid bench type');
    if (state.benchType === action.value) return state;
    const next = {...state, benchType: action.value};
    // A changed classification invalidates old position assumptions. Selecting
    // Not sure keeps explicit position facts; a different physical item uses replace_setup.
    if (action.value !== 'unknown') {
      next.benchFlat = action.value === 'flat' ? 'yes' : action.value === 'fixed_incline' ? 'no' : 'unknown';
      next.benchIncline = action.value === 'flat' ? 'no' : 'unknown';
      next.equipment = {...state.equipment, bench: {...state.equipment.bench, presence: 'present'}};
    }
    return next;
  }
  if (action.type === 'replace_setup') {
    if (!Object.hasOwn(state.equipment,action.key)) throw new Error('Invalid equipment report');
    const next = {...state, equipment: {...state.equipment, [action.key]: {presence:'unknown',access:'unknown'}}};
    for (const cap of Object.values(capabilities)) if (cap.equipment === action.key) next[cap.key] = 'unknown';
    if (action.key === 'bench') { next.benchType = 'unknown'; next.benchChecked = false; }
    if (action.key === 'dumbbells') next.pressingPair = 'unknown';
    return next;
  }
  if (action.type === 'access' || action.type === 'report') {
    if (!Object.hasOwn(state.equipment, action.key)) throw new Error('Invalid equipment report');
    let report = action.report;
    if (action.type === 'access') {
      if (typeof action.available !== 'boolean') throw new Error('Invalid equipment report');
      report = action.available ? 'available' : 'unknown';
    }
    if (!['available', 'busy', 'absent', 'unknown'].includes(report)) throw new Error('Invalid equipment report');
    const old = state.equipment[action.key];
    const item = report === 'absent' ? {presence: 'absent', access: 'unknown'}
      : report === 'unknown' ? {presence: old.presence === 'present' ? 'present' : 'unknown', access: 'unknown'}
      : {presence: 'present', access: report};
    const next = {...state, equipment: {...state.equipment, [action.key]: item}};
    if (report === 'absent') for (const cap of Object.values(capabilities)) if (cap.equipment === action.key) next[cap.key] = 'unknown';
    if (action.key === 'bench' && report === 'absent') next.benchType = 'unknown';
    if (action.key === 'dumbbells') {
      if (report === 'absent' || report === 'unknown') {next.pressingPair = 'unknown'; next.rdlPair = 'unknown';}
      else if (action.purpose === 'press' && report === 'available') next.pressingPair = 'yes';
    }
    // This label explicitly asks for lying AND arm space; sitting reports cannot set it.
    if (action.key === 'lying_space' && report === 'available') next.floorLying = 'yes';
    return next;
  }
  if (action.type === 'incline' || action.type === 'capability') {
    const key = action.type === 'incline' ? 'benchIncline' : action.key;
    const cap = Object.values(capabilities).find(cap => cap.key === key);
    if (!cap || !['yes', 'no', 'unknown'].includes(action.value)) throw new Error('Invalid setup answer');
    const contradictsType = (state.benchType === 'flat' && ((key === 'benchFlat' && action.value !== 'yes') || (key === 'benchIncline' && action.value !== 'no')))
      || (state.benchType === 'fixed_incline' && key === 'benchFlat' && action.value !== 'no');
    return {...state, [key]: action.value, ...(contradictsType ? {benchType:'unknown'} : {}), ...(key === 'benchIncline' ? {benchChecked: true} : {}),
      equipment: {...state.equipment, [cap.equipment]: {...state.equipment[cap.equipment],
        presence: action.value === 'unknown' ? state.equipment[cap.equipment].presence : 'present'}}};
  }
  if (action.type === 'choose') {
    const id = action.id ?? state.viewedId;
    if (!state.requested || !supportsCard(state,id) || state.preferences[id] === 'hidden' || state.skipped.includes(id)) return state;
    return {...state, selectedId: id};
  }
  if (action.type === 'skip') {
    if (!state.requested || !supportsCard(state,action.id) || state.skipped.includes(action.id)) return state;
    return {...state, skipped: [...state.skipped, action.id], undo: {type: 'skip', id: action.id},
      viewedId: state.viewedId === action.id ? null : state.viewedId,
      selectedId: state.selectedId === action.id ? null : state.selectedId};
  }
  if (action.type === 'restore_skip') return {...state, skipped: state.skipped.filter(id => id !== action.id), undo: null};
  if (action.type === 'preference') {
    if (!cardIds.includes(action.id) || !['normal', 'favorite', 'hidden'].includes(action.value)) throw new Error('Invalid preference');
    const preferences = {...state.preferences};
    const previous = preferences[action.id] ?? 'normal';
    if (action.value === 'normal') delete preferences[action.id]; else preferences[action.id] = action.value;
    const hide = action.value === 'hidden';
    return {...state, preferences, undo: {type: 'preference', id: action.id, previous},
      viewedId: hide && state.viewedId === action.id ? null : state.viewedId,
      selectedId: hide && state.selectedId === action.id ? null : state.selectedId};
  }
  if (action.type === 'undo') {
    if (!state.undo) return state;
    if (state.undo.type === 'skip') return {...state, skipped: state.skipped.filter(id => id !== state.undo.id), undo: null};
    const next = transition(state, {type: 'preference', id: state.undo.id, value: state.undo.previous});
    return {...next, undo: null};
  }
  throw new Error('Unknown action');
}
