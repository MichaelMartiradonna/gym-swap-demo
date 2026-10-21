import {day1Content} from './day1-content.mjs?v=2.8.0';

export const b4Review = {
  batch:'b4-approved-2026-10-13',
  basis:'Michael approved the B4 local build, twelve G2/G3 comparisons, the shared bilateral foot-elevated bridge and narrow alias correction. G2 working-foot elevation with shoulders on the floor is confirmed. Stop after B4; no RAG promotion or later groups.',
};
export const b4Equipment = {
  bilateral_bridge_platform:'Stable low platform with sufficient secure contact area for both feet during a bridge',
};
const single=day1Content.find(record=>record.id==='foot_elevated_bridge');

// Preserve the existing single-leg instructions; only precise aliases auto-match.
export const applyB4Aliases = record => record.id==='foot_elevated_bridge'
  ? {...record,aliases:['single leg elevated foot bridge','single leg foot elevated glute bridge','single leg foot elevated bridge'],aliasReview:b4Review}
  : record;

export const b4Content = [{
  id:'bilateral_foot_elevated_bridge',name:'Bilateral bodyweight foot-elevated glute bridge',variationOf:'foot_elevated_bridge',
  aliases:['bilateral foot elevated glute bridge','bilateral foot elevated bridge','two leg foot elevated glute bridge','two leg feet elevated bridge'],
  focus:'Bilateral hip extension with both feet raised and the upper back supported on the floor.',
  expect:'Raise and lower the pelvis with both feet on a stable low platform and no added load.',
  needs:'Stable low platform supporting both feet · clear floor and hip space',
  requires:['bilateral_bridge_platform','bridge_space'],
  setup:'Lie with the upper back supported on the floor and both feet securely on one stable low platform. Keep the knees bent, with room to raise and lower the pelvis without the platform moving. No external load is used.',
  cue:'Lift through both supported feet while keeping the pelvis steady and the upper back on the floor.',
  cues:[...single.cues.slice(0,3)],
  context:'Both feet remain on the platform throughout the lift. Platform height and foot distance must permit the stated bent-knee action; no fixed height, knee angle or extra range is required. Stop before extra height comes from arching the lower back. This is not a single-leg bridge, shoulder-elevated hip thrust, sliding hamstring curl or long-lever straight-leg bridge.',
  references:[...single.references,{
    label:'Macros Inc: Feet Elevated Glute Bridge',url:'https://macrosinc.net/exercises/glutes/feet-elevated-glute-bridge/',
    scope:'Direct technique text corroborates bilateral raised-foot contact, bent knees and controlled lifting/lowering. The stable low platform is the approved catalogue setup. No activation, progression, timing or universal angle/range claim is adopted.',
  }],
  family:'hip_extension',review:b4Review,sourceChecked:'2026-10-13',
}];
