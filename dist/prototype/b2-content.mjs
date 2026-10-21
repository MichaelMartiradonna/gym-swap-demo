import {a4Content} from './a4-content.mjs?v=2.8.0';

// Approved B2 variations. Each exact setup owns one reusable instruction record.
export const b2Review = {
  batch:'b2-approved-2026-10-13',
  basis:'Michael approved B2 (H3/G1), the two disclosed original setups, fifteen menu entries and two variation drafts. H3-a retains its established wording with its first explicit Green tier. Stop after B2; no RAG promotion or later groups.',
};
export const b2Equipment = {
  floor_bridge_bar_setup:'Padded bar with suitable secured loading and floor-bridge clearance for controlled placement and removal across the hips',
};
const loadedThrust=a4Content.find(record=>record.id==='barbell_hip_thrust');
const reference=(label,url,scope)=>({label,url,scope});
const thrustSetup=reference('Bret Contreras: Hip Thrust Wiki Page','https://bretcontreras.com/hip-thrust-wiki-page/','Direct exercise descriptions distinguish floor bridges from upper-back-elevated hip thrusts and bodyweight from barbell setups. No activation ranking, programming or progression claims adopted.');

export const b2Content = [
  {
    id:'barbell_floor_bridge',name:'Bilateral barbell floor glute bridge',variationOf:'floor_bridge',
    aliases:['barbell floor glute bridge','bilateral barbell floor bridge','barbell glute bridge','barbell floor bridge'],
    focus:'Bilateral hip extension with upper-back floor support and a bar across the hips.',
    expect:'Lift and lower the hips with both feet planted and the padded bar steady.',
    needs:'Padded bar/secured loading · floor-bridge entry/exit clearance · clear floor space',
    requires:['floor_bridge_bar_setup','bridge_space'],
    setup:'Establish a controlled way to place and remove a padded bar across the hip crease, with suitable secured loading and sufficient plate/body clearance. Lie with the upper back on the floor, knees bent and both feet planted. Steady the bar with both hands before lifting.',
    cue:'Lift the hips and bar smoothly while keeping both feet and the upper back supported.',
    cues:[
      'Press through both planted feet to lift the hips and bar, keeping the trunk controlled and the bar steady.',
      'End the lift before extra height comes from arching the lower back.',
      'Lower the hips and bar smoothly while maintaining the floor contacts.',
      loadedThrust.cues[3],
    ],
    context:'This bilateral floor version adds resistance at the hips without a bench. A loaded bar cannot be assumed to roll over every person’s legs or fit every plate arrangement; confirm the planned entry, clearance and supported exit. Added load is an optional choice, not a prescribed progression or a repetition-equivalent replacement for bodyweight work.',
    references:[
      reference('ACE: Glute Bridge','https://www.acefitness.org/resources/everyone/exercise-library/49/glute-bridge/','Existing floor-bridge support contacts and controlled hip extension. The bar is the separately approved loaded variation.'),
      ...loadedThrust.references,
      reference('Bret Contreras: The Art of Glute Building, Part I','https://bretcontreras.com/the-glute-guys-secrets-the-art-of-glute-building-part-i-the-first-session/','Author’s barbell glute-bridge section supports the floor-supported, hip-loaded identity. No programming, clinical or progression claims adopted.'),
      thrustSetup,
    ],
  },
  {
    id:'bodyweight_bilateral_hip_thrust',name:'Bilateral bodyweight hip thrust',variationOf:'barbell_hip_thrust',
    aliases:['bilateral bodyweight hip thrust','two leg bodyweight hip thrust','bodyweight bilateral hip thrust','bodyweight hip thrust with both feet planted'],
    focus:'Unloaded bilateral hip extension with the upper back supported on a bench.',
    expect:'Lift and lower the pelvis with both feet on the floor and no external load.',
    needs:'Secured upper-back support bench · clear foot and hip space',
    requires:['hip_thrust_bench','bridge_space'],
    setup:'Position the upper back near the lower shoulder blades on a bench secured against sliding or tipping. Plant both feet on firm floor with knees bent and clear room for hip movement and a controlled entry and exit. No bar or external weight is used.',
    cue:'Raise the hips smoothly while keeping the feet planted, upper back supported and trunk steady.',
    cues:[
      'Press through both planted feet to raise the pelvis while maintaining the upper-back support contact.',
      loadedThrust.cues[1],
      'Lower smoothly through the range the support height and contacts allow; keep the bench steady.',
      'Finish in a controlled lowered position before leaving the support.',
    ],
    context:'This version uses both feet on the floor and no external load. Bench height and upper-back contact change the available hip excursion; touching the floor at the bottom is not required. A floor bridge, loaded bilateral hip thrust and single-leg hip thrust retain their separate instruction records.',
    references:[...loadedThrust.references,thrustSetup,
      reference('Bret Contreras: 10 Steps to the Perfect Hip Thrust','https://bretcontreras.com/10-steps-to-the-perfect-hip-thrust/','Direct technique guidance for upper-back support, foot contacts and controlled pelvic movement; load and programming suggestions are not adopted.'),
    ],
  },
].map(record=>({...record,family:'hip_extension',review:b2Review,sourceChecked:'2026-10-13'}));
