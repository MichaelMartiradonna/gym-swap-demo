import {b4Equipment} from './b4-content.mjs?v=2.8.0';
import {b3Equipment} from './b3-content.mjs?v=2.8.0';
import {b2Equipment} from './b2-content.mjs?v=2.8.0';
import {b1Equipment} from './b1-content.mjs?v=2.8.0';
import {a4Equipment} from './a4-content.mjs?v=2.8.0';
import {a3Equipment} from './a3-content.mjs?v=2.8.0';
import {a2Equipment} from './a2-content.mjs?v=2.8.0';
import { DATA } from '../data.mjs';
import {content, contentById, comparisons, comparisonFor, comparisonOriginalId} from './content.mjs?v=2.8.0';
import {day1Equipment} from './day1-content.mjs?v=2.8.0';
import {a1Equipment} from './a1-content.mjs?v=2.8.0';
import {a1RowEquipment} from './a1-more-rows.mjs?v=2.8.0';
import {a1PullEquipment} from './a1-pulls.mjs?v=2.8.0';

// Existing row/press records come from the legacy catalogue. New exercise facts
// are maintained in the content modules, with explicit comparisons kept separately.
// Legacy familiarity/ranking rules belong to the archived guide, not this app.
export {BUILD} from './release.mjs?v=2.8.1';
export const original = DATA.exercises.seated_cable_row;
export const swap = original.options.find(option => option.id === 'incline_db_row');
export const source = DATA.sources[original.source];
// These two notes come from knowledge_base/06_rows.md, which is not yet exported
// in full by the legacy static guide. Shared-content migration is Phase 3 work.
export const loadNote = 'Do not convert the cable-stack number directly into a dumbbell weight.';
export const sourceNote = 'Page 3 identifies the 45-degree incline row. It supports identification of the exercise; it does not establish this substitution as universally equivalent or safest.';
// Condensed display copy; the full reviewed comparison remains in `swap`.
export const cardCopy = {
  name: 'Chest-supported dumbbell row',
  keeps: 'Rowing for your back and rear shoulders.',
  changes: 'Less torso stabilization than an unsupported seated row.',
  load: 'Cable weights don’t convert directly.',
  image: '/prototype/assets/chest-supported-row.png?v=2.1.3',
  imageAlt: 'A person rowing dumbbells with their chest against an inclined backrest, a separate short seat below their hips, and feet on the floor.',
};

// Each original explicitly owns its reviewed alternatives. The model cannot add any.
const expandedCard = record => ({...record, label: record.name});
const legacyOriginals = [original, DATA.exercises.chest_press_machine];
export const explanationPairs = {
  seated_cable_row: ['incline_db_row', 'seated_band_row', 'other_row_machine'],
  chest_press_machine: ['db_bench_press', 'db_floor_press', 'other_chest_press'],
};
// New instructions may replace a legacy card's written setup without changing
// the separately scoped, previously reviewed AI evidence or its allowed pairs.
const legacyCards = legacyOriginals.flatMap(item=>item.options.filter(card=>explanationPairs[item.id].includes(card.id)));
const maintainedCard = id => contentById(id) ? expandedCard(contentById(id)) : legacyCards.find(card=>card.id===id);
const originalIds = [...new Set(comparisons.map(edge => edge.originalId))];
export const exercises = [...legacyOriginals.map(item=>{
  const edges=comparisons.filter(edge=>edge.originalId===item.id);
  const retained=item.options.filter(card=>explanationPairs[item.id].includes(card.id)&&!edges.some(edge=>edge.cardId===card.id));
  return {...item,options:[...retained.map(card=>({...card,...maintainedCard(card.id)})),...edges.map(edge=>({...maintainedCard(edge.cardId),why:edge.why,changes:edge.detail,partial:!!edge.limited}))]};
}), ...originalIds.filter(id=>!legacyOriginals.some(item=>item.id===id)).map(id => {
  const edges = comparisons.filter(edge => edge.originalId === id), first = edges[0];
  return {id, label: first.originalName, source: first.source,
    options: edges.map(edge => ({...maintainedCard(edge.cardId), why: edge.why, changes: edge.detail, partial: !!edge.limited}))};
})];
export const exerciseIds = exercises.map(exercise => exercise.id);
export const exerciseById = id => exercises.find(exercise => exercise.id === id);
const allowedOptions = {
  seated_cable_row: ['incline_db_row', 'seated_band_row', 'other_row_machine'],
  chest_press_machine: ['db_bench_press', 'db_floor_press', 'other_chest_press'],
  ...Object.fromEntries(originalIds.map(id => [id, comparisons.filter(edge => edge.originalId === id).map(edge => edge.cardId)])),
};
export const cardsFor = id => (exerciseById(comparisonOriginalId(id))?.options ?? []).filter(card => allowedOptions[comparisonOriginalId(id)]?.includes(card.id));
export const cards = [...new Map([...legacyCards,...content.map(record=>({...legacyCards.find(card=>card.id===record.id),...expandedCard(record)}))].map(card=>[card.id,card])).values()];
export const cardIds = cards.map(card => card.id);
export const cardById = id => cards.find(card => card.id === id);
export const originalFor = cardId => exercises.find(exercise => exercise.options.some(card => card.id === cardId));
export const allowsCard = (exerciseId, cardId) => cardsFor(exerciseId).some(card => card.id === cardId);
export const sourceFor = id => DATA.sources[exerciseById(id)?.source];
// New written content does not become AI evidence merely by joining the library.
export const explanationCardIds = ['incline_db_row', 'seated_band_row', 'other_row_machine', 'db_bench_press', 'db_floor_press', 'other_chest_press'];
export const allowsExplanation = (originalId,cardId) => !!explanationPairs[originalId]?.includes(cardId) && allowsCard(originalId,cardId);
// Short linked guidance already written in knowledge_base/04_chest_presses.md.
export const pressLoadNote = "Do not assume the machine's weight setting transfers to dumbbells.";
const legacyCopies = {
  incline_db_row: cardCopy,
  seated_band_row: {name: 'Seated band row', keeps: 'A seated rowing movement.', changes: 'Resistance changes as the band stretches.'},
  other_row_machine: {name: 'Seated machine row', keeps: 'Rowing for your back and rear shoulders.', changes: 'Handle path and chest support vary by machine.'},
  db_bench_press: {name: 'Flat dumbbell bench press', keeps: 'Pressing for chest, front shoulders, and triceps.', changes: 'Each arm controls its own weight and path.', load: 'Machine weights don’t convert directly.'},
  db_floor_press: {name: 'Dumbbell floor press', keeps: 'A chest press without a bench.', changes: 'Floor limits upper-arm descent.', load: 'Machine weights don’t convert directly.'},
  other_chest_press: {name: 'Another chest-press machine', keeps: 'A supported machine chest press.', changes: 'Seat, handles, path, and resistance can differ.'},
};
export const copies = {...Object.fromEntries(content.map(record => [record.id, {name: record.name, ...comparisons.find(edge => edge.cardId === record.id)}])), ...legacyCopies};
// Comparison text is always resolved for the current original. Never reuse the
// first relationship merely because the alternative exercise has the same ID.
export const copyFor = (id, originalId) => {
  const edge=comparisonFor(id,originalId);
  if(edge)return {name:contentById(id)?.name??copies[id]?.name,...edge};
  if(allowsExplanation(originalId,id))return legacyCopies[id];
  return {name:contentById(id)?.name??copies[id]?.name};
};
export const similarityLabels = {close: 'Close match', some: 'Some differences', broader: 'Broader alternative'};
export const similarityFor = (id, originalId) => comparisonFor(id, originalId)?.similarity ?? null;
export const similarityRank = (id, originalId) => ({close:0, some:1, broader:2})[similarityFor(id, originalId)] ?? 0;
export const requirements = {
  incline_db_row: ['dumbbells', 'bench'],
  seated_band_row: ['band', 'row_anchor', 'floor_space'],
  other_row_machine: ['row_machine'],
  db_bench_press: ['dumbbells', 'bench'],
  db_floor_press: ['dumbbells', 'lying_space'],
  other_chest_press: ['chest_machine'],
  ...Object.fromEntries(content.map(record => [record.id, record.requires])),
};
// A nested group means any ONE member; remaining entries are all required.
export const requirementGroups = id => (requirements[id] ?? []).map(item => Array.isArray(item) ? item : [item]);
export const requirementKeys = id => requirementGroups(id).flat();
export function resolvedRequirements(state, id) {
  const rank = key => {
    const item = state.equipment[key];
    return item.presence === 'absent' ? 4 : item.access === 'busy' ? 3 : item.presence === 'unknown' ? 2 : item.access === 'unknown' ? 1 : 0;
  };
  return requirementGroups(id).map(group => [...group].sort((a,b) => rank(a)-rank(b))[0]);
}
export const equipmentLabels = {
  dumbbells: 'Suitable dumbbell pair', bench: 'Bench', band: 'Suitable resistance band',
  row_anchor: 'Anchor for seated band rowing', floor_space: 'Clear sitting space', row_machine: 'Seated rowing machine',
  lying_space: 'Clear room to lie down and move your arms', chest_machine: 'Another chest-press machine',
  goblet_dumbbell: 'One dumbbell suitable for your goblet squat', goblet_kettlebell: 'One kettlebell suitable for your goblet squat',
  standing_space: 'Clear standing and movement space', bridge_space: 'Floor space to lie down, plant feet, and lift hips',
  reaching_space: 'Suitable floor surface and room to reach an arm and leg', fixed_wall: 'Fixed wall for hand support',
  ...day1Equipment,
  ...a1Equipment,
  ...a1RowEquipment,
  ...a1PullEquipment,
  ...a2Equipment,
  ...a3Equipment,
  ...a4Equipment,
  ...b1Equipment,
  ...b2Equipment,
  ...b3Equipment,
  ...b4Equipment,
};
export const isDumbbellPress = id => ['db_bench_press', 'db_floor_press'].includes(id);
export const requirementLabel = (id, key) => key === 'dumbbells' && isDumbbellPress(id) ? 'Suitable dumbbell pair for pressing' : key === 'dumbbells' && id === 'dumbbell_rdl' ? 'Dumbbell pair for this RDL' : equipmentLabels[key];
export const benchTypes = [['flat', 'Flat bench'], ['adjustable', 'Adjustable bench'], ['fixed_incline', 'Fixed incline'], ['unknown', 'Not sure']];
export const capabilities = {
  flat_db_fly: {key: 'benchFlat', equipment: 'bench', question: 'Can this bench lie flat?', label: 'Flat position', yes: 'Lies flat', no: 'Different bench needed'},
  incline_db_row: {key: 'benchIncline', equipment: 'bench', question: 'Can the backrest lock at roughly a 30–45° incline?', label: 'Incline', yes: 'Roughly 30–45°', no: 'Different bench needed'},
  single_arm_incline_db_row: {key: 'benchIncline', equipment: 'bench', question: 'Can the backrest lock at roughly a 30–45° incline?', label: 'Incline', yes: 'Roughly 30–45°', no: 'Different bench needed'},
  seated_band_row: {key: 'bandAnchor', equipment: 'row_anchor', question: 'Is this anchor secured and suitable for seated band rowing?', label: 'Anchor setup', yes: 'Reported suitable', no: 'Different anchor needed'},
  other_row_machine: {key: 'machineSetup', equipment: 'row_machine', question: 'Are the seat, handles, and any chest pad adjusted for your starting position?', label: 'Machine setup', yes: 'Reported adjusted', no: 'Setup needs adjustment'},
  db_bench_press: {key: 'benchFlat', equipment: 'bench', question: 'Can this bench lie flat?', label: 'Flat position', yes: 'Lies flat', no: 'Different bench needed'},
  db_floor_press: {key: 'floorLying', equipment: 'lying_space', question: 'Is there clear room to lie down and move your arms with the dumbbells?', label: 'Lying space', yes: 'Room confirmed', no: 'Different space needed'},
  other_chest_press: {key: 'pressMachineSetup', equipment: 'chest_machine', question: 'Have you checked the seat, handles, and resistance adjustments on this station?', label: 'Machine setup', yes: 'Reported checked', no: 'Setup needs adjustment'},
  dumbbell_rdl: {key: 'rdlPair', equipment: 'dumbbells', question: 'Is this pair a suitable load for your two-dumbbell RDL?', label: 'RDL load', yes: 'Pair confirmed for this RDL', no: 'Different RDL weights needed'},
};
