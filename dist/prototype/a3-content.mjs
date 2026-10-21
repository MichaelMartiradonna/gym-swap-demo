// A3 approved October 13, 2026. Instructions are shared; comparisons remain directed.
export const a3Equipment = {
  "barbell_bench_station": "Bar/plates, flat bench and rack with suitable unrack/rerack and spotter/safety arrangement",
  "barbell_floor_station": "Bar/plates and floor-reachable rack with suitable supports and entry/exit arrangement",
  "incline_press_dbs": "Dumbbell pair suitable for this low-incline press and controlled entry/exit",
  "low_incline_press_bench": "Adjustable bench locked around 30 degrees with stable foot support",
  "pushup_floor": "Firm nonslip floor with clear body and arm space",
  "pushup_support": "Fixed raised hand support that will not slide or tip under pushing",
  "chest_press_suspension": "Suspension trainer on a rated secure anchor adjusted for a hands-in-handles chest press",
  "chest_press_rings": "Two rings and adjustable straps on suitable secure anchors for a grounded-feet press",
  "band_chest_press_setup": "Suitable band/handles secured behind at chest height, with usable stretch and clear travel",
  "fly_dbs": "Dumbbell pair suitable for the fly arc and controlled entry/exit"
};
export const a3Content = [
  {
    "group": 1,
    "id": "barbell_bench_press",
    "name": "Flat barbell bench press",
    "aliases": [
      "barbell bench press",
      "bb bench press",
      "flat bb bench press",
      "flat barbell press"
    ],
    "focus": "Flat, supported pressing with both hands on one bar.",
    "expect": "Control a shared bar above your chest, then return it to its supports.",
    "needs": "Bar/plates · flat bench and rack · suitable unrack/rerack and spotter/safety arrangement",
    "requires": [
      "barbell_bench_station"
    ],
    "setup": "Set a stable flat bench and rack so the bar can be unracked and returned without losing your supported position. Arrange compatible safeties or competent spotting for the setup. Lie with head, upper back and hips supported, feet stable. Take an even closed grip with wrists aligned over the forearms.",
    "cues": [
      "Unrack under control and steady the bar above your chest before lowering.",
      "Bend the elbows and lower toward the chest through a range you can control; keep the feet and torso supported without bouncing the bar.",
      "Press the bar up with both arms. After the final repetition, guide it into both rack supports and confirm it is settled before releasing your grip."
    ],
    "cue": "Unrack under control and steady the bar above your chest before lowering.",
    "context": "This catalogue entry is a flat, two-arm press. The bar links the hands; it does not move independently like dumbbells. Choose loading separately and use a setup that provides a controlled exit. Incline, floor and pin-reset presses are different setups.",
    "references": [
      {
        "label": "NASM: Barbell bench press",
        "url": "https://www.nasm.org/resource-center/exercise-library/barbell-bench-press",
        "scope": "Flat bench/bar identity and controlled pressing; no universal superiority or injury claim."
      }
    ],
    "family": "horizontal_press",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 1,
    "id": "barbell_floor_press",
    "name": "Barbell floor press",
    "aliases": [
      "bb floor press",
      "racked barbell floor press"
    ],
    "focus": "Supported barbell pressing with floor-limited descent.",
    "expect": "Your upper arms meet the floor before the lower travel of a bench press.",
    "needs": "Bar/plates · reachable low rack with suitable supports · clear lying space",
    "requires": [
      "barbell_floor_station",
      "lying_space"
    ],
    "setup": "Use a rack with bar supports reachable while lying on the floor, and a compatible spotting/safety and return arrangement. Lie with knees bent and feet planted, head and upper back supported. Take an even closed grip, wrists over forearms, and confirm the bar can be unracked and returned under control.",
    "cues": [
      "Unrack and steady the bar over the chest with both arms.",
      "Lower slowly until the upper arms make gentle floor contact; keep your grip and torso position without bouncing.",
      "Press back up with both arms, then return the bar into both supports when finished."
    ],
    "cue": "Unrack and steady the bar over the chest with both arms.",
    "context": "The floor limits upper-arm descent, so this is not full bench-depth practice. Floor contact does not mean releasing tension, resting the bar on pins or adding a timed pause. A rack that cannot be reached from the floor is not this setup; do not improvise by heaving the bar over the abdomen.",
    "references": [
      {
        "label": "StrengthLog: Floor press",
        "url": "https://www.strengthlog.com/floor-press/",
        "scope": "Racked floor-press setup and upper-arm floor contact; only the controlled racked version is adopted."
      }
    ],
    "family": "horizontal_press",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 1,
    "id": "low_incline_db_press",
    "name": "Low-incline dumbbell press",
    "aliases": [
      "low incline db press",
      "30 degree dumbbell incline press",
      "low incline dumbbell bench press"
    ],
    "focus": "Supported two-dumbbell pressing at a low incline.",
    "expect": "Both arms press together while controlling separate weights above an inclined torso.",
    "needs": "Suitable DB pair · bench locked around 30 degrees · stable foot support",
    "requires": [
      "incline_press_dbs",
      "low_incline_press_bench"
    ],
    "setup": "Lock an adjustable bench at approximately 30 degrees. Plan how to bring both dumbbells into pressing position and put them down under control. Keep head, upper back and hips supported, feet stable, and wrists aligned with the forearms.",
    "cues": [
      "Steady both dumbbells above the upper chest with a closed grip.",
      "Bend both elbows and lower under control through a range you can hold without shifting off the bench.",
      "Press both weights up together without colliding them; keep control when returning them at the end."
    ],
    "cue": "Steady both dumbbells above the upper chest with a closed grip.",
    "context": "The low incline is an approved catalogue choice, not an angle supplied by the program or an optimal-angle claim. It changes the press relative to the torso; the dumbbells still need independent control and entry/exit handling. Do not assume a previously reported rowing pair or a fixed-incline bench fits this setup.",
    "references": [
      {
        "label": "ACE: Incline chest press",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/25/incline-chest-press/",
        "scope": "Supported inclined DB press. ACE illustrates 45–60 degrees; our approximately 30-degree catalogue setup is a separately approved choice."
      }
    ],
    "family": "horizontal_press",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    },
    "sourceChecked": "2026-10-13",
    "setupAttributes": {
      "backrest": "approximately 30 degrees; both arms press together"
    }
  },
  {
    "group": 2,
    "id": "floor_pushup",
    "name": "Floor push-up",
    "aliases": [
      "push up",
      "pushup",
      "standard push-up",
      "floor pushup"
    ],
    "focus": "Bodyweight pressing with hands and toes on the floor.",
    "expect": "Hold a steady plank while your elbows bend and straighten.",
    "needs": "Firm nonslip floor · clear body and arm space",
    "requires": [
      "pushup_floor"
    ],
    "setup": "Place the hands on a firm nonslip floor around shoulder width, with room to lower the chest between them. Extend the legs and support the body on the hands and toes. Establish a controlled line from head through hips to heels.",
    "cues": [
      "Lower the chest between the hands by bending the elbows while the body moves as one unit.",
      "Keep the hips from sagging or lifting ahead of the chest; use the descent you can control.",
      "Push the floor away to extend the elbows and return to the starting plank without throwing the head forward."
    ],
    "cue": "Lower the chest between the hands by bending the elbows while the body moves as one unit.",
    "context": "This is a hands-and-toes floor push-up, without suspended feet or added load. Bodyweight loading cannot be converted to a bench-press weight. Fixed floor contact removes moving-handle control but is not automatically easier than a more upright suspension press.",
    "references": [
      {
        "label": "ACE: Push-up",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/41/push-up/",
        "scope": "Fixed hands/toes, elbow movement and controlled body alignment; no fixed bodyweight percentage or joint-treatment claim."
      }
    ],
    "family": "horizontal_press",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 2,
    "id": "hands_elevated_pushup",
    "name": "Hands-elevated push-up",
    "aliases": [
      "incline push-up",
      "hands elevated pushup",
      "elevated hand push-up"
    ],
    "focus": "Bodyweight pressing with hands on a raised fixed support.",
    "expect": "Support height changes your body angle while you hold an inclined plank.",
    "needs": "Fixed support that will not slide or tip · nonslip floor and body clearance",
    "requires": [
      "pushup_support",
      "pushup_floor"
    ],
    "setup": "Choose a fixed raised support that will not slide or tip under pushing. Place both hands on it with feet on a nonslip floor. Set your distance so the body forms a steady inclined plank and there is room to lower the chest toward the support.",
    "cues": [
      "Bend the elbows and move the chest toward the support while keeping head, torso and hips aligned.",
      "Stop the descent before losing body position or clearance; keep hands and feet planted.",
      "Press away to extend both arms and return as one unit."
    ],
    "cue": "Bend the elbows and move the chest toward the support while keeping head, torso and hips aligned.",
    "context": "A higher support generally reduces the bodyweight pressing demand compared with a lower support in the same style of plank. Height is not a precise load conversion. A bench being available does not establish that it is fixed or stable enough for pushing. The feet stay on the floor.",
    "references": [
      {
        "label": "ACE: Chest exercise options",
        "url": "https://www.acefitness.org/resources/pros/expert-articles/8972/be-a-chest-day-champion-an-evidence-based-approach-to-training-the-chest/",
        "scope": "Elevated fixed-hand push-ups and standing band press with a chest-height anchor behind; no workout prescription or effectiveness ranking."
      }
    ],
    "family": "horizontal_press",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 2,
    "id": "kneeling_pushup",
    "name": "Kneeling push-up",
    "aliases": [
      "knee push-up",
      "bent knee push-up",
      "kneeling pushup"
    ],
    "focus": "Bodyweight pressing with grounded knees and a controlled torso.",
    "expect": "The body pivots from the knees instead of the toes.",
    "needs": "Nonslip floor and body space · optional knee padding",
    "requires": [
      "pushup_floor"
    ],
    "setup": "Place both hands on the floor around shoulder width and keep the knees grounded; use padding if desired. Move the hands far enough forward to make a straight line from head through hips to knees, rather than folding at the hips.",
    "cues": [
      "Bend both elbows and lower the chest between the hands while maintaining the head-to-knee line.",
      "Keep the hips from sagging or lifting independently and lower only as far as you can control.",
      "Press through both hands to extend the elbows and return the body as one unit."
    ],
    "cue": "Bend both elbows and lower the chest between the hands while maintaining the head-to-knee line.",
    "context": "Grounded knees shorten the body lever compared with a toes-supported floor push-up. This is not a feet-supported plank and does not retain suspension-handle control. No repetition or difficulty equivalence to another press is implied.",
    "references": [
      {
        "label": "ACE: Bent-knee push-up",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/13/bent-knee-push-up/",
        "scope": "Grounded knees, head-to-knee alignment and controlled pressing; no wrist-treatment recommendation."
      }
    ],
    "family": "horizontal_press",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 2,
    "id": "suspension_chest_press",
    "name": "TRX chest press — hands in handles, feet on floor",
    "aliases": [
      "trx push-up",
      "trx pushup",
      "trx chest press",
      "suspension chest press",
      "hands in handles push-up"
    ],
    "focus": "Suspended-hand pressing while holding a leaning plank.",
    "expect": "Your body moves while both hands control separate handles.",
    "needs": "Suitable suspension trainer and secure rated anchor · nonslip floor and body clearance",
    "requires": [
      "chest_press_suspension",
      "pushup_floor"
    ],
    "setup": "Secure the trainer to a suitable rated anchor and check its strap adjustments. Face away from the anchor, one hand in each handle, with both feet on the floor. Set the strap length and foot position for a controllable forward-leaning plank; keep the straps clear of rubbing across the arms.",
    "cues": [
      "Hold the body in a steady line and bend both elbows to bring the chest toward the handles.",
      "Control the handle paths and lower only while you can retain body alignment and clear strap travel.",
      "Press through both handles to straighten the elbows and move the body back as one unit."
    ],
    "cue": "Hold the body in a steady line and bend both elbows to bring the chest toward the handles.",
    "context": "Michael confirmed hands in handles and feet on floor for this original. Adjusting lean changes loading; no exact angle or load is prescribed. Feet-in-straps push-ups are a different exercise. A fixed-hand floor push-up is not automatically easier than this setup.",
    "references": [
      {
        "label": "TRX: Chest press",
        "url": "https://www.trxtraining.com/blogs/news/trx-chest-press",
        "scope": "Hands in handles, feet on floor, controlled leaning-plank press. No clinical or injury-prevention claim."
      }
    ],
    "family": "horizontal_press",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    },
    "sourceChecked": "2026-10-13",
    "setupAttributes": {
      "hands": "suspension handles",
      "feet": "floor",
      "body": "adjustable leaning plank facing away from anchor"
    }
  },
  {
    "group": 2,
    "id": "ring_chest_press",
    "name": "Ring push-up — feet on floor",
    "aliases": [
      "ring push-up",
      "ring pushup",
      "ring chest press",
      "gymnastics ring push-up"
    ],
    "focus": "Pressing with hands in independent rings and grounded feet.",
    "expect": "Keep a steady plank while controlling the moving rings.",
    "needs": "Two rings and adjustable straps on suitable secure anchors · nonslip floor and body space",
    "requires": [
      "chest_press_rings",
      "pushup_floor"
    ],
    "setup": "Secure both rings to suitable rated anchors and check their straps. Put one hand in each ring and keep both feet on the floor. Adjust ring height, spacing and foot position to make a controllable leaning plank with clear pressing travel.",
    "cues": [
      "Maintain the body line while bending both elbows to bring the chest toward the rings.",
      "Guide the rings without letting them spread or swing beyond the paths you can control.",
      "Press through both rings to extend the arms and return the body as one unit."
    ],
    "cue": "Maintain the body line while bending both elbows to bring the chest toward the rings.",
    "context": "This is the approved ring adaptation of a hand-suspended press. For the close comparison to TRX, use a comparable body lean and usable range; anchor spacing and independent straps change handle freedom. Rings are not automatically harder. This record does not describe feet suspended in rings.",
    "references": [
      {
        "label": "TRX: Chest press",
        "url": "https://www.trxtraining.com/blogs/news/trx-chest-press",
        "scope": "The hands-suspended, grounded-feet press is the source model. The exact ring adaptation and comparison are Michael-approved Gym Swap synthesis, not a TRX-prescribed substitution."
      }
    ],
    "family": "horizontal_press",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    },
    "sourceChecked": "2026-10-13",
    "setupAttributes": {
      "hands": "rings",
      "feet": "floor",
      "body": "adjustable leaning plank"
    }
  },
  {
    "group": 3,
    "id": "standing_band_chest_press",
    "name": "Standing two-hand band chest press",
    "aliases": [
      "standing band chest press",
      "two hand band chest press",
      "bilateral band chest press"
    ],
    "focus": "Two-arm chest pressing against an anchored band.",
    "expect": "Hold your standing position as both hands press forward.",
    "needs": "Suitable band/handles · secure anchor behind at chest height · standing and arm space",
    "requires": [
      "band_chest_press_setup",
      "standing_space"
    ],
    "setup": "Secure a suitable band behind you at chest height following its attachment instructions. Check its condition, handle security and stretch limits. Face away with both feet grounded; a staggered stance is allowed. Hold one end/handle in each hand near chest level and establish a controlled starting tension.",
    "cues": [
      "Keep the torso steady while pressing both hands forward by extending the elbows.",
      "Stay planted without stepping, leaning back or letting the anchor pull you out of position.",
      "Bend the elbows to return smoothly, keeping the band controlled within its usable stretch."
    ],
    "cue": "Keep the torso steady while pressing both hands forward by extending the elbows.",
    "context": "The band becomes more stretched through the press, changing resistance across travel. This is a standing two-hand press, not a lunge, cable-machine record or single-arm exercise. Band markings and standing distance do not convert a bench or machine load.",
    "references": [
      {
        "label": "ACE: Chest exercise options",
        "url": "https://www.acefitness.org/resources/pros/expert-articles/8972/be-a-chest-day-champion-an-evidence-based-approach-to-training-the-chest/",
        "scope": "Elevated fixed-hand push-ups and standing band press with a chest-height anchor behind; no workout prescription or effectiveness ranking."
      }
    ],
    "family": "horizontal_press",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 3,
    "id": "flat_db_fly",
    "name": "Flat dumbbell fly",
    "aliases": [
      "flat db fly",
      "dumbbell chest fly",
      "flat bench dumbbell fly",
      "lying chest fly"
    ],
    "focus": "Supported chest and shoulder movement in an opening and closing arc.",
    "expect": "Keep a soft elbow bend while bringing the arms together.",
    "needs": "DB pair suitable for fly handling · flat bench · stable foot support",
    "requires": [
      "fly_dbs",
      "bench"
    ],
    "setup": "Use a stable flat bench with feet supported, head, upper back and hips on the bench. Plan controlled entry and exit with the dumbbells. Begin above the chest, palms facing each other, with a soft bend in both elbows.",
    "cues": [
      "Open the arms slowly in a wide arc while keeping approximately the same elbow bend.",
      "Stop the opening range while you can control the shoulders, torso and weights; do not force extra depth or bounce.",
      "Bring the arms back together along the arc without turning it into a press or colliding the dumbbells."
    ],
    "cue": "Open the arms slowly in a wide arc while keeping approximately the same elbow bend.",
    "context": "The elbows remain softly bent rather than performing the extension of a chest press. This is a partial chest/shoulder alternative and does not preserve most triceps pressing work. Pressing loads do not automatically suit the longer arm lever of a fly.",
    "references": [
      {
        "label": "ACE: Lying chest fly",
        "url": "https://www.acefitness.org/resources/everyone/exercise-library/21/lying-chest-fly/",
        "scope": "Supported dumbbell arc with elbow bend maintained; tier and comparison judgments are separately reviewed."
      }
    ],
    "family": "chest_fly",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    },
    "sourceChecked": "2026-10-13"
  }
];
