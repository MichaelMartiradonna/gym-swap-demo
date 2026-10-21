import {validateRequirement, validateVisitContext, freezeData} from './library-contract.mjs?v=1';

// A deterministic binder for reported physical units. No loads are prescribed.
// Unknown reports remain conditional; an explicit conflict is never readiness.
export function evaluateRequirements(expression, visit, {allowedEquipmentTypes = null} = {}) {
  const requirement = validateRequirement(expression), context = validateVisitContext(visit);
  if (allowedEquipmentTypes !== null && (!Array.isArray(allowedEquipmentTypes) || Array.from(allowedEquipmentTypes).some(x => typeof x !== 'string'))) throw new TypeError('Invalid equipment boundary');
  const initial = () => ({unresolvedFacts: [], conflictingFacts: [], unsupportedFacts: [], branchIds: [], instructionRefs: [], itemBindings: [], used: {}});
  const status = result => result.unsupportedFacts.length ? 'unsupported' : result.conflictingFacts.length ? 'conflict' : result.unresolvedFacts.length ? 'unknown' : 'confirmed';
  const rank = {confirmed: 0, unknown: 1, conflict: 2, unsupported: 3};
  // Consider whole alternative plans before selecting a branch. An early OR
  // choice must not consume the only unit needed by a later AND requirement.
  function plans(node) {
    if (node.kind === 'any') {
      const list = node.branches.flatMap(branch => plans(branch.requires).map(plan => ({...plan,
        branchIds: [...plan.branchIds, branch.id], instructionRefs: [...plan.instructionRefs, branch.instructionRef]})));
      if (list.length > 64) throw new TypeError('Too many requirement alternatives');
      return list;
    }
    if (node.kind === 'all') {
      let list = [{clauses: [], branchIds: [], instructionRefs: []}];
      for (const child of node.clauses) {
        const next = [];
        for (const left of list) for (const right of plans(child)) {
          next.push({clauses: [...left.clauses, ...right.clauses], branchIds: [...left.branchIds, ...right.branchIds], instructionRefs: [...left.instructionRefs, ...right.instructionRefs]});
          if (next.length > 64) throw new TypeError('Too many requirement alternatives');
        }
        list = next;
      }
      return list;
    }
    return [{clauses: [node], branchIds: [], instructionRefs: []}];
  }
  function run(node, result) {
    if (node.kind === 'item') {
      const key = `item:${node.role}:${node.type}`;
      if (allowedEquipmentTypes !== null && !allowedEquipmentTypes.includes(node.type)) {
        result.conflictingFacts.push(`restricted:${node.type}`); return result;
      }
      const matching = context.items.filter(item => item.type === node.type);
      const usable = matching.filter(item => item.presence !== 'absent' && item.access !== 'busy'
        && node.capabilities.every(cap => item.capabilities[cap] !== 'no'));
      usable.sort((a, b) => uncertainty(a) - uncertainty(b) || a.id.localeCompare(b.id));
      function uncertainty(item) {return Number(item.presence !== 'present') + Number(item.access !== 'available') + Number(item.count === null) + node.capabilities.filter(cap => item.capabilities[cap] !== 'yes').length;}
      let remaining = node.count;
      for (const item of usable) {
        if (!remaining) break;
        const used = result.used[item.id] ?? 0;
        const available = item.count === null ? (used ? 0 : remaining) : Math.max(0, item.count - used);
        const units = Math.min(remaining, available);
        if (!units) continue;
        result.itemBindings.push({role: node.role, itemId: item.id, count: item.count === null ? null : units});
        result.used[item.id] = used + units; remaining -= units;
        if (item.count === null) result.unresolvedFacts.push(`count:${item.id}`);
        if (item.presence !== 'present') result.unresolvedFacts.push(`presence:${item.id}`);
        if (item.access !== 'available') result.unresolvedFacts.push(`access:${item.id}`);
        for (const cap of node.capabilities) if (item.capabilities[cap] !== 'yes') result.unresolvedFacts.push(`capability:${item.id}:${cap}`);
      }
      if (remaining) (matching.length ? result.conflictingFacts : result.unresolvedFacts).push(`${key}:count_${node.count}`);
    } else if (node.kind === 'context') {
      const value = context.spaceFacts[node.fact] ?? 'unknown';
      if (value !== 'yes') (value === 'no' ? result.conflictingFacts : result.unresolvedFacts).push(`space:${node.fact}`);
    } else if (node.kind === 'handling') {
      const bindings = result.itemBindings.filter(binding => binding.role === node.itemRole);
      if (!bindings.length) {
        // A missing/conflicting item cannot receive a positive handling result.
        if (!result.conflictingFacts.length && !result.unresolvedFacts.length) result.unsupportedFacts.push(`unbound_role:${node.itemRole}`);
        return result;
      }
      const itemIds = [...new Set(bindings.map(binding => binding.itemId))].sort();
      const check = context.handlingChecks.find(check => check.exerciseId === node.exerciseId && check.checkId === node.checkId
        && JSON.stringify([...check.itemIds].sort()) === JSON.stringify(itemIds));
      const value = check?.value ?? 'unknown';
      if (value !== 'yes') (value === 'no' ? result.conflictingFacts : result.unresolvedFacts).push(`handling:${node.exerciseId}:${node.itemRole}:${node.checkId}`);
    } else result.unsupportedFacts.push(`legacy:${node.namespace}:${node.key}`);
    return result;
  }
  const candidates = plans(requirement).map(plan => {
    let result = {...initial(), branchIds: plan.branchIds, instructionRefs: plan.instructionRefs};
    // Conjunction does not depend on authoring order; bind before handling.
    const order = {item: 0, context: 1, legacy: 2, handling: 3};
    for (const clause of [...plan.clauses].sort((a, b) => order[a.kind] - order[b.kind])) result = run(clause, result);
    return result;
  });
  candidates.sort((a, b) => rank[status(a)] - rank[status(b)] || a.unresolvedFacts.length - b.unresolvedFacts.length);
  const result = candidates[0];
  const {used, unsupportedFacts, ...setup} = result;
  return freezeData({...setup, status: status(result), unresolvedFacts: [...new Set(result.unresolvedFacts)],
    conflictingFacts: [...new Set([...result.conflictingFacts, ...unsupportedFacts])],
    instructionRefs: [...new Set(result.instructionRefs)]});
}
