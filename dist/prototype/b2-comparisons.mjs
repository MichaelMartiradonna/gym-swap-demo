import {b2Review} from './b2-content.mjs?v=2.8.0';

// Retain the existing H3-a relationship and every word of its approved text.
// This approval adds only its stable label, first similarity tier and tier provenance.
export const applyB2Similarity = edge => edge.originalId==='barbell_rdl'&&edge.cardId==='dumbbell_rdl'
  ? {...edge,reviewLabel:'H3-a',similarity:'close',similarityReview:b2Review} : edge;

const originals={H3:{id:'barbell_rdl',name:'Barbell Romanian deadlift'},G1:{id:'floor_bridge',name:'Bodyweight glute bridge'}};
const comparison=(reviewLabel,cardId,similarity,keeps,changes,check)=>{
  const original=originals[reviewLabel.slice(0,2)];
  return {reviewLabel,originalId:original.id,originalName:original.name,cardId,source:'hinges_and_hip_extension',similarity,
    keeps,changes,check,why:keeps,detail:changes,load:check,limited:similarity==='broader',
    basis:`Michael-approved Batch B hinge/bridge comparison ${reviewLabel}; October 13, 2026`,review:b2Review};
};
export const b2Comparisons=[
  comparison('H3-b','kettlebell_rdl','close',
    'A standing-start bilateral hip hinge with the load in the hands.',
    'One compact shared handle changes hand spacing and clearance; available bell sizes can constrain loading.',
    'Keep this a hinge, not a swing or a mandatory floor pickup. Choose loading separately.'),
  comparison('H3-c','smith_rdl','some',
    'A two-foot, hand-loaded standing hinge.',
    'Rails determine bar travel, so stance and hip travel must fit the machine instead of freely controlling the bar path.',
    'Confirm a full usable hinge, reachable hooks and usable stops. Do not assume the guided bar’s weight.'),
  comparison('H3-d','cable_rdl','some',
    'A resisted bilateral standing hinge.',
    'The forward and downward cable pull changes balance and how resistance acts through the hinge.',
    'Maintain footing and usable cable travel. Constant cable tension does not mean constant hip torque.'),
  comparison('H3-e','band_rdl','some',
    'A standing bilateral resisted hinge.',
    'Band force changes with stretch, changing resistance through the repetition instead of carrying a fixed mass.',
    'Secure the band beneath both feet. Band length and grip must allow controlled travel without slack or excessive stretch.'),
  comparison('H3-f','hip_extension_45','some',
    'A controlled hip hinge with relatively little knee movement.',
    'The apparatus secures the feet, supports the thighs and moves the load to the chest. This removes standing balance and hanging grip, while body orientation changes resistance through the hinge.',
    'Keep the hip crease free of the pad and move at the hips rather than repeatedly bending the spine. This record includes a plate held at the chest.'),
  comparison('H3-g','barbell_hip_thrust','broader',
    'Externally loaded hip extension.',
    'Bent-knee pelvic lifting with upper-back support replaces the standing torso hinge and hanging grip.',
    'This does not retain the original RDL task. Confirm bench stability and controlled bar entry and exit; doses do not transfer automatically.'),
  comparison('H3-h','floor_bridge','broader',
    'Controlled hip extension.',
    'Floor support, bent knees and no external load replace the standing loaded hinge.',
    'A partial match when the narrower hip-extension task is acceptable. It does not retain RDL loading or hand-held control.'),
  comparison('G1-a','barbell_floor_bridge','close',
    'Both floor foot contacts, upper-back floor support and dynamic hip extension.',
    'A padded bar adds resistance at the hips while retaining the movement and support arrangement; bar handling and clearance are added requirements.',
    'Confirm workable bar placement, removal and clearance. Added load is an optional choice, not a prescribed progression or repetition-equivalent replacement.'),
  comparison('G1-b','bodyweight_bilateral_hip_thrust','some',
    'Unloaded bilateral pelvic lifting and lowering with bent knees.',
    'Raised upper-back support changes the pivot and allows a different hip excursion; bench height and contact affect that range.',
    'Use stable upper-back support and a controlled range. No added load or forced floor touch is assumed.'),
  comparison('G1-c','kickstand_bridge','some',
    'Floor-supported dynamic hip extension with both foot contacts available.',
    'Uneven contribution emphasizes one side while retaining adjustable help from the other foot.',
    'Assistance is unmeasured. This does not preserve symmetric bilateral work.'),
  comparison('G1-d','single_leg_floor_bridge','some',
    'Upper-back floor support and repeated hip extension.',
    'Removing the second foot makes support one-sided and adds pelvic-control demand.',
    'Bilateral sharing is lost. Repetitions do not convert automatically, and this is not a difficulty ranking.'),
  comparison('G1-f','band_abduction_bridge','some',
    'Two-foot floor-supported hip lifting and lowering.',
    'Opening and returning the knees at the top adds a separate resisted abduction action while the hips stay raised.',
    'This is active opening and return, not simply holding band tension. The changed sequence does not imply equivalent counts or tempo.'),
  comparison('G1-e','bridge_march','broader',
    'A hip-extension position with upper-back floor support.',
    'Alternating foot lifts while holding pelvic height replaces repeated pelvic lifting.',
    'This is a control and hold task. Marching steps are not bridge repetitions.'),
  comparison('G1-g','dumbbell_rdl','broader',
    'Hip extension as part of a controlled hinge.',
    'Standing balance, grip and a moving torso replace bent-knee floor support.',
    'Shared hip extension is only a partial match. Bridge and RDL prescriptions do not transfer automatically.'),
];
