// Read-through adapter: the existing content modules remain the authoring source.
// Later steps consume this registry; no exercise or family rule is authored here.
import {DATA} from '../data.mjs';
import {contentById, comparisons, canonicalContentId, comparisonOriginalId, originalInstructionId} from './content.mjs?v=2.8.0';
import {BUILD, cards, cardsFor, cardById, exercises, exerciseById, requirements, capabilities, isDumbbellPress, explanationPairs} from './scenario.mjs?v=2.8.0';
import {searchEntries, normalize, discoveryCopy} from './discovery.mjs?v=2.8.0';
import {detailSections} from './card-details.mjs?v=2.8.0';
import {CONTRACT_VERSION, freezeData, validateRequirement} from './library-contract.mjs?v=1';

const canonical = id => comparisonOriginalId(canonicalContentId(id));
const hash = text => { let n = 2166136261; for (const c of text) n = Math.imul(n ^ c.charCodeAt(0), 16777619); return (n >>> 0).toString(16); };

// Exact v1 workout projection, including ordering and signature algorithm.
// Its fingerprint is a compatibility value, NOT an evidence/cache revision.
export const legacyWorkoutCatalogue = freezeData([...new Set(searchEntries.filter(x => x.kind !== 'category').map(x => comparisonOriginalId(x.id)))].map(id => {
  const entries = searchEntries.filter(x => x.kind !== 'category' && comparisonOriginalId(x.id) === id);
  const instructionId = originalInstructionId(id), record = contentById(instructionId), card = cardById(instructionId);
  const label = exerciseById(id)?.label ?? entries[0].label;
  return {id, label, instructionId, setup: record?.expect ?? record?.setup ?? card?.setup ?? '',
    aliases: [...new Set(entries.flatMap(x => [x.label, ...x.aliases]))],
    signature: hash(JSON.stringify([label, record?.setup ?? card?.setup, record?.cues ?? card?.cues]))};
}));

const legacyRequirement = (key, namespace = 'equipment') => ({kind: 'legacy', namespace, key});
function requirementFor(instructionId) {
  const declared = requirements[instructionId];
  if (!declared?.length) return null;
  const clauses = declared.map((item, index) => Array.isArray(item)
    ? {kind: 'any', branches: item.map(key => ({id: `option_${index}_${key}`, instructionRef: instructionId, requires: legacyRequirement(key)}))}
    : legacyRequirement(item));
  if (capabilities[instructionId]) clauses.push(legacyRequirement(capabilities[instructionId].key, 'capability'));
  if (isDumbbellPress(instructionId)) clauses.push(legacyRequirement('pressingPair', 'capability'));
  return {format: 'legacy-reports', physicalItemsNormalized: false, evaluator: 'state.assess', expression: validateRequirement({kind: 'all', clauses})};
}

const records = legacyWorkoutCatalogue.map(legacy => {
  const record = contentById(legacy.instructionId), card = cardById(legacy.instructionId);
  const sections = card ? detailSections(legacy.instructionId) : [];
  const legacyOriginal = Object.values(DATA.exercises).find(e => e.options?.some(c => c.id === legacy.instructionId));
  const legacySource = DATA.sources[(legacyOriginal ?? DATA.exercises[legacy.id])?.source];
  return {
    id: legacy.id, name: legacy.label, instructionId: legacy.instructionId, aliases: legacy.aliases,
    // These attributes require source-supported extraction in the content step.
    variant: {workingLimbs: null, position: null, support: null, resistance: null},
    task: null, purposeIds: [], family: record?.family ?? null,
    focus: record?.focus ?? discoveryCopy[legacy.instructionId]?.focus ?? null,
    instructions: card ? {
      setup: sections.find(x => x.id === 'setup-detail')?.paragraphs ?? [],
      steps: sections.find(x => x.id === 'instruction-detail')?.steps ?? [],
      detail: sections.find(x => x.id === 'instruction-detail')?.paragraphs ?? [],
    } : null,
    requirements: requirementFor(legacy.instructionId),
    references: record?.references ?? (legacySource?.references ?? []).map(reference => ({...reference,
      scope: 'Document-level reference; exercise-specific claims require their own source mapping.'})),
    sourceDocument: record ? null : legacySource ? {key: (legacyOriginal ?? DATA.exercises[legacy.id]).source, title: legacySource.title} : null,
    provenance: {
      kind: record ? 'maintained-profile' : card ? 'legacy-card' : 'original-only',
      source: record ? {module: 'dist/prototype/content.mjs', recordId: record.id}
        : card ? {module: 'dist/data.mjs', originalId: legacyOriginal?.id ?? null, cardId: legacy.instructionId}
          : {module: 'dist/data.mjs', originalId: legacy.id},
      review: record?.review ?? null, sourceCheckedAt: record?.sourceChecked ?? null,
    },
    availability: {
      legacyBrowse: !!card, legacyReplaceOriginal: !!exerciseById(legacy.id),
      structuredDiscovery: false, familyRuleComparison: false,
    },
    compatibility: {workoutSignature: legacy.signature},
  };
});

// Preserve only already-maintained directions, including three retained legacy
// cable-row choices. Do not create an all-pairs matrix or reverse an edge.
const maintainedComparisons = exercises.flatMap(original => cardsFor(original.id).map(card => {
  const edge = comparisons.find(e => e.originalId === original.id && e.cardId === card.id);
  return {
    id: `${original.id}__${card.id}`, baselineId: canonical(original.id), candidateId: canonical(card.id),
    compatibility: {originalId: original.id, cardId: card.id},
    similarity: edge?.similarity ?? null,
    text: edge ? {keeps: edge.keeps, changes: edge.changes, check: edge.check ?? edge.load ?? null, why: edge.why, detail: edge.detail}
      : {keeps: card.why, changes: card.changes, check: null, why: card.why, detail: card.changes},
    provenance: {kind: edge ? 'maintained-pair' : 'legacy-pair', review: edge?.review ?? null, basis: edge?.basis ?? null},
  };
}));

export const library = freezeData(structuredClone({
  contractVersion: CONTRACT_VERSION, sourceBuild: BUILD, adapterRevision: 'library-contract-2',
  exercises: records, maintainedComparisons,
  familyRules: [], // The experimental rules are not promoted by this adapter.
  legacyExplanationPairs: explanationPairs,
}));
const byId = new Map(library.exercises.map(record => [record.id, record]));
export const getExercise = id => typeof id === 'string' ? byId.get(canonical(id)) ?? null : null;
export function getMaintainedComparison(baselineId, candidateId) {
  const a = getExercise(baselineId), b = getExercise(candidateId);
  return a && b ? library.maintainedComparisons.find(edge => edge.baselineId === a.id && edge.candidateId === b.id) ?? null : null;
}

// A future resolver must clarify this consequential alias. The legacy workout
// projection stays unchanged until the separately authorized UI/matching step.
const ambiguousAliases = new Map([
  ['chest supported row', ['incline_db_row', 'chest_supported_row_machine']],
]);
export function resolveExercise(input) {
  if (typeof input !== 'string' || input.length > 600) throw new TypeError('Invalid exercise lookup');
  const exactId = getExercise(input);
  if (exactId) return {status: 'resolved', id: exactId.id, via: 'id'};
  const query = normalize(input);
  if (!query) return {status: 'unmatched', candidates: []};
  const matches = ambiguousAliases.get(query) ?? library.exercises
    .filter(record => [record.name, ...record.aliases].some(alias => normalize(alias) === query)).map(record => record.id);
  return matches.length === 1 ? {status: 'resolved', id: matches[0], via: 'alias'}
    : {status: matches.length ? 'ambiguous' : 'unmatched', candidates: [...matches]};
}

export function validateLibrary() {
  const errors = [], ids = new Set();
  for (const record of library.exercises) {
    if (ids.has(record.id)) errors.push(`Duplicate exercise: ${record.id}`);
    ids.add(record.id);
    if (record.availability.legacyBrowse && (!record.instructions?.setup.length || !record.instructions?.steps.length)) errors.push(`Missing instructions: ${record.id}`);
    if (record.requirements) validateRequirement(record.requirements.expression);
  }
  const pairs = new Set();
  for (const pair of library.maintainedComparisons) {
    if (pairs.has(pair.id)) errors.push(`Duplicate maintained direction: ${pair.id}`);
    pairs.add(pair.id);
    if (!ids.has(pair.baselineId) || !ids.has(pair.candidateId)) errors.push(`Dangling comparison: ${pair.id}`);
    if (!pair.text.keeps || !pair.text.changes) errors.push(`Missing comparison text: ${pair.id}`);
  }
  for (const [baselineId, candidates] of Object.entries(library.legacyExplanationPairs)) {
    for (const candidateId of candidates) if (!getMaintainedComparison(baselineId, candidateId)) errors.push(`Dangling legacy explanation: ${baselineId}/${candidateId}`);
  }
  for (const [alias, candidates] of ambiguousAliases) if (candidates.some(id => !ids.has(id))) errors.push(`Dangling alias: ${alias}`);
  if (errors.length) throw new Error(errors.join('\n'));
  return {exerciseIdentities: ids.size, browseCards: cards.length, maintainedDirections: comparisons.length,
    retainedLegacyDirections: library.maintainedComparisons.filter(pair => pair.provenance.kind === 'legacy-pair').length,
    originalOnly: library.exercises.filter(record => !record.instructions).map(record => record.id), familyRules: library.familyRules.length};
}
