// Shared boundary for the incremental discovery build. No inference or I/O.
export const CONTRACT_VERSION = 1;
export const REQUEST_MODES = Object.freeze(['inspect', 'discover', 'compare', 'substitute']);
export const FACT_STATES = Object.freeze(['yes', 'no', 'unknown']);

const fail = message => { throw new TypeError(`Library contract: ${message}`); };
const record = value => !!value && typeof value === 'object' && !Array.isArray(value)
  && [Object.prototype, null].includes(Object.getPrototypeOf(value));
const identifier = value => typeof value === 'string' && /^[a-z][a-z0-9_:-]{0,159}$/.test(value)
  && !['constructor', 'prototype'].includes(value);
const text = (value, max = 600) => typeof value === 'string' && value.length <= max;
function keys(value, allowed, required = allowed) {
  if (!record(value) || Object.keys(value).some(key => !allowed.includes(key))
    || required.some(key => !Object.hasOwn(value, key))) fail('unexpected or missing fields');
}
function ids(value, max = 100) {
  if (!Array.isArray(value) || value.length > max || Array.from(value).some(x => !identifier(x))
    || new Set(value).size !== value.length) fail('invalid identifier list');
}
function facts(value) {
  if (!record(value) || Object.keys(value).length > 100
    || Object.entries(value).some(([key, state]) => !identifier(key) || !FACT_STATES.includes(state))) fail('invalid reported facts');
}
export function freezeData(value) {
  if (value && typeof value === 'object' && !Object.isFrozen(value)) {
    Object.values(value).forEach(freezeData);
    Object.freeze(value);
  }
  return value;
}
const copy = value => freezeData(structuredClone(value));

// This validates a normalized request, not its factual interpretation or scope.
// IDs still need catalogue resolution. Ordinary query words never grant authority.
export function validateLibraryRequest(value) {
  keys(value, ['version', 'mode', 'query', 'baselineId', 'candidateId', 'intent', 'constraints', 'contextRevision']);
  if (value.version !== CONTRACT_VERSION || !REQUEST_MODES.includes(value.mode)
    || !text(value.query) || !Number.isSafeInteger(value.contextRevision) || value.contextRevision < 0) fail('invalid request');
  for (const key of ['baselineId', 'candidateId']) if (value[key] !== null && !identifier(value[key])) fail('invalid exercise identity');
  const needsBaseline = ['compare', 'substitute'].includes(value.mode);
  const needsCandidate = ['inspect', 'compare'].includes(value.mode);
  if (needsBaseline !== (value.baselineId !== null) || needsCandidate !== (value.candidateId !== null)) fail('identities do not match request mode');
  keys(value.intent, ['purposeIds', 'movementIds', 'muscleIds']);
  Object.values(value.intent).forEach(list => ids(list));
  keys(value.constraints, ['allowedEquipmentTypes', 'positionIds', 'mustPreserve']);
  if (value.constraints.allowedEquipmentTypes !== null) ids(value.constraints.allowedEquipmentTypes);
  ids(value.constraints.positionIds); ids(value.constraints.mustPreserve);
  return copy(value);
}

// A visit contains user reports, never equipment readiness or model judgments.
export function validateVisitContext(value) {
  keys(value, ['version', 'revision', 'items', 'spaceFacts', 'handlingChecks']);
  if (value.version !== CONTRACT_VERSION || !Number.isSafeInteger(value.revision) || value.revision < 0
    || !Array.isArray(value.items) || value.items.length > 120
    || !Array.isArray(value.handlingChecks) || value.handlingChecks.length > 240) fail('invalid visit');
  const itemIds = new Set();
  for (const item of value.items) {
    keys(item, ['id', 'type', 'count', 'reportedWeightKg', 'presence', 'access', 'capabilities']);
    if (!identifier(item.id) || !identifier(item.type) || itemIds.has(item.id)) fail('invalid or duplicate physical item');
    itemIds.add(item.id);
    if (item.count !== null && (!Number.isSafeInteger(item.count) || item.count < 1 || item.count > 100)) fail('invalid item count');
    if (item.reportedWeightKg !== null && (!Number.isFinite(item.reportedWeightKg) || item.reportedWeightKg < 0)) fail('invalid reported weight');
    if (!['present', 'absent', 'unknown'].includes(item.presence) || !['available', 'busy', 'unknown'].includes(item.access)) fail('invalid presence or access');
    if (item.access !== 'unknown' && item.presence !== 'present') fail('access requires reported presence');
    facts(item.capabilities);
  }
  facts(value.spaceFacts);
  const checks = new Set();
  for (const check of value.handlingChecks) {
    keys(check, ['exerciseId', 'itemIds', 'checkId', 'value']);
    ids(check.itemIds);
    if (!identifier(check.exerciseId) || !identifier(check.checkId) || !check.itemIds.length
      || check.itemIds.some(id => !itemIds.has(id)) || !FACT_STATES.includes(check.value)) fail('invalid handling check');
    const key = JSON.stringify([check.exerciseId, [...check.itemIds].sort(), check.checkId]);
    if (checks.has(key)) fail('duplicate handling check');
    checks.add(key);
  }
  return copy(value);
}

// Legacy checks are opaque, composite reports. Do not infer an item count or
// physical capability from their labels. They continue to use state.assess.
export function validateRequirement(value) {
  let nodes = 0;
  function visit(node, depth = 0) {
    if (++nodes > 200 || depth > 10 || !record(node)) fail('invalid requirement tree');
    if (node.kind === 'all') {
      keys(node, ['kind', 'clauses']);
      if (!Array.isArray(node.clauses) || !node.clauses.length) fail('empty requirement group');
      for (const child of node.clauses) visit(child, depth + 1);
    } else if (node.kind === 'any') {
      keys(node, ['kind', 'branches']);
      if (!Array.isArray(node.branches) || !node.branches.length) fail('empty requirement alternatives');
      const branchIds = new Set();
      for (const branch of node.branches) {
        keys(branch, ['id', 'instructionRef', 'requires']);
        if (!identifier(branch.id) || !identifier(branch.instructionRef) || branchIds.has(branch.id)) fail('invalid requirement branch');
        branchIds.add(branch.id); visit(branch.requires, depth + 1);
      }
    } else if (node.kind === 'item') {
      keys(node, ['kind', 'role', 'type', 'count', 'capabilities']);
      if (!identifier(node.role) || !identifier(node.type) || !Number.isSafeInteger(node.count) || node.count < 1 || node.count > 100) fail('invalid item requirement');
      ids(node.capabilities);
    } else if (node.kind === 'context') {
      keys(node, ['kind', 'fact']);
      if (!identifier(node.fact)) fail('invalid context requirement');
    } else if (node.kind === 'handling') {
      keys(node, ['kind', 'exerciseId', 'itemRole', 'checkId']);
      if (![node.exerciseId, node.itemRole, node.checkId].every(identifier)) fail('invalid handling requirement');
    } else if (node.kind === 'legacy') {
      keys(node, ['kind', 'namespace', 'key']);
      if (!['equipment', 'capability'].includes(node.namespace) || typeof node.key !== 'string' || !identifier(node.key.toLowerCase())) fail('invalid legacy requirement');
    } else fail('unknown requirement kind');
  }
  visit(value);
  return copy(value);
}
