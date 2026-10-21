import {b4Content,applyB4Aliases} from './b4-content.mjs?v=2.8.0';
import {b4Comparisons} from './b4-comparisons.mjs?v=2.8.0';
import {b3Content} from './b3-content.mjs?v=2.8.0';
import {b3Comparisons} from './b3-comparisons.mjs?v=2.8.0';
import {b2Content} from './b2-content.mjs?v=2.8.0';
import {b2Comparisons,applyB2Similarity} from './b2-comparisons.mjs?v=2.8.0';
import {b1Content} from './b1-content.mjs?v=2.8.0';
import {b1Comparisons} from './b1-comparisons.mjs?v=2.8.0';
import {a4Content} from './a4-content.mjs?v=2.8.0';
import {a4Comparisons} from './a4-comparisons.mjs?v=2.8.0';
import {a3Content} from './a3-content.mjs?v=2.8.0';
import {a3Comparisons} from './a3-comparisons.mjs?v=2.8.0';
import {a2Content} from './a2-content.mjs?v=2.8.0';
import {a2Comparisons} from './a2-comparisons.mjs?v=2.8.0';
import {day1Content, day1Comparisons} from './day1-content.mjs?v=2.8.0';
import {a1Content} from './a1-content.mjs?v=2.8.0';
import {a1MoreRows} from './a1-more-rows.mjs?v=2.8.0';
import {a1Pulls} from './a1-pulls.mjs?v=2.8.0';
import {a1AllComparisons} from './a1-comparisons.mjs?v=2.8.0';
// One identity/instruction record per exercise; comparisons are directed edges.
// Comparisons below are explicit directed relationships, never inferred from tags.
const review = {batch: 'content-expansion-2026-10-08', basis: 'Michael approved the scope and coaching distinctions; Codex drafted and source-checked the implementation wording.'};
const baseContent = [
  {
    id: 'goblet_squat', name: 'Goblet squat',
    focus: 'A loaded standing squat for your legs and hips.',
    expect: 'Hold one weight at your chest. Balance and trunk control matter.',
    needs: 'One dumbbell OR kettlebell · standing space',
    requires: [['goblet_dumbbell', 'goblet_kettlebell'], 'standing_space'],
    aliases: ['goblet squat', 'goblet', 'loaded goblet squat'],
    cue: 'Keep the weight close; lower with control.',
    setup: 'Stand with your feet in a position that lets you squat while staying balanced. Hold one dumbbell or kettlebell securely at your chest with both hands.',
    cues: ['Bend at the hips and knees, keeping the weight close and your feet planted.', 'Lower only through a range where you can control your balance, pelvis, and back.', 'Push through your feet to return to standing while keeping the weight steady.'],
    context: 'Establish a controlled bodyweight squat before adding a goblet load. Adding weight increases the demand compared with the same unweighted movement; your trunk and upper back help maintain your position. The app cannot assess squat control.',
    references: [{label: 'NASM: Goblet squat', url: 'https://www.nasm.org/resource-center/exercise-library/goblet-squat', scope: 'Exercise identification and basic setup; no universal suitability, injury-prevention, or muscle-activation ranking is adopted.'}],
  },
  {
    id: 'dumbbell_rdl', name: 'Dumbbell Romanian deadlift',
    focus: 'A loaded hip hinge for the hamstrings and glutes.',
    expect: 'Two separate weights allow more freedom in hand position than a bar.',
    needs: 'Two suitable dumbbells · standing space', requires: ['dumbbells', 'standing_space'],
    aliases: ['db rdl', 'dumbbell rdl', 'dumbbell romanian deadlift', 'two dumbbell rdl'],
    cue: 'Hips back, weights close; no need to reach the floor.',
    setup: 'Use two dumbbells you can handle for this hinge, with clear space to pick them up and set them down. Start standing with feet about hip-width apart and one weight in each hand.',
    cues: ['Keep a slight knee bend and your torso steady as your hips move backward.', 'Let the weights travel close to your legs; stop the descent before you lose control of your position.', 'Bring the hips forward to stand, without leaning backward.'],
    context: 'This is the two-weight, two-foot version. Independent weights allow hand-position flexibility. Lighter dumbbells can offer less added weight than a full-size barbell, but a lighter weight does not establish hinge technique. One-sided loading is a different variation.',
    references: [{label: 'NASM: Dumbbell Romanian deadlift', url: 'https://www.nasm.org/resource-center/exercise-library/dumbbell-romanian-deadlift', scope: 'Exercise identity and hip-hinge mechanics; no reduced-joint-stress or injury-prevention claim is adopted.'}],
  },
  {
    id: 'floor_bridge', name: 'Bodyweight glute bridge',
    focus: 'Hip extension with your upper back on the floor.',
    expect: 'Lift your hips using bodyweight resistance and floor support.',
    needs: 'Clear floor space to lie down, plant feet, and lift hips', requires: ['bridge_space'],
    aliases: ['glute bridge', 'bodyweight glute bridge', 'floor bridge', 'hip bridge'],
    cue: 'Lift your pelvis without arching for extra height.',
    setup: 'Lie on your back with knees bent and feet planted on a stable floor surface. Keep the upper back supported; a mat is optional padding.',
    cues: ['Press through your feet and lift the pelvis with control.', 'Stop the lift before gaining height by excessively arching the lower back.', 'Lower your hips smoothly to the floor.'],
    context: 'This entry uses bodyweight and keeps the upper back on the floor. It is a different setup from a shoulders-elevated hip thrust; adding a bench or external load would be a separate variation.',
    references: [{label: 'ACE: Glute bridge', url: 'https://www.acefitness.org/resources/everyone/exercise-library/49/glute-bridge/', scope: 'Floor setup and controlled hip extension.'}],
  },
  {
    id: 'standing_hip_hinge', name: 'Standing hip-hinge practice',
    focus: 'Practice moving at the hips without added weight.',
    expect: 'Move your hips back as your torso tips forward.',
    needs: 'Clear standing space', requires: ['standing_space'],
    aliases: ['hip hinge practice', 'standing hip hinge', 'unloaded hinge', 'hip hinge drill'],
    cue: 'Slight knee bend; move from the hips.',
    setup: 'Stand with feet planted and space around you. Begin with a slight knee bend and no added weight.',
    cues: ['Move your hips backward while the torso tips forward as a unit.', 'Use only a range where you can keep the movement controlled.', 'Bring your hips forward to return to standing.'],
    context: 'The purpose here is movement practice. It does not replace the loading of an RDL or certify readiness to lift.',
    references: [{label: 'ACE: Romanian deadlift teaching discussion', url: 'https://www.acefitness.org/continuing-education/certified/may-2025/8865/the-ace-do-it-better-series-the-romanian-deadlift/', scope: 'Unloaded standing hinge description only; no clinical claims or readiness thresholds are adopted.'}],
  },
  {
    id: 'bird_dog', name: 'Bird dog',
    focus: 'Practice trunk control while opposite limbs reach.',
    expect: 'From hands and knees, reach one arm and the opposite leg.',
    needs: 'Suitable floor surface · clear arm and leg reaching space', requires: ['reaching_space'],
    aliases: ['bird dog', 'birddog', 'quadruped bird dog', 'opposite arm leg reach'],
    cue: 'Keep the pelvis steady; reach only as far as you can control.',
    setup: 'Start on hands and knees, with hands under shoulders and knees under hips. Leave room ahead and behind for your limbs; a mat is optional padding.',
    cues: ['Reach one arm and the opposite leg without twisting the pelvis or increasing your back arch.', 'Use a shorter reach if needed to keep your position steady.', 'Return with control, then explore the other side.'],
    context: 'This is quadruped trunk-control practice, not a standing single-leg hinge or a substitute for every exercise involving the core.',
    references: [{label: 'ACE: Bird dog', url: 'https://www.acefitness.org/resources/everyone/exercise-library/14/bird-dog/', scope: 'Quadruped setup, opposite-limb reach, and controlled trunk position.'}],
  },
  {
    id: 'wall_calf_stretch', name: 'Wall-supported calf stretch',
    focus: 'Explore a calf stretch with the rear knee straight.',
    expect: 'A held position with your hands supported on a wall.',
    needs: 'Fixed wall · clear standing space', requires: ['fixed_wall', 'standing_space'],
    aliases: ['calf stretch', 'wall calf stretch', 'standing calf stretch', 'straight knee calf stretch'],
    cue: 'Rear heel down and knee straight; avoid forcing the stretch.',
    setup: 'Face a fixed wall and rest your hands against it. Step one foot back with enough space to keep that heel on the floor.',
    cues: ['Keep the rear knee straight and the heel down.', 'Bend the front knee and gently shift toward the wall.', 'Hold without bouncing or forcing the position; release smoothly and change sides.'],
    context: 'This is flexibility practice. The bent-knee version has a different setup and is not included in this entry. It is not a calf-raise replacement or a treatment for ankle symptoms.',
    references: [{label: 'NHS: Flexibility exercises — calf stretch', url: 'https://www.nhs.uk/live-well/exercise/flexibility-exercises/', scope: 'Wall-supported, rear-knee-straight calf stretch; no schedule or treatment claim is adopted.'}],
  },
].map(record => ({...record, review, sourceChecked: '2026-10-08'}));

export const content = [...baseContent, ...day1Content.map(applyB4Aliases), ...a1Content, ...a1MoreRows, ...a1Pulls, ...a2Content, ...a3Content, ...a4Content, ...b1Content, ...b2Content, ...b3Content, ...b4Content];
const baseComparisons = [
  {originalId: 'leg_press', originalName: 'Leg press', cardId: 'goblet_squat', source: 'squats',
    keeps: 'Hip-and-knee movement for your legs.', changes: 'Standing balance and trunk control replace machine support.', load: 'Not automatically easier. Leg-press weights do not convert directly.',
    why: 'Keeps a hip-and-knee movement involving the quadriceps and glutes.',
    detail: 'A leg press supports the torso. The goblet squat requires standing balance while holding the load; this may limit you before your legs do. Depending on the machine and its minimum resistance, a leg press can offer less resistance than a standing bodyweight squat. This is not true of every machine.',
    basis: 'Michael’s approved squat comparison and knowledge_base/02_squats.md'},
  {originalId: 'barbell_rdl', originalName: 'Barbell Romanian deadlift', cardId: 'dumbbell_rdl', source: 'hinges_and_hip_extension',
    keeps: 'A loaded hip hinge for hamstrings and glutes.', changes: 'Independent hand positions instead of a fixed bar.', load: 'Dumbbell availability may limit a heavy loading goal.',
    why: 'Retains the loaded hip hinge, with the hamstrings and glutes contributing while the torso stays steady.',
    detail: 'Separate weights change handling and loading choices. Light dumbbells may allow less added weight than a full-size barbell; the heaviest available pair may still be insufficient for a heavy barbell goal.',
    basis: 'Michael’s approved RDL comparison and knowledge_base/03_hinges.md'},
  {originalId: 'hip_thrust_machine', originalName: 'Hip-thrust machine', cardId: 'floor_bridge', source: 'hinges_and_hip_extension', limited: true,
    keeps: 'Hip extension with the upper back supported.', changes: 'Floor support generally reduces range versus a shoulders-elevated setup.', load: 'Does not preserve a heavy loading goal.',
    why: 'Offers bodyweight hip extension with floor support as a limited alternative.',
    detail: 'A floor start generally allows less hip movement than a comparable shoulders-elevated setup. Bodyweight may provide much less resistance than a loaded hip-thrust machine. The actual machine design and load matter; this is not an equivalent heavy-strength substitute.',
    basis: 'Michael’s approved bridge comparison and knowledge_base/03_hinges.md'},
];
export const comparisons = [...baseComparisons.map(applyB2Similarity), ...day1Comparisons, ...a1AllComparisons, ...a2Comparisons, ...a3Comparisons, ...a4Comparisons, ...b1Comparisons, ...b2Comparisons, ...b3Comparisons, ...b4Comparisons];
// The former "another station" identity is the same front-pulldown exercise,
// not a second active instruction or a self-comparison.
export const canonicalContentId = id => id === 'other_pulldown' ? 'lat_pulldown' : id;
export const contentById = id => content.find(record => record.id === canonicalContentId(id));
export const comparisonOriginalId = id => id === 'other_chest_press' ? 'chest_press_machine' : id;
export const originalInstructionId = id => id === 'chest_press_machine' ? 'other_chest_press' : id;
export const comparisonFor = (id, originalId) => comparisons.find(record => record.cardId === id && record.originalId === comparisonOriginalId(originalId));
