import {cards, cardsFor, cardById, copies, exercises} from './scenario.mjs?v=2.8.0';
import {content} from './content.mjs?v=2.8.0';

// Display summaries share content identities; categories never create swap edges.
export const discoveryCopy = {
  incline_db_row: {focus:'Rowing for your back and rear shoulders.', expect:'Chest supported on an inclined backrest.', needs:'Dumbbells · bench at about 45°'},
  seated_band_row: {focus:'A seated rowing movement.', expect:'Band resistance changes as it stretches.', needs:'Band · secure rowing anchor · sitting space'},
  other_row_machine: {focus:'Rowing for your back and rear shoulders.', expect:'Adjust the seat, handles, and any chest support.', needs:'Seated rowing machine'},
  db_bench_press: {focus:'Pressing for chest, front shoulders, and triceps.', expect:'Each arm controls its own weight and path.', needs:'Dumbbells · flat bench'},
  db_floor_press: {focus:'A chest press from the floor.', expect:'Floor limits upper-arm descent.', needs:'Dumbbells · clear lying and arm space'},
  other_chest_press: {focus:'A supported machine chest press.', expect:'Check the seat, handles, and resistance adjustments.', needs:'Chest-press machine'},
  ...Object.fromEntries(content.map(({id,focus,expect,needs})=>[id,{focus,expect,needs}])),
};
export const exerciseName = id => id === 'other_chest_press' ? 'Machine chest press' : copies[id]?.name ?? '';
const rows = [...new Set(['incline_db_row','seated_band_row','other_row_machine',...content.filter(c=>c.family==='row').map(c=>c.id)])];
const verticalPulls = content.filter(c=>c.family==='vertical_pull').map(c=>c.id);
const shoulderPulls = content.filter(c=>c.family==='shoulder_pull').map(c=>c.id);
const presses = ['db_bench_press','db_floor_press','other_chest_press',...content.filter(c=>c.family==='horizontal_press').map(c=>c.id)];
const chestExercises=[...presses,...content.filter(c=>c.family==='chest_fly').map(c=>c.id)];
export const categories = [
  {id:'horizontal_pull', label:'Horizontal rowing', group:'Movement', short:'Pull', ids:rows, aliases:['row','rows','horizontal pull','rowing']},
  {id:'vertical_pull', label:'Vertical pulling', group:'Movement', ids:verticalPulls, aliases:['vertical pull','overhead pulling']},
  {id:'straight_arm_pull', label:'Straight-arm pulling', group:'Movement', ids:shoulderPulls, aliases:['straight arm pull']},
  {id:'horizontal_push', label:'Horizontal pressing', group:'Movement', short:'Push', ids:presses, aliases:['push','press','horizontal push','pressing']},
  {id:'back', label:'Back', group:'Muscle group', ids:[...rows,...verticalPulls,...shoulderPulls], aliases:['back','back muscles']},
  {id:'chest', label:'Chest', group:'Muscle group', ids:chestExercises, aliases:['chest','pecs','pectoral','chest muscles']},
  {id:'squat', label:'Squat & split squat', group:'Movement', ids:['goblet_squat',...content.filter(c=>['squat','split_squat'].includes(c.family)).map(c=>c.id)], aliases:['squat','squats','split squat']},
  {id:'hinge', label:'Hip hinge', group:'Movement', ids:['dumbbell_rdl','standing_hip_hinge',...content.filter(c=>c.family==='hinge').map(c=>c.id)], aliases:['hinge','hip hinge']},
  {id:'hip_extension', label:'Hip extension', group:'Movement', ids:['floor_bridge',...content.filter(c=>c.family==='hip_extension').map(c=>c.id)], aliases:['hip extension']},
  {id:'core_control', label:'Core control', group:'Movement', ids:['bird_dog'], aliases:['core control','trunk control']},
  {id:'movement_practice', label:'Movement practice', group:'Movement', ids:['standing_hip_hinge','bird_dog','wall_calf_stretch','tippy_bird'], aliases:['movement practice','mobility','flexibility','stability','balance','coordination','general practice']},
  {id:'legs_hips', label:'Legs & hips', group:'Muscle group', ids:['goblet_squat','dumbbell_rdl','floor_bridge',...content.filter(c=>['squat','split_squat','hinge','hip_extension'].includes(c.family)).map(c=>c.id)], aliases:['legs','hips','legs and hips','quads','hamstrings','glutes']},
  {id:'calves', label:'Calves', group:'Muscle group', ids:['wall_calf_stretch'], aliases:['calves','calf']},
];
export const categoryById = id => categories.find(item=>item.id === id);
export function discoveryCards(target) {
  if(target?.kind === 'category') return (categoryById(target.id)?.ids ?? []).map(cardById);
  if(target?.kind === 'card') return cards.filter(card=>card.id === target.id);
  if(target?.kind === 'related') return cardsFor(target.id);
  return [];
}
export const normalize = value => String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const aliases = {
  incline_db_row:['chest supported row','incline dumbbell row','incline db row'],
  seated_band_row:['seated band row','band row','banded row'],
  other_row_machine:['machine row','seated machine row','row machine'],
  db_bench_press:['flat db press','dumbbell bench press','db bench press','flat dumbbell press'],
  db_floor_press:['db floor press','dumbbell floor press'],
  other_chest_press:['chest press','machine press','machine chest press','chest press machine'],
  ...Object.fromEntries(content.map(record=>[record.id,record.aliases])),
};
const originalAliases = {
  seated_cable_row: ['seated row','cable row','seated cable row'],
  chest_press_machine: ['chest press','machine press','machine chest press','chest press machine'],
  leg_press: ['leg press','leg press machine'],
  barbell_rdl: ['barbell rdl','bb rdl','barbell romanian deadlift'],
  hip_thrust_machine: ['hip thrust machine','machine hip thrust'],
};
export const searchEntries = [
  ...exercises.map(item=>({key:`replace:${item.id}`, kind:'replace', id:item.id, label:item.label, group:'Exercise', action:'See swaps', aliases:[...(originalAliases[item.id] ?? []),...(aliases[item.id] ?? []),...(copies[item.id]?.name?[copies[item.id].name]:[])]})),
  ...cards.map(card=>({key:`card:${card.id}`, kind:'card', id:card.id, label:exerciseName(card.id), group:'Exercise', action:'Explore exercise', aliases:[...(aliases[card.id] ?? []),...(originalAliases[card.id] ?? [])]})),
  ...categories.map(item=>({...item,key:`category:${item.id}`,kind:'category',action:'Explore exercises'})),
];
export function searchScope(query) {
  const text=normalize(query);
  if(/\b(pain|painful|ache|aches|aching|hurt|hurts|injury|injured|surgery|surgical|diagnosis|rehab|rehabilitation|torn|pinch|numb|instability|unstable|discomfort|arthritis)\b/.test(text) || /\b(giving way|bad knee|bad back)\b/.test(text)) return 'Exercises aren’t selected from symptoms or medical history here. You can browse the reviewed exercises by name or movement.';
  if(/\b(improve|improving|first|goal|goals|progression|running|runner|run|neuromuscular)\b/.test(text) || /\bmore reps\b/.test(text)) return 'We don’t have a reviewed guide for that goal or practice yet. Browse the current exercises below.';
  return '';
}
export function search(query, intent='browse') {
  const text=normalize(query);
  if(!text || searchScope(query)) return [];
  const words=text.split(' ');
  return searchEntries.filter(entry=>intent==='replace'?entry.kind==='replace':entry.kind!=='replace').filter(entry=>[entry.label,...entry.aliases].some(label=>{
    const terms=normalize(label).split(' ');
    return words.every(word=>terms.some(term=>term.startsWith(word)));
  })).sort((a,b)=>Number(exactMatch(b,text))-Number(exactMatch(a,text))).slice(0,8);
}
export const exactMatch = (entry,text) => [entry.label,...entry.aliases].some(label=>normalize(label)===normalize(text));
export function submittedEntry(query, activeKey = '', intent='browse') {
  const matches=search(query,intent);
  if(activeKey) return matches.find(entry=>entry.key===activeKey) ?? null;
  const exact=matches.filter(entry=>exactMatch(entry,normalize(query)));
  return exact.length === 1 ? exact[0] : null;
}
