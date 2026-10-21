import {cardIds} from './scenario.mjs?v=2.8.0';

export const PREFERENCE_KEY = 'gym-swap.exercise-preferences.v1';
export function validatePreferences(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  return Object.fromEntries(cardIds.filter(id => Object.hasOwn(value,id) && ['favorite', 'hidden'].includes(value[id])).map(id => [id, value[id]]));
}
export function preferenceStore(getStorage) {
  return {
    load() {
      try {
        const raw = getStorage().getItem(PREFERENCE_KEY);
        if (raw === null) return {preferences: {}, message: ''};
        const data = JSON.parse(raw);
        if (data?.version !== 1 || !data.values || typeof data.values !== 'object' || Array.isArray(data.values)) throw new Error('invalid_preferences');
        return {preferences: validatePreferences(data.values), message: ''};
      } catch {
        return {preferences: {}, message: 'Saved preferences could not be read. You can still choose a swap.'};
      }
    },
    save(preferences) {
      try {
        getStorage().setItem(PREFERENCE_KEY, JSON.stringify({version: 1, values: validatePreferences(preferences)}));
        return {saved: true, message: ''};
      } catch {
        return {saved: false, message: 'Preference changed for this visit, but could not be saved in this browser.'};
      }
    },
  };
}
