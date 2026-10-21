// Maintained exercise facts and directed comparisons.
// Standalone summaries describe the exercise; comparison text belongs to its directed edge.
export const day1Equipment = {
  "single_dumbbell": "One dumbbell",
  "single_kettlebell": "One kettlebell",
  "barbell_load": "Barbell with an appropriate loading and pickup/set-down arrangement",
  "squat_rack": "Squat rack with suitable hooks and safety supports",
  "landmine_setup": "Barbell in a secured landmine attachment",
  "suspension_setup": "Suspension handles on a suitable secure anchor",
  "swiss_ball": "Swiss ball suitable for wall squats",
  "squat_wall": "Clear wall for ball-supported squats",
  "leg_press_machine": "Seated selectorized leg-press machine",
  "hack_squat_machine": "Back-supported inclined hack-squat sled",
  "v_squat_machine": "Back-supported V-squat lever machine",
  "squat_box": "Stable box or bench suitable for controlled seated squats",
  "low_cable_bar": "Low pulley with a short bar and clear cable travel",
  "smith_machine": "Smith machine with usable hooks, stops, and rail path",
  "long_band": "Long resistance band suitable for standing on and holding",
  "fixed_handhold": "Fixed handhold reachable throughout the movement",
  "rear_foot_support": "Stable rear-foot support for split squats",
  "shoulder_support": "Secured upper-back support for hip thrusts",
  "foot_platform": "Stable low platform for an elevated bridge foot",
  "front_foot_platform": "Stable low platform supporting the entire front foot",
  "step_platform": "Stable platform suitable for stepping up and down",
  "thigh_band": "Loop band suitable for placement above the knees"
};
export const day1Originals = [
  {
    "id": "goblet_squat",
    "label": "Goblet squat",
    "source": "squats"
  },
  {
    "id": "dumbbell_rdl",
    "label": "Dumbbell Romanian deadlift",
    "source": "hinges_and_hip_extension"
  },
  {
    "id": "barbell_split_squat",
    "label": "Barbell split squat — feet on floor",
    "source": "squats"
  },
  {
    "id": "single_leg_floor_bridge",
    "label": "Single-leg floor glute bridge",
    "source": "hinges_and_hip_extension"
  },
  {
    "id": "bodyweight_rfess",
    "label": "Bodyweight rear-foot-elevated split squat",
    "source": "squats"
  }
];
export const day1Content = [
  {
    "id": "db_front_squat",
    "name": "Two-dumbbell front squat",
    "focus": "Squat-pattern work for the legs and hips.",
    "expect": "Squat with one dumbbell held at each shoulder.",
    "needs": "Dumbbell pair · Clear standing space",
    "requires": [
      "dumbbells",
      "standing_space"
    ],
    "aliases": [
      "db front squat",
      "double dumbbell front squat"
    ],
    "cue": "Keep the feet planted; lower and rise with control.",
    "setup": "one dumbbell at each shoulder; feet on the floor; no bench or machine support.",
    "cues": [
      "Keep the intended weight or support position as you bend at the hips and knees.",
      "Lower through a range you can control with your feet planted.",
      "Rise smoothly without bouncing or losing the stated support position.",
      "keep the weights steady, bend through the hips and knees, and use a depth you can control before standing again."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "NASM dumbbell front squat",
        "url": "https://www.nasm.org/resource-center/exercise-library/dumbbell-front-squat",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "squat"
  },
  {
    "id": "barbell_front_squat",
    "name": "Barbell front squat",
    "focus": "Squat-pattern work for the legs and hips.",
    "expect": "Squat with a bar supported across the fronts of the shoulders.",
    "needs": "Barbell · Rack with safeties · Clear standing space",
    "requires": [
      "barbell_load",
      "squat_rack",
      "standing_space"
    ],
    "aliases": [
      "bb front squat",
      "front squat"
    ],
    "cue": "Keep the feet planted; lower and rise with control.",
    "setup": "bar supported across the fronts of the shoulders using a conventional front-rack position; begin and finish at a suitable rack.",
    "cues": [
      "Keep the intended weight or support position as you bend at the hips and knees.",
      "Lower through a range you can control with your feet planted.",
      "Rise smoothly without bouncing or losing the stated support position.",
      "keep the bar supported on the shoulders and the torso controlled while bending and straightening the hips and knees."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "NSCA front-squat description",
        "url": "https://www.nsca.com/education/articles/kinetic-select/anaerobic-and-muscle-endurance-development/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "squat"
  },
  {
    "id": "landmine_squat",
    "name": "Landmine squat",
    "focus": "Squat-pattern work for the legs and hips.",
    "expect": "Hold the free end of a secured landmine bar at the chest.",
    "needs": "Secured landmine bar · Clear standing space",
    "requires": [
      "landmine_setup",
      "standing_space"
    ],
    "aliases": [
      "two handed landmine squat"
    ],
    "cue": "Keep the feet planted; lower and rise with control.",
    "setup": "face the landmine anchor and hold the free end of the bar with both hands near the chest; both feet stay on the floor.",
    "cues": [
      "Keep the intended weight or support position as you bend at the hips and knees.",
      "Lower through a range you can control with your feet planted.",
      "Rise smoothly without bouncing or losing the stated support position.",
      "keep the bar end near the chest and squat smoothly within the available bar path."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "ACE's landmine training guide",
        "url": "https://www.acefitness.org/continuing-education/certified/september-2025/8948/the-ace-workout-builder-for-landmine-training/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "squat"
  },
  {
    "id": "high_bar_squat",
    "name": "High-bar back squat",
    "focus": "Squat-pattern work for the legs and hips.",
    "expect": "Squat with the bar resting high across the upper back.",
    "needs": "Barbell · Rack with safeties · Clear standing space",
    "requires": [
      "barbell_load",
      "squat_rack",
      "standing_space"
    ],
    "aliases": [
      "high bar squat",
      "high bar back squat"
    ],
    "cue": "Keep the feet planted; lower and rise with control.",
    "setup": "a bar supported across the upper-back musculature, not the neck, with both feet on the floor; start and finish at a rack.",
    "cues": [
      "Keep the intended weight or support position as you bend at the hips and knees.",
      "Lower through a range you can control with your feet planted.",
      "Rise smoothly without bouncing or losing the stated support position.",
      "brace through the body, keep the bar settled on the upper back, and descend only as far as you can control."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "ACE's back-squat instructions",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/11/back-squat/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "squat"
  },
  {
    "id": "bodyweight_squat",
    "name": "Bodyweight squat",
    "focus": "Squat-pattern work for the legs and hips.",
    "expect": "A standing squat using bodyweight, without external support.",
    "needs": "Clear standing space",
    "requires": [
      "standing_space"
    ],
    "aliases": [
      "air squat",
      "unweighted squat"
    ],
    "cue": "Keep the feet planted; lower and rise with control.",
    "setup": "two feet on the floor, no hand support and no added weight; hands may reach forward.",
    "cues": [
      "Keep the intended weight or support position as you bend at the hips and knees.",
      "Lower through a range you can control with your feet planted.",
      "Rise smoothly without bouncing or losing the stated support position.",
      "maintain foot contact, lower under control, and stand without rushing or losing balance."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "ACE's bodyweight squat",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/135/bodyweight-squat/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "squat"
  },
  {
    "id": "trx_squat",
    "name": "TRX-assisted bodyweight squat",
    "focus": "Squat-pattern work for the legs and hips.",
    "expect": "Squat with bodyweight and hand assistance from anchored straps.",
    "needs": "Anchored suspension straps · Clear standing space",
    "requires": [
      "suspension_setup",
      "standing_space"
    ],
    "aliases": [
      "trx squat",
      "suspension assisted squat"
    ],
    "cue": "Keep the feet planted; lower and rise with control.",
    "setup": "face the anchor holding both suspension handles, with both feet on the floor; no added weight.",
    "cues": [
      "Keep the intended weight or support position as you bend at the hips and knees.",
      "Lower through a range you can control with your feet planted.",
      "Rise smoothly without bouncing or losing the stated support position.",
      "keep the straps engaged and feet planted while lowering and rising smoothly, using the handles for the intended assistance."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "TRX's squat tutorial",
        "url": "https://www.trxtraining.com/blogs/news/trx-squat",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "squat"
  },
  {
    "id": "ball_wall_squat",
    "name": "Swiss-ball wall squat",
    "focus": "Squat-pattern work for the legs and hips.",
    "expect": "Squat with a Swiss ball between the back and a wall.",
    "needs": "Swiss ball · Clear wall · Clear standing space",
    "requires": [
      "swiss_ball",
      "squat_wall",
      "standing_space"
    ],
    "aliases": [
      "stability ball squat",
      "swiss ball supported squat",
      "ball wall squat"
    ],
    "cue": "Keep the feet planted; lower and rise with control.",
    "setup": "stand with a Swiss ball between the back and a wall, feet on the floor, no added weight. The ball rolls along the wall during the squat.",
    "cues": [
      "Keep the intended weight or support position as you bend at the hips and knees.",
      "Lower through a range you can control with your feet planted.",
      "Rise smoothly without bouncing or losing the stated support position.",
      "keep contact with the ball and control the descent and return with the feet planted."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "ACE's stability-ball wall squat",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/69/stability-ball-wall-squats/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "squat"
  },
  {
    "id": "leg_press",
    "name": "Seated leg press",
    "focus": "Squat-pattern work for the legs and hips.",
    "expect": "Press through both legs while seated against the machine pads.",
    "needs": "Seated leg-press machine",
    "requires": [
      "leg_press_machine"
    ],
    "aliases": [
      "seated leg press",
      "selectorized leg press",
      "pin loaded leg press"
    ],
    "cue": "Keep the trunk and pelvis supported by the pads.",
    "setup": "sit against the seat/back pad, both feet on the platform, and bend/extend the hips and knees against the machine's resistance. This entry uses the seated selectorized version.",
    "cues": [
      "Keep your trunk and pelvis against the pads with both feet on the platform.",
      "Bend the hips and knees under control within the machine’s usable range.",
      "Press smoothly to extend the legs without snapping into the stops; finish using the machine’s controls."
    ],
    "context": "This card uses a seated selectorized machine. An angled plate-loaded sled has different setup and release controls; do not assume a common starting resistance or load conversion.",
    "references": [
      {
        "label": "NASM's leg press",
        "url": "https://www.nasm.org/resource-center/exercise-library/leg-press",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "squat"
  },
  {
    "id": "hack_squat",
    "name": "Hack squat — inclined sled",
    "focus": "Squat-pattern work for the legs and hips.",
    "expect": "A back-supported squat on an inclined, guided sled.",
    "needs": "Inclined hack-squat sled",
    "requires": [
      "hack_squat_machine"
    ],
    "aliases": [
      "hack squat",
      "sled hack squat"
    ],
    "cue": "Keep the feet planted; lower and rise with control.",
    "setup": "back against the pad, shoulders under the pads, both feet on the platform; squat as the carriage travels on inclined linear rails.",
    "cues": [
      "Keep the intended weight or support position as you bend at the hips and knees.",
      "Lower through a range you can control with your feet planted.",
      "Rise smoothly without bouncing or losing the stated support position.",
      "establish the pad and foot contacts, release the machine as designed, and control the carriage without dropping into the stops."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "Hammer Strength's hack-squat specification",
        "url": "https://www.lifefitness.com/en-us/catalog/strength-training/plate-loaded/hack-squat",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "squat"
  },
  {
    "id": "v_squat",
    "name": "V-squat — back supported",
    "focus": "Squat-pattern work for the legs and hips.",
    "expect": "A back-supported squat with the machine moving through an arc.",
    "needs": "V-squat machine",
    "requires": [
      "v_squat_machine"
    ],
    "aliases": [
      "v squat",
      "v squat machine"
    ],
    "cue": "Keep the feet planted; lower and rise with control.",
    "setup": "back against the pad, shoulders under the pads, both feet on the platform; use the forward-facing squat position as the lever moves through its arc.",
    "cues": [
      "Keep the intended weight or support position as you bend at the hips and knees.",
      "Lower through a range you can control with your feet planted.",
      "Rise smoothly without bouncing or losing the stated support position.",
      "keep the intended pad contacts and feet planted while controlling the machine through its workable range."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "Life Fitness's V-squat description",
        "url": "https://www.lifefitness.com.au/commercial/v-squat-plvsq",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "squat"
  },
  {
    "id": "bodyweight_box_squat",
    "name": "Bodyweight box squat",
    "focus": "Squat-pattern work for the legs and hips.",
    "expect": "Squat to controlled seated contact on a box, then stand.",
    "needs": "Stable box or bench · Clear standing space",
    "requires": [
      "squat_box",
      "standing_space"
    ],
    "aliases": [
      "bodyweight box squat",
      "unweighted box squat"
    ],
    "cue": "Stay braced during seated contact; stand without rocking.",
    "setup": "squat back onto a stable box or bench without added weight, make controlled seated contact while staying braced, then stand. No rocking or deliberate relaxation on the box.",
    "cues": [
      "Lower onto the box or bench under control with the feet planted.",
      "Keep bracing during seated contact; do not relax or rock backward.",
      "Stand smoothly through the legs."
    ],
    "context": "This version makes controlled seated contact while staying braced, with no rocking. Touch-only and barbell box squats are different variations.",
    "references": [
      {
        "label": "ACE's bodyweight squat",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/135/bodyweight-squat/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "squat"
  },
  {
    "id": "goblet_box_squat",
    "name": "Goblet box squat",
    "focus": "Squat-pattern work for the legs and hips.",
    "expect": "Hold a weight at the chest and squat to controlled seated contact.",
    "needs": "One dumbbell OR One kettlebell · Stable box or bench · Clear standing space",
    "requires": [
      [
        "goblet_dumbbell",
        "goblet_kettlebell"
      ],
      "squat_box",
      "standing_space"
    ],
    "aliases": [
      "goblet squat to box",
      "goblet squat to bench"
    ],
    "cue": "Keep the weight close; stand without rocking off the box.",
    "setup": "Stand with one dumbbell or kettlebell held at the chest and a stable box or bench behind you. Use controlled seated contact while staying braced, then stand without rocking.",
    "cues": [
      "Keep the weight close to your chest as you squat toward the box.",
      "Make controlled seated contact while staying braced.",
      "Stand smoothly without rocking or bouncing off the surface."
    ],
    "context": "Keep the weight at the chest during controlled seated contact. Box height changes the available depth; a box does not automatically make a load easier.",
    "references": [
      {
        "label": "NASM dumbbell front squat",
        "url": "https://www.nasm.org/resource-center/exercise-library/dumbbell-front-squat",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "squat"
  },
  {
    "id": "low_bar_squat",
    "name": "Low-bar back squat",
    "focus": "Squat-pattern work for the legs and hips.",
    "expect": "Squat with the bar on a lower shelf across the rear shoulders.",
    "needs": "Barbell · Rack with safeties · Clear standing space",
    "requires": [
      "barbell_load",
      "squat_rack",
      "standing_space"
    ],
    "aliases": [
      "low bar squat",
      "low bar back squat"
    ],
    "cue": "Keep the feet planted; lower and rise with control.",
    "setup": "bar supported across the rear-shoulder shelf, lower than the high-bar position; both feet on the floor, no box or machine support.",
    "cues": [
      "Keep the intended weight or support position as you bend at the hips and knees.",
      "Lower through a range you can control with your feet planted.",
      "Rise smoothly without bouncing or losing the stated support position.",
      "keep the bar supported and the whole foot planted, controlling the squat with the bar balanced over the base of support."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "Squat University's low-bar squat guide",
        "url": "https://squatuniversity.com/2016/05/13/how-to-perfect-the-low-bar-back-squat/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "squat"
  },
  {
    "id": "barbell_rdl",
    "name": "Barbell Romanian deadlift",
    "focus": "Hip-hinge work with attention to trunk and pelvis control.",
    "expect": "A standing hip hinge with a bar held in both hands.",
    "needs": "Barbell · Clear standing space",
    "requires": [
      "barbell_load",
      "standing_space"
    ],
    "aliases": [
      "bb rdl",
      "barbell rdl"
    ],
    "cue": "Hips back; stop before losing trunk or pelvis control.",
    "setup": "stand holding a bar in front of the thighs; hinge with the bar close to the legs. Repetitions begin standing rather than from the floor.",
    "cues": [
      "Keep a soft knee bend and move the hips back as the torso tips forward.",
      "Control the pelvis and trunk; stop before you lose the intended position.",
      "Move through the hip to return to standing without leaning backward.",
      "send the hips back, keep the bar close, and reverse before losing torso control; reaching the floor is not the target."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "NSCA RDL technique",
        "url": "https://www.nsca.com/education/articles/kinetic-select/romanian-deadlift-rdl/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "hinge"
  },
  {
    "id": "kettlebell_rdl",
    "name": "Two-handed kettlebell Romanian deadlift",
    "focus": "Hip-hinge work with attention to trunk and pelvis control.",
    "expect": "A standing hip hinge holding one kettlebell in both hands.",
    "needs": "One kettlebell · Clear standing space",
    "requires": [
      "single_kettlebell",
      "standing_space"
    ],
    "aliases": [
      "kb rdl",
      "kettlebell rdl"
    ],
    "cue": "Hips back; stop before losing trunk or pelvis control.",
    "setup": "hold one kettlebell by its handle with both hands, starting standing; lower it between/in front of the thighs as the hips move back.",
    "cues": [
      "Keep a soft knee bend and move the hips back as the torso tips forward.",
      "Control the pelvis and trunk; stop before you lose the intended position.",
      "Move through the hip to return to standing without leaning backward.",
      "keep the bell close and the knee bend modest as the hips move back, then bring the hips forward to stand."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "ACE's RDL article, Kettlebell subsection",
        "url": "https://www.acefitness.org/resources/pros/expert-articles/7963/what-is-the-difference-between-romanian-deadlift-vs-deadlift/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "hinge"
  },
  {
    "id": "cable_rdl",
    "name": "Low-cable Romanian deadlift",
    "focus": "Hip-hinge work with attention to trunk and pelvis control.",
    "expect": "A standing hip hinge holding a short bar on a low cable.",
    "needs": "Low cable with short bar · Clear standing space",
    "requires": [
      "low_cable_bar",
      "standing_space"
    ],
    "aliases": [
      "cable rdl",
      "low pulley rdl"
    ],
    "cue": "Hips back; stop before losing trunk or pelvis control.",
    "setup": "face a low pulley holding a short bar in both hands; begin standing, then hinge with a modest knee bend and arms extended.",
    "cues": [
      "Keep a soft knee bend and move the hips back as the torso tips forward.",
      "Control the pelvis and trunk; stop before you lose the intended position.",
      "Move through the hip to return to standing without leaning backward.",
      "move the hips back and forward under control while the arms remain long; do not turn it into a row."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "SET FOR SET's cable RDL demonstration",
        "url": "https://www.youtube.com/watch?v=iDRgTEvZMxw",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "hinge"
  },
  {
    "id": "smith_rdl",
    "name": "Smith-machine Romanian deadlift",
    "focus": "Hip-hinge work with attention to trunk and pelvis control.",
    "expect": "A standing hip hinge using a bar guided by Smith-machine rails.",
    "needs": "Smith machine · Clear standing space",
    "requires": [
      "smith_machine",
      "standing_space"
    ],
    "aliases": [
      "smith rdl",
      "smith machine rdl"
    ],
    "cue": "Hips back; stop before losing trunk or pelvis control.",
    "setup": "hold the Smith bar in front of the thighs, start standing, and hinge as the bar travels on its rails.",
    "cues": [
      "Keep a soft knee bend and move the hips back as the torso tips forward.",
      "Control the pelvis and trunk; stop before you lose the intended position.",
      "Move through the hip to return to standing without leaning backward.",
      "position yourself so the bar stays close during a controlled hinge, then stand without leaning backward."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "StrengthLog's Smith RDL instructions",
        "url": "https://www.strengthlog.com/smith-machine-romanian-deadlift/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "hinge"
  },
  {
    "id": "band_rdl",
    "name": "Resistance-band Romanian deadlift",
    "focus": "Hip-hinge work with attention to trunk and pelvis control.",
    "expect": "A standing hip hinge against a band secured under the feet.",
    "needs": "Long resistance band · Clear standing space",
    "requires": [
      "long_band",
      "standing_space"
    ],
    "aliases": [
      "band rdl",
      "banded rdl"
    ],
    "cue": "Hips back; stop before losing trunk or pelvis control.",
    "setup": "stand on a suitable long resistance band with both feet, hold it in both hands, and hinge from standing; no external anchor.",
    "cues": [
      "Keep a soft knee bend and move the hips back as the torso tips forward.",
      "Control the pelvis and trunk; stop before you lose the intended position.",
      "Move through the hip to return to standing without leaning backward.",
      "keep a modest knee bend, send the hips back, and control the return without snapping upright."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "TRX's band-deadlift guide",
        "url": "https://www.trxtraining.com/blogs/news/resistance-band-deadlifts",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "hinge"
  },
  {
    "id": "tippy_bird",
    "name": "Tippy bird — single-leg hinge practice",
    "focus": "Hip-hinge work with attention to trunk and pelvis control.",
    "expect": "An unloaded single-leg hinge for movement and balance practice.",
    "needs": "Clear standing space",
    "requires": [
      "standing_space"
    ],
    "aliases": [
      "tippy bird",
      "unloaded single leg hinge"
    ],
    "cue": "Hinge on one leg; keep the pelvis controlled.",
    "setup": "stand on one leg with a soft knee, hinge at the hip as the trailing leg extends behind, then return to standing. No external load or hand support.",
    "cues": [
      "Keep a soft knee bend and move the hips back as the torso tips forward.",
      "Control the pelvis and trunk; stop before you lose the intended position.",
      "Move through the hip to return to standing without leaning backward.",
      "reach through the trailing leg as the hips hinge; keep the pelvis controlled and stop the descent before losing the intended position. Touching the floor is not required."
    ],
    "context": "An unloaded single-leg hinge for movement practice. It does not preserve the loading task of a two-leg RDL.",
    "references": [
      {
        "label": "ACE's single-leg RDL",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/127/single-arm-single-leg-romanian-dead-lift/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "hinge"
  },
  {
    "id": "single_leg_db_rdl",
    "name": "Single-leg RDL — opposite-hand dumbbell",
    "focus": "Hip-hinge work with attention to trunk and pelvis control.",
    "expect": "Hinge on one leg with a dumbbell in the opposite hand.",
    "needs": "One dumbbell · Clear standing space",
    "requires": [
      "single_dumbbell",
      "standing_space"
    ],
    "aliases": [
      "single leg db rdl",
      "single leg dumbbell rdl",
      "contralateral single leg rdl"
    ],
    "cue": "Hips back; stop before losing trunk or pelvis control.",
    "setup": "one working foot on the floor, trailing leg lifts behind; hold one dumbbell in the hand opposite the standing leg, with no hand support.",
    "cues": [
      "Keep a soft knee bend and move the hips back as the torso tips forward.",
      "Control the pelvis and trunk; stop before you lose the intended position.",
      "Move through the hip to return to standing without leaning backward.",
      "hinge with a soft standing knee while controlling pelvis rotation and keeping the weight close to the working side's movement path."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "ACE's single-arm, single-leg RDL",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/127/single-arm-single-leg-romanian-dead-lift/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "hinge"
  },
  {
    "id": "supported_single_leg_rdl",
    "name": "Hand-supported single-leg RDL",
    "focus": "Hip-hinge work with attention to trunk and pelvis control.",
    "expect": "Hinge on one leg, holding a weight and using a fixed handhold.",
    "needs": "One dumbbell OR One kettlebell · Fixed handhold · Clear standing space",
    "requires": [
      [
        "single_dumbbell",
        "single_kettlebell"
      ],
      "fixed_handhold",
      "standing_space"
    ],
    "aliases": [
      "supported single leg rdl",
      "hand supported rdl",
      "supported single leg kb rdl"
    ],
    "cue": "Hips back; stop before losing trunk or pelvis control.",
    "setup": "hinge on one standing leg with the trailing leg lifted; the hand on the standing-leg side rests on a fixed support and the opposite hand holds one weight.",
    "cues": [
      "Keep a soft knee bend and move the hips back as the torso tips forward.",
      "Control the pelvis and trunk; stop before you lose the intended position.",
      "Move through the hip to return to standing without leaning backward.",
      "hinge under control, using the support deliberately while keeping the pelvis oriented through the movement."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "ACE's single-arm, single-leg RDL",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/127/single-arm-single-leg-romanian-dead-lift/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "hinge"
  },
  {
    "id": "two_db_single_leg_rdl",
    "name": "Single-leg RDL — two dumbbells",
    "focus": "Hip-hinge work with attention to trunk and pelvis control.",
    "expect": "Hinge on one leg with a dumbbell in each hand.",
    "needs": "Dumbbell pair · Clear standing space",
    "requires": [
      "dumbbells",
      "standing_space"
    ],
    "aliases": [
      "two dumbbell single leg rdl",
      "single leg rdl two db"
    ],
    "cue": "Hips back; stop before losing trunk or pelvis control.",
    "setup": "one working foot on the floor, trailing leg lifted behind, with one dumbbell in each hand and no external support.",
    "cues": [
      "Keep a soft knee bend and move the hips back as the torso tips forward.",
      "Control the pelvis and trunk; stop before you lose the intended position.",
      "Move through the hip to return to standing without leaning backward.",
      "move the hips and trailing leg under control while the weights travel with the arms long; return without twisting the pelvis."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "ACE's single-arm, single-leg RDL",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/127/single-arm-single-leg-romanian-dead-lift/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "hinge"
  },
  {
    "id": "db_split_squat",
    "name": "Dumbbell split squat — weights at sides",
    "focus": "Leg and hip work from a stationary split stance.",
    "expect": "A stationary split squat with a dumbbell hanging at each side.",
    "needs": "Dumbbell pair · Clear standing space",
    "requires": [
      "dumbbells",
      "standing_space"
    ],
    "aliases": [
      "db split squat",
      "dumbbell split squat"
    ],
    "cue": "Keep the stance steady and control the descent.",
    "setup": "stationary split stance, one dumbbell hanging at each side, rear forefoot on the floor.",
    "cues": [
      "Keep the stated foot contacts and control the trunk as the hips and knees bend.",
      "Lower through a range you can maintain.",
      "Rise smoothly through the legs, then change sides deliberately.",
      "keep the stance in place and the weights steady as you lower under control and rise; change sides deliberately."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "split-squat section in ACE's squat variations",
        "url": "https://www.acefitness.org/resources/everyone/blog/5564/squat-variations-6-effective-squat-variations-to-try/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "split_squat"
  },
  {
    "id": "goblet_split_squat",
    "name": "Goblet split squat",
    "focus": "Leg and hip work from a stationary split stance.",
    "expect": "A stationary split squat with one weight held at the chest.",
    "needs": "One dumbbell OR One kettlebell · Clear standing space",
    "requires": [
      [
        "goblet_dumbbell",
        "goblet_kettlebell"
      ],
      "standing_space"
    ],
    "aliases": [
      "goblet split squat"
    ],
    "cue": "Keep the stance steady and control the descent.",
    "setup": "the same stationary floor split stance, holding one dumbbell or kettlebell at the chest with both hands.",
    "cues": [
      "Keep the stated foot contacts and control the trunk as the hips and knees bend.",
      "Lower through a range you can maintain.",
      "Rise smoothly through the legs, then change sides deliberately.",
      "keep the weight near the chest and the feet in place while lowering and rising with control."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "ACE's goblet-loaded Bulgarian split squat",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/366/bulgarian-split-squat/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "split_squat"
  },
  {
    "id": "smith_split_squat",
    "name": "Smith-machine split squat — feet on floor",
    "focus": "Leg and hip work from a stationary split stance.",
    "expect": "A stationary split squat with both feet on the floor and a guided bar.",
    "needs": "Smith machine · Clear standing space",
    "requires": [
      "smith_machine",
      "standing_space"
    ],
    "aliases": [
      "smith split squat",
      "smith floor split squat"
    ],
    "cue": "Keep the stance steady and control the descent.",
    "setup": "Smith bar on the upper back, stationary split stance, rear forefoot on the floor; no rear-foot elevation.",
    "cues": [
      "Keep the stated foot contacts and control the trunk as the hips and knees bend.",
      "Lower through a range you can maintain.",
      "Rise smoothly through the legs, then change sides deliberately.",
      "keep the feet in place and lower and rise under control along a comfortable, workable bar path."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "MuscleWiki's Smith-machine split-squat entry",
        "url": "https://musclewiki.com/exercise/smith-machine-split-squat",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "split_squat"
  },
  {
    "id": "supported_db_split_squat",
    "name": "Hand-supported dumbbell split squat",
    "focus": "Leg and hip work from a stationary split stance.",
    "expect": "A stationary split squat using one dumbbell and a fixed handhold.",
    "needs": "One dumbbell · Fixed handhold · Clear standing space",
    "requires": [
      "single_dumbbell",
      "fixed_handhold",
      "standing_space"
    ],
    "aliases": [
      "supported dumbbell split squat",
      "hand supported split squat"
    ],
    "cue": "Keep the stance steady and control the descent.",
    "setup": "stationary floor split stance; hold one dumbbell at the side of the front leg and use the opposite hand on a fixed support.",
    "cues": [
      "Keep the stated foot contacts and control the trunk as the hips and knees bend.",
      "Lower through a range you can maintain.",
      "Rise smoothly through the legs, then change sides deliberately.",
      "keep the feet set and the pelvis controlled, using the support deliberately rather than pulling yourself up unintentionally."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "Fit For Golf's assisted split squat",
        "url": "https://fitforgolf.blog/golf-exercises/assisted-split-squat/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "split_squat"
  },
  {
    "id": "bodyweight_split_squat",
    "name": "Bodyweight floor split squat",
    "focus": "Leg and hip work from a stationary split stance.",
    "expect": "A stationary bodyweight split squat with both feet on the floor.",
    "needs": "Clear standing space",
    "requires": [
      "standing_space"
    ],
    "aliases": [
      "bodyweight split squat",
      "floor split squat"
    ],
    "cue": "Keep the stance steady and control the descent.",
    "setup": "stationary split stance, rear forefoot on the floor, no external load and no hand support.",
    "cues": [
      "Keep the stated foot contacts and control the trunk as the hips and knees bend.",
      "Lower through a range you can maintain.",
      "Rise smoothly through the legs, then change sides deliberately.",
      "hold the stance, lower under control, and rise without stepping between repetitions."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "ACE's split-squat description",
        "url": "https://www.acefitness.org/resources/everyone/blog/5564/squat-variations-6-effective-squat-variations-to-try/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      },
      {
        "label": "ACE's Bulgarian split squat",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/366/bulgarian-split-squat/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "split_squat"
  },
  {
    "id": "single_leg_hip_thrust",
    "name": "Bodyweight single-leg hip thrust",
    "focus": "Hip extension with supported upper-back contact.",
    "expect": "Lift the hips with one foot planted and the upper back elevated.",
    "needs": "Secured upper-back support · Clear floor space",
    "requires": [
      "shoulder_support",
      "bridge_space"
    ],
    "aliases": [
      "single leg hip thrust",
      "one leg hip thrust"
    ],
    "cue": "Keep the pelvis steady; avoid arching for extra height.",
    "setup": "upper back supported near the lower shoulder blades on a secured bench/platform; working foot on the floor, other foot lifted. No foot elevation or added load is included.",
    "cues": [
      "Press through the specified foot contacts and raise the pelvis with control.",
      "Keep the pelvis steady without arching the lower back for extra height.",
      "Lower smoothly while retaining the stated support contacts.",
      "move the pelvis under control without twisting or gaining height by arching the back; use a range you can maintain."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "Contreras on bridge and hip-thrust variations",
        "url": "https://bretcontreras.com/hip-thrust-wiki-page/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      },
      {
        "label": "single-leg bridges versus hip thrusts",
        "url": "https://bretcontreras.com/abc-single-leg-glute-bridges-vs-single-leg-hip-thrusts/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "hip_extension"
  },
  {
    "id": "kickstand_bridge",
    "name": "Kickstand floor glute bridge",
    "focus": "Hip extension with supported upper-back contact.",
    "expect": "A floor bridge with the farther heel providing assistance.",
    "needs": "Clear floor space",
    "requires": [
      "bridge_space"
    ],
    "aliases": [
      "kickstand glute bridge",
      "kickstand bridge",
      "b stance bridge",
      "staggered bridge"
    ],
    "cue": "Keep the pelvis steady; avoid arching for extra height.",
    "setup": "upper back on the floor. Keep the intended working foot flat; put the other heel a little farther forward as an assisting contact. No external load.",
    "cues": [
      "Press through the specified foot contacts and raise the pelvis with control.",
      "Keep the pelvis steady without arching the lower back for extra height.",
      "Lower smoothly while retaining the stated support contacts.",
      "emphasize the nearer planted foot while keeping the pelvis controlled, and use the farther heel for assistance; switch the arrangement to explore the other side."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "Contreras's variation taxonomy",
        "url": "https://bretcontreras.com/hip-thrust-wiki-page/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      },
      {
        "label": "Thrive's B-stance bridge",
        "url": "https://thrivept.net/exercises/barbell-b-stance-glute-bridge",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "hip_extension"
  },
  {
    "id": "bridge_march",
    "name": "Floor glute bridge march",
    "focus": "Hip extension with supported upper-back contact.",
    "expect": "Hold the hips lifted and alternate raising one foot at a time.",
    "needs": "Clear floor space",
    "requires": [
      "bridge_space"
    ],
    "aliases": [
      "bridge march",
      "glute march"
    ],
    "cue": "Keep the hips lifted and steady while changing feet.",
    "setup": "lift into a two-leg floor bridge, keep the pelvis elevated, then alternately lift and replace one foot with the knee bent.",
    "cues": [
      "Lift into a two-foot bridge and hold the pelvis steady.",
      "Lift one foot with the knee bent, then replace it gently.",
      "Alternate sides without letting the pelvis drop or twist; lower the hips to finish."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "Contreras's glute march",
        "url": "https://bretcontreras.com/the-glute-march/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "hip_extension"
  },
  {
    "id": "foot_elevated_bridge",
    "name": "Single-leg foot-elevated bridge",
    "focus": "Hip extension with supported upper-back contact.",
    "expect": "A single-leg bridge with the foot raised and upper back on the floor.",
    "needs": "Stable foot platform · Clear floor space",
    "requires": [
      "foot_platform",
      "bridge_space"
    ],
    "aliases": [
      "single leg elevated foot bridge",
      "foot elevated glute bridge"
    ],
    "cue": "Keep the pelvis steady; avoid arching for extra height.",
    "setup": "upper back stays on the floor; the working foot rests on a stable low platform with the knee bent; the other leg is lifted. No added load.",
    "cues": [
      "Press through the specified foot contacts and raise the pelvis with control.",
      "Keep the pelvis steady without arching the lower back for extra height.",
      "Lower smoothly while retaining the stated support contacts.",
      "lift through the working side without rotating the pelvis or substituting excessive lower-back extension."
    ],
    "context": "The working foot is raised; the upper back remains on the floor. This is not a shoulder-elevated hip thrust or a hamstring curl.",
    "references": [
      {
        "label": "Contreras's bridge/thrust variation catalogue",
        "url": "https://bretcontreras.com/the-evolution-of-the-hip-thrust/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "hip_extension"
  },
  {
    "id": "band_abduction_bridge",
    "name": "Floor bridge with thigh-band abduction",
    "focus": "Hip extension with supported upper-back contact.",
    "expect": "Bridge on both feet, then open and return the knees against a band.",
    "needs": "Thigh loop band · Clear floor space",
    "requires": [
      "thigh_band",
      "bridge_space"
    ],
    "aliases": [
      "banded glute bridge",
      "bridge with abduction",
      "knees banded bridge"
    ],
    "cue": "Keep both feet planted as the knees move outward and return.",
    "setup": "upper back on the floor, both feet planted, loop band around the thighs above the knees. Lift into a bridge, move the knees outward against the band under control, return them, then lower the hips.",
    "cues": [
      "Lift into a bridge with both feet planted and the band above the knees.",
      "Move the knees outward against the band under control while keeping the pelvis steady.",
      "Return the knees, then lower the hips without arching the lower back."
    ],
    "context": "Both feet stay planted. This version actively opens and returns the knees at the top. Maintaining band tension throughout a bridge is a related but different execution.",
    "references": [
      {
        "label": "Physitrack's resisted-abduction bridge",
        "url": "https://uk.physitrack.com/home-exercise-video/bridging",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "hip_extension"
  },
  {
    "id": "reverse_lunge",
    "name": "Bodyweight reverse lunge",
    "focus": "Side-specific leg work with controlled hip and knee movement.",
    "expect": "Step backward, lower into a split stance, and return to standing.",
    "needs": "Clear standing space",
    "requires": [
      "standing_space"
    ],
    "aliases": [
      "reverse lunge",
      "backward lunge"
    ],
    "cue": "Step back under control, then return to standing.",
    "setup": "begin standing, step one foot backward into a split stance, lower, and return to standing; no added load or rotation.",
    "cues": [
      "Step one foot backward into a controlled split stance.",
      "Bend the hips and knees to lower without rushing.",
      "Return to standing, then repeat or change sides deliberately."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "ACE's reverse-lunge description",
        "url": "https://www.acefitness.org/resources/everyone/blog/6971/5-lunge-variations-for-leaner-legs/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "split_squat"
  },
  {
    "id": "front_elevated_split_squat",
    "name": "Bodyweight front-foot-elevated split squat",
    "focus": "Side-specific leg work with controlled hip and knee movement.",
    "expect": "A bodyweight split squat with the whole front foot on a low platform.",
    "needs": "Low front-foot platform · Clear standing space",
    "requires": [
      "front_foot_platform",
      "standing_space"
    ],
    "aliases": [
      "front foot elevated split squat",
      "ffe split squat"
    ],
    "cue": "Keep the stance steady and control the descent.",
    "setup": "the entire front foot rests on a low stable platform; the rear forefoot stays on the floor in a stationary split stance. No added load or hand support.",
    "cues": [
      "Keep the stated foot contacts and control the trunk as the hips and knees bend.",
      "Lower through a range you can maintain.",
      "Rise smoothly through the legs, then change sides deliberately.",
      "keep the front foot supported and the stance fixed while lowering and rising smoothly."
    ],
    "context": "The entire front foot is supported on a low platform; this is not heel-only elevation. Rear forefoot stays on the floor.",
    "references": [
      {
        "label": "Priority Strength's front-foot-elevation explanation",
        "url": "https://prioritystrength.com/all-resources/front-foot-elevated-split-squat-why-the-elevation/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "split_squat"
  },
  {
    "id": "supported_rfess",
    "name": "Hand-supported rear-foot-elevated split squat",
    "focus": "Side-specific leg work with controlled hip and knee movement.",
    "expect": "A bodyweight split squat with rear-foot elevation and a fixed handhold.",
    "needs": "Stable rear-foot support · Fixed handhold · Clear standing space",
    "requires": [
      "rear_foot_support",
      "fixed_handhold",
      "standing_space"
    ],
    "aliases": [
      "supported bulgarian split squat",
      "supported rfess"
    ],
    "cue": "Keep the stance steady and control the descent.",
    "setup": "retain the rear-foot support and front foot on the floor, adding a hand on a fixed support. No external load.",
    "cues": [
      "Keep the stated foot contacts and control the trunk as the hips and knees bend.",
      "Lower through a range you can maintain.",
      "Rise smoothly through the legs, then change sides deliberately.",
      "keep the stance set and use the hand deliberately while moving under control through the legs."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "Rehab Hero's assisted split squat",
        "url": "https://www.rehabhero.ca/exercise/assisted-split-squat",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "split_squat"
  },
  {
    "id": "step_up",
    "name": "Bodyweight step-up",
    "focus": "Side-specific leg work with controlled hip and knee movement.",
    "expect": "Step onto a stable platform and lower back down under control.",
    "needs": "Stable step-up platform · Clear standing space",
    "requires": [
      "step_platform",
      "standing_space"
    ],
    "aliases": [
      "step up",
      "bodyweight step up"
    ],
    "cue": "Plant the whole lead foot and control the step back down.",
    "setup": "face a stable low platform, place one whole foot on it, step up to bring the trailing foot alongside, then step back down under control. No added load or jumping.",
    "cues": [
      "Place the whole lead foot on the stable platform.",
      "Step up smoothly, bringing the trailing foot alongside.",
      "Step back down under control without jumping or bouncing."
    ],
    "context": "Choose an execution and load you can control. Similarity to another exercise does not establish an equivalent load, range, or training dose.",
    "references": [
      {
        "label": "ACE's step-up",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/28/step-up/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08",
    "family": "split_squat"
  },
  {
    "id": "barbell_split_squat",
    "name": "Barbell split squat — feet on floor",
    "focus": "Loaded leg work in a stationary split stance.",
    "expect": "Bar on the upper back; rear forefoot stays on the floor.",
    "needs": "Barbell · Rack with safeties · Clear standing space",
    "requires": [
      "barbell_load",
      "squat_rack",
      "standing_space"
    ],
    "aliases": [
      "bb split squat",
      "barbell split squat",
      "back loaded split squat"
    ],
    "cue": "Keep the stance steady and control the descent.",
    "setup": "Set a bar across the upper back using a suitable rack and safety supports. Establish a stationary split stance with both feet contacting the floor; the rear heel may lift.",
    "cues": [
      "Keep the bar steady and bend the hips and knees to lower under control.",
      "Rise through the legs without stepping or bouncing.",
      "Return the bar to the rack under control; set up the other side deliberately."
    ],
    "context": "This is a floor split squat, not a stepping lunge or rear-foot-elevated variation. Choose a load you can control; no load is inferred from another exercise.",
    "references": [
      {
        "label": "split-squat section in ACE's squat variations",
        "url": "https://www.acefitness.org/resources/everyone/blog/5564/squat-variations-6-effective-squat-variations-to-try/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "family": "split_squat",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08"
  },
  {
    "id": "single_leg_floor_bridge",
    "name": "Single-leg floor glute bridge",
    "focus": "Hip extension with one foot planted and the upper back on the floor.",
    "expect": "One leg contributes while the pelvis stays controlled.",
    "needs": "Clear floor space",
    "requires": [
      "bridge_space"
    ],
    "aliases": [
      "single leg bridge",
      "single leg floor bridge",
      "single leg glute bridge",
      "one leg bridge"
    ],
    "cue": "Keep the pelvis steady; avoid arching for extra height.",
    "setup": "Lie on your back with one knee bent and its foot planted. Lift the other foot off the floor; keep the upper back supported. No external weight is used.",
    "cues": [
      "Press through the planted foot to raise the hips while keeping the pelvis controlled.",
      "Stop before extra height comes from arching the lower back.",
      "Lower smoothly, then change sides deliberately."
    ],
    "context": "Only one foot assists this version. A kickstand or two-foot bridge changes that task.",
    "references": [
      {
        "label": "Contreras on bridge and hip-thrust variations",
        "url": "https://bretcontreras.com/hip-thrust-wiki-page/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      },
      {
        "label": "single-leg bridges versus hip thrusts",
        "url": "https://bretcontreras.com/abc-single-leg-glute-bridges-vs-single-leg-hip-thrusts/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "family": "hip_extension",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08"
  },
  {
    "id": "bodyweight_rfess",
    "name": "Bodyweight rear-foot-elevated split squat",
    "focus": "Leg and hip work from a split stance with the rear foot raised.",
    "expect": "No added weight; the stance remains fixed.",
    "needs": "Stable rear-foot support · Clear standing space",
    "requires": [
      "rear_foot_support",
      "standing_space"
    ],
    "aliases": [
      "bodyweight rear foot elevated split squat",
      "bodyweight bulgarian split squat",
      "unloaded rfess",
      "bodyweight rfess"
    ],
    "cue": "Keep the stance steady and control the descent.",
    "setup": "Place the rear foot on a stable support behind you and plant the front foot on the floor. Establish a workable stationary stance with no external weight.",
    "cues": [
      "Bend the hips and knees to lower while keeping the pelvis and trunk controlled.",
      "Use a range you can maintain rather than forcing a depth.",
      "Rise without hopping the front foot; change sides deliberately."
    ],
    "context": "This entry explicitly uses bodyweight. The name Bulgarian split squat or RFESS alone does not establish whether an uploaded workout intends external loading.",
    "references": [
      {
        "label": "ACE's split-squat description",
        "url": "https://www.acefitness.org/resources/everyone/blog/5564/squat-variations-6-effective-squat-variations-to-try/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      },
      {
        "label": "ACE's Bulgarian split squat",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/366/bulgarian-split-squat/",
        "scope": "Supports the named setup or component; the comparison is reviewed Gym Swap coaching synthesis, not a claim of equivalence or individual suitability."
      }
    ],
    "family": "split_squat",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    },
    "sourceChecked": "2026-10-08"
  }
];
export const day1Comparisons = [
  {
    "reviewId": "1A",
    "originalId": "goblet_squat",
    "originalName": "Goblet squat",
    "cardId": "db_front_squat",
    "source": "squats",
    "similarity": "close",
    "keeps": "A standing squat with the load in front of the body.",
    "changes": "Two weights at the shoulders replace one goblet hold.",
    "load": "Getting the weights to your shoulders may limit the setup.",
    "why": "A standing squat with the load in front of the body.",
    "detail": "two shoulder-level weights replace one weight held at the chest.",
    "check": "getting and keeping the dumbbells at shoulder height may be the limiting task; do not assume that two dumbbells mean the same total load or an easier setup.",
    "basis": "Reviewed Gym Swap comparison 1A",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "1B",
    "originalId": "goblet_squat",
    "originalName": "Goblet squat",
    "cardId": "barbell_front_squat",
    "source": "squats",
    "similarity": "close",
    "keeps": "A standing squat with the load in front of the torso.",
    "changes": "A front-racked bar changes the hold and setup.",
    "load": "Requires a front-rack position you can maintain.",
    "why": "A standing squat with the load in front of the torso.",
    "detail": "the shoulders support a shared bar; its rack position and handling differ from holding a goblet weight.",
    "check": "this requires a front-rack setup the user can maintain; it is not a simple grip-only substitution for everyone.",
    "basis": "Reviewed Gym Swap comparison 1B",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "1C",
    "originalId": "goblet_squat",
    "originalName": "Goblet squat",
    "cardId": "landmine_squat",
    "source": "squats",
    "similarity": "some",
    "keeps": "A standing two-leg squat with the hands supporting a load in front of the torso.",
    "changes": "The anchored bar moves through an arc.",
    "load": "Use a secured landmine attachment; resistance is not equivalent.",
    "why": "A standing two-leg squat with the hands supporting a load in front of the torso.",
    "detail": "the anchored bar follows an arc and changes the direction of resistance compared with a freely held goblet weight.",
    "check": "a loose bar propped in a corner is not the specified setup. The front-held position alone does not make the resistance equivalent.",
    "basis": "Reviewed Gym Swap comparison 1C",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "1D",
    "originalId": "goblet_squat",
    "originalName": "Goblet squat",
    "cardId": "high_bar_squat",
    "source": "squats",
    "similarity": "some",
    "keeps": "A standing loaded two-leg squat with hip and knee bending/straightening.",
    "changes": "The load rests on the upper back instead of the hands.",
    "load": "Check the rack, safeties, and bar position before loading.",
    "why": "A standing loaded two-leg squat with hip and knee bending/straightening.",
    "detail": "the upper back carries the load instead of the hands in front; torso positioning and handling demands change.",
    "check": "this does not preserve the goblet hold or its front-loading task. Familiarity with racking and the available bar's minimum weight matters.",
    "basis": "Reviewed Gym Swap comparison 1D",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "1E",
    "originalId": "goblet_squat",
    "originalName": "Goblet squat",
    "cardId": "bodyweight_squat",
    "source": "squats",
    "similarity": "some",
    "keeps": "A standing two-leg squat with coordinated hip and knee motion.",
    "changes": "Removes the goblet load; standing control remains.",
    "load": "Does not preserve the original added load.",
    "why": "A standing two-leg squat with coordinated hip and knee motion.",
    "detail": "removes the goblet weight and the work of holding it; external loading no longer matches the original.",
    "check": "a no-added-weight option, not equivalent to the loaded endurance prescription. Do not silently increase reps or change tempo to compensate.",
    "basis": "Reviewed Gym Swap comparison 1E",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "1F",
    "originalId": "goblet_squat",
    "originalName": "Goblet squat",
    "cardId": "trx_squat",
    "source": "squats",
    "similarity": "broader",
    "keeps": "Two-leg squatting through the hips and knees.",
    "changes": "Adds hand assistance and removes the goblet load.",
    "load": "Assistance varies; this is not an equivalent loaded squat.",
    "why": "Two-leg squatting through the hips and knees.",
    "detail": "removes the goblet load and introduces hand support; the user can share some support with the straps.",
    "check": "the amount of assistance varies. This is not an equivalent loaded squat or a guarantee of lower overall effort in every execution.",
    "basis": "Reviewed Gym Swap comparison 1F",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "1G",
    "originalId": "goblet_squat",
    "originalName": "Goblet squat",
    "cardId": "ball_wall_squat",
    "source": "squats",
    "similarity": "broader",
    "keeps": "Two-leg hip-and-knee bending and straightening.",
    "changes": "Wall support replaces free-standing balance; no added load.",
    "load": "Wall support changes the task; no added weight is used.",
    "why": "Two-leg hip-and-knee bending and straightening.",
    "detail": "wall/ball support and foot placement change the balance task; the goblet load is removed.",
    "check": "this is a supported squat, not standing on a ball. Bodyweight loading and wall support do not establish an equivalent training dose.",
    "basis": "Reviewed Gym Swap comparison 1G",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "1H",
    "originalId": "goblet_squat",
    "originalName": "Goblet squat",
    "cardId": "leg_press",
    "source": "squats",
    "similarity": "broader",
    "keeps": "Resisted hip and knee extension using both legs.",
    "changes": "Seated machine support replaces a standing squat.",
    "load": "Machine weights do not convert to goblet weight.",
    "why": "Resisted hip and knee extension using both legs.",
    "detail": "seated machine support replaces a free-standing squat and removes the front-held weight. The trunk-support task and resistance path differ.",
    "check": "this is a broader alternative. An angled plate-loaded sled is a recognizable related setup, but its start position, stops, and starting resistance need variant-specific instructions; neither machine load converts to goblet weight.",
    "basis": "Reviewed Gym Swap comparison 1H",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "1I",
    "originalId": "goblet_squat",
    "originalName": "Goblet squat",
    "cardId": "hack_squat",
    "source": "squats",
    "similarity": "broader",
    "keeps": "Loaded two-leg hip and knee bending/straightening.",
    "changes": "A supported linear carriage guides the movement.",
    "load": "Use this machine’s release/stops; starting resistance varies.",
    "why": "Loaded two-leg hip and knee bending/straightening.",
    "detail": "a guided, supported carriage replaces the freely held goblet weight and standing balance task.",
    "check": "this card means a conventional forward-facing sled setup, not a barbell hack squat or reverse-facing machine variation. Sled resistance, platform angle, and usable range vary.",
    "basis": "Reviewed Gym Swap comparison 1I",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "1J",
    "originalId": "goblet_squat",
    "originalName": "Goblet squat",
    "cardId": "v_squat",
    "source": "squats",
    "similarity": "broader",
    "keeps": "A loaded two-leg squat action.",
    "changes": "A supported machine guides the load through an arc.",
    "load": "This is the back-supported setup, not every squat machine.",
    "why": "A loaded two-leg squat action.",
    "detail": "machine support and an arc-shaped path replace the independent goblet load and its freely chosen path.",
    "check": "a V-squat is not simply another name for every hack, pendulum, or angled squat machine. This card covers the specified supported setup; reverse-facing versions and unusual models remain outside it.",
    "basis": "Reviewed Gym Swap comparison 1J",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "1K",
    "originalId": "goblet_squat",
    "originalName": "Goblet squat",
    "cardId": "bodyweight_box_squat",
    "source": "squats",
    "similarity": "broader",
    "keeps": "A two-leg squat and return to standing.",
    "changes": "Removes the weight and adds controlled seated contact.",
    "load": "Controlled seated contact, not a touch-only or barbell box squat.",
    "why": "A two-leg squat and return to standing.",
    "detail": "removes the goblet load and introduces a defined bottom surface and brief support; surface height sets the descent endpoint.",
    "check": "Bodyweight with controlled seated contact, not a touch-only or barbell box squat.",
    "basis": "Reviewed Gym Swap comparison 1K",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "1L",
    "originalId": "goblet_squat",
    "originalName": "Goblet squat",
    "cardId": "goblet_box_squat",
    "source": "squats",
    "similarity": "some",
    "keeps": "The standing squat, two-leg stance, and front-held goblet load.",
    "changes": "Keeps the goblet hold; a box defines the bottom position.",
    "load": "Box height and contact change the task; load does not transfer automatically.",
    "why": "The standing squat, two-leg stance, and front-held goblet load.",
    "detail": "the box defines the bottom position and provides brief support. Height and contact style affect how much the movement changes.",
    "check": "adding a box does not automatically make the squat easier, safer, or suitable at the original load. Do not silently impose a new pause duration or prescription.",
    "basis": "Reviewed Gym Swap comparison 1L",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "1M",
    "originalId": "goblet_squat",
    "originalName": "Goblet squat",
    "cardId": "low_bar_squat",
    "source": "squats",
    "similarity": "some",
    "keeps": "A free-standing loaded squat with two-foot support.",
    "changes": "Back loading and the lower bar shelf change the setup.",
    "load": "Requires a workable low-bar shelf and grip.",
    "why": "A free-standing loaded squat with two-foot support.",
    "detail": "moves the load from the hands at the chest to the back. Bar position, grip/setup, and torso/hip mechanics differ from a goblet squat and from a high-bar back squat.",
    "check": "use a workable shoulder/grip position and load; neither greater loading potential nor a similar name establishes equivalent demands.",
    "basis": "Reviewed Gym Swap comparison 1M",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "2A",
    "originalId": "dumbbell_rdl",
    "originalName": "Dumbbell Romanian deadlift",
    "cardId": "barbell_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "close",
    "keeps": "A loaded standing hip hinge with both feet planted.",
    "changes": "One shared bar replaces two independent weights.",
    "load": "Check the bar’s minimum weight; do not convert dumbbell loads directly.",
    "why": "A loaded standing hip hinge with both feet planted.",
    "detail": "a shared bar replaces independent dumbbells and constrains hand position and the weight's path relative to the legs.",
    "check": "the available bar may be too heavy at its minimum; dumbbell weights do not automatically determine the barbell load.",
    "basis": "Reviewed Gym Swap comparison 2A",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "2B",
    "originalId": "dumbbell_rdl",
    "originalName": "Dumbbell Romanian deadlift",
    "cardId": "kettlebell_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "close",
    "keeps": "A two-foot loaded hinge with the weight held below the torso.",
    "changes": "One handle and the available bell size change loading choices.",
    "load": "A standing-start hinge, not a swing or floor-start deadlift.",
    "why": "A two-foot loaded hinge with the weight held below the torso.",
    "detail": "one shared handle replaces two independently held weights; available kettlebell sizes can limit loading choices.",
    "check": "this is the standing-start RDL, not a kettlebell swing or a floor-start deadlift. Do not force the bell to the floor.",
    "basis": "Reviewed Gym Swap comparison 2B",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "2C",
    "originalId": "dumbbell_rdl",
    "originalName": "Dumbbell Romanian deadlift",
    "cardId": "cable_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A two-foot standing hip hinge with resistance held through the hands.",
    "changes": "The cable pulls forward and down rather than vertically.",
    "load": "Pulley position matters; constant tension is not constant hip torque.",
    "why": "A two-foot standing hip hinge with resistance held through the hands.",
    "detail": "the cable pulls toward a point in front and below instead of the dumbbells pulling vertically; hand independence is also lost.",
    "check": "pulley height and distance matter. Do not describe constant cable tension as constant hip torque, or convert the stack number into dumbbell weight.",
    "basis": "Reviewed Gym Swap comparison 2C",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "2D",
    "originalId": "dumbbell_rdl",
    "originalName": "Dumbbell Romanian deadlift",
    "cardId": "smith_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A loaded two-foot standing hinge with the load held in the hands.",
    "changes": "One guided bar replaces independently held weights.",
    "load": "Check rail path and stops; do not assume a 45 lb bar.",
    "why": "A loaded two-foot standing hinge with the load held in the hands.",
    "detail": "independent dumbbells become one guided bar; the lifter no longer chooses the bar's path freely.",
    "check": "rail angle, stops, and starting resistance vary. Do not assume a 45 lb bar, identical setup on every machine, or automatic ease/safety.",
    "basis": "Reviewed Gym Swap comparison 2D",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "2E",
    "originalId": "dumbbell_rdl",
    "originalName": "Dumbbell Romanian deadlift",
    "cardId": "band_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A two-foot resisted hip hinge with the resistance held in the hands.",
    "changes": "Elastic tension changes as the band stretches.",
    "load": "Band length and tension must work through the intended range.",
    "why": "A two-foot resisted hip hinge with the resistance held in the hands.",
    "detail": "elastic tension changes with stretch; this does not reproduce the dumbbells' resistance profile or load increments.",
    "check": "band length, grip, and initial tension determine the usable range. Do not infer a dumbbell-equivalent load or use a band that goes loose or exceeds its intended stretch.",
    "basis": "Reviewed Gym Swap comparison 2E",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "2F",
    "originalId": "dumbbell_rdl",
    "originalName": "Dumbbell Romanian deadlift",
    "cardId": "tippy_bird",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Hinge practice through hip movement with trunk control.",
    "changes": "Unloaded single-leg balance replaces a loaded two-leg hinge.",
    "load": "Movement practice, not an equivalent loaded RDL.",
    "why": "Hinge practice through hip movement with trunk control.",
    "detail": "one-leg balance and an unloaded reach replace a loaded two-foot RDL.",
    "check": "Movement practice, not an equivalent loaded RDL.",
    "basis": "Reviewed Gym Swap comparison 2F",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "2G",
    "originalId": "dumbbell_rdl",
    "originalName": "Dumbbell Romanian deadlift",
    "cardId": "single_leg_db_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "A standing loaded hip hinge with hand-held resistance.",
    "changes": "One-leg support and opposite-hand loading change control.",
    "load": "Balance may limit load; do not automatically halve the original weight.",
    "why": "A standing loaded hip hinge with hand-held resistance.",
    "detail": "single-leg support and one-sided loading replace the bilateral stance and two weights.",
    "check": "balance and pelvis control can limit usable loading. Do not halve the original weight or transfer its rep prescription automatically.",
    "basis": "Reviewed Gym Swap comparison 2G",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "2H",
    "originalId": "dumbbell_rdl",
    "originalName": "Dumbbell Romanian deadlift",
    "cardId": "supported_single_leg_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "A loaded hip hinge with weight in the hand.",
    "changes": "One-leg loading with hand support replaces two-leg support.",
    "load": "Requires a fixed handhold; the trailing foot stays lifted.",
    "why": "A loaded hip hinge with weight in the hand.",
    "detail": "one-leg loading replaces two-leg loading; hand contact reduces the unsupported balance task and can supply assistance.",
    "check": "this is not a kickstand hinge with the trailing toes on the floor. Support and grip position need to work throughout the range; hand assistance is not automatically a fixed amount.",
    "basis": "Reviewed Gym Swap comparison 2H",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "2I",
    "originalId": "dumbbell_rdl",
    "originalName": "Dumbbell Romanian deadlift",
    "cardId": "two_db_single_leg_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Independent hand-held weights and a loaded standing hinge.",
    "changes": "Keeps two weights but changes to one-leg support.",
    "load": "Two weights do not restore the original two-foot support.",
    "why": "Independent hand-held weights and a loaded standing hinge.",
    "detail": "one-leg support replaces the original's two-foot base; balance and pelvis control change even though the implements stay the same.",
    "check": "two weights do not restore bilateral support or establish that this is easier than the one-weight version.",
    "basis": "Reviewed Gym Swap comparison 2I",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "3A",
    "originalId": "barbell_split_squat",
    "originalName": "Barbell split squat — feet on floor",
    "cardId": "db_split_squat",
    "source": "squats",
    "similarity": "close",
    "keeps": "The stationary split-stance hip-and-knee movement.",
    "changes": "The weights hang at the sides instead of resting on the back.",
    "load": "Grip and available dumbbell weights may limit loading.",
    "why": "The stationary split-stance hip-and-knee movement.",
    "detail": "weights move from the upper back to the hands at the sides.",
    "check": "grip and available dumbbell weights may limit the option; the barbell's prescribed load does not transfer automatically.",
    "basis": "Reviewed Gym Swap comparison 3A",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "3B",
    "originalId": "barbell_split_squat",
    "originalName": "Barbell split squat — feet on floor",
    "cardId": "goblet_split_squat",
    "source": "squats",
    "similarity": "close",
    "keeps": "A stationary split squat without rear-foot elevation.",
    "changes": "A chest-held weight replaces the back-loaded bar.",
    "load": "Both feet stay on the floor; the rear foot is not elevated.",
    "why": "A stationary split squat without rear-foot elevation.",
    "detail": "front-held loading replaces the bar on the back; holding capacity can become the constraint.",
    "check": "this is not a goblet squat with feet side by side, and not a goblet rear-foot-elevated split squat.",
    "basis": "Reviewed Gym Swap comparison 3B",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "3C",
    "originalId": "barbell_split_squat",
    "originalName": "Barbell split squat — feet on floor",
    "cardId": "smith_split_squat",
    "source": "squats",
    "similarity": "some",
    "keeps": "A back-loaded stationary split squat with both feet contacting the floor.",
    "changes": "Rails guide the back-loaded bar.",
    "load": "Stance must work with this machine’s rail path.",
    "why": "A back-loaded stationary split squat with both feet contacting the floor.",
    "detail": "rails guide the bar, changing the stabilization task and constraining its path.",
    "check": "establish a stance compatible with the actual machine. This is not a Smith Bulgarian split squat; no bench is required for this version.",
    "basis": "Reviewed Gym Swap comparison 3C",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "3D",
    "originalId": "barbell_split_squat",
    "originalName": "Barbell split squat — feet on floor",
    "cardId": "supported_db_split_squat",
    "source": "squats",
    "similarity": "some",
    "keeps": "A loaded stationary split-stance hip-and-knee movement.",
    "changes": "One side-held weight and hand support change the task.",
    "load": "Load and support sides are specified; changing them changes the task.",
    "why": "A loaded stationary split-stance hip-and-knee movement.",
    "detail": "a single side-held weight replaces back loading, while the free hand provides balance support and potentially assistance.",
    "check": "this is a specified one-sided loading/support arrangement. Changing which hand carries the weight is a separate meaningful setup choice; do not assume identical torso demands.",
    "basis": "Reviewed Gym Swap comparison 3D",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "3E",
    "originalId": "barbell_split_squat",
    "originalName": "Barbell split squat — feet on floor",
    "cardId": "bodyweight_split_squat",
    "source": "squats",
    "similarity": "some",
    "keeps": "The original's stationary stance and both feet on the floor.",
    "changes": "Removes the bar while retaining the stationary floor stance.",
    "load": "Does not preserve the original barbell loading.",
    "why": "The original's stationary stance and both feet on the floor.",
    "detail": "removes the bar and its external loading while keeping the exercise pattern.",
    "check": "This removes the barbell load; it does not preserve the original loading task.",
    "basis": "Reviewed Gym Swap comparison 3E",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "4A",
    "originalId": "single_leg_floor_bridge",
    "originalName": "Single-leg floor glute bridge",
    "cardId": "single_leg_hip_thrust",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "One planted foot driving hip extension while the pelvis stays controlled.",
    "changes": "Shoulder elevation changes the range and support.",
    "load": "Shoulder elevation changes the range; do not force the original depth.",
    "why": "One planted foot driving hip extension while the pelvis stays controlled.",
    "detail": "elevated upper-back support permits a different, generally larger hip excursion than the floor-start bridge; the task is not mechanically identical.",
    "check": "Shoulder elevation and the available range change the challenge. Do not add weight or force extra depth to make it feel equivalent.",
    "basis": "Reviewed Gym Swap comparison 4A",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "4B",
    "originalId": "single_leg_floor_bridge",
    "originalName": "Single-leg floor glute bridge",
    "cardId": "kickstand_bridge",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "Floor-supported hip extension with an intended emphasis on one side.",
    "changes": "The farther heel adds assistance from the other leg.",
    "load": "The second foot assists; this is not fully single-leg work.",
    "why": "Floor-supported hip extension with an intended emphasis on one side.",
    "detail": "the second foot helps support and lift the body. This is not a true single-leg bridge, and the amount of assistance varies.",
    "check": "it does not preserve the original's no-assistance requirement. Never describe the working leg as carrying a measured percentage of the load.",
    "basis": "Reviewed Gym Swap comparison 4B",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "4C",
    "originalId": "single_leg_floor_bridge",
    "originalName": "Single-leg floor glute bridge",
    "cardId": "floor_bridge",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Floor-supported hip extension through lifting and lowering the pelvis.",
    "changes": "Both legs contribute instead of one.",
    "load": "The original single-leg emphasis is not preserved.",
    "why": "Floor-supported hip extension through lifting and lowering the pelvis.",
    "detail": "both legs contribute instead of one, changing loading per leg and the unilateral control task.",
    "check": "a broader alternative when the user accepts bilateral work. Do not present it as preserving the original's single-leg emphasis.",
    "basis": "Reviewed Gym Swap comparison 4C",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "4D",
    "originalId": "single_leg_floor_bridge",
    "originalName": "Single-leg floor glute bridge",
    "cardId": "bridge_march",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Periods of one-foot support while controlling the pelvis in hip extension.",
    "changes": "Alternating lifted-foot holds replace repeated hip lifts.",
    "load": "Not a rep-for-rep replacement for repeated single-leg hip lifts.",
    "why": "Periods of one-foot support while controlling the pelvis in hip extension.",
    "detail": "alternates brief supported holds and leg lifts instead of lowering and lifting the hips repeatedly on the same working leg.",
    "check": "a broader control-focused alternative, not a rep-for-rep replacement for a dynamic single-leg bridge. No new hold duration or counting prescription is assigned.",
    "basis": "Reviewed Gym Swap comparison 4D",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "4E",
    "originalId": "single_leg_floor_bridge",
    "originalName": "Single-leg floor glute bridge",
    "cardId": "foot_elevated_bridge",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "Hip extension using one planted working foot while controlling the pelvis.",
    "changes": "The foot is raised while the upper back stays on the floor.",
    "load": "The foot is raised, not the shoulders; this is not a hamstring curl.",
    "why": "Hip extension using one planted working foot while controlling the pelvis.",
    "detail": "raises the foot rather than the shoulders; support geometry, knee angle, and the available hip excursion change.",
    "check": "do not confuse this with a shoulder-elevated hip thrust, a long-lever heel bridge, or a hamstring curl. Platform height and foot distance affect the task; no universal activation or difficulty ranking is assumed.",
    "basis": "Reviewed Gym Swap comparison 4E",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "4F",
    "originalId": "single_leg_floor_bridge",
    "originalName": "Single-leg floor glute bridge",
    "cardId": "band_abduction_bridge",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Floor-supported hip extension.",
    "changes": "Two-leg bridging adds an outward knee movement against a band.",
    "load": "Both feet stay planted; single-leg work is not preserved.",
    "why": "Floor-supported hip extension.",
    "detail": "bilateral support replaces the original's single-leg task; the band adds resisted hip abduction.",
    "check": "Both feet stay planted. Active knee movement is added; single-leg work is not preserved.",
    "basis": "Reviewed Gym Swap comparison 4F",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "5A",
    "originalId": "bodyweight_rfess",
    "originalName": "Bodyweight rear-foot-elevated split squat",
    "cardId": "bodyweight_split_squat",
    "source": "squats",
    "similarity": "some",
    "keeps": "A stationary split-stance movement at the hips and knees.",
    "changes": "The rear foot moves to the floor; the stance stays fixed.",
    "load": "Rear-leg support and available range change.",
    "why": "A stationary split-stance movement at the hips and knees.",
    "detail": "floor contact replaces the elevated rear foot, changing rear-leg support and the setup's range/balance demands.",
    "check": "This changes rear-leg support and the available range. It is not the same loading task.",
    "basis": "Reviewed Gym Swap comparison 5A",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "5B",
    "originalId": "bodyweight_rfess",
    "originalName": "Bodyweight rear-foot-elevated split squat",
    "cardId": "reverse_lunge",
    "source": "squats",
    "similarity": "some",
    "keeps": "Side-specific leg work through hip-and-knee bending and straightening.",
    "changes": "A backward step and return replace the stationary stance.",
    "load": "Stepping adds coordination; removing the bench is not automatically easier.",
    "why": "Side-specific leg work through hip-and-knee bending and straightening.",
    "detail": "a moving step and return replace the original's fixed stance; there is no elevated rear-foot support.",
    "check": "stepping adds a coordination task; removing the bench does not automatically make this an easier or identical exercise.",
    "basis": "Reviewed Gym Swap comparison 5B",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "5C",
    "originalId": "bodyweight_rfess",
    "originalName": "Bodyweight rear-foot-elevated split squat",
    "cardId": "front_elevated_split_squat",
    "source": "squats",
    "similarity": "some",
    "keeps": "Stationary split-stance work through hip and knee bending/straightening.",
    "changes": "The front foot is raised instead of the rear foot.",
    "load": "The whole front foot is raised, not just the heel.",
    "why": "Stationary split-stance work through hip and knee bending/straightening.",
    "detail": "elevates the front foot instead of the rear, changing rear-leg support, joint positions, and the available descent.",
    "check": "this is not heel-only elevation or both-feet-elevated work. Neither matching the original depth nor finding a taller platform is the goal; use a controlled range.",
    "basis": "Reviewed Gym Swap comparison 5C",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "5D",
    "originalId": "bodyweight_rfess",
    "originalName": "Bodyweight rear-foot-elevated split squat",
    "cardId": "supported_rfess",
    "source": "squats",
    "similarity": "close",
    "keeps": "The original's rear-foot-elevated stance and bodyweight loading setup.",
    "changes": "Retains rear-foot elevation and adds hand support.",
    "load": "Still requires a rear-foot support.",
    "why": "The original's rear-foot-elevated stance and bodyweight loading setup.",
    "detail": "adds external balance support and potentially assistance through the arm.",
    "check": "does not solve an unavailable rear-foot support. Offer for exploration or a requested support change, not as a solution to that equipment restriction.",
    "basis": "Reviewed Gym Swap comparison 5D",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  },
  {
    "reviewId": "5E",
    "originalId": "bodyweight_rfess",
    "originalName": "Bodyweight rear-foot-elevated split squat",
    "cardId": "step_up",
    "source": "squats",
    "similarity": "broader",
    "keeps": "Side-specific leg work through hip and knee extension.",
    "changes": "Stepping up and down replaces a fixed split stance.",
    "load": "Use a standing platform, not a narrow rear-foot roller.",
    "why": "Side-specific leg work through hip and knee extension.",
    "detail": "stepping onto and off a platform replaces the fixed split stance; the transition and contribution of the trailing leg differ.",
    "check": "a broader alternative, not an equivalent split squat. It still needs a platform, and its height changes the demand; a narrow rear-foot roller is not a suitable step-up surface.",
    "basis": "Reviewed Gym Swap comparison 5E",
    "review": {
      "batch": "day1-expansion-2026-10-08",
      "basis": "Michael approved the expanded review and implementation; exact setups and compact similarity labels remain visible for in-app acceptance."
    }
  }
];
