import {a2Content} from './a2-content.mjs?v=2.8.0';

// Approved A4: one instruction record per exact setup, shared by directed menus.
export const a4Review = {
  batch: 'a4-approved-2026-10-13',
  basis: 'Michael approved all twelve A4 comparisons and the disclosed bodyweight GHD/45-degree and dedicated-machine reverse-hyper setups. Broader machine and unilateral passes remain deferred.',
};
export const a4Equipment = {
  reverse_hyper_station: 'Dedicated reverse-hyper station with torso pad, handholds and clear leg/pendulum travel',
  reverse_hyper_loading: 'Compatible reverse-hyper foot/ankle strap and suitable secured pendulum loading',
  hip_thrust_bench: 'Upper-back support bench secured against sliding or tipping during a hip thrust',
  hip_thrust_bar: 'Suitable bar/secured plates, hip padding and clearance for controlled entry and exit',
};

// A2 keeps its plate-at-chest records and requirements unchanged. These explicit
// bodyweight variations reuse their shared finish cue and source, not plate cues.
const bodyweightExtension = ({parentId,id,name,aliases,horizontal}) => {
  const parent = a2Content.find(record=>record.id===parentId);
  return {
    group:1,id,name,aliases,variationOf:parentId,
    focus:'Hip extension with feet secured and the torso moving around the hips.',
    expect:horizontal ? 'Hinge with your legs supported horizontally and no external weight.' : 'Hinge over a 45-degree thigh pad with no external weight.',
    needs:horizontal ? 'Horizontal GHD/hip-extension apparatus · secure feet and thigh support' : '45° hip-extension bench · secure feet and thigh support',
    requires:parent.requires.filter(key=>key!=='chest_held_plate'),
    setup:`Adjust the ${horizontal?'horizontal GHD/hip-extension apparatus':'45-degree hip-extension bench'} so the feet are secure and the upper-thigh pad leaves the hip crease free. Use its designated supports to enter, with clear room for torso travel. Begin with the torso and legs aligned and hands resting across the chest; no external weight is held.`,
    cue:'Keep the trunk steady and move through the hips over the pad edge.',
    cues:[
      'Keep the trunk steady and bend at the hips to lower the torso through a controlled range.',
      parent.cues[1],
      'Lower smoothly for the next hinge. Finish using the apparatus’s supported exit position before releasing the feet.',
    ],
    context:horizontal ? 'This bodyweight version moves at the hips with a steady trunk. It is distinct from a knee-flexion glute-ham raise and deliberate spinal bending. A plate held at the chest is a separate loaded variation with its own equipment needs.' : 'Keep movement at the hips with a steady trunk. The angled support changes where gravity challenges the hinge compared with a horizontal setup. A plate held at the chest is a separate loaded variation with its own equipment needs.',
    references:[...parent.references,...(horizontal?[{
      label:'CrossFit: The GHD Hip Extension',url:'https://www.crossfit.com/essentials/the-ghd-hip-extension',
      scope:'Hip motion with a steady trunk; no program, rehabilitation or universal suitability claims adopted.',
    }]:[])],
    family:'hip_extension',review:a4Review,sourceChecked:'2026-10-13',
  };
};

export const a4Content = [
  {
    group:1,id:'reverse_hyper',name:'Reverse hyper — machine',
    aliases:['reverse hyper','reverse hyperextension','machine reverse hyper','machine reverse hyperextension','straight leg reverse hyper'],
    focus:'Hip extension with the torso supported and both legs moving together.',
    expect:'Lift and lower straight legs while controlling the attached pendulum.',
    needs:'Dedicated reverse-hyper station · compatible foot/ankle strap and secured loading',
    requires:['reverse_hyper_station','reverse_hyper_loading'],
    setup:'Use a dedicated reverse-hyper station with a compatible foot/ankle strap and suitable secured loading. With the pendulum settled, follow the station’s mounting and strap-fitting arrangement using its steps and handholds. Lie face down with the torso supported, hips at the pad edge, hands holding the handles and clear space for both legs and the pendulum.',
    cue:'Move both straight legs from the hips while keeping the torso supported.',
    cues:[
      'Hold the handles and keep the torso steady against the pad; move both straight legs together from the hips.',
      'Lift under control toward torso-and-leg alignment without gaining extra height by arching the back.',
      'Lower with control, keeping the legs and pendulum clear of the frame; avoid throwing the legs to start the next repetition.',
      'Let the pendulum settle before using the station’s supported exit and removing the strap.',
    ],
    context:'This entry uses a dedicated pendulum machine and its compatible strap. Torso support does not remove the need to control the trunk or moving load. A bench-based bodyweight reverse hyper is a different setup; the machine’s loading does not translate directly to other hip-extension exercises.',
    references:[{
      label:'Rogue: Reverse Hyper equipment instructions',
      url:'https://assets.roguefitness.com/image/upload/v1660942798/catalog/Strength%20Equipment/Strength%20Training/Reverse%20Hypers/XX8199/RA0335_CUST_INSTR_reverse_hyper_fywh1a.pdf',
      scope:'Manufacturer documentation for a compatible foot strap, load posts and secured plates. Movement/setup wording follows Michael’s approved coaching description; no treatment or decompression claims adopted.',
    }],
    family:'hip_extension',review:a4Review,sourceChecked:'2026-10-13',
  },
  bodyweightExtension({
    parentId:'horizontal_hip_extension',id:'bodyweight_horizontal_hip_extension',name:'GHD hip extension — bodyweight',horizontal:true,
    aliases:['ghd hip extension','bodyweight ghd hip extension','bodyweight horizontal hip extension','horizontal hip extension bodyweight'],
  }),
  bodyweightExtension({
    parentId:'hip_extension_45',id:'bodyweight_hip_extension_45',name:'45° hip extension — bodyweight',horizontal:false,
    aliases:['bodyweight 45 degree hip extension','45 degree bodyweight hip extension','bodyweight 45 degree back extension'],
  }),
  {
    group:2,id:'barbell_hip_thrust',name:'Bilateral barbell hip thrust',
    aliases:['barbell hip thrust','bb hip thrust','two leg barbell hip thrust','bench barbell hip thrust'],
    focus:'Loaded hip extension with both feet planted and the upper back supported.',
    expect:'Raise and lower the hips while controlling a padded bar across the hip crease.',
    needs:'Secured upper-back bench · bar/plates/collars and hip padding · clear floor and entry/exit space',
    requires:['hip_thrust_bench','hip_thrust_bar','bridge_space'],
    setup:'Secure a bench against sliding or tipping and sit in front of it with the upper back aligned to its padded edge. Position a padded bar evenly across the hip crease using a controlled entry with enough bar-and-plate clearance. Plant both feet on a firm floor, knees bent, and hold the bar to keep it centered. Check that the same setup allows a controlled exit.',
    cue:'Drive through both planted feet and lift the hips without arching for extra height.',
    cues:[
      'Keep the bar centered and the upper back supported as you press through both planted feet to raise the hips.',
      'Finish with torso and thighs aligned, keeping the trunk controlled rather than arching the lower back for extra height.',
      'Lower the hips and bar smoothly while keeping the feet planted and the bench steady.',
      'At the end, lower the bar to its supported resting position before removing it from the hips through the planned exit.',
    ],
    context:'This bilateral, bench-supported version uses a bar across the hips. Bent knees change the hamstring contribution compared with relatively straight-leg hinging. It does not preserve the GHD’s torso-over-pad hinge or the reverse hyper’s moving-leg task. A floor bridge, single-leg hip thrust and guided hip-thrust machine have different setups; choose loading separately.',
    references:[{
      label:'Contreras et al.: Barbell Hip Thrust',
      url:'https://bretcontreras.com/wp-content/uploads/Barbell-Hip-Thrust.pdf',
      scope:'Author-hosted NSCA exercise-technique article supports secured upper-back support, padded hip loading, planted feet, controlled hip extension and the bent-knee distinction. No programming, injury-prevention or automatic load-conversion claims adopted.',
    }],
    family:'hip_extension',review:a4Review,sourceChecked:'2026-10-13',
  },
];
