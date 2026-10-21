// A2 approved October 13, 2026. Shared instructions; directed comparisons are separate.
export const a2Equipment = {
  "deadlift_barbell": "Straight bar, secured plates and equal supporting-plate diameter for the intended pickup height",
  "hex_deadlift_setup": "Hex bar with low handles, secured plates and intended pickup height",
  "deadlift_floor": "Firm lifting surface with room for feet, implements and controlled contact",
  "side_deadlift_dbs": "Matched dumbbell pair with side clearance and a repeatable intended pickup height",
  "front_deadlift_dbs": "Matched dumbbell pair with front-of-leg clearance and intended pickup height",
  "side_deadlift_kbs": "Equal kettlebell pair with outside-leg clearance and intended pickup height",
  "central_deadlift_kb": "One kettlebell with usable two-hand grip and intended pickup height",
  "landmine_deadlift_grip": "Two-hand access to the loaded sleeve with plate/body clearance and settled bottom contact",
  "barbell_deadlift_blocks": "Equal stable lifting blocks under the barbell plates for a below-knee pickup",
  "hex_deadlift_blocks": "Equal stable lifting blocks under the hex-bar plates with frame clearance",
  "deadlift_rack_supports": "Rated equal-height rack pins or straps for a below-knee shaft-supported reset",
  "barbell_deficit_platform": "Stable whole-stance foot platform with barbell and plate clearance",
  "hex_deficit_platform": "Stable whole-stance foot platform with hex-frame and plate clearance",
  "vertical_smith_deadlift_setup": "Vertical-track Smith with compatible loading, hooks and bottom stops at the intended pickup height",
  "dual_axis_deadlift_setup": "Vertical-plus-fore/aft Smith with both axes usable and compatible bottom support/loading",
  "side_handle_deadlift_machine": "Standing plate-loaded side-handle deadlift station with suitable handle, loading and start positions",
  "jefferson_clearance": "Clear straddled stance and hand/leg clearance around the bar",
  "unequal_deadlift_dbs": "Unequally weighted dumbbell pair with matched intended hand pickup heights",
  "kickstand_deadlift_space": "Room for staggered feet and both weights to reset without contacting either foot",
  "hip_extension_45_bench": "45-degree hip-extension bench with secure feet and thigh support leaving hips free",
  "horizontal_hip_bench": "Horizontal hip-extension apparatus with secure feet and thigh support leaving hips free",
  "chest_held_plate": "Plate manageable to hold at the chest and transfer during entry/exit"
};
export const a2Content = [
  {
    "group": 1,
    "id": "hex_bar_deadlift",
    "name": "Hex-bar deadlift — low handles",
    "aliases": [
      "low handle hex bar deadlift",
      "low handle trap bar deadlift",
      "hex bar floor deadlift"
    ],
    "focus": "Two-leg hip-and-knee lifting with hands beside the body.",
    "expect": "Lift a shared frame from settled plates using its low handles.",
    "needs": "Low-handle hex bar · plates/collars · firm clear lifting surface",
    "requires": [
      "hex_deadlift_setup",
      "deadlift_floor"
    ],
    "setup": "Stand inside the centered hex frame with feet planted. Use its low handles with the plates on the floor. Bend at hips and knees to grip both handles, arms long, torso braced and frame clear of the legs. Establish a repeatable bottom reach.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Push through the planted feet and extend hips and knees together to stand; finish tall without leaning back.",
      "Move the hips back and bend the knees to return under control. Let the weights settle, then reset the position before the next lift."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "The comparison baseline uses low handles. High handles shorten the reach and are a setup variation, not an automatic match to the low-handle comparisons. Keep equal-diameter supporting plates on both sides to retain the intended pickup height. Smaller change plates may be added without changing that height; the word Olympic alone does not establish outside diameter.",
    "references": [
      {
        "label": "Swinton et al.: straight and hexagonal bar mechanics",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21659894/",
        "scope": "Original study abstract supports distinguishing load arrangement; no individual safety ranking or load conversion."
      },
      {
        "label": "NSCA: applying the hexagonal bar",
        "url": "https://doi.org/10.1519/SSC.0000000000000327",
        "scope": "Public abstract distinguishes handle heights; no full-text claims."
      },
      {
        "label": "Rogue: Olympic plate dimensions",
        "url": "https://www.roguefitness.com/rogue-olympic-plates",
        "scope": "Outside diameter varies with weight. Keep intended supporting-plate diameter and pickup height explicit."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13",
    "setupAttributes": {
      "handleHeight": "low handles for this comparison baseline; high handles require a disclosed different reach",
      "start": "settled plates on floor"
    }
  },
  {
    "group": 1,
    "id": "conventional_deadlift",
    "name": "Conventional barbell deadlift",
    "aliases": [
      "conventional deadlift",
      "conventional straight bar deadlift",
      "straight bar floor deadlift"
    ],
    "focus": "Two-leg floor pickup with a straight bar in front of the legs.",
    "expect": "Lift a settled bar close to the shins and knees, then return it under control.",
    "needs": "Straight bar · plates/collars · firm clear lifting surface",
    "requires": [
      "deadlift_barbell",
      "deadlift_floor"
    ],
    "setup": "Set the bar over the midfoot with the feet in a conventional stance and hands just outside the legs. Bend at hips and knees to grip it, bring the shins close without rolling it away, and brace with long arms. The plates establish the intended floor pickup height.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Push through the planted feet and extend hips and knees together to stand; finish tall without leaning back.",
      "Move the hips back and bend the knees to return under control. Let the weights settle, then reset the position before the next lift."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "Keep the bar close as the hips and knees extend; avoid jerking it from the floor. Keep equal-diameter supporting plates on both sides to retain the intended pickup height. Smaller change plates may be added without changing that height; the word Olympic alone does not establish outside diameter.",
    "references": [
      {
        "label": "NASM: barbell deadlift",
        "url": "https://www.nasm.org/resource-center/exercise-library/barbell-deadlift",
        "scope": "Front-bar hip-and-knee pickup and controlled return; no fixed shin-angle or injury-prevention claim."
      },
      {
        "label": "Greg Nuckols: How to Deadlift",
        "url": "https://www.strongerbyscience.com/how-to-deadlift/",
        "scope": "Stance, block/rack and deficit distinctions. Range boundaries and comparison tiers are Gym Swap coaching judgments."
      },
      {
        "label": "Rogue: Olympic plate dimensions",
        "url": "https://www.roguefitness.com/rogue-olympic-plates",
        "scope": "Outside diameter varies with weight. Keep intended supporting-plate diameter and pickup height explicit."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 1,
    "id": "two_db_side_deadlift",
    "name": "Two-dumbbell deadlift — beside the legs",
    "aliases": [
      "side held dumbbell deadlift",
      "two db side deadlift"
    ],
    "focus": "Two-leg pickup with independently held weights beside the legs.",
    "expect": "Both weights leave settled supports together at the intended pickup height.",
    "needs": "Matched dumbbells · clear lifting surface · equal risers if needed for pickup height",
    "requires": [
      "side_deadlift_dbs",
      "deadlift_floor"
    ],
    "setup": "Place a matched dumbbell beside each foot with usable grip and leg clearance. Establish the intended hand pickup height; equal purpose-made stable risers may be needed with small dumbbells. Bend hips and knees, grip both weights and brace with arms long.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Push through the planted feet and extend hips and knees together to stand; finish tall without leaning back.",
      "Move the hips back and bend the knees to return under control. Let the weights settle, then reset the position before the next lift."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "Each hand controls a separate weight. Green comparisons require comparable bottom reach; touching small weights to the floor can create a different, deeper lift. Available dumbbells may limit loading.",
    "references": [
      {
        "label": "CrossFit: dumbbell deadlift",
        "url": "https://www.crossfit.com/essentials/the-dumbbell-deadlift",
        "scope": "Side-held pickup and height adjustment. Settled resets are our reviewed execution; no rehabilitation claims adopted."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 1,
    "id": "two_kb_side_deadlift",
    "name": "Two-kettlebell suitcase deadlift",
    "aliases": [
      "two kettlebell suitcase deadlift",
      "two kb side deadlift"
    ],
    "focus": "Two-leg pickup with equal bells held outside the feet.",
    "expect": "Independent bell bodies settle beside the legs between lifts.",
    "needs": "Equal kettlebells · outside-leg clearance · firm lifting surface",
    "requires": [
      "side_deadlift_kbs",
      "deadlift_floor"
    ],
    "setup": "Set an equal kettlebell outside each foot with handles reachable at the intended height. Allow room for the bell bodies and feet. Bend at hips and knees, grasp one handle in each hand and brace before lifting.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Push through the planted feet and extend hips and knees together to stand; finish tall without leaning back.",
      "Move the hips back and bend the knees to return under control. Let the weights settle, then reset the position before the next lift."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "Bell shape sets the reach and clearance. This is two-sided equal loading, not a one-sided suitcase lift or two bells between the feet. Use a comparable reach for the reviewed close match.",
    "references": [
      {
        "label": "Kettlebility: odd-load kettlebell training",
        "url": "https://www.kettlebility.com/get-stronger-odd-load-kettlebell-training/",
        "scope": "Independent and unequal loading distinction. Our equal suitcase and unequal dumbbell setups are reviewed adaptations, not the source’s prescriptions."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 1,
    "id": "two_db_front_deadlift",
    "name": "Two-dumbbell deadlift — in front of the legs",
    "aliases": [
      "front held dumbbell deadlift",
      "two db front deadlift"
    ],
    "focus": "Two-leg pickup with separate weights in front of the legs.",
    "expect": "The weights follow the front of the legs with independent hand control.",
    "needs": "Matched dumbbells · clear front pickup/contact · equal risers if needed",
    "requires": [
      "front_deadlift_dbs",
      "deadlift_floor"
    ],
    "setup": "Set two matched dumbbells in front of the feet at the intended hand pickup height, using equal stable risers if needed. Allow room for the knees and weight heads. Bend at hips and knees, take one weight in each hand and brace with long arms.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Push through the planted feet and extend hips and knees together to stand; finish tall without leaning back.",
      "Move the hips back and bend the knees to return under control. Let the weights settle, then reset the position before the next lift."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "Keep the weights close without letting them collide or roll into the feet. Comparable pickup height is required for the conventional-deadlift close match; available DB size or load may limit it.",
    "references": [
      {
        "label": "Edward Lord: dumbbell deadlift",
        "url": "https://weighttraining.guide/exercises/dumbbell-deadlift/",
        "scope": "Written front-held floor-return description only; the embedded RDL video does not confirm a floor reset."
      },
      {
        "label": "CrossFit: dumbbell deadlift",
        "url": "https://www.crossfit.com/essentials/the-dumbbell-deadlift",
        "scope": "Side-held pickup and height adjustment. Settled resets are our reviewed execution; no rehabilitation claims adopted."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 1,
    "id": "sumo_deadlift",
    "name": "Sumo barbell deadlift",
    "aliases": [
      "sumo deadlift",
      "sumo straight bar deadlift"
    ],
    "focus": "Wide-stance two-leg pickup with hands inside the legs.",
    "expect": "Lift a front bar through a wider, turned-out stance.",
    "needs": "Straight bar · plates/collars · wide clear lifting surface",
    "requires": [
      "deadlift_barbell",
      "deadlift_floor"
    ],
    "setup": "Place the bar over the midfoot. Set a wider stance with toes turned out enough for the knees to track with the feet; grip the bar inside the legs. Keep whole-foot contact, arms long and the bar close while bracing.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Push through the planted feet and extend hips and knees together to stand; finish tall without leaning back.",
      "Move the hips back and bend the knees to return under control. Let the weights settle, then reset the position before the next lift."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "Choose a workable stance rather than forcing maximum width. Wide stance changes hip position, clearance and travel; it is not a universal safer-back choice. Keep equal-diameter supporting plates on both sides to retain the intended pickup height. Smaller change plates may be added without changing that height; the word Olympic alone does not establish outside diameter.",
    "references": [
      {
        "label": "Greg Nuckols: How to Deadlift",
        "url": "https://www.strongerbyscience.com/how-to-deadlift/",
        "scope": "Stance, block/rack and deficit distinctions. Range boundaries and comparison tiers are Gym Swap coaching judgments."
      },
      {
        "label": "Rogue: Olympic plate dimensions",
        "url": "https://www.roguefitness.com/rogue-olympic-plates",
        "scope": "Outside diameter varies with weight. Keep intended supporting-plate diameter and pickup height explicit."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 1,
    "id": "two_hand_kb_deadlift",
    "name": "Two-handed kettlebell deadlift — floor start",
    "aliases": [
      "two hand kettlebell floor deadlift",
      "single kettlebell floor deadlift"
    ],
    "focus": "Two-leg hip-and-knee pickup with one central weight.",
    "expect": "Both hands share a kettlebell handle between the feet.",
    "needs": "One kettlebell · two-hand grip · clear stable contact",
    "requires": [
      "central_deadlift_kb",
      "deadlift_floor"
    ],
    "setup": "Set one kettlebell between the feet with enough room for both hands on the handle and the bell between the legs. Establish its intended pickup height. Bend hips and knees to grip it with long arms and brace.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Push through the planted feet and extend hips and knees together to stand; finish tall without leaning back.",
      "Move the hips back and bend the knees to return under control. Let the weights settle, then reset the position before the next lift."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "The shared handle and central bell change clearance and available loading. This version is a floor-start pickup, not a swing or a standing-start RDL.",
    "references": [
      {
        "label": "NASM: kettlebell deadlift",
        "url": "https://www.nasm.org/resource-center/exercise-library/kettlebell-deadlift",
        "scope": "Two-hand central kettlebell pickup mechanics; no safer-back claim."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 1,
    "id": "two_hand_landmine_deadlift",
    "name": "Two-handed landmine deadlift — facing the anchor",
    "aliases": [
      "facing anchor landmine deadlift",
      "two hand landmine deadlift"
    ],
    "focus": "Two-leg pickup holding the loaded end of an anchored bar.",
    "expect": "Hands follow the bar end’s arc as hips and knees extend.",
    "needs": "Secured landmine · bar/plates/collar · usable sleeve grip and contact",
    "requires": [
      "landmine_setup",
      "barbell_load",
      "landmine_deadlift_grip",
      "deadlift_floor"
    ],
    "setup": "Face the secured pivot with the loaded end between the feet. Leave usable sleeve beyond the secured plates for both hands and room for the plates to settle. Set the feet so the lift’s arc clears the body; bend hips and knees, grip with long arms and brace.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Extend hips and knees to stand while allowing the loaded end to follow its arc toward the pivot; do not curl it upward with the arms.",
      "Move the hips back and bend the knees to return under control. Let the weights settle, then reset the position before the next lift."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "A fixed pivot creates an arc. Grip access, contact height and plate clearance determine whether this setup works; landmine plate weight is not a free-bar load equivalent.",
    "references": [
      {
        "label": "Stephanie Zaban: landmine deadlift",
        "url": "https://www.yourhousefitness.com/blog/exercise-tutorial-landmine-deadlift",
        "scope": "Anchored two-hand setup identity. Our grip access, arc and reset are reviewed specifications; no straight-path or safety claim adopted."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 2,
    "id": "barbell_block_pull",
    "name": "Barbell block pull — below knees",
    "aliases": [
      "below knee barbell block pull",
      "barbell deadlift from blocks"
    ],
    "focus": "Conventional pickup from a raised, plate-supported start.",
    "expect": "Equal blocks remove the lowest segment of the floor lift.",
    "needs": "Straight bar/plates/collars · equal lifting blocks · clear floor",
    "requires": [
      "deadlift_barbell",
      "barbell_deadlift_blocks",
      "deadlift_floor"
    ],
    "setup": "Place the plates on equal stable lifting blocks. Set the bar around mid-shin and below the knees. Stand in a conventional stance, grip outside the legs and brace with long arms. Blocks must support the full contact area and remain clear of the feet.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Push through the planted feet and extend hips and knees together to stand; finish tall without leaning back.",
      "Move the hips back and bend the knees to return under control. Let the weights settle, then reset the position before the next lift."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "Return both plates fully to their blocks before resetting. Raising the weights shortens the pickup; this is not full-range floor practice or an above-knee lockout.",
    "references": [
      {
        "label": "Greg Nuckols: How to Deadlift",
        "url": "https://www.strongerbyscience.com/how-to-deadlift/",
        "scope": "Stance, block/rack and deficit distinctions. Range boundaries and comparison tiers are Gym Swap coaching judgments."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 2,
    "id": "barbell_rack_pull",
    "name": "Barbell rack pull — below knees",
    "aliases": [
      "below knee rack pull",
      "pin supported barbell deadlift"
    ],
    "focus": "Conventional pickup with a settled shaft-supported reset.",
    "expect": "Rack supports set an adjustable bottom height.",
    "needs": "Bar/plates/collars · compatible rack and rated pins/straps",
    "requires": [
      "deadlift_barbell",
      "deadlift_rack_supports",
      "deadlift_floor"
    ],
    "setup": "Set rated rack pins or straps equally around mid-shin where the rack permits, below the knees. Rest the bar shaft on them with plates clear of the floor. Use a conventional stance and outside-leg grip, leaving body and rack clearance.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Push through the planted feet and extend hips and knees together to stand; finish tall without leaning back.",
      "Move the hips back and bend the knees to return under control. Let the weights settle, then reset the position before the next lift."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "Set both sides of the shaft down under control without bouncing. Shaft support differs from blocks under the plates. The omitted bottom range remains a loss; above-knee lockouts are outside this version.",
    "references": [
      {
        "label": "Greg Nuckols: How to Deadlift",
        "url": "https://www.strongerbyscience.com/how-to-deadlift/",
        "scope": "Stance, block/rack and deficit distinctions. Range boundaries and comparison tiers are Gym Swap coaching judgments."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 2,
    "id": "hex_bar_block_pull",
    "name": "Hex-bar block pull — low handles",
    "aliases": [
      "low handle hex block pull",
      "trap bar deadlift from blocks"
    ],
    "focus": "Side-handle hip-and-knee pickup from elevated plates.",
    "expect": "Blocks raise the hex bar while both feet stay on the floor.",
    "needs": "Low-handle hex bar/plates/collars · equal plate blocks",
    "requires": [
      "hex_deadlift_setup",
      "hex_deadlift_blocks",
      "deadlift_floor"
    ],
    "setup": "Support the hex-bar plates on equal stable blocks for a disclosed below-knee pickup. Keep the feet on the floor inside the frame and use low handles. Check that the frame clears the blocks and legs, then bend hips and knees to grip and brace.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Push through the planted feet and extend hips and knees together to stand; finish tall without leaning back.",
      "Move the hips back and bend the knees to return under control. Let the weights settle, then reset the position before the next lift."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "Return both plates fully onto the blocks. This shortens the bottom reach; high handles without blocks are a different support arrangement, not an interchangeable equipment fact.",
    "references": [
      {
        "label": "Swinton et al.: straight and hexagonal bar mechanics",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21659894/",
        "scope": "Original study abstract supports distinguishing load arrangement; no individual safety ranking or load conversion."
      },
      {
        "label": "Greg Nuckols: How to Deadlift",
        "url": "https://www.strongerbyscience.com/how-to-deadlift/",
        "scope": "Stance, block/rack and deficit distinctions. Range boundaries and comparison tiers are Gym Swap coaching judgments."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 2,
    "id": "deficit_hex_bar_deadlift",
    "name": "Deficit hex-bar deadlift — low handles",
    "aliases": [
      "low handle deficit hex deadlift",
      "deficit trap bar deadlift"
    ],
    "focus": "Side-handle pickup with extra reach below the feet.",
    "expect": "A foot platform lengthens the pickup while plates remain on the lower floor.",
    "needs": "Low-handle hex bar/plates/collars · stable whole-stance platform",
    "requires": [
      "hex_deadlift_setup",
      "hex_deficit_platform",
      "deadlift_floor"
    ],
    "setup": "Place a stable platform inside the frame that supports both feet throughout the stance. Keep the plates on the lower floor and use low handles. Check full frame/plate clearance and select a platform height that permits the intended controlled bottom position; brace before lift-off.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Push through the planted feet and extend hips and knees together to stand; finish tall without leaning back.",
      "Move the hips back and bend the knees to return under control. Let the weights settle, then reset the position before the next lift."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "The feet are elevated, not the plates. Extra reach and travel change the lift; no universal platform height is prescribed. Do not make up the extra reach by losing the intended torso position.",
    "references": [
      {
        "label": "Swinton et al.: straight and hexagonal bar mechanics",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21659894/",
        "scope": "Original study abstract supports distinguishing load arrangement; no individual safety ranking or load conversion."
      },
      {
        "label": "Greg Nuckols: How to Deadlift",
        "url": "https://www.strongerbyscience.com/how-to-deadlift/",
        "scope": "Stance, block/rack and deficit distinctions. Range boundaries and comparison tiers are Gym Swap coaching judgments."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 2,
    "id": "deficit_barbell_deadlift",
    "name": "Deficit conventional barbell deadlift",
    "aliases": [
      "deficit conventional deadlift",
      "deficit straight bar deadlift"
    ],
    "focus": "Conventional front-bar pickup through additional bottom range.",
    "expect": "Feet are raised above the plates’ contact surface.",
    "needs": "Straight bar/plates/collars · stable whole-stance foot platform",
    "requires": [
      "deadlift_barbell",
      "barbell_deficit_platform",
      "deadlift_floor"
    ],
    "setup": "Stand on a stable platform supporting the whole conventional stance, with the barbell plates on the lower floor. Set the bar close over the midfoot with room around platform, shins and plates. Use a height that permits the intended controlled pickup; grip outside the legs and brace.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Push through the planted feet and extend hips and knees together to stand; finish tall without leaning back.",
      "Move the hips back and bend the knees to return under control. Let the weights settle, then reset the position before the next lift."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "Feet elevation lengthens the pickup, unlike blocks beneath the weights. Keep a controlled bottom position without forcing a particular deficit height.",
    "references": [
      {
        "label": "Greg Nuckols: How to Deadlift",
        "url": "https://www.strongerbyscience.com/how-to-deadlift/",
        "scope": "Stance, block/rack and deficit distinctions. Range boundaries and comparison tiers are Gym Swap coaching judgments."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 3,
    "id": "vertical_smith_deadlift",
    "name": "Vertical Smith-machine deadlift — settled bottom",
    "aliases": [
      "fixed vertical smith deadlift"
    ],
    "focus": "Two-leg front-bar pickup along a fixed vertical track.",
    "expect": "Rails guide the bar and rated stops define the bottom reset.",
    "needs": "Vertical Smith · compatible loading/hooks/stops · clear stance",
    "requires": [
      "vertical_smith_deadlift_setup",
      "deadlift_floor"
    ],
    "setup": "Check that this vertical-track station is intended to permit the lift and that its rated supports allow the stated pickup height. Set both stops equally, load as directed and establish controlled unhooking/rehooking. Place the feet so the bar stays close through hip-and-knee extension.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Push through the planted feet and extend hips and knees together to stand; finish tall without leaning back.",
      "Move the hips back and bend the knees to return under control. Let the weights settle, then reset the position before the next lift."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "An angled track is a different setup. Rails remove fore/aft steering, so do not force the body to follow an unsuitable path. Stops that shorten the range do not qualify as the reviewed comparable-height version; bar counterbalance and friction vary.",
    "references": [
      {
        "label": "Hammer Strength: vertical Smith machine",
        "url": "https://www.lifefitness.com/en-gb/catalog/strength-training/plate-loaded/plate-loaded-vertical-smith-machine",
        "scope": "Equipment identity only. A zero-degree track does not guarantee a suitable deadlift bottom stop."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 3,
    "id": "dual_axis_smith_deadlift",
    "name": "Dual-axis Smith deadlift — vertical and fore/aft",
    "aliases": [
      "dual action smith deadlift",
      "two axis smith deadlift"
    ],
    "focus": "Two-leg front-bar pickup on a vertically and fore/aft moving carriage.",
    "expect": "The bar can adjust fore/aft while remaining constrained by the carriage.",
    "needs": "Compatible dual-axis Smith · loading and bottom support · clear stance",
    "requires": [
      "dual_axis_deadlift_setup",
      "deadlift_floor"
    ],
    "setup": "Use a station intended to permit this lift with both vertical and fore/aft movement available. Follow its release and bottom-support controls and establish the declared pickup height. Set a conventional stance, grip outside the legs and brace with clearance through both axes.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Push through the planted feet and extend hips and knees together to stand; finish tall without leaning back.",
      "Move the hips back and bend the knees to return under control. Let the weights settle, then reset the position before the next lift."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "A fore/aft lock or an angled single track changes this version. Carriage travel, counterbalance and friction remain different from a free bar; if a compatible settled bottom is unavailable, this setup is unavailable.",
    "references": [
      {
        "label": "Steelflex: M3DSM 3D Smith",
        "url": "https://www.steelflexfitness.com/3d-smith-machine-m3dsm.html",
        "scope": "Equipment moves vertically and fore/aft. Our deadlift setup requires compatible intended use and bottom support."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 3,
    "id": "side_handle_lever_deadlift",
    "name": "Standing plate-loaded lever deadlift — side handles",
    "aliases": [
      "side handle lever deadlift",
      "ground base deadlift"
    ],
    "focus": "Standing two-leg hip-and-knee lift on a lever station.",
    "expect": "Side handles follow an anchored arc from a settled bottom.",
    "needs": "Plate-loaded deadlift lever station · suitable handles/loading/start",
    "requires": [
      "side_handle_deadlift_machine",
      "deadlift_floor"
    ],
    "setup": "Use a standing side-handle deadlift configuration such as a compatible Ground Base Squat/Lunge. Choose the intended handle and loading horns, secure plates as directed and check the bottom stop. Stand centered between the handles, bend hips and knees and brace with arms long.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Extend hips and knees while following the handle arc to standing; keep the feet planted and the torso controlled.",
      "Lower both handles under control to the intended bottom stop, let the resistance settle and reset."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "Different horns, handle positions and machines change height, travel and leverage. A brand name alone does not confirm this setup, and plate mass does not establish free-weight equivalence.",
    "references": [
      {
        "label": "Fitness Institute: Hammer Strength deadlift",
        "url": "https://fitnessinstitute.com.au/deadlift-hammer-strength/",
        "scope": "Original education identifies standing side-handle pickup on Ground Base Squat/Lunge; no heel-only or medical rule adopted."
      },
      {
        "label": "Hammer Strength: Ground Base Squat/Lunge",
        "url": "https://www.lifefitness.com/en-eu/catalog/strength-training/plate-loaded/plate-loaded-squat-lunge",
        "scope": "Handle and loading positions affect lever behavior; no brand-wide geometry equivalence."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 3,
    "id": "jefferson_deadlift",
    "name": "Jefferson deadlift — straddled bar",
    "aliases": [
      "jefferson deadlift",
      "straddle bar deadlift"
    ],
    "focus": "Hip-and-knee pickup in an asymmetric straddled stance.",
    "expect": "One foot is on each side of the shaft while the bar rises between the legs.",
    "needs": "Straight bar/plates/collars · clear straddled stance",
    "requires": [
      "deadlift_barbell",
      "deadlift_floor",
      "jefferson_clearance"
    ],
    "setup": "Straddle the bar with one foot in front of the shaft and the other behind it. Adjust foot direction and spacing for whole-foot contact and thigh clearance. Bend hips and knees and grip the bar between the legs, one hand in front and one behind the body; brace before lifting.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Extend hips and knees with long arms, keeping the bar clear of the legs and the torso orientation controlled. Do not deliberately twist to finish.",
      "Return the bar smoothly to settled plates and reset the stance before repeating."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "The asymmetric stance and grip need deliberate setup; no fixed toe angle is universal. This is a Jefferson deadlift, not a Jefferson curl. Opposite orientations do not imply extra prescribed sets or a load conversion.",
    "references": [
      {
        "label": "David Dellanave: Jefferson deadlift",
        "url": "https://www.dellanave.com/how-and-why-to-do-a-jefferson-deadlift/",
        "scope": "Straddled bar, asymmetric stance and clearance; no therapeutic or universal core-loading claim adopted."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 3,
    "id": "unequal_db_side_deadlift",
    "name": "Unequal-load two-dumbbell deadlift",
    "aliases": [
      "unequal load dumbbell deadlift",
      "unequal two db deadlift"
    ],
    "focus": "Two-leg side-held pickup with unequal left/right loading.",
    "expect": "Each arm holds a different mass while the torso stays controlled.",
    "needs": "Unequal DB pair · matched intended pickup heights · clear floor",
    "requires": [
      "unequal_deadlift_dbs",
      "deadlift_floor"
    ],
    "setup": "Place one dumbbell beside each foot with deliberately unequal masses. Establish matched intended hand pickup heights despite different weight sizes, using suitable stable supports if needed. Bend hips and knees, grip both and brace before lift-off.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Push through the planted feet and extend hips and knees together to stand; finish tall without leaning back.",
      "Move the hips back and bend the knees to return under control. Let the weights settle, then reset the position before the next lift."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "Resist being drawn into a side lean or turn; unequal loading does not mean deliberately shifting the torso. This is not an unevenly loaded barbell or a kickstand stance, and it does not prescribe a side-to-side dose.",
    "references": [
      {
        "label": "Kettlebility: odd-load kettlebell training",
        "url": "https://www.kettlebility.com/get-stronger-odd-load-kettlebell-training/",
        "scope": "Independent and unequal loading distinction. Our equal suitcase and unequal dumbbell setups are reviewed adaptations, not the source’s prescriptions."
      },
      {
        "label": "CrossFit: dumbbell deadlift",
        "url": "https://www.crossfit.com/essentials/the-dumbbell-deadlift",
        "scope": "Side-held pickup and height adjustment. Settled resets are our reviewed execution; no rehabilitation claims adopted."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 3,
    "id": "kickstand_db_deadlift",
    "name": "Kickstand two-dumbbell deadlift — bottom reset",
    "aliases": [
      "kickstand dumbbell floor deadlift",
      "staggered stance dumbbell floor deadlift"
    ],
    "focus": "Bottom-start hip-and-knee pickup with rear-foot assistance.",
    "expect": "A staggered stance biases contribution toward the forward leg.",
    "needs": "Matched side-held DBs · room for staggered feet and bottom contact",
    "requires": [
      "side_deadlift_dbs",
      "kickstand_deadlift_space",
      "deadlift_floor"
    ],
    "setup": "Place one foot forward and the other slightly behind on its forefoot, leaving both weights clear of either foot. Set matched DBs beside the legs at the intended pickup height. Keep the front foot planted and rear toes assisting as you bend hips and knees to grip and brace.",
    "cues": [
      "Brace the torso and take up tension with long arms before leaving the support.",
      "Stand by extending the hips and knees, keeping the front foot planted and the rear forefoot available for assistance. Keep the weights controlled beside the legs.",
      "Move the hips back and bend the knees to return under control. Let the weights settle, then reset the position before the next lift."
    ],
    "cue": "Brace the torso and take up tension with long arms before leaving the support.",
    "context": "Rear-foot assistance varies; no percentage split is assumed. This is a settled bottom-start lift, not a kickstand RDL or an unsupported single-leg balance.",
    "references": [
      {
        "label": "CrossFit: dumbbell deadlift",
        "url": "https://www.crossfit.com/essentials/the-dumbbell-deadlift",
        "scope": "Side-held pickup and height adjustment. Settled resets are our reviewed execution; no rehabilitation claims adopted."
      },
      {
        "label": "Kettlebility: odd-load kettlebell training",
        "url": "https://www.kettlebility.com/get-stronger-odd-load-kettlebell-training/",
        "scope": "Independent and unequal loading distinction. Our equal suitcase and unequal dumbbell setups are reviewed adaptations, not the source’s prescriptions."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 4,
    "id": "hip_extension_45",
    "name": "45° hip extension — plate at chest",
    "aliases": [
      "plate held 45 degree hip extension",
      "45 degree hip extension bench"
    ],
    "focus": "Loaded hip hinging with feet and thighs supported.",
    "expect": "The torso and chest-held plate move around the hips on a 45° bench.",
    "needs": "45° hip-extension bench · secure feet/thigh pads · plate",
    "requires": [
      "hip_extension_45_bench",
      "chest_held_plate"
    ],
    "setup": "Adjust the 45° bench so the feet are secure and the upper-thigh pad leaves the hip crease free to hinge. Check clear torso/plate travel. Establish a supported way to enter and exit and take a manageable plate to the chest before moving.",
    "cues": [
      "Hold the plate securely against the chest and keep the torso steady as the hips bend over the pad edge.",
      "Reverse the hinge with control and extend the hips until torso and legs align; avoid leaning or arching beyond that position.",
      "Lower smoothly into the next hip hinge. Use the apparatus’s supported entry/exit position to put the plate down before releasing the feet."
    ],
    "cue": "Hold the plate securely against the chest and keep the torso steady as the hips bend over the pad edge.",
    "context": "Keep movement at the hips rather than repeatedly bending and extending the spine. This removes the standing pickup and knee drive; plate position changes the demand, so no deadlift-weight conversion applies.",
    "references": [
      {
        "label": "Contreras et al.: hip-extension exercise mechanics",
        "url": "https://bretcontreras.com/wp-content/uploads/Are-All-Hip-Extension-Exercises-Created-Equal.pdf",
        "scope": "Author-hosted NSCA educational analysis distinguishes 45-degree and horizontal hip hinging and orientation-dependent resistance. No individual numerical predictions adopted."
      }
    ],
    "family": "hip_extension",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 4,
    "id": "horizontal_hip_extension",
    "name": "Horizontal hip extension — plate at chest",
    "aliases": [
      "plate held horizontal hip extension",
      "ghd hip extension with plate"
    ],
    "focus": "Loaded hip extension with secured legs and a moving torso.",
    "expect": "Horizontal leg support changes the challenge through the hinge.",
    "needs": "Horizontal hip-extension bench/GHD · secure feet/thigh pads · plate",
    "requires": [
      "horizontal_hip_bench",
      "chest_held_plate"
    ],
    "setup": "Use a horizontal hip-extension configuration with secure feet and upper thighs supported while the hip crease remains free. Allow torso and plate clearance. Establish controlled supported entry/exit and hold a manageable plate at the chest before beginning.",
    "cues": [
      "Hold the plate securely against the chest and keep the torso steady as the hips bend over the pad edge.",
      "Reverse the hinge with control and extend the hips until torso and legs align; avoid leaning or arching beyond that position.",
      "Lower smoothly into the next hip hinge. Use the apparatus’s supported entry/exit position to put the plate down before releasing the feet."
    ],
    "cue": "Hold the plate securely against the chest and keep the torso steady as the hips bend over the pad edge.",
    "context": "This is hip extension, not a knee-flexion glute-ham raise or repeated spinal extension. Compared with a 45° bench, orientation changes where gravity has the greatest turning effect; it does not reproduce a standing floor pickup.",
    "references": [
      {
        "label": "Contreras et al.: hip-extension exercise mechanics",
        "url": "https://bretcontreras.com/wp-content/uploads/Are-All-Hip-Extension-Exercises-Created-Equal.pdf",
        "scope": "Author-hosted NSCA educational analysis distinguishes 45-degree and horizontal hip hinging and orientation-dependent resistance. No individual numerical predictions adopted."
      }
    ],
    "family": "hip_extension",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3–A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  }
];
