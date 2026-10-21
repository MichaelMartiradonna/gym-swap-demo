export const DATA = {
  "equipment": {
    "dumbbells": "A suitable pair of dumbbells",
    "dumbbell": "One suitable dumbbell",
    "kettlebell": "One suitable kettlebell",
    "kettlebell_pair": "Two suitable kettlebells",
    "flat_bench": "Stable bench usable flat",
    "incline_bench": "Bench that locks on an incline",
    "upright_bench": "Bench that locks near upright",
    "standing_space": "Clear standing space",
    "floor_space": "Clear floor space",
    "walkway": "Clear walking route and turning room",
    "fixed_support": "Fixed hand support that cannot slide or tip",
    "overhead_clearance": "Overhead clearance",
    "band": "Suitable resistance band",
    "loop_band": "Continuous loop band suitable for a foot-loop march",
    "secure_footwear": "Secure footwear for a foot-loop band",
    "chest_anchor": "Secure band anchor at chest height",
    "row_anchor": "Secure band anchor for seated rowing",
    "padding": "Protective padding if needed for a thigh-supported dumbbell",
    "towel": "Small towel for elbow support",
    "pulldown_station": "Another complete pulldown station with seat, restraint and handle",
    "assisted_pullup": "Counterweight-assisted pull-up machine",
    "row_machine": "Another seated rowing machine",
    "tbar_station": "Chest-supported T-bar station",
    "leg_press_pin": "Another pin-loaded leg-press station",
    "leg_press_plate": "Another plate-loaded leg-press station",
    "plates": "Suitable weight plates",
    "chest_machine": "Another chest-press machine",
    "calf_standing_machine": "Another standing calf-raise station",
    "calf_seated_machine": "Another seated calf-raise station",
    "cable_chest": "Available cable pulley at chest height with handle",
    "cable_low_cuff": "Available low pulley with compatible ankle cuff",
    "cable_low_handle": "Available low pulley with curl handle",
    "cable_high_handle": "Available high pulley with rope or pushdown handle",
    "cable_elbow_handle": "Available pulley at elbow height with handle",
    "reverse_fly_machine": "Another reverse-fly machine",
    "barbell": "Suitable barbell",
    "collars": "Compatible barbell collars",
    "landmine_mount": "Compatible secured landmine mount",
    "bar_clearance": "Clearance for the moving landmine bar"
  },
  "implies": {
    "dumbbells": [
      "dumbbell"
    ],
    "kettlebell_pair": [
      "kettlebell"
    ]
  },
  "exercises": {
    "leg_press": {
      "label": "Leg press",
      "source": "squats",
      "options": [
        {
          "id": "goblet_squat",
          "label": "Goblet squat",
          "requires": [
            [
              "dumbbell",
              "kettlebell"
            ],
            "standing_space"
          ],
          "partial": false,
          "familiar": false,
          "discovery_only": false,
          "why": "Keeps a hip-and-knee movement for the legs, including the quadriceps and glutes.",
          "changes": "The leg press supports your body. A goblet squat adds balance and holding a weight at your chest, so grip or torso control may limit you before your legs do.",
          "cues": [
            "Hold one dumbbell or kettlebell close to your chest.",
            "Bend your hips and knees together. Let your hips move back while staying balanced over your feet.",
            "Lower under control; stop before you lose balance or control of your pelvis or back."
          ],
          "note": "A squat to a bench is another variation only if a stable bench of a suitable height is free. Touch it gently; it is not a required depth target."
        },
        {
          "id": "other_pin_leg_press",
          "label": "Another pin-loaded leg press",
          "requires": [
            "leg_press_pin"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": true,
          "why": "Keeps a supported leg press, with the hips and knees working together.",
          "changes": "Another machine may have a different seat, footplate, range, or movement path. The weight-stack number does not transfer directly.",
          "cues": [
            "Check the seat and back support before loading.",
            "Use the station's instructions for foot placement, range stops, and controls.",
            "Move through a range you can control without losing your position against the support."
          ],
          "setup": "Know this station's seat adjustments, range stops, and weight-stack controls."
        },
        {
          "id": "other_plate_leg_press",
          "label": "Another plate-loaded leg press",
          "requires": [
            "leg_press_plate",
            "plates"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": true,
          "why": "Keeps a supported leg press for a general leg workout.",
          "changes": "Plate loading does not tell you the machine's angle or starting resistance. Different machines do not have equivalent loads.",
          "cues": [
            "Check the seat, back support, footplate, and movement path.",
            "Follow the machine's instructions for loading and releasing or engaging its stops.",
            "Keep the movement controlled and your body supported."
          ],
          "setup": "Know the loading arrangement, start position, and safety stops on this particular station."
        }
      ],
      "id": "leg_press",
      "group": "Legs & hips"
    },
    "barbell_rdl": {
      "label": "Barbell Romanian deadlift",
      "source": "hinges_and_hip_extension",
      "options": [
        {
          "id": "dumbbell_rdl",
          "label": "Dumbbell Romanian deadlift",
          "requires": [
            "dumbbells",
            "standing_space"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": false,
          "why": "Retains a hip hinge, with the hamstrings and glutes contributing while the torso stays steady.",
          "changes": "Two separate weights change handling and available loading. This may not meet a heavy barbell strength goal.",
          "cues": [
            "Start tall, with a slight knee bend and the weights close to your thighs.",
            "Move your hips back while the weights travel close to your legs. Lower only as far as you can keep control.",
            "Bring your hips forward to stand without leaning backward. Reaching the floor is not the goal."
          ],
          "setup": "Be familiar with the hip hinge and with picking up and setting down the dumbbells."
        }
      ],
      "id": "barbell_rdl",
      "group": "Legs & hips"
    },
    "hip_thrust_machine": {
      "label": "Hip-thrust machine",
      "source": "hinges_and_hip_extension",
      "options": [
        {
          "id": "floor_bridge",
          "label": "Bodyweight glute bridge",
          "requires": [
            "floor_space"
          ],
          "partial": true,
          "familiar": false,
          "discovery_only": false,
          "why": "Keeps hip extension with your upper back supported.",
          "changes": "The floor changes the range, and bodyweight may offer much less resistance than the machine. This does not preserve a heavy hip-thrust goal.",
          "cues": [
            "Lie on your back with your knees bent and feet planted.",
            "Lift your pelvis without gaining height by arching your lower back.",
            "Lower smoothly and keep the movement controlled."
          ]
        }
      ],
      "id": "hip_thrust_machine",
      "group": "Legs & hips"
    },
    "chest_press_machine": {
      "label": "Machine chest press",
      "source": "chest_presses",
      "options": [
        {
          "id": "db_bench_press",
          "label": "Flat dumbbell bench press",
          "requires": [
            "dumbbells",
            "flat_bench"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": false,
          "why": "Keeps a chest-press task involving the chest, front shoulders, and triceps.",
          "changes": "Each arm controls its own weight and path. Getting the weights into and out of position differs from using a machine.",
          "cues": [
            "Keep your head, upper back, and hips supported, with your feet stable.",
            "Align your wrists above your forearms and lower smoothly through a controlled range.",
            "Press without bouncing the weights or colliding them at the top."
          ],
          "setup": "Know how to get the dumbbells into and out of the pressing position on a flat bench."
        },
        {
          "id": "db_floor_press",
          "label": "Dumbbell floor press",
          "requires": [
            "dumbbells",
            "floor_space"
          ],
          "partial": true,
          "familiar": true,
          "discovery_only": false,
          "why": "Keeps a chest press when a bench is not available.",
          "changes": "The floor limits how far the upper arms can descend. It does not preserve the full bottom range of a bench press.",
          "cues": [
            "Use clear floor space and a controlled way to position the dumbbells.",
            "Lower gently until your upper arms meet the floor; do not bounce from the contact.",
            "Press smoothly while keeping control of each weight."
          ],
          "setup": "Know how to position and put down the dumbbells while lying on the floor."
        },
        {
          "id": "other_chest_press",
          "label": "Another chest-press machine",
          "requires": [
            "chest_machine"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": true,
          "why": "Keeps a supported machine chest press.",
          "changes": "Seat height, handle position, movement path, and resistance can differ between machines.",
          "cues": [
            "Check and adjust the seat and handles for this station.",
            "Keep your body supported and use a range you can control.",
            "Press and return smoothly, following the machine's instructions."
          ],
          "setup": "Know this machine's seat, handle, and resistance adjustments."
        }
      ],
      "id": "chest_press_machine",
      "group": "Push"
    },
    "shoulder_press_machine": {
      "label": "Machine shoulder press",
      "source": "shoulder_presses",
      "options": [
        {
          "id": "seated_db_press",
          "label": "Seated dumbbell shoulder press with back support",
          "requires": [
            "dumbbells",
            "upright_bench",
            "overhead_clearance"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": false,
          "why": "Keeps an overhead press with back support, using the shoulders and triceps.",
          "changes": "Separate weights allow independent arm paths and require different control from the machine.",
          "cues": [
            "Lock the bench near upright, plant your feet, and keep your torso supported.",
            "Press without leaning back or flaring your ribs to gain height.",
            "Let your shoulder blades move naturally with your arms, then lower smoothly."
          ],
          "setup": "Know how to position and put down the dumbbells for a seated overhead press."
        },
        {
          "id": "standing_db_press",
          "label": "Standing dumbbell shoulder press",
          "requires": [
            "dumbbells",
            "standing_space",
            "overhead_clearance"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": false,
          "why": "Keeps the overhead pressing movement when no suitable bench is free.",
          "changes": "Standing removes back support and changes the demand on torso control. A seated machine load does not transfer directly.",
          "cues": [
            "Start with stable footing and enough room above your head.",
            "Keep your torso controlled rather than leaning back or flaring your ribs.",
            "Press and lower smoothly, letting your shoulder blades move with your arms."
          ],
          "setup": "Be familiar with positioning the weights and controlling a standing overhead press."
        },
        {
          "id": "landmine_press",
          "label": "Landmine press",
          "requires": [
            "landmine_mount",
            "barbell",
            "collars",
            "bar_clearance",
            "standing_space"
          ],
          "partial": true,
          "familiar": true,
          "discovery_only": false,
          "why": "Offers an angled pressing option if changing the overhead path fits your workout.",
          "changes": "The bar follows an angled arc. It is a partial match for a vertical overhead press.",
          "cues": [
            "Use a compatible, secured landmine mount and clear the bar's full moving path.",
            "Use the stance and grip you already know for this setup.",
            "Press and return with control, keeping your torso steady."
          ],
          "setup": "Already know this landmine setup. A loose barbell in a room corner does not qualify.",
          "note": "The listed setup is for the bar itself. If adding load, also confirm suitable plates and use the required collar."
        }
      ],
      "id": "shoulder_press_machine",
      "group": "Push"
    },
    "seated_cable_row": {
      "label": "Seated cable row",
      "source": "horizontal_rows",
      "options": [
        {
          "id": "incline_db_row",
          "label": "45-degree chest-supported dumbbell row",
          "requires": [
            "dumbbells",
            "incline_bench"
          ],
          "partial": false,
          "familiar": false,
          "discovery_only": false,
          "why": "Keeps a rowing action for the back and rear shoulders, with the arms assisting.",
          "changes": "Chest support reduces independent torso stabilization compared with an unsupported seated row. Body position, resistance direction, and loading also change.",
          "cues": [
            "Lock the bench around 45°. Keep your chest on the pad and your feet supported.",
            "Brace your torso and keep your neck aligned. Row your elbows back while gently bringing your shoulder blades together.",
            "Avoid shrugging, pushing your head forward, or forcing your elbows far behind you. Lower under control."
          ]
        },
        {
          "id": "seated_band_row",
          "label": "Seated band row",
          "requires": [
            "band",
            "row_anchor",
            "floor_space"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": true,
          "why": "Keeps a seated rowing arrangement more closely than a standing free-weight row.",
          "changes": "Band resistance changes as it stretches. Its feel and load differ from a cable stack.",
          "cues": [
            "Use a suitable band, secure rowing anchor, and clear sitting space.",
            "Keep your torso steady and neck aligned as you row.",
            "Return under control without letting the band pull you out of position."
          ],
          "setup": "Know how to secure and check this band-and-anchor arrangement."
        },
        {
          "id": "other_row_machine",
          "label": "Seated machine row",
          "requires": [
            "row_machine"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": true,
          "why": "Keeps a seated rowing movement for the back and rear shoulders.",
          "changes": "The handle path and any chest support may differ from your cable row.",
          "cues": [
            "Adjust the seat, handles, and chest support if the station has it.",
            "Row with your neck aligned and shoulders away from your ears.",
            "Return smoothly without swinging your torso."
          ],
          "setup": "Know this rowing machine's adjustments and starting position."
        },
        {
          "id": "supported_tbar_row",
          "label": "Chest-supported T-bar row",
          "requires": [
            "tbar_station"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": true,
          "why": "Keeps a rowing action with support for the chest.",
          "changes": "This is chest-supported rather than seated. The grip, loading, and path depend on the station.",
          "cues": [
            "Check that this is a chest-supported T-bar station, with an appropriate pad and footholds.",
            "Keep your chest against the pad and your neck aligned while rowing.",
            "Return under control without shrugging or lifting your torso from the support."
          ],
          "setup": "Know the station's loading, starting position, and release controls."
        }
      ],
      "id": "seated_cable_row",
      "group": "Pull"
    },
    "lat_pulldown": {
      "label": "Lat pulldown",
      "source": "vertical_pulls",
      "options": [
        {
          "id": "other_pulldown",
          "label": "Another front pulldown station",
          "requires": [
            "pulldown_station"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": false,
          "why": "Keeps the overhead-to-body pulling task.",
          "changes": "Check the grip, support, and movement path; a different stack setting is not an equivalent load.",
          "cues": [
            "Use a complete station with a seat, thigh restraint, and suitable handle.",
            "Keep your feet stable, thighs secured, and torso steady as your elbows move down beside you.",
            "Pull in front of your head and return the handle upward under control."
          ],
          "setup": "Know how to adjust the thigh restraint, handle, and resistance."
        },
        {
          "id": "assisted_pullup",
          "label": "Counterweight-assisted pull-up",
          "requires": [
            "assisted_pullup"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": false,
          "why": "Retains an overhead pulling movement when an appropriate assistance machine is free.",
          "changes": "Your body moves relative to the handles, and the support differs. More counterweight assistance generally makes the movement easier; it is not a pulldown load.",
          "cues": [
            "Follow the machine's instructions for the steps, moving support, and assistance setting.",
            "Use a controlled overhead pull with a steady torso.",
            "Return and exit the support using the setup you know."
          ],
          "setup": "Know how to enter and exit this machine and how its assistance platform works."
        }
      ],
      "id": "lat_pulldown",
      "group": "Pull"
    },
    "farmer_carry": {
      "label": "Two-sided farmer carry",
      "source": "carries",
      "options": [
        {
          "id": "db_farmer_carry",
          "label": "Two-dumbbell farmer carry",
          "requires": [
            "dumbbells",
            "walkway"
          ],
          "partial": false,
          "familiar": false,
          "discovery_only": false,
          "why": "Keeps a two-sided loaded walking task.",
          "changes": "Grip, handle shape, and available load differ from dedicated carry handles. Light dumbbells may not meet a heavy-carry goal.",
          "cues": [
            "Hold one weight beside each hip and stand tall.",
            "Walk with controlled steps without swinging the weights into your legs.",
            "Turn deliberately with enough clear room; do not weave through other exercisers."
          ]
        },
        {
          "id": "kb_farmer_carry",
          "label": "Two-kettlebell farmer carry",
          "requires": [
            "kettlebell_pair",
            "walkway"
          ],
          "partial": false,
          "familiar": false,
          "discovery_only": false,
          "why": "Keeps one weight on each side while walking.",
          "changes": "Kettlebell handles and weight positions feel different from dedicated carry handles or dumbbells.",
          "cues": [
            "Hold one kettlebell beside each hip and stand tall.",
            "Use controlled steps and keep the weights from swinging into your legs.",
            "Leave clear room to turn and set the weights down."
          ]
        },
        {
          "id": "farmer_hold",
          "label": "Stationary farmer hold",
          "requires": [
            "dumbbells",
            "standing_space"
          ],
          "partial": true,
          "familiar": false,
          "discovery_only": false,
          "why": "Offers a narrower grip-and-holding option when there is no clear walking route.",
          "changes": "It removes walking and the changing demands of each step. This does not complete a planned walking task, and seconds do not convert to distance.",
          "cues": [
            "Stand in clear space with one dumbbell beside each hip.",
            "Keep your torso upright and the weights controlled.",
            "Set the weights down deliberately when you finish the hold."
          ]
        }
      ],
      "id": "farmer_carry",
      "group": "Carry"
    },
    "suitcase_carry": {
      "label": "Kettlebell suitcase carry",
      "source": "carries",
      "options": [
        {
          "id": "db_suitcase_carry",
          "label": "Single-dumbbell suitcase carry",
          "requires": [
            "dumbbell",
            "walkway"
          ],
          "partial": false,
          "familiar": false,
          "discovery_only": false,
          "why": "Keeps the original one-sided carrying task.",
          "changes": "The handle and weight position differ from a kettlebell. Adding a second weight would change the task.",
          "cues": [
            "Carry one dumbbell at your side along a clear route.",
            "Keep your trunk upright rather than leaning toward or away from the weight.",
            "Use controlled steps and follow your existing plan's side allocation."
          ]
        }
      ],
      "id": "suitcase_carry",
      "group": "Carry"
    },
    "cable_pallof": {
      "label": "Cable Pallof press",
      "source": "core_tasks",
      "options": [
        {
          "id": "band_pallof",
          "label": "Standing band Pallof press",
          "requires": [
            "band",
            "chest_anchor",
            "standing_space"
          ],
          "partial": false,
          "familiar": false,
          "discovery_only": false,
          "why": "Keeps the task of resisting a sideways pull without letting your torso twist.",
          "changes": "Band resistance changes with stretch. It does not reproduce a cable-stack setting.",
          "cues": [
            "Stand sideways to a secure chest-height anchor, holding the band at your chest.",
            "Keep your ribs and pelvis facing forward as your hands move straight away from your chest.",
            "Return under control. Choose a position where the pull does not force your body to turn."
          ],
          "note": "A loose railing, movable bench, or unknown attachment point is not a confirmed band anchor."
        },
        {
          "id": "other_cable_pallof",
          "label": "Pallof press at another cable station",
          "requires": [
            "cable_chest",
            "standing_space"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": true,
          "why": "Keeps the cable task of resisting torso rotation against a sideways pull.",
          "changes": "The pulley and handle must suit a chest-height setup; another cable station may feel different.",
          "cues": [
            "Set a suitable handle at chest height and stand sideways to the pulley.",
            "Keep your ribs and pelvis facing forward as you move your hands away from your chest.",
            "Return smoothly without letting your torso turn."
          ],
          "setup": "Know the pulley adjustment, handle connection, and standing position."
        }
      ],
      "id": "cable_pallof",
      "group": "Core"
    },
    "ab_wheel": {
      "label": "Ab-wheel rollout",
      "source": "core_tasks",
      "options": [
        {
          "id": "forearm_plank",
          "label": "Forearm plank",
          "requires": [
            "floor_space"
          ],
          "partial": true,
          "familiar": false,
          "discovery_only": false,
          "why": "Keeps a trunk-control task that resists back arching.",
          "changes": "A plank removes the wheel's moving reach and lever change. It is a partial match with no exact repetition-to-hold conversion.",
          "cues": [
            "Support your body on your forearms and toes in clear floor space.",
            "Keep your trunk controlled rather than allowing your pelvis to sag.",
            "Breathe steadily while holding the position you can control."
          ]
        }
      ],
      "id": "ab_wheel",
      "group": "Core"
    },
    "standing_calf_machine": {
      "label": "Standing calf-raise machine",
      "source": "calves",
      "options": [
        {
          "id": "standing_db_calf",
          "label": "Supported standing dumbbell calf raise",
          "requires": [
            "dumbbell",
            "fixed_support",
            "standing_space"
          ],
          "partial": false,
          "familiar": false,
          "discovery_only": false,
          "why": "Keeps a standing heel raise with the knees extended.",
          "changes": "Hand support and available loading differ. Starting on the floor limits heel descent compared with a raised machine platform.",
          "cues": [
            "Hold a dumbbell in one hand and use fixed support with the other.",
            "Begin with both feet on level ground, knees extended without forcefully locking them.",
            "Raise and lower your heels under control."
          ],
          "note": "A movable bench qualifies as hand support only if it cannot slide or tip. A step is a separate setup, not assumed here."
        },
        {
          "id": "other_standing_calf",
          "label": "Another standing calf-raise station",
          "requires": [
            "calf_standing_machine"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": true,
          "why": "Keeps a supported standing calf-raise task.",
          "changes": "Platform height, body support, and available load vary between machines.",
          "cues": [
            "Check the support and foot platform on this station.",
            "Keep your knees extended without forcefully locking them.",
            "Raise and lower your heels through a range you can control."
          ],
          "setup": "Know this station's start position, supports, and loading controls."
        }
      ],
      "id": "standing_calf_machine",
      "group": "Calves & hip flexors"
    },
    "seated_calf_machine": {
      "label": "Seated calf-raise machine",
      "source": "calves",
      "options": [
        {
          "id": "seated_db_calf",
          "label": "Seated dumbbell calf raise",
          "requires": [
            "dumbbell",
            "flat_bench",
            "padding"
          ],
          "partial": true,
          "familiar": false,
          "discovery_only": false,
          "why": "Keeps a bent-knee heel raise when the seated calf station is unavailable.",
          "changes": "This is a limited-load option. Floor contact and how securely you can hold the weight may limit the range and resistance.",
          "cues": [
            "Sit on a stable bench with your knees bent around 90° and feet planted.",
            "Secure the dumbbell by hand on the lower thigh above the knee, with padding as needed—not directly on the kneecap.",
            "Raise and lower the heel under control. Do not use this setup if the weight rolls, slips, or cannot be held comfortably and securely."
          ],
          "note": "The soleus contributes in both seated and standing raises. Knee position changes the gastrocnemius's length; seated does not mean soleus only."
        },
        {
          "id": "other_seated_calf",
          "label": "Another seated calf-raise station",
          "requires": [
            "calf_seated_machine"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": true,
          "why": "Keeps a seated, bent-knee heel raise.",
          "changes": "Pad position, foot platform, and loading can differ from the original machine.",
          "cues": [
            "Adjust the seat and thigh support using the station's instructions.",
            "Keep the bent-knee setup steady while raising and lowering your heels.",
            "Use a controlled range and check the release controls before starting."
          ],
          "setup": "Know this machine's thigh pad, loading, and release controls."
        }
      ],
      "id": "seated_calf_machine",
      "group": "Calves & hip flexors"
    },
    "cable_hip_march": {
      "label": "Standing cable hip-flexion march",
      "source": "hip_flexors",
      "options": [
        {
          "id": "loop_band_march",
          "label": "Standing loop-band march",
          "requires": [
            "loop_band",
            "secure_footwear",
            "fixed_support",
            "standing_space"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": false,
          "why": "Keeps lifting the thigh forward at the hip.",
          "changes": "The band changes the resistance direction and amount. Your standing foot becomes part of the anchor arrangement.",
          "cues": [
            "Use a suitable continuous loop around the forefeet, with the standing foot securing its side underfoot.",
            "Hold fixed support, stand tall, and lift one knee while controlling your trunk and pelvis.",
            "Return smoothly. Stop before leaning back, hiking the pelvis, or losing the band's position."
          ],
          "setup": "Know this secure foot-loop arrangement. A handled tube or a mini-band above the knees is a different setup."
        },
        {
          "id": "other_cable_march",
          "label": "Standing cable march at another pulley",
          "requires": [
            "cable_low_cuff",
            "fixed_support",
            "standing_space"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": true,
          "why": "Keeps the standing cable hip-flexion movement.",
          "changes": "You need the full low-pulley and ankle-cuff arrangement, not just any free cable station.",
          "cues": [
            "Check the compatible cuff, secure connection, and fixed hand support.",
            "Stand tall and lift the thigh forward without leaning back or hiking your pelvis.",
            "Return your foot smoothly while keeping your torso controlled."
          ],
          "setup": "Know how to secure the ankle cuff and position yourself at the low pulley."
        }
      ],
      "id": "cable_hip_march",
      "group": "Calves & hip flexors"
    },
    "cable_biceps_curl": {
      "label": "Standing cable biceps curl",
      "source": "arm_isolation",
      "options": [
        {
          "id": "db_curl",
          "label": "Standing dumbbell biceps curl",
          "requires": [
            "dumbbells",
            "standing_space"
          ],
          "partial": false,
          "familiar": false,
          "discovery_only": false,
          "why": "Keeps elbow bending with a palm-forward grip.",
          "changes": "Gravity loads dumbbells differently from a cable, so the feel through the repetition changes.",
          "cues": [
            "Start with your arms beside your torso and palms facing forward.",
            "Bend your elbows while keeping the upper arms reasonably steady.",
            "Lower smoothly without swinging your torso to start the next repetition."
          ]
        },
        {
          "id": "other_cable_curl",
          "label": "Curl at another low cable pulley",
          "requires": [
            "cable_low_handle",
            "standing_space"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": true,
          "why": "Keeps a cable curl with a palm-forward grip.",
          "changes": "The low pulley needs a suitable handle or curl bar. Stack labels and pulley arrangements may differ.",
          "cues": [
            "Connect and check a suitable curl handle at the low pulley.",
            "Bend your elbows with your upper arms reasonably steady.",
            "Lower under control rather than swinging your torso."
          ],
          "setup": "Know the pulley, handle connection, and resistance adjustment."
        }
      ],
      "id": "cable_biceps_curl",
      "group": "Arms & shoulders"
    },
    "triceps_pushdown": {
      "label": "Cable triceps pushdown",
      "source": "arm_isolation",
      "options": [
        {
          "id": "db_kickback",
          "label": "Bench-supported dumbbell triceps kickback",
          "requires": [
            "dumbbell",
            "flat_bench",
            "standing_space"
          ],
          "partial": true,
          "familiar": true,
          "discovery_only": false,
          "why": "Keeps elbow extension using the triceps.",
          "changes": "The torso position, shoulder angle, and resistance through the movement differ from a pushdown. This is a partial match.",
          "cues": [
            "Support one hand on a stable bench and hinge with your back controlled.",
            "Keep the working upper arm alongside your torso as you straighten the elbow.",
            "Bend the elbow again under control without swinging the upper arm."
          ],
          "setup": "Be familiar with the supported hinge and the working-arm position."
        },
        {
          "id": "other_pushdown",
          "label": "Pushdown at another high pulley",
          "requires": [
            "cable_high_handle",
            "standing_space"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": true,
          "why": "Keeps the original cable elbow-extension task.",
          "changes": "Another pulley and attachment can change the feel. The required rope or pushdown handle must also be free.",
          "cues": [
            "Check the attachment and high-pulley connection.",
            "Keep your torso controlled and your upper arms steady as you straighten the elbows.",
            "Return smoothly through a range you can control."
          ],
          "setup": "Know the high-pulley attachment and resistance adjustment."
        }
      ],
      "id": "triceps_pushdown",
      "group": "Arms & shoulders"
    },
    "reverse_pec_deck": {
      "label": "Reverse pec-deck / rear-delt machine",
      "source": "shoulder_accessories",
      "options": [
        {
          "id": "incline_reverse_fly",
          "label": "Incline chest-supported dumbbell reverse fly",
          "requires": [
            "dumbbells",
            "incline_bench"
          ],
          "partial": false,
          "familiar": false,
          "discovery_only": false,
          "why": "Keeps the rear-shoulder fly action.",
          "changes": "Support and resistance through the arc differ from a machine. A row would add a larger elbow-bending action.",
          "cues": [
            "Lock the bench around 45°, keep your chest supported, and plant your feet.",
            "Raise your arms out to the sides with a small, relatively constant elbow bend.",
            "Lower smoothly without throwing your head forward or lifting your torso from the pad."
          ]
        },
        {
          "id": "other_reverse_fly",
          "label": "Another reverse-fly machine",
          "requires": [
            "reverse_fly_machine"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": true,
          "why": "Keeps a rear-shoulder fly rather than changing to a row.",
          "changes": "Seat, handles, and the guided arc may differ between machines.",
          "cues": [
            "Adjust the seat and handles for the station's reverse-fly position.",
            "Use a relatively constant elbow bend as you open the arms.",
            "Return with control, keeping your torso supported."
          ],
          "setup": "Know this station's reverse-fly configuration and seat adjustments."
        }
      ],
      "id": "reverse_pec_deck",
      "group": "Arms & shoulders"
    },
    "cable_external_rotation": {
      "label": "Cable external rotation, elbow beside body",
      "source": "shoulder_accessories",
      "options": [
        {
          "id": "sidelying_external_rotation",
          "label": "Side-lying dumbbell external rotation",
          "requires": [
            "dumbbell",
            "floor_space",
            "towel"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": false,
          "why": "Keeps the specified shoulder external-rotation task with the upper arm beside the body.",
          "changes": "Lying on your side changes your orientation to gravity. Simply turning a dumbbell sideways while standing would not recreate the original cable resistance.",
          "cues": [
            "Lie on the opposite side. Place a small towel between your working elbow and ribs, with the elbow bent around 90°.",
            "Use a suitable light dumbbell and rotate your forearm upward without rolling your torso backward.",
            "Return under control while keeping the upper arm beside your body."
          ],
          "setup": "Know this side-lying position and use a dumbbell light enough to control the rotation."
        },
        {
          "id": "other_cable_rotation",
          "label": "External rotation at another elbow-height pulley",
          "requires": [
            "cable_elbow_handle",
            "standing_space"
          ],
          "partial": false,
          "familiar": true,
          "discovery_only": true,
          "why": "Keeps cable external rotation with the elbow beside the body.",
          "changes": "The pulley needs to be at elbow height with a compatible handle. This does not cover every shoulder-rotation angle.",
          "cues": [
            "Set the compatible handle at elbow height.",
            "Keep your upper arm beside your torso as you rotate the forearm outward.",
            "Return smoothly without turning your torso to move the handle."
          ],
          "setup": "Know the elbow-height cable arrangement and handle connection."
        }
      ],
      "id": "cable_external_rotation",
      "group": "Arms & shoulders"
    }
  },
  "sources": {
    "substitution_principles": {
      "title": "Choosing a Gym Equipment Swap",
      "references": []
    },
    "squats": {
      "title": "Squats: Replacing an Unavailable Leg Press",
      "references": [
        {
          "label": "ACE: seated leg press",
          "url": "https://www.acefitness.org/resources/everyone/exercise-library/154/seated-leg-press/"
        },
        {
          "label": "NASM: goblet squat",
          "url": "https://www.nasm.org/resource-center/exercise-library/goblet-squat"
        }
      ]
    },
    "hinges_and_hip_extension": {
      "title": "Hip Hinges and Hip Extension: Keep the Original Task",
      "references": [
        {
          "label": "NASM: dumbbell Romanian deadlift",
          "url": "https://www.nasm.org/resource-center/exercise-library/dumbbell-romanian-deadlift"
        },
        {
          "label": "ACE: Romanian deadlift technique",
          "url": "https://www.acefitness.org/continuing-education/prosource/january-2016/5767/ace-technique-series-romanian-deadlift/"
        },
        {
          "label": "ACE: glute bridge",
          "url": "https://www.acefitness.org/resources/everyone/exercise-library/49/glute-bridge/"
        },
        {
          "label": "CrossFit: GHD extension variants",
          "url": "https://www.crossfit.com/essentials/hip-back-and-hip-back-extensions"
        }
      ]
    },
    "chest_presses": {
      "title": "Chest Presses: Preserve the Pressing Direction",
      "references": [
        {
          "label": "ACE: dumbbell chest press",
          "url": "https://www.acefitness.org/resources/everyone/exercise-library/19/chest-press/"
        },
        {
          "label": "ACE: chest exercise discussion",
          "url": "https://www.acefitness.org/resources/pros/expert-articles/8972/be-a-chest-day-champion-an-evidence-based-approach-to-training-the-chest/"
        }
      ]
    },
    "shoulder_presses": {
      "title": "Shoulder Presses: Overhead and Angled Options",
      "references": [
        {
          "label": "ACE: seated dumbbell shoulder press",
          "url": "https://www.acefitness.org/resources/everyone/exercise-library/43/seated-shoulder-press/"
        },
        {
          "label": "ACE: landmine training",
          "url": "https://www.acefitness.org/continuing-education/certified/september-2025/8948/the-ace-workout-builder-for-landmine-training/"
        }
      ]
    },
    "horizontal_rows": {
      "title": "Rows: Replacing an Unavailable Seated Cable Row",
      "references": [
        {
          "label": "ACE's shoulder-exercise reference",
          "url": "https://contentcdn.eacefitness.com/certifiednews/images/article/pdfs/ShoulderExercises.pdf"
        }
      ]
    },
    "vertical_pulls": {
      "title": "Pulldowns and Pull-Ups: Preserve the Overhead Pull",
      "references": [
        {
          "label": "NASM: lat-pulldown biomechanics",
          "url": "https://www.nasm.org/resource-center/blog/training/the-biomechanics-of-the-lat-pulldown-muscles-grip-and-form"
        }
      ]
    },
    "carries": {
      "title": "Carrying Weights: Equipment and Walking Space Both Matter",
      "references": [
        {
          "label": "ACE: farmer's carry",
          "url": "https://www.acefitness.org/resources/everyone/exercise-library/359/farmer-s-carry/"
        },
        {
          "label": "ACE: strongman training",
          "url": "https://www.acefitness.org/continuing-education/prosource/equipment-special-issue/4994/strongman-training-for-your-clients/"
        }
      ]
    },
    "core_tasks": {
      "title": "Core: Resist Twisting, Resist Arching, or Rotate Deliberately",
      "references": [
        {
          "label": "ACE: anti-rotation exercises",
          "url": "https://www.acefitness.org/resources/pros/expert-articles/5625/7-exercises-to-create-an-anti-rotation-progression-sequence/"
        },
        {
          "label": "NSCA: Foundations of Fitness Programming",
          "url": "https://www.nsca.com/contentassets/8323553f698a466a98220b21d9eb9a65/foundationsoffitnessprogramming_201508.pdf"
        }
      ]
    },
    "calves": {
      "title": "Calf Raises: Keep the Knee Position in Mind",
      "references": [
        {
          "label": "ACE: supported standing calf raise",
          "url": "https://www.acefitness.org/resources/everyone/exercise-library/73/standing-calf-raises-wall/"
        },
        {
          "label": "Kinoshita and colleagues, 2023",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10753835/"
        }
      ]
    },
    "hip_flexors": {
      "title": "Hip Flexors: Replacing a Standing Cable March",
      "references": [
        {
          "label": "ACE: hip exercises using a loop band",
          "url": "https://www.acefitness.org/resources/pros/expert-articles/6315/8-hip-strengthening-exercises-using-the-versa-loop/"
        }
      ]
    },
    "arm_isolation": {
      "title": "Arms: Keep Curls and Triceps Work Distinct",
      "references": [
        {
          "label": "ACE: functional fitness study, station 8",
          "url": "https://www.acefitness.org/getfit/studies/functionfitness.pdf"
        },
        {
          "label": "ACE: biceps exercise discussion",
          "url": "https://www.acefitness.org/resources/pros/expert-articles/9033/building-better-biceps-evidence-based-exercises-for-strength-and-function/"
        }
      ]
    },
    "shoulder_accessories": {
      "title": "Shoulder Accessories: Raises, Rear Flyes, and Rotation",
      "references": [
        {
          "label": "ACE: incline reverse fly",
          "url": "https://www.acefitness.org/resources/everyone/exercise-library/34/incline-reverse-fly/"
        },
        {
          "label": "HSS: side-lying external rotation",
          "url": "https://www.hss.edu/health-library/move-better/exercises-shoulder-impingement"
        },
        {
          "label": "ACE: prone shoulder formations",
          "url": "https://www.acefitness.org/resources/everyone/exercise-library/249/prone-scapular-shoulder-stabilization-series-i-y-t-w-o-formation/"
        }
      ]
    }
  }
};
