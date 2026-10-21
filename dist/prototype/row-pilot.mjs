import {getExercise, getMaintainedComparison, resolveExercise} from './library.mjs?v=1';
import {contentById} from './content.mjs?v=2.8.0';
import {validateLibraryRequest, validateVisitContext, validateRequirement, freezeData} from './library-contract.mjs?v=1';
import {evaluateRequirements} from './requirements.mjs?v=1';
import {profileClaimIds, sourcesForClaims} from '../../pilot/evidence.mjs';

export const ROW_PILOT_REVISION = 'rows-local-1';
export const ROW_IDS = Object.freeze(['two_db_bent_over_row', 'incline_db_row', 'bench_single_arm_db_row', 'seated_cable_row', 'seated_band_row', 'chest_supported_row_machine']);
export const NEGATIVE_ROW_ID = 'straight_arm_cable_pulldown';
const item = (role, type, count, capabilities = []) => ({kind: 'item', role, type, count, capabilities});
const space = fact => ({kind: 'context', fact});
const handling = (exerciseId, itemRole) => ({kind: 'handling', exerciseId, itemRole, checkId: 'controlled_row_setup'});
const all = clauses => ({kind: 'all', clauses});
const sharedSpace = [space('firm_ground'), space('row_clearance')];
const attributes = {
  two_db_bent_over_row: {arms: 'bilateral', support: 'held_hinge', resistance: 'gravity', handles: 'independent', position: 'standing',
    requires: all([item('weights', 'dumbbell', 2), handling('two_db_bent_over_row', 'weights'), ...sharedSpace])},
  incline_db_row: {arms: 'bilateral', support: 'chest', resistance: 'gravity', handles: 'independent', position: 'incline_bench',
    requires: all([item('weights', 'dumbbell', 2), item('bench', 'bench', 1, ['stable', 'incline_30_45']), handling('incline_db_row', 'weights'), ...sharedSpace])},
  bench_single_arm_db_row: {arms: 'unilateral', support: 'hand_knee', resistance: 'gravity', handles: 'independent', position: 'bench_supported',
    requires: all([item('weights', 'dumbbell', 1), item('bench', 'bench', 1, ['stable', 'flat']), handling('bench_single_arm_db_row', 'weights'), ...sharedSpace])},
  seated_cable_row: {arms: 'bilateral', support: 'seated_unpadded', resistance: 'cable', handles: 'shared', position: 'seated',
    requires: all([item('station', 'cable_row_station', 1, ['seat_foot_braces_close_handle']), handling('seated_cable_row', 'station'), space('row_clearance')])},
  seated_band_row: {arms: 'bilateral', support: 'seated_unpadded', resistance: 'band', handles: null, position: 'seated',
    requires: all([item('band', 'band', 1), item('anchor', 'band_anchor', 1, ['secured_for_row']), handling('seated_band_row', 'band'), ...sharedSpace])},
  chest_supported_row_machine: {arms: 'bilateral', support: 'chest', resistance: 'machine', handles: 'guided', position: 'seated',
    requires: all([item('station', 'chest_row_machine', 1, ['chest_pad', 'two_arm_handles']), handling('chest_supported_row_machine', 'station'), space('row_clearance')])},
};

// Only this bounded extraction is structured. Existing instructions are read
// through, and the legacy workout catalogue remains an unchanged projection.
export const rowProfiles = freezeData(Object.fromEntries(ROW_IDS.map(id => {
  const maintained = getExercise(id), record = contentById(id);
  return [id, {...structuredClone(maintained), task: 'horizontal_row', purposeIds: ['rowing'],
    ...attributes[id], requires: validateRequirement(attributes[id].requires),
    family: 'row', variant: {workingLimbs: attributes[id].arms, position: attributes[id].position, support: attributes[id].support, resistance: attributes[id].resistance},
    armPath: record?.armPath ?? null, resistanceDirection: record?.resistanceDirection ?? null,
    unknowns: id === 'seated_band_row' ? ['exact_elbow_path', 'handle_arrangement', 'anchor_position', 'exact_resistance_curve']
      : id === 'chest_supported_row_machine' ? ['exact_handle_path', 'exact_resistance_curve', 'independent_arm_mechanism'] : ['load_equivalence'],
    sourceRefs: sourcesForClaims(profileClaimIds(id)), evidenceClaimIds: profileClaimIds(id),
    sourcedFields: {identity: `profile:${id}:identity`, arms: `profile:${id}:identity`, support: `profile:${id}:identity`,
      resistance: 'principle:resistance', requirements: `profile:${id}:${profileClaimIds(id).includes(`profile:${id}:requirements`) ? 'requirements' : profileClaimIds(id).includes(`profile:${id}:setup`) ? 'setup' : 'identity'}`},
    availability: {...maintained.availability, structuredDiscovery: true, familyRuleComparison: true},
    pilotRevision: ROW_PILOT_REVISION}];
})));

export const rowRules = freezeData([
  {id: 'row_task', evaluatorId: 'horizontal_row_v1', requiredProfileFields: ['task', 'arms', 'support', 'resistance'],
    conditions: ['Both exact row variants are documented.'], exceptions: ['A shared muscle tag does not preserve the requested task.'],
    claim: 'Rowing with elbow bending is the shared task.', sourceRefs: ['approved_row_task'], prohibitedConclusions: ['muscle_overlap_equivalence']},
  {id: 'row_support', evaluatorId: 'row_support_v1', requiredProfileFields: ['support'],
    conditions: ['Support arrangement is explicitly documented.'], exceptions: ['Machine or seated labels do not establish chest support.'],
    claim: 'Chest support changes the held-torso task; it does not remove all trunk control.', sourceRefs: ['approved_row_support'], prohibitedConclusions: ['zero_trunk_control', 'safety', 'treatment']},
  {id: 'row_arms', evaluatorId: 'row_arms_v1', requiredProfileFields: ['arms'],
    conditions: ['One-arm or two-arm performance is documented.'], exceptions: ['Independent handles do not establish unilateral performance.'],
    claim: 'Changing arm use changes the separate-arm task; prescriptions stay as supplied.', sourceRefs: ['approved_row_arms'], prohibitedConclusions: ['repetition_conversion']},
  {id: 'row_resistance', evaluatorId: 'row_resistance_v1', requiredProfileFields: ['resistance'],
    conditions: ['The resistance mechanism is documented.'], exceptions: ['Exact curves, machine design and loading remain unspecified.'],
    claim: 'Gravity, pulley, band and machine resistance differ in handling; weights do not convert directly.', sourceRefs: ['approved_row_resistance'], prohibitedConclusions: ['load_conversion', 'exact_force_curve', 'activation_ranking']},
  {id: 'row_handles', evaluatorId: 'row_handles_v1', requiredProfileFields: ['handles'],
    conditions: ['Both handle arrangements are known.'], exceptions: ['Band handle arrangement is unknown; machine guidance does not establish an exact path.'],
    claim: 'Guided or shared handles change the freedom to steer separate weights.', sourceRefs: ['approved_row_handles'], prohibitedConclusions: ['invented_path']},
].map(rule => ({...rule, sourceRefs: sourcesForClaims([`principle:${rule.id.slice(4)}`]), evidenceClaimIds: [`principle:${rule.id.slice(4)}`], revision: ROW_PILOT_REVISION, status: 'local-pilot', coachingReview: {kind: 'principle', reference: 'approved local six-row trial; correction/pilot approval in this conversation'}, outputReview: 'not-applicable'})));

const support = {held_hinge: 'an unsupported held hinge', chest: 'chest support', hand_knee: 'hand-and-knee bench support', seated_unpadded: 'seated trunk control without a chest pad'};
const resistance = {gravity: 'gravity-loaded dumbbells', cable: 'cable resistance toward its pulley', band: 'stretching-band resistance', machine: 'machine resistance through its handles'};
const handles = {independent: 'independently controlled dumbbells', shared: 'a shared handle', guided: 'guided machine handles'};
export const emptyPilotVisit = () => ({version: 1, revision: 0, items: [], spaceFacts: {}, handlingChecks: []});

export function compareRows(baselineId, candidateId, {mustPreserve = []} = {}) {
  const a = rowProfiles[baselineId], b = rowProfiles[candidateId];
  if (!a || (!b && candidateId !== NEGATIVE_ROW_ID) || baselineId === candidateId) throw new TypeError('Unsupported row comparison');
  if (candidateId === NEGATIVE_ROW_ID) return freezeData({similarity: 'poor', basis: {kind: 'family-rule', ids: ['row_task']}, keeps: 'The requested bent-elbow rowing task is not retained.', changes: 'A straight-arm pulldown keeps the elbows nearly fixed.', check: 'Shared muscles do not establish a suitable substitute.', claimIds: ['principle:task', 'profile:straight_arm_cable_pulldown:task'], differences: ['task']});
  const missing = ['task', 'arms', 'support', 'resistance'].filter(field => !a[field] || !b[field]);
  if (missing.length) return freezeData({similarity: null, basis: {kind: 'none', ids: []}, keeps: '', changes: '', check: 'Essential profile facts are missing.', claimIds: [], differences: missing});
  const differences = ['arms', 'support', 'resistance', 'position', 'handles'].filter(field => a[field] !== b[field] && (field !== 'handles' || a.handles && b.handles));
  const poor = mustPreserve.includes('arm_pattern') && a.arms !== b.arms
    || mustPreserve.includes('chest_support') && b.support !== 'chest'
    || mustPreserve.includes('independent_handles') && b.handles !== 'independent';
  const maintained = getMaintainedComparison(baselineId, candidateId);
  const similarity = poor ? 'poor' : maintained?.similarity ?? (differences.includes('arms') && differences.includes('support') && differences.includes('resistance') ? 'broader' : differences.length ? 'some' : 'close');
  const changes = [];
  if (differences.includes('support')) changes.push(`Changes from ${support[a.support]} to ${support[b.support]}.`);
  if (differences.includes('arms')) changes.push(`Changes from ${a.arms === 'bilateral' ? 'both arms together' : 'one arm at a time'} to ${b.arms === 'bilateral' ? 'both arms together' : 'one arm at a time'}.`);
  if (differences.includes('resistance')) changes.push(`Changes from ${resistance[a.resistance]} to ${resistance[b.resistance]}.`);
  if (differences.includes('handles')) changes.push(`Changes from ${handles[a.handles]} to ${handles[b.handles]}.`);
  const ruleIds = ['row_task', ...differences.filter(field => ['arms', 'support', 'resistance', 'handles'].includes(field)).map(field => `row_${field}`)];
  const claimIds = [...profileClaimIds(a.id), ...profileClaimIds(b.id), ...ruleIds.map(id => `principle:${id.slice(4)}`), ...(maintained ? [`pair:${a.id}:${b.id}`] : [])];
  const checks = [poor ? 'This setup does not preserve an explicit comparison constraint.' : '', maintained?.text.check,
    b.support === 'chest' ? 'Chest support does not remove all trunk control.' : '',
    b.resistance === 'band' ? 'Use a secure rowing anchor; band tension may limit the available loading. Exact anchor position and handle arrangement remain unspecified.' : '',
    b.resistance === 'machine' ? 'Handle path and starting reach depend on the machine.' : '',
    differences.includes('arms') ? 'No automatic per-side repetition conversion.' : '', 'Choose the load separately; no direct weight conversion.'].filter(Boolean);
  return freezeData({similarity, differences, basis: maintained && !poor ? {kind: 'maintained-pair', ids: [maintained.id]} : {kind: 'family-rule', ids: ruleIds},
    keeps: maintained && !poor ? maintained.text.keeps : a.arms === b.arms ? `${b.arms === 'bilateral' ? 'Two-arm' : 'Single-arm'} rowing with elbow bending.` : 'Rowing with elbow bending.',
    changes: maintained && !poor ? maintained.text.changes : changes.join(' ') || 'The documented principal task and support are retained.', check: checks.join(' '), claimIds});
}

function relevance(profile, request) {
  if (request.intent.purposeIds.some(id => !profile.purposeIds.includes(id)) || request.intent.movementIds.some(id => id !== profile.task)
    || request.intent.muscleIds.some(id => !['back', 'rear_shoulders'].includes(id))) return null;
  if (request.constraints.positionIds.length && !request.constraints.positionIds.includes(profile.position)) return null;
  if (request.constraints.mustPreserve.includes('chest_support') && profile.support !== 'chest'
    || request.constraints.mustPreserve.includes('independent_handles') && profile.handles !== 'independent') return null;
  if (request.query.trim() && !/row|back|pull|torso|support|arm|workout|kettlebell|dumbbell|machine|bench|band|cable|resistance|range|bottom/i.test(request.query)) return null;
  return 'direct';
}

export function decideRows(rawRequest, rawContext) {
  const request = validateLibraryRequest(rawRequest), context = validateVisitContext(rawContext);
  if (request.contextRevision !== context.revision) throw new TypeError('Stale visit context');
  if (request.constraints.mustPreserve.some(id => !['arm_pattern', 'chest_support', 'independent_handles', 'horizontal_row'].includes(id))) return freezeData({status: 'unsupported', message: 'That constraint is outside this row pilot.', decisions: []});
  if (/\b(pain|injury|rehab|diagnos\w*|treatment|symptoms?)\b|how many (sets|reps)|prescribe|convert.*\b(kg|lbs?|weight)\b/i.test(request.query)) return freezeData({status: 'limited', message: 'This pilot compares documented setups. It cannot prescribe treatment, programming or converted loads.', decisions: []});
  if (request.baselineId && !rowProfiles[request.baselineId]) return freezeData({status: 'unsupported', message: 'Choose one of the six documented rowing setups.', decisions: []});
  if (!request.baselineId && request.constraints.mustPreserve.includes('arm_pattern')) return freezeData({status: 'unsupported', message: 'Choose a baseline before asking to preserve its arm-use pattern.', decisions: []});
  if (request.baselineId && request.baselineId === request.candidateId) return freezeData({status: 'no-match', message: 'Choose a different exercise to compare; you can keep the original.', decisions: []});
  const ids = request.candidateId ? [request.candidateId] : ROW_IDS.filter(id => id !== request.baselineId);
  const decisions = ids.map(id => {
    const profile = rowProfiles[id];
    if (!profile) {
      const negative = id === NEGATIVE_ROW_ID && request.baselineId ? compareRows(request.baselineId, id) : null;
      return {exerciseId: id, baselineId: request.baselineId, eligibility: negative ? 'excluded' : 'unsupported', relevance: null, similarity: negative?.similarity ?? null,
        setup: {status: 'unsupported', unresolvedFacts: [], conflictingFacts: ['outside_pilot'], branchIds: [], instructionRefs: [], itemBindings: []},
        comparison: negative, basis: negative?.basis ?? {kind: 'none', ids: []}, essentialClaimIds: negative?.claimIds ?? [], reasonIds: ['outside_pilot'], contextRevision: context.revision};
    }
    const comparison = request.baselineId && request.baselineId !== id ? compareRows(request.baselineId, id, request.constraints) : null;
    const relevant = relevance(profile, request), setup = evaluateRequirements(profile.requires, context, request.constraints);
    const reasonIds = [...setup.conflictingFacts, ...setup.unresolvedFacts];
    const excluded = !relevant || comparison?.similarity === 'poor';
    if (!relevant) reasonIds.push('intent_or_position_mismatch');
    if (comparison?.similarity === 'poor') reasonIds.push('must_preserve_conflict');
    return {exerciseId: id, baselineId: request.baselineId, eligibility: excluded || setup.status === 'conflict' ? 'excluded' : setup.status === 'unsupported' || comparison?.similarity === null ? 'unsupported' : setup.status === 'confirmed' ? 'eligible' : 'conditional',
      relevance: relevant, similarity: comparison?.similarity ?? null, setup: {...setup, instructionRefs: setup.instructionRefs.length ? setup.instructionRefs : [id]},
      basis: comparison?.basis ?? {kind: 'profile', ids: [id]}, comparison,
      essentialClaimIds: comparison?.claimIds ?? profile.evidenceClaimIds, reasonIds, contextRevision: context.revision};
  });
  const order = {eligible: 0, conditional: 1, excluded: 2, unsupported: 3}, tier = {close: 0, some: 1, broader: 2, poor: 3};
  decisions.sort((a, b) => order[a.eligibility] - order[b.eligibility] || (tier[a.similarity] ?? 0) - (tier[b.similarity] ?? 0) || ROW_IDS.indexOf(a.exerciseId) - ROW_IDS.indexOf(b.exerciseId));
  const matches = decisions.filter(d => ['eligible', 'conditional'].includes(d.eligibility));
  const scopeMessage = /range|bottom|force curve|more resistance/i.test(request.query) ? 'Exact comparative range and resistance at a particular point are not established. The documented support and handle differences remain available.' : '';
  return freezeData({status: matches.length ? 'results' : 'no-match', message: matches.length ? scopeMessage : 'No documented pilot setup fits these facts and constraints. Edit them or keep the original.', decisions});
}

export function resolveRow(input) {
  const query = String(input).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const ambiguous = {'chest supported row': ['incline_db_row', 'chest_supported_row_machine'], 'seated row': ['seated_cable_row', 'seated_band_row', 'chest_supported_row_machine'], 'dumbbell row': ['two_db_bent_over_row', 'incline_db_row', 'bench_single_arm_db_row']};
  if (ambiguous[query]) return {status: 'ambiguous', candidates: ambiguous[query]};
  const result = resolveExercise(input);
  return result.status === 'resolved' && !rowProfiles[result.id] ? {status: 'unmatched', candidates: []} : result;
}
