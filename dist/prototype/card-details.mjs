import {cardById, exerciseById, copies, loadNote, pressLoadNote, isDumbbellPress} from './scenario.mjs?v=2.8.0';
import {contentById, comparisonFor} from './content.mjs?v=2.8.0';

// Reorganize reviewed wording, without generating additional instruction.
// In the six older cards the first cue describes setup; later cues describe execution.
export function detailSections(id, {mode, originalId} = {}) {
  const card = cardById(id);
  if (!card) return [];
  const record = contentById(id);
  const setup = record ? [record.setup] : [card.setup, card.cues[0]].filter(Boolean);
  const steps = record ? record.cues : card.cues.slice(1);
  const sections = [
    {id: 'setup-detail', title: 'Setup', paragraphs: setup},
    {id: 'instruction-detail', title: 'How to do it', steps, paragraphs: [record?.context,...(record?.executionVariants??[]).map(variant=>`${variant.name}: ${variant.description}`)].filter(Boolean)},
  ];
  const original = exerciseById(originalId);
  if (mode === 'replace' && original?.options.some(option => option.id === id)) {
    const edge = comparisonFor(id, originalId);
    const originalOption=original.options.find(option=>option.id===id);
    const paragraphs = edge ? [edge.why, edge.detail, edge.check ?? edge.load].filter(Boolean) : [originalOption.why, originalOption.changes].filter(Boolean);
    if (id === 'incline_db_row') paragraphs.push(loadNote);
    else if (isDumbbellPress(id) && originalId === 'chest_press_machine') paragraphs.push(pressLoadNote);
    sections.push({id: 'comparison-detail', title: `Compared with ${original.label}`, subject: copies[id].name, paragraphs});
  }
  return sections;
}
