import {validateWorkout} from './workout.mjs?v=2.8.0';

export function captureSwap(workout, occurrenceId) {
  const entry = workout.entries.find(entry => entry.id === occurrenceId);
  if (!entry) throw new TypeError('Missing workout occurrence');
  return {workoutId: workout.id, occurrenceId, matchId: entry.matchId, matchSignature: entry.matchSignature, choice: structuredClone(entry.choice)};
}
export function undoSwap(workout, undo) {
  const entry = workout.entries.find(entry => entry.id === undo.occurrenceId);
  if (workout.id !== undo.workoutId || !entry || entry.matchId !== undo.matchId || entry.matchSignature !== undo.matchSignature) return workout;
  // Preserve the previous choice's exact provenance; restoring it never rechecks
  // a stale pilot choice or upgrades an instruction signature.
  return validateWorkout({...workout, entries: workout.entries.map(item => item.id === undo.occurrenceId ? {...item, choice: structuredClone(undo.choice)} : item)});
}
