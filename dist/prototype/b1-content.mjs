// Approved Batch B first squat group. Instructions are shared; comparisons are directed.
export const b1Review = {
  batch:'b1-approved-2026-10-13',
  basis:'Michael approved S1–S3, all 26 directed comparisons and the disclosed setups, including the four shared instruction drafts. Stop after this squat group; broader machine/unilateral passes remain deferred.',
};
export const b1Equipment = {
  vertical_smith_squat_setup:'Vertical single-axis Smith station with suitable loading, reachable hooks and usable squat stops',
  squat_heel_support:'Stable nonslip ramp, wedge or plate arrangement supporting both raised heels throughout this squat',
  hack_squat_bar_clearance:'Behind-leg bar/plate clearance for the full intended squat and controlled pickup/set-down',
  cable_belt_squat_station:'Dedicated cable belt-squat platform with full travel, start/stop controls, balance handles and room for heel supports',
  cable_belt_squat_attachment:'Compatible hip belt and secured connectors with suitable belt-squat loading',
};
const reference=(label,url,scope)=>({label,url,scope});
const gobletReference=reference('NASM: Goblet Squat','https://www.nasm.org/resource-center/exercise-library/goblet-squat','Single chest-held DB/KB and bilateral squat mechanics. Heel support is an explicitly approved catalogue variation, not a source-prescribed substitution.');
const heelReference=reference('Lu et al.: Heel Lift Insoles during Barbell Squats','https://pmc.ncbi.nlm.nih.gov/articles/PMC9312299/','Primary study supports changes in ankle position and loading distribution with heel elevation; it does not establish equivalent machine loading or zero back demand.');

export const b1Content = [
  {
    id:'vertical_smith_back_squat',name:'Vertical Smith back squat — high bar',variationOf:'high_bar_squat',
    aliases:['vertical smith back squat','vertical smith high bar squat','high bar vertical smith squat'],
    focus:'A back-loaded bilateral squat with a guided bar.',
    expect:'Squat beneath a high upper-back bar that travels on vertical rails.',
    needs:'Vertical Smith station with loading/hooks/stops · clear standing space',
    requires:['vertical_smith_squat_setup','standing_space'],
    setup:'Use a vertical, single-axis Smith station with suitable loading, reachable hooks and stops set for the intended squat. Rest the bar high on the upper-back musculature, not the neck. Establish a bilateral foot position that permits controlled hip-and-knee bending along the rail path, with no back pad or box. Check the release and rehook procedure before starting.',
    cue:'Keep the feet planted and control the torso beneath the guided bar.',
    cues:[
      'Brace the torso and release the bar using the station’s controls.',
      'Bend the hips and knees smoothly through a range you can control while the bar follows the vertical rails.',
      'Stand with control while keeping the feet planted and the upper-back bar position steady.',
      'Secure the bar on its hooks before stepping out from beneath it.',
    ],
    context:'The rails guide the bar but do not provide a back pad. This ordinary bilateral squat is distinct from the Smith split squat, an angled or dual-axis station, and a deliberately far-forward-foot leaning hack squat. Machine labels and bar markings do not establish equivalent loading.',
    references:[
      reference('Life Fitness: Vertical Smith Machine','https://www.lifefitness.com/en-hk/catalog/strength-training/plate-loaded/plate-loaded-vertical-smith-machine','Manufacturer verifies vertical single-axis travel and rack positions; no universal machine-load or suitability claim adopted.'),
      reference('REP Fitness: Smith Machine Squat','https://repfitness.com/blogs/guides/smith-machine-squat','Upper-back placement and stop/release handling. No guaranteed rerack, rehabilitation, muscle-activation ranking or universal foot-position claim adopted.'),
    ],
  },
  {
    id:'heel_supported_goblet_squat',name:'Heel-supported goblet squat',variationOf:'goblet_squat',
    aliases:['heels supported goblet squat','heel elevated goblet squat','heels elevated goblet squat','goblet squat on a ramp','goblet squat on wedges'],
    focus:'A front-held bilateral squat with the heels supported above the forefeet.',
    expect:'Use stable heel elevation through a full controlled squat.',
    needs:'One DB or KB · stable heel ramp/wedge/plates · clear standing space',
    requires:[['goblet_dumbbell','goblet_kettlebell'],'squat_heel_support','standing_space'],
    setup:'Hold one dumbbell or kettlebell securely at the chest with both hands. Place both heels on a stable nonslip ramp, wedge or plate arrangement, with the forefeet also supported and room to squat. Keep the heel support in place throughout; no hand support is used.',
    cue:'Keep the weight close and squat through the full range you can control.',
    cues:[
      'Keep the forefeet and raised heels supported as you bend the hips and knees.',
      'Allow forward knee travel while maintaining a relatively upright, controlled torso and a steady chest hold.',
      'Lower through the full controlled squat available in this setup, then stand smoothly without bouncing or shifting the heel supports.',
      'Finish with a controlled way to set the weight down and step off the supports.',
    ],
    context:'A ramp, wedge or stable plate arrangement supplies supported heel elevation; a loose or rocking stack does not establish the setup. Actively holding the heels off the floor is a different execution. No fixed wedge angle, stance width or universal depth is prescribed. Holding and balance demands remain; heel elevation does not establish zero back loading.',
    references:[gobletReference,heelReference],
  },
  {
    id:'heel_supported_barbell_hack_squat',name:'Heel-supported barbell hack squat',
    aliases:['heels supported barbell hack squat','heel elevated barbell hack squat','heels elevated barbell hack squat','behind body barbell hack squat with heel support'],
    focus:'Bilateral hack-squat action with a bar held behind the legs.',
    expect:'Keep the heels supported and the behind-leg bar clear through the squat.',
    needs:'Bar/loading · stable heel support · behind-leg clearance and controlled pickup/set-down',
    requires:['barbell_load','squat_heel_support','hack_squat_bar_clearance','standing_space'],
    setup:'Use a suitable bar/load with clearance behind the legs and a controlled pickup/set-down arrangement. Establish stable raised-heel and forefoot contacts on a nonslip ramp, wedge or plate arrangement. Take a two-hand overhand grip behind the legs and reach standing under control. Repetitions begin standing in this version.',
    cue:'Bend through the knees and hips while keeping the bar clear behind the legs.',
    cues:[
      'Keep the arms long and the grip secure while bending the knees and hips with a relatively upright, controlled torso.',
      'Keep the feet supported and the bar clear of the legs, plates and heel supports through the full intended squat.',
      'Extend the hips and knees to stand smoothly; lower under control for the next repetition.',
      'At the finish, use the planned controlled set-down before releasing the bar or leaving the heel supports.',
    ],
    context:'Grip and bar/plate clearance can limit this movement. If contact stops descent early, the arrangement does not provide the full-range version described here. This version uses supported heels and begins each repetition standing; a floor-reset pickup and actively raised unsupported heels are separate executions. No rack, machine-equivalent load or zero back demand is assumed.',
    references:[
      reference('Muscle & Strength: Barbell Hack Squat','https://www.muscleandstrength.com/node/3894','Publisher’s direct instructions identify the behind-leg bar, heel-support option and bar/leg clearance. Standing-start repetitions are the approved catalogue adaptation; no growth or load-equivalence claim adopted.'),heelReference,
    ],
  },
  {
    id:'heel_supported_cable_belt_squat',name:'Heel-supported cable belt squat',
    aliases:['heels supported cable belt squat','heel elevated cable belt squat','heels elevated cable belt squat','cable belt squat with heel support'],
    focus:'Deep bilateral squatting with resistance attached at the hips.',
    expect:'Squat with supported heels and a hip belt connected to a cable below.',
    needs:'Dedicated cable belt-squat station · compatible belt/connectors/loading · stable heel support',
    requires:['cable_belt_squat_station','cable_belt_squat_attachment','squat_heel_support'],
    setup:'Use a dedicated belt-squat platform with compatible hip belt/connectors, suitable loading, fixed balance handles and room for stable heel supports. Fit the belt around the hips and attach the cable below and between the feet. Establish supported raised heels and forefeet, and confirm that belt/cable/trolley travel allows the intended full descent. Follow the station’s start/stop controls.',
    cue:'Use the handles for balance while the legs move the belt load.',
    cues:[
      'With the belt secured and foot contacts established, release the machine as designed.',
      'Bend the knees and hips through the full controlled squat while keeping the torso steady and the cable clear.',
      'Stand smoothly through the legs, using the fixed handles for balance without pulling yourself upward.',
      'Secure the machine at the finish before disconnecting the belt or stepping away.',
    ],
    context:'Pelvic attachment replaces shoulder-pad loading, but there is no back pad guiding the torso. The station, belt and cable must accommodate the full range. A lever belt squat or improvised suspended-plate arrangement is not automatically this setup. Heel support does not establish machine-equivalent loading or zero back demand.',
    references:[
      reference('Rogue: Rhino Trainer / Belt Squat Overview','https://www.roguefitness.com/pages/rogue-monster-rhino-trainer-overview','Manufacturer identifies hip-belt/cable setup, balance handles, release and heel-elevated variations. The combined setup is an approved catalogue choice; no clinical or spinal-unloading guarantee adopted.'),
    ],
  },
].map(record=>({...record,family:'squat',review:b1Review,sourceChecked:'2026-10-13'}));
