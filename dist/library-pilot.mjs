// ../gym-swap-site/dist/data.mjs
var DATA = {
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
            "Lock the bench around 45\xB0. Keep your chest on the pad and your feet supported.",
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
            "Sit on a stable bench with your knees bent around 90\xB0 and feet planted.",
            "Secure the dumbbell by hand on the lower thigh above the knee, with padding as needed\u2014not directly on the kneecap.",
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
            "Lock the bench around 45\xB0, keep your chest supported, and plant your feet.",
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
            "Lie on the opposite side. Place a small towel between your working elbow and ribs, with the elbow bent around 90\xB0.",
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

// ../gym-swap-site/dist/prototype/day1-content.mjs?v=2.8.0
var day1Equipment = {
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
var day1Content = [
  {
    "id": "db_front_squat",
    "name": "Two-dumbbell front squat",
    "focus": "Squat-pattern work for the legs and hips.",
    "expect": "Squat with one dumbbell held at each shoulder.",
    "needs": "Dumbbell pair \xB7 Clear standing space",
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
    "needs": "Barbell \xB7 Rack with safeties \xB7 Clear standing space",
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
    "needs": "Secured landmine bar \xB7 Clear standing space",
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
    "needs": "Barbell \xB7 Rack with safeties \xB7 Clear standing space",
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
    "needs": "Anchored suspension straps \xB7 Clear standing space",
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
    "needs": "Swiss ball \xB7 Clear wall \xB7 Clear standing space",
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
      "Bend the hips and knees under control within the machine\u2019s usable range.",
      "Press smoothly to extend the legs without snapping into the stops; finish using the machine\u2019s controls."
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
    "name": "Hack squat \u2014 inclined sled",
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
    "name": "V-squat \u2014 back supported",
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
    "needs": "Stable box or bench \xB7 Clear standing space",
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
    "needs": "One dumbbell OR One kettlebell \xB7 Stable box or bench \xB7 Clear standing space",
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
    "needs": "Barbell \xB7 Rack with safeties \xB7 Clear standing space",
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
    "needs": "Barbell \xB7 Clear standing space",
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
    "needs": "One kettlebell \xB7 Clear standing space",
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
    "needs": "Low cable with short bar \xB7 Clear standing space",
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
    "needs": "Smith machine \xB7 Clear standing space",
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
    "needs": "Long resistance band \xB7 Clear standing space",
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
    "name": "Tippy bird \u2014 single-leg hinge practice",
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
    "name": "Single-leg RDL \u2014 opposite-hand dumbbell",
    "focus": "Hip-hinge work with attention to trunk and pelvis control.",
    "expect": "Hinge on one leg with a dumbbell in the opposite hand.",
    "needs": "One dumbbell \xB7 Clear standing space",
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
    "needs": "One dumbbell OR One kettlebell \xB7 Fixed handhold \xB7 Clear standing space",
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
    "name": "Single-leg RDL \u2014 two dumbbells",
    "focus": "Hip-hinge work with attention to trunk and pelvis control.",
    "expect": "Hinge on one leg with a dumbbell in each hand.",
    "needs": "Dumbbell pair \xB7 Clear standing space",
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
    "name": "Dumbbell split squat \u2014 weights at sides",
    "focus": "Leg and hip work from a stationary split stance.",
    "expect": "A stationary split squat with a dumbbell hanging at each side.",
    "needs": "Dumbbell pair \xB7 Clear standing space",
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
    "needs": "One dumbbell OR One kettlebell \xB7 Clear standing space",
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
    "name": "Smith-machine split squat \u2014 feet on floor",
    "focus": "Leg and hip work from a stationary split stance.",
    "expect": "A stationary split squat with both feet on the floor and a guided bar.",
    "needs": "Smith machine \xB7 Clear standing space",
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
    "needs": "One dumbbell \xB7 Fixed handhold \xB7 Clear standing space",
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
    "needs": "Secured upper-back support \xB7 Clear floor space",
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
    "needs": "Stable foot platform \xB7 Clear floor space",
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
    "needs": "Thigh loop band \xB7 Clear floor space",
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
    "needs": "Low front-foot platform \xB7 Clear standing space",
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
    "needs": "Stable rear-foot support \xB7 Fixed handhold \xB7 Clear standing space",
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
    "needs": "Stable step-up platform \xB7 Clear standing space",
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
    "name": "Barbell split squat \u2014 feet on floor",
    "focus": "Loaded leg work in a stationary split stance.",
    "expect": "Bar on the upper back; rear forefoot stays on the floor.",
    "needs": "Barbell \xB7 Rack with safeties \xB7 Clear standing space",
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
    "needs": "Stable rear-foot support \xB7 Clear standing space",
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
var day1Comparisons = [
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
    "load": "Use this machine\u2019s release/stops; starting resistance varies.",
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
    "load": "Check the bar\u2019s minimum weight; do not convert dumbbell loads directly.",
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
    "originalName": "Barbell split squat \u2014 feet on floor",
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
    "originalName": "Barbell split squat \u2014 feet on floor",
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
    "originalName": "Barbell split squat \u2014 feet on floor",
    "cardId": "smith_split_squat",
    "source": "squats",
    "similarity": "some",
    "keeps": "A back-loaded stationary split squat with both feet contacting the floor.",
    "changes": "Rails guide the back-loaded bar.",
    "load": "Stance must work with this machine\u2019s rail path.",
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
    "originalName": "Barbell split squat \u2014 feet on floor",
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
    "originalName": "Barbell split squat \u2014 feet on floor",
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

// ../gym-swap-site/dist/prototype/b4-content.mjs?v=2.8.0
var b4Review = {
  batch: "b4-approved-2026-10-13",
  basis: "Michael approved the B4 local build, twelve G2/G3 comparisons, the shared bilateral foot-elevated bridge and narrow alias correction. G2 working-foot elevation with shoulders on the floor is confirmed. Stop after B4; no RAG promotion or later groups."
};
var b4Equipment = {
  bilateral_bridge_platform: "Stable low platform with sufficient secure contact area for both feet during a bridge"
};
var single = day1Content.find((record3) => record3.id === "foot_elevated_bridge");
var applyB4Aliases = (record3) => record3.id === "foot_elevated_bridge" ? { ...record3, aliases: ["single leg elevated foot bridge", "single leg foot elevated glute bridge", "single leg foot elevated bridge"], aliasReview: b4Review } : record3;
var b4Content = [{
  id: "bilateral_foot_elevated_bridge",
  name: "Bilateral bodyweight foot-elevated glute bridge",
  variationOf: "foot_elevated_bridge",
  aliases: ["bilateral foot elevated glute bridge", "bilateral foot elevated bridge", "two leg foot elevated glute bridge", "two leg feet elevated bridge"],
  focus: "Bilateral hip extension with both feet raised and the upper back supported on the floor.",
  expect: "Raise and lower the pelvis with both feet on a stable low platform and no added load.",
  needs: "Stable low platform supporting both feet \xB7 clear floor and hip space",
  requires: ["bilateral_bridge_platform", "bridge_space"],
  setup: "Lie with the upper back supported on the floor and both feet securely on one stable low platform. Keep the knees bent, with room to raise and lower the pelvis without the platform moving. No external load is used.",
  cue: "Lift through both supported feet while keeping the pelvis steady and the upper back on the floor.",
  cues: [...single.cues.slice(0, 3)],
  context: "Both feet remain on the platform throughout the lift. Platform height and foot distance must permit the stated bent-knee action; no fixed height, knee angle or extra range is required. Stop before extra height comes from arching the lower back. This is not a single-leg bridge, shoulder-elevated hip thrust, sliding hamstring curl or long-lever straight-leg bridge.",
  references: [...single.references, {
    label: "Macros Inc: Feet Elevated Glute Bridge",
    url: "https://macrosinc.net/exercises/glutes/feet-elevated-glute-bridge/",
    scope: "Direct technique text corroborates bilateral raised-foot contact, bent knees and controlled lifting/lowering. The stable low platform is the approved catalogue setup. No activation, progression, timing or universal angle/range claim is adopted."
  }],
  family: "hip_extension",
  review: b4Review,
  sourceChecked: "2026-10-13"
}];

// ../gym-swap-site/dist/prototype/b4-comparisons.mjs?v=2.8.0
var originals = {
  G2: { id: "foot_elevated_bridge", name: "Single-leg foot-elevated bridge" },
  G3: { id: "bilateral_foot_elevated_bridge", name: "Bilateral bodyweight foot-elevated glute bridge" }
};
var comparison = (reviewLabel, cardId, similarity, keeps, changes, check) => {
  const original2 = originals[reviewLabel.slice(0, 2)];
  return {
    reviewLabel,
    originalId: original2.id,
    originalName: original2.name,
    cardId,
    source: "hinges_and_hip_extension",
    similarity,
    keeps,
    changes,
    check,
    why: keeps,
    detail: changes,
    load: check,
    limited: similarity === "broader",
    basis: `Michael-approved Batch B elevated-bridge comparison ${reviewLabel}; October 13, 2026`,
    review: b4Review
  };
};
var b4Comparisons = [
  comparison(
    "G2-a",
    "single_leg_floor_bridge",
    "some",
    "Repeated hip lifts driven by one leg with upper-back floor support.",
    "Lowering the working foot removes the platform and changes leg geometry and available hip travel.",
    "Foot elevation is lost. Do not force matching depth or assume equal difficulty."
  ),
  comparison(
    "G2-b",
    "single_leg_hip_thrust",
    "some",
    "One-leg dynamic pelvic lifting without external load.",
    "Raising the upper back instead of the foot changes the pivot and available hip excursion.",
    "Support height and contact must allow controlled travel. This is not the confirmed elevated-foot setup."
  ),
  comparison(
    "G2-c",
    "kickstand_bridge",
    "some",
    "Repeated floor-supported pelvic lifts with an intended emphasis on one side.",
    "Lowering the working foot and adding the assisting heel changes geometry and shares the work with the other leg.",
    "Assistance is unmeasured. This no longer preserves unassisted one-leg lifting."
  ),
  comparison(
    "G2-d",
    "bilateral_foot_elevated_bridge",
    "broader",
    "Foot elevation, upper-back floor support and repeated pelvic lifting.",
    "The second foot contributes throughout, replacing the original one-leg task with shared bilateral work.",
    "Single-leg emphasis and control are lost. There is no automatic per-side or repetition conversion."
  ),
  comparison(
    "G2-e",
    "floor_bridge",
    "broader",
    "Repeated pelvic lifting with upper-back floor support.",
    "Both feet move to floor-level support and share the lift, removing elevation and the one-leg task.",
    "A broader option only when bilateral work is acceptable. It does not preserve the original single-leg emphasis."
  ),
  comparison(
    "G2-f",
    "bridge_march",
    "broader",
    "Periods of one-foot support and pelvic control in hip extension.",
    "Alternating foot lifts during a hold replace repeated hip lifts on one elevated working foot.",
    "Marching steps are not bridge repetitions, and the foot-elevated geometry is lost."
  ),
  comparison(
    "G3-a",
    "floor_bridge",
    "some",
    "Both legs contribute to repeated pelvic lifting; the upper back remains floor-supported.",
    "Lowering the feet removes the platform and changes leg geometry and available hip travel.",
    "The elevated-foot setup is lost. Do not force matching depth or assume the same challenge."
  ),
  comparison(
    "G3-b",
    "bodyweight_bilateral_hip_thrust",
    "some",
    "Bodyweight bilateral pelvic lifting and lowering with bent knees.",
    "Raising the upper back instead of the feet changes the support pivot and available hip excursion.",
    "Confirm secure back contact and controlled travel. This is not a feet-elevated bridge or an instruction to touch the floor."
  ),
  comparison(
    "G3-c",
    "foot_elevated_bridge",
    "some",
    "Foot elevation, upper-back floor support and dynamic pelvic lifting.",
    "Removing the other foot shifts the lift to one leg and changes pelvic-control demands.",
    "Bilateral sharing is lost. No automatic per-side count or load transfer."
  ),
  comparison(
    "G3-d",
    "kickstand_bridge",
    "some",
    "Dynamic pelvic lifting, floor-supported upper back and two available foot contacts.",
    "Floor-level staggered contacts emphasize one side with variable help from the farther heel.",
    "This loses foot elevation and even two-leg contribution. Assistance is not a measured percentage."
  ),
  comparison(
    "G3-e",
    "barbell_floor_bridge",
    "some",
    "Bilateral repeated pelvic lifting with upper-back floor support.",
    "Feet move to the floor and a hip-held bar supplies external resistance, changing leg geometry and adding bar control.",
    "Confirm supported entry and exit and clearance. Added load does not restore the original geometry or imply equivalent repetitions."
  ),
  comparison(
    "G3-f",
    "bridge_march",
    "broader",
    "Hip extension and pelvic control with upper-back floor support.",
    "Holding pelvic height while alternating feet replaces repeated two-leg hip lifts.",
    "This also removes foot elevation. Marching steps are not bridge repetitions."
  )
];

// ../gym-swap-site/dist/prototype/b3-content.mjs?v=2.8.0
var b3Review = {
  batch: "b3-approved-2026-10-13",
  basis: "Michael approved B3 (D3/H4), all seventeen directed comparisons, both disclosed original setups and the low-handle hex-bar RDL variation. Stop after this group; no RAG promotion or later groups."
};
var b3Equipment = {
  hex_rdl_setup: "Low-handle hex bar with secured loading, frame/plate clearance through the hinge and a controlled pickup/set-down arrangement"
};
var rdl = day1Content.find((record3) => record3.id === "barbell_rdl");
var b3Content = [{
  id: "hex_bar_rdl",
  name: "Hex-bar Romanian deadlift \u2014 low handles",
  variationOf: "barbell_rdl",
  aliases: ["low handle hex bar rdl", "low handle trap bar rdl", "low handle hex bar romanian deadlift", "low handle trap bar romanian deadlift"],
  focus: "Bilateral hip hinging with a hex frame held by neutral side handles.",
  expect: "Hinge from standing with modest knee bend, keeping the frame clear and the load controlled.",
  needs: "Low-handle hex bar/secured loading \xB7 hinge clearance \xB7 controlled pickup/set-down \xB7 standing space",
  requires: ["hex_rdl_setup", "standing_space"],
  setup: "Set suitable secured plates on a low-handle hex bar and plan a controlled pickup and set-down. Reach standing inside the centered frame with a neutral grip on both low handles, arms long and feet planted. Check that the frame, legs and plates have clearance through the intended hinge. Each repetition begins standing.",
  cue: "Move the hips back with modest knee bend; reverse the hinge without a settled floor reset.",
  cues: [
    ...rdl.cues.slice(0, 3),
    "Keep the frame clear as it lowers and rises. Reverse the hinge within controlled range without settling the plates between repetitions.",
    "At the finish, use the planned controlled set-down before releasing the handles or stepping out of the frame."
  ],
  context: "The initial pickup and final set-down are handling phases, separate from the standing-start repetitions. Floor contact is not a depth target. This low-handle version does not include a deficit, raised heels or a locked-knee stiff-leg execution. High handles change hand/frame/plate relationships and floor clearance; they are not silently included. The floor-reset hex-bar deadlift remains a separate exercise.",
  references: [...rdl.references, {
    label: "Eleiko: The Hex Bar",
    url: "https://enterprise.eleiko.com/media/MIQX8EB1380.pdf",
    scope: "Manufacturer paper identifies neutral side handles and the hex-bar RDL as a distinct exercise. Low handles and these concise instructions are the approved catalogue setup; no clinical, performance or load-equivalence claims adopted."
  }, {
    label: "Eleiko: How to Get the Most Out of Your Trap Bar",
    url: "https://eleiko.com/en/stories/how-to-get-the-most-out-of-your-trap-bar",
    scope: "Manufacturer identifies two handle heights and a Romanian-deadlift variation. No reduced-back-stress, easier-exercise or injury-prevention claims adopted."
  }],
  family: "hinge",
  review: b3Review,
  sourceChecked: "2026-10-13"
}];

// ../gym-swap-site/dist/prototype/b3-comparisons.mjs?v=2.8.0
var originals2 = {
  D3: { id: "two_db_side_deadlift", name: "Two-dumbbell deadlift \u2014 beside the legs" },
  H4: { id: "hex_bar_rdl", name: "Hex-bar Romanian deadlift \u2014 low handles" }
};
var comparison2 = (reviewLabel, cardId, similarity, keeps, changes, check) => {
  const original2 = originals2[reviewLabel.slice(0, 2)];
  return {
    reviewLabel,
    originalId: original2.id,
    originalName: original2.name,
    cardId,
    source: "hinges_and_hip_extension",
    similarity,
    keeps,
    changes,
    check,
    why: keeps,
    detail: changes,
    load: check,
    limited: similarity === "broader",
    basis: `Michael-approved Batch B loaded-hinge comparison ${reviewLabel}; October 13, 2026`,
    review: b3Review
  };
};
var b3Comparisons = [
  comparison2(
    "D3-a",
    "two_kb_side_deadlift",
    "close",
    "Bilateral pickup and reset with independently controlled side loads.",
    "Kettlebell handles sit above the bell bodies, changing bottom reach and leg clearance.",
    "Close only with comparable hand pickup height and usable bell clearance. Available pairs may constrain loading; this is not a one-sided suitcase lift."
  ),
  comparison2(
    "D3-b",
    "hex_bar_deadlift",
    "close",
    "Two-foot, side-held hip-and-knee pickup with a settled reset.",
    "One connected frame replaces separate weights, fixing hand spacing and removing their independent paths.",
    "Close only with comparable pickup height and usable frame fit. This record uses low handles; high handles are not silently included."
  ),
  comparison2(
    "D3-c",
    "two_db_front_deadlift",
    "some",
    "Independent weights and bilateral hip-and-knee pickup and reset.",
    "Moving both weights forward changes their route around the knees and the balance to control.",
    "Establish the hand pickup height and clear the dumbbell heads. Retaining the same implements does not preserve side loading."
  ),
  comparison2(
    "D3-d",
    "conventional_deadlift",
    "some",
    "Bilateral hip-and-knee lifting from rest and a controlled reset.",
    "A connected front bar replaces independent side loads, so the knees and torso must accommodate its close front path.",
    "Plate diameter sets bottom reach. Dumbbell and barbell loads do not convert directly."
  ),
  comparison2(
    "D3-e",
    "two_hand_kb_deadlift",
    "some",
    "Two-foot pickup and reset through the hips and knees.",
    "A shared central handle replaces two side loads, changing hand spacing and leg clearance.",
    "Single-bell availability and grip room may limit this option. This is not a swing or a standing-start RDL."
  ),
  comparison2(
    "D3-f",
    "two_hand_landmine_deadlift",
    "some",
    "Bilateral hand-loaded pickup with a settled bottom reset.",
    "The fixed pivot makes the load follow an arc, so stance and balance must accommodate it instead of steering free side weights.",
    "Confirm sleeve access, plate/body clearance and settled contact. Landmine plate weight is not a free-weight load equivalent."
  ),
  comparison2(
    "D3-g",
    "dumbbell_rdl",
    "broader",
    "Bilateral loaded hip hinging and independent hand control.",
    "Soft-knee hinging starts standing and reverses without the repeated bottom pickup, removing that reset and its knee-driven start.",
    "Use only when the hinge task is acceptable. The same dumbbells do not preserve the original deadlift task or imply equivalent loads and repetitions."
  ),
  comparison2(
    "D3-h",
    "hip_extension_45",
    "broader",
    "Resisted hip hinging with a controlled torso.",
    "Secured feet and thighs with chest-held loading remove standing balance, hanging grip and the knee-driven pickup.",
    "Keep the hip crease free of the pad. This plate-at-chest version does not preserve the original lifting-from-rest task."
  ),
  comparison2(
    "H4-a",
    "dumbbell_rdl",
    "close",
    "A standing-start bilateral loaded hinge with modest knee movement.",
    "Separate weights replace the frame, allowing individual hand paths while requiring independent control.",
    "Available dumbbell size and load may constrain the choice. Retain a hinge without adding floor resets."
  ),
  comparison2(
    "H4-b",
    "barbell_rdl",
    "close",
    "A bilateral standing-start hinge with one connected load.",
    "The front bar replaces neutral side handles, changing grip and requiring clearance close to the legs.",
    "Keep its path controlled through the hinge. Hex-bar and straight-bar loads do not transfer automatically."
  ),
  comparison2(
    "H4-c",
    "kettlebell_rdl",
    "close",
    "A bilateral standing-start hinge with the load in the hands.",
    "One compact central handle replaces widely separated side handles, changing hand spacing, clearance and available loading.",
    "Keep it a hinge, not a swing or a floor-reset pickup. A suitable bell must be available."
  ),
  comparison2(
    "H4-d",
    "smith_rdl",
    "some",
    "A bilateral hand-loaded standing hinge.",
    "Rails replace freely controlled frame travel, so stance and hip movement must fit the machine\u2019s path.",
    "Confirm usable hinge range and controls. Generic Smith availability or an assumed bar weight is insufficient."
  ),
  comparison2(
    "H4-e",
    "cable_rdl",
    "some",
    "A resisted bilateral standing hinge.",
    "Forward and downward cable pull replaces hanging frame loading, changing balance and resistance through the movement.",
    "Keep footing and cable travel usable. Constant tension does not mean constant hip torque."
  ),
  comparison2(
    "H4-f",
    "band_rdl",
    "some",
    "A bilateral standing resisted hinge.",
    "Resistance varies with band stretch instead of a fixed hanging mass, changing demand through the repetition.",
    "Secure foot contact and suitable band length and grip must permit controlled travel without slack or excessive stretch."
  ),
  comparison2(
    "H4-g",
    "hip_extension_45",
    "some",
    "Controlled hip hinging with little knee movement.",
    "Thigh and foot support remove standing balance and the chest hold replaces hanging grip; body orientation changes how gravity challenges the hinge.",
    "Keep the hip crease free and move at the hips rather than repeatedly bending the spine. This record includes a plate at the chest."
  ),
  comparison2(
    "H4-h",
    "hex_bar_deadlift",
    "broader",
    "Bilateral side-handle loading, grip and standing torso control.",
    "A repeated bottom pickup and greater knee contribution replace the continuous standing-start hinge.",
    "The shared bar does not preserve the RDL task. Pickup height and loading need separate consideration."
  ),
  comparison2(
    "H4-i",
    "barbell_hip_thrust",
    "broader",
    "Externally loaded hip extension.",
    "Bent-knee pelvic lifting with upper-back support replaces standing torso hinging and hanging grip.",
    "This loses the RDL task. Confirm stable support and controlled bar handling; doses do not transfer automatically."
  )
];

// ../gym-swap-site/dist/prototype/a2-content.mjs?v=2.8.0
var a2Equipment = {
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
var a2Content = [
  {
    "group": 1,
    "id": "hex_bar_deadlift",
    "name": "Hex-bar deadlift \u2014 low handles",
    "aliases": [
      "low handle hex bar deadlift",
      "low handle trap bar deadlift",
      "hex bar floor deadlift"
    ],
    "focus": "Two-leg hip-and-knee lifting with hands beside the body.",
    "expect": "Lift a shared frame from settled plates using its low handles.",
    "needs": "Low-handle hex bar \xB7 plates/collars \xB7 firm clear lifting surface",
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
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
    "needs": "Straight bar \xB7 plates/collars \xB7 firm clear lifting surface",
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 1,
    "id": "two_db_side_deadlift",
    "name": "Two-dumbbell deadlift \u2014 beside the legs",
    "aliases": [
      "side held dumbbell deadlift",
      "two db side deadlift"
    ],
    "focus": "Two-leg pickup with independently held weights beside the legs.",
    "expect": "Both weights leave settled supports together at the intended pickup height.",
    "needs": "Matched dumbbells \xB7 clear lifting surface \xB7 equal risers if needed for pickup height",
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
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
    "needs": "Equal kettlebells \xB7 outside-leg clearance \xB7 firm lifting surface",
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
        "scope": "Independent and unequal loading distinction. Our equal suitcase and unequal dumbbell setups are reviewed adaptations, not the source\u2019s prescriptions."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 1,
    "id": "two_db_front_deadlift",
    "name": "Two-dumbbell deadlift \u2014 in front of the legs",
    "aliases": [
      "front held dumbbell deadlift",
      "two db front deadlift"
    ],
    "focus": "Two-leg pickup with separate weights in front of the legs.",
    "expect": "The weights follow the front of the legs with independent hand control.",
    "needs": "Matched dumbbells \xB7 clear front pickup/contact \xB7 equal risers if needed",
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
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
    "needs": "Straight bar \xB7 plates/collars \xB7 wide clear lifting surface",
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 1,
    "id": "two_hand_kb_deadlift",
    "name": "Two-handed kettlebell deadlift \u2014 floor start",
    "aliases": [
      "two hand kettlebell floor deadlift",
      "single kettlebell floor deadlift"
    ],
    "focus": "Two-leg hip-and-knee pickup with one central weight.",
    "expect": "Both hands share a kettlebell handle between the feet.",
    "needs": "One kettlebell \xB7 two-hand grip \xB7 clear stable contact",
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 1,
    "id": "two_hand_landmine_deadlift",
    "name": "Two-handed landmine deadlift \u2014 facing the anchor",
    "aliases": [
      "facing anchor landmine deadlift",
      "two hand landmine deadlift"
    ],
    "focus": "Two-leg pickup holding the loaded end of an anchored bar.",
    "expect": "Hands follow the bar end\u2019s arc as hips and knees extend.",
    "needs": "Secured landmine \xB7 bar/plates/collar \xB7 usable sleeve grip and contact",
    "requires": [
      "landmine_setup",
      "barbell_load",
      "landmine_deadlift_grip",
      "deadlift_floor"
    ],
    "setup": "Face the secured pivot with the loaded end between the feet. Leave usable sleeve beyond the secured plates for both hands and room for the plates to settle. Set the feet so the lift\u2019s arc clears the body; bend hips and knees, grip with long arms and brace.",
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 2,
    "id": "barbell_block_pull",
    "name": "Barbell block pull \u2014 below knees",
    "aliases": [
      "below knee barbell block pull",
      "barbell deadlift from blocks"
    ],
    "focus": "Conventional pickup from a raised, plate-supported start.",
    "expect": "Equal blocks remove the lowest segment of the floor lift.",
    "needs": "Straight bar/plates/collars \xB7 equal lifting blocks \xB7 clear floor",
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 2,
    "id": "barbell_rack_pull",
    "name": "Barbell rack pull \u2014 below knees",
    "aliases": [
      "below knee rack pull",
      "pin supported barbell deadlift"
    ],
    "focus": "Conventional pickup with a settled shaft-supported reset.",
    "expect": "Rack supports set an adjustable bottom height.",
    "needs": "Bar/plates/collars \xB7 compatible rack and rated pins/straps",
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 2,
    "id": "hex_bar_block_pull",
    "name": "Hex-bar block pull \u2014 low handles",
    "aliases": [
      "low handle hex block pull",
      "trap bar deadlift from blocks"
    ],
    "focus": "Side-handle hip-and-knee pickup from elevated plates.",
    "expect": "Blocks raise the hex bar while both feet stay on the floor.",
    "needs": "Low-handle hex bar/plates/collars \xB7 equal plate blocks",
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 2,
    "id": "deficit_hex_bar_deadlift",
    "name": "Deficit hex-bar deadlift \u2014 low handles",
    "aliases": [
      "low handle deficit hex deadlift",
      "deficit trap bar deadlift"
    ],
    "focus": "Side-handle pickup with extra reach below the feet.",
    "expect": "A foot platform lengthens the pickup while plates remain on the lower floor.",
    "needs": "Low-handle hex bar/plates/collars \xB7 stable whole-stance platform",
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
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
    "expect": "Feet are raised above the plates\u2019 contact surface.",
    "needs": "Straight bar/plates/collars \xB7 stable whole-stance foot platform",
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 3,
    "id": "vertical_smith_deadlift",
    "name": "Vertical Smith-machine deadlift \u2014 settled bottom",
    "aliases": [
      "fixed vertical smith deadlift"
    ],
    "focus": "Two-leg front-bar pickup along a fixed vertical track.",
    "expect": "Rails guide the bar and rated stops define the bottom reset.",
    "needs": "Vertical Smith \xB7 compatible loading/hooks/stops \xB7 clear stance",
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 3,
    "id": "dual_axis_smith_deadlift",
    "name": "Dual-axis Smith deadlift \u2014 vertical and fore/aft",
    "aliases": [
      "dual action smith deadlift",
      "two axis smith deadlift"
    ],
    "focus": "Two-leg front-bar pickup on a vertically and fore/aft moving carriage.",
    "expect": "The bar can adjust fore/aft while remaining constrained by the carriage.",
    "needs": "Compatible dual-axis Smith \xB7 loading and bottom support \xB7 clear stance",
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 3,
    "id": "side_handle_lever_deadlift",
    "name": "Standing plate-loaded lever deadlift \u2014 side handles",
    "aliases": [
      "side handle lever deadlift",
      "ground base deadlift"
    ],
    "focus": "Standing two-leg hip-and-knee lift on a lever station.",
    "expect": "Side handles follow an anchored arc from a settled bottom.",
    "needs": "Plate-loaded deadlift lever station \xB7 suitable handles/loading/start",
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 3,
    "id": "jefferson_deadlift",
    "name": "Jefferson deadlift \u2014 straddled bar",
    "aliases": [
      "jefferson deadlift",
      "straddle bar deadlift"
    ],
    "focus": "Hip-and-knee pickup in an asymmetric straddled stance.",
    "expect": "One foot is on each side of the shaft while the bar rises between the legs.",
    "needs": "Straight bar/plates/collars \xB7 clear straddled stance",
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
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
    "needs": "Unequal DB pair \xB7 matched intended pickup heights \xB7 clear floor",
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
        "scope": "Independent and unequal loading distinction. Our equal suitcase and unequal dumbbell setups are reviewed adaptations, not the source\u2019s prescriptions."
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 3,
    "id": "kickstand_db_deadlift",
    "name": "Kickstand two-dumbbell deadlift \u2014 bottom reset",
    "aliases": [
      "kickstand dumbbell floor deadlift",
      "staggered stance dumbbell floor deadlift"
    ],
    "focus": "Bottom-start hip-and-knee pickup with rear-foot assistance.",
    "expect": "A staggered stance biases contribution toward the forward leg.",
    "needs": "Matched side-held DBs \xB7 room for staggered feet and bottom contact",
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
        "scope": "Independent and unequal loading distinction. Our equal suitcase and unequal dumbbell setups are reviewed adaptations, not the source\u2019s prescriptions."
      }
    ],
    "family": "hinge",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 4,
    "id": "hip_extension_45",
    "name": "45\xB0 hip extension \u2014 plate at chest",
    "aliases": [
      "plate held 45 degree hip extension",
      "45 degree hip extension bench"
    ],
    "focus": "Loaded hip hinging with feet and thighs supported.",
    "expect": "The torso and chest-held plate move around the hips on a 45\xB0 bench.",
    "needs": "45\xB0 hip-extension bench \xB7 secure feet/thigh pads \xB7 plate",
    "requires": [
      "hip_extension_45_bench",
      "chest_held_plate"
    ],
    "setup": "Adjust the 45\xB0 bench so the feet are secure and the upper-thigh pad leaves the hip crease free to hinge. Check clear torso/plate travel. Establish a supported way to enter and exit and take a manageable plate to the chest before moving.",
    "cues": [
      "Hold the plate securely against the chest and keep the torso steady as the hips bend over the pad edge.",
      "Reverse the hinge with control and extend the hips until torso and legs align; avoid leaning or arching beyond that position.",
      "Lower smoothly into the next hip hinge. Use the apparatus\u2019s supported entry/exit position to put the plate down before releasing the feet."
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  },
  {
    "group": 4,
    "id": "horizontal_hip_extension",
    "name": "Horizontal hip extension \u2014 plate at chest",
    "aliases": [
      "plate held horizontal hip extension",
      "ghd hip extension with plate"
    ],
    "focus": "Loaded hip extension with secured legs and a moving torso.",
    "expect": "Horizontal leg support changes the challenge through the hinge.",
    "needs": "Horizontal hip-extension bench/GHD \xB7 secure feet/thigh pads \xB7 plate",
    "requires": [
      "horizontal_hip_bench",
      "chest_held_plate"
    ],
    "setup": "Use a horizontal hip-extension configuration with secure feet and upper thighs supported while the hip crease remains free. Allow torso and plate clearance. Establish controlled supported entry/exit and hold a manageable plate at the chest before beginning.",
    "cues": [
      "Hold the plate securely against the chest and keep the torso steady as the hips bend over the pad edge.",
      "Reverse the hinge with control and extend the hips until torso and legs align; avoid leaning or arching beyond that position.",
      "Lower smoothly into the next hip hinge. Use the apparatus\u2019s supported entry/exit position to put the plate down before releasing the feet."
    ],
    "cue": "Hold the plate securely against the chest and keep the torso steady as the hips bend over the pad edge.",
    "context": "This is hip extension, not a knee-flexion glute-ham raise or repeated spinal extension. Compared with a 45\xB0 bench, orientation changes where gravity has the greatest turning effect; it does not reproduce a standing floor pickup.",
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
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    },
    "sourceChecked": "2026-10-13"
  }
];

// ../gym-swap-site/dist/prototype/a4-content.mjs?v=2.8.0
var a4Review = {
  batch: "a4-approved-2026-10-13",
  basis: "Michael approved all twelve A4 comparisons and the disclosed bodyweight GHD/45-degree and dedicated-machine reverse-hyper setups. Broader machine and unilateral passes remain deferred."
};
var a4Equipment = {
  reverse_hyper_station: "Dedicated reverse-hyper station with torso pad, handholds and clear leg/pendulum travel",
  reverse_hyper_loading: "Compatible reverse-hyper foot/ankle strap and suitable secured pendulum loading",
  hip_thrust_bench: "Upper-back support bench secured against sliding or tipping during a hip thrust",
  hip_thrust_bar: "Suitable bar/secured plates, hip padding and clearance for controlled entry and exit"
};
var bodyweightExtension = ({ parentId, id, name, aliases: aliases2, horizontal }) => {
  const parent = a2Content.find((record3) => record3.id === parentId);
  return {
    group: 1,
    id,
    name,
    aliases: aliases2,
    variationOf: parentId,
    focus: "Hip extension with feet secured and the torso moving around the hips.",
    expect: horizontal ? "Hinge with your legs supported horizontally and no external weight." : "Hinge over a 45-degree thigh pad with no external weight.",
    needs: horizontal ? "Horizontal GHD/hip-extension apparatus \xB7 secure feet and thigh support" : "45\xB0 hip-extension bench \xB7 secure feet and thigh support",
    requires: parent.requires.filter((key) => key !== "chest_held_plate"),
    setup: `Adjust the ${horizontal ? "horizontal GHD/hip-extension apparatus" : "45-degree hip-extension bench"} so the feet are secure and the upper-thigh pad leaves the hip crease free. Use its designated supports to enter, with clear room for torso travel. Begin with the torso and legs aligned and hands resting across the chest; no external weight is held.`,
    cue: "Keep the trunk steady and move through the hips over the pad edge.",
    cues: [
      "Keep the trunk steady and bend at the hips to lower the torso through a controlled range.",
      parent.cues[1],
      "Lower smoothly for the next hinge. Finish using the apparatus\u2019s supported exit position before releasing the feet."
    ],
    context: horizontal ? "This bodyweight version moves at the hips with a steady trunk. It is distinct from a knee-flexion glute-ham raise and deliberate spinal bending. A plate held at the chest is a separate loaded variation with its own equipment needs." : "Keep movement at the hips with a steady trunk. The angled support changes where gravity challenges the hinge compared with a horizontal setup. A plate held at the chest is a separate loaded variation with its own equipment needs.",
    references: [...parent.references, ...horizontal ? [{
      label: "CrossFit: The GHD Hip Extension",
      url: "https://www.crossfit.com/essentials/the-ghd-hip-extension",
      scope: "Hip motion with a steady trunk; no program, rehabilitation or universal suitability claims adopted."
    }] : []],
    family: "hip_extension",
    review: a4Review,
    sourceChecked: "2026-10-13"
  };
};
var a4Content = [
  {
    group: 1,
    id: "reverse_hyper",
    name: "Reverse hyper \u2014 machine",
    aliases: ["reverse hyper", "reverse hyperextension", "machine reverse hyper", "machine reverse hyperextension", "straight leg reverse hyper"],
    focus: "Hip extension with the torso supported and both legs moving together.",
    expect: "Lift and lower straight legs while controlling the attached pendulum.",
    needs: "Dedicated reverse-hyper station \xB7 compatible foot/ankle strap and secured loading",
    requires: ["reverse_hyper_station", "reverse_hyper_loading"],
    setup: "Use a dedicated reverse-hyper station with a compatible foot/ankle strap and suitable secured loading. With the pendulum settled, follow the station\u2019s mounting and strap-fitting arrangement using its steps and handholds. Lie face down with the torso supported, hips at the pad edge, hands holding the handles and clear space for both legs and the pendulum.",
    cue: "Move both straight legs from the hips while keeping the torso supported.",
    cues: [
      "Hold the handles and keep the torso steady against the pad; move both straight legs together from the hips.",
      "Lift under control toward torso-and-leg alignment without gaining extra height by arching the back.",
      "Lower with control, keeping the legs and pendulum clear of the frame; avoid throwing the legs to start the next repetition.",
      "Let the pendulum settle before using the station\u2019s supported exit and removing the strap."
    ],
    context: "This entry uses a dedicated pendulum machine and its compatible strap. Torso support does not remove the need to control the trunk or moving load. A bench-based bodyweight reverse hyper is a different setup; the machine\u2019s loading does not translate directly to other hip-extension exercises.",
    references: [{
      label: "Rogue: Reverse Hyper equipment instructions",
      url: "https://assets.roguefitness.com/image/upload/v1660942798/catalog/Strength%20Equipment/Strength%20Training/Reverse%20Hypers/XX8199/RA0335_CUST_INSTR_reverse_hyper_fywh1a.pdf",
      scope: "Manufacturer documentation for a compatible foot strap, load posts and secured plates. Movement/setup wording follows Michael\u2019s approved coaching description; no treatment or decompression claims adopted."
    }],
    family: "hip_extension",
    review: a4Review,
    sourceChecked: "2026-10-13"
  },
  bodyweightExtension({
    parentId: "horizontal_hip_extension",
    id: "bodyweight_horizontal_hip_extension",
    name: "GHD hip extension \u2014 bodyweight",
    horizontal: true,
    aliases: ["ghd hip extension", "bodyweight ghd hip extension", "bodyweight horizontal hip extension", "horizontal hip extension bodyweight"]
  }),
  bodyweightExtension({
    parentId: "hip_extension_45",
    id: "bodyweight_hip_extension_45",
    name: "45\xB0 hip extension \u2014 bodyweight",
    horizontal: false,
    aliases: ["bodyweight 45 degree hip extension", "45 degree bodyweight hip extension", "bodyweight 45 degree back extension"]
  }),
  {
    group: 2,
    id: "barbell_hip_thrust",
    name: "Bilateral barbell hip thrust",
    aliases: ["barbell hip thrust", "bb hip thrust", "two leg barbell hip thrust", "bench barbell hip thrust"],
    focus: "Loaded hip extension with both feet planted and the upper back supported.",
    expect: "Raise and lower the hips while controlling a padded bar across the hip crease.",
    needs: "Secured upper-back bench \xB7 bar/plates/collars and hip padding \xB7 clear floor and entry/exit space",
    requires: ["hip_thrust_bench", "hip_thrust_bar", "bridge_space"],
    setup: "Secure a bench against sliding or tipping and sit in front of it with the upper back aligned to its padded edge. Position a padded bar evenly across the hip crease using a controlled entry with enough bar-and-plate clearance. Plant both feet on a firm floor, knees bent, and hold the bar to keep it centered. Check that the same setup allows a controlled exit.",
    cue: "Drive through both planted feet and lift the hips without arching for extra height.",
    cues: [
      "Keep the bar centered and the upper back supported as you press through both planted feet to raise the hips.",
      "Finish with torso and thighs aligned, keeping the trunk controlled rather than arching the lower back for extra height.",
      "Lower the hips and bar smoothly while keeping the feet planted and the bench steady.",
      "At the end, lower the bar to its supported resting position before removing it from the hips through the planned exit."
    ],
    context: "This bilateral, bench-supported version uses a bar across the hips. Bent knees change the hamstring contribution compared with relatively straight-leg hinging. It does not preserve the GHD\u2019s torso-over-pad hinge or the reverse hyper\u2019s moving-leg task. A floor bridge, single-leg hip thrust and guided hip-thrust machine have different setups; choose loading separately.",
    references: [{
      label: "Contreras et al.: Barbell Hip Thrust",
      url: "https://bretcontreras.com/wp-content/uploads/Barbell-Hip-Thrust.pdf",
      scope: "Author-hosted NSCA exercise-technique article supports secured upper-back support, padded hip loading, planted feet, controlled hip extension and the bent-knee distinction. No programming, injury-prevention or automatic load-conversion claims adopted."
    }],
    family: "hip_extension",
    review: a4Review,
    sourceChecked: "2026-10-13"
  }
];

// ../gym-swap-site/dist/prototype/b2-content.mjs?v=2.8.0
var b2Review = {
  batch: "b2-approved-2026-10-13",
  basis: "Michael approved B2 (H3/G1), the two disclosed original setups, fifteen menu entries and two variation drafts. H3-a retains its established wording with its first explicit Green tier. Stop after B2; no RAG promotion or later groups."
};
var b2Equipment = {
  floor_bridge_bar_setup: "Padded bar with suitable secured loading and floor-bridge clearance for controlled placement and removal across the hips"
};
var loadedThrust = a4Content.find((record3) => record3.id === "barbell_hip_thrust");
var reference = (label, url, scope) => ({ label, url, scope });
var thrustSetup = reference("Bret Contreras: Hip Thrust Wiki Page", "https://bretcontreras.com/hip-thrust-wiki-page/", "Direct exercise descriptions distinguish floor bridges from upper-back-elevated hip thrusts and bodyweight from barbell setups. No activation ranking, programming or progression claims adopted.");
var b2Content = [
  {
    id: "barbell_floor_bridge",
    name: "Bilateral barbell floor glute bridge",
    variationOf: "floor_bridge",
    aliases: ["barbell floor glute bridge", "bilateral barbell floor bridge", "barbell glute bridge", "barbell floor bridge"],
    focus: "Bilateral hip extension with upper-back floor support and a bar across the hips.",
    expect: "Lift and lower the hips with both feet planted and the padded bar steady.",
    needs: "Padded bar/secured loading \xB7 floor-bridge entry/exit clearance \xB7 clear floor space",
    requires: ["floor_bridge_bar_setup", "bridge_space"],
    setup: "Establish a controlled way to place and remove a padded bar across the hip crease, with suitable secured loading and sufficient plate/body clearance. Lie with the upper back on the floor, knees bent and both feet planted. Steady the bar with both hands before lifting.",
    cue: "Lift the hips and bar smoothly while keeping both feet and the upper back supported.",
    cues: [
      "Press through both planted feet to lift the hips and bar, keeping the trunk controlled and the bar steady.",
      "End the lift before extra height comes from arching the lower back.",
      "Lower the hips and bar smoothly while maintaining the floor contacts.",
      loadedThrust.cues[3]
    ],
    context: "This bilateral floor version adds resistance at the hips without a bench. A loaded bar cannot be assumed to roll over every person\u2019s legs or fit every plate arrangement; confirm the planned entry, clearance and supported exit. Added load is an optional choice, not a prescribed progression or a repetition-equivalent replacement for bodyweight work.",
    references: [
      reference("ACE: Glute Bridge", "https://www.acefitness.org/resources/everyone/exercise-library/49/glute-bridge/", "Existing floor-bridge support contacts and controlled hip extension. The bar is the separately approved loaded variation."),
      ...loadedThrust.references,
      reference("Bret Contreras: The Art of Glute Building, Part I", "https://bretcontreras.com/the-glute-guys-secrets-the-art-of-glute-building-part-i-the-first-session/", "Author\u2019s barbell glute-bridge section supports the floor-supported, hip-loaded identity. No programming, clinical or progression claims adopted."),
      thrustSetup
    ]
  },
  {
    id: "bodyweight_bilateral_hip_thrust",
    name: "Bilateral bodyweight hip thrust",
    variationOf: "barbell_hip_thrust",
    aliases: ["bilateral bodyweight hip thrust", "two leg bodyweight hip thrust", "bodyweight bilateral hip thrust", "bodyweight hip thrust with both feet planted"],
    focus: "Unloaded bilateral hip extension with the upper back supported on a bench.",
    expect: "Lift and lower the pelvis with both feet on the floor and no external load.",
    needs: "Secured upper-back support bench \xB7 clear foot and hip space",
    requires: ["hip_thrust_bench", "bridge_space"],
    setup: "Position the upper back near the lower shoulder blades on a bench secured against sliding or tipping. Plant both feet on firm floor with knees bent and clear room for hip movement and a controlled entry and exit. No bar or external weight is used.",
    cue: "Raise the hips smoothly while keeping the feet planted, upper back supported and trunk steady.",
    cues: [
      "Press through both planted feet to raise the pelvis while maintaining the upper-back support contact.",
      loadedThrust.cues[1],
      "Lower smoothly through the range the support height and contacts allow; keep the bench steady.",
      "Finish in a controlled lowered position before leaving the support."
    ],
    context: "This version uses both feet on the floor and no external load. Bench height and upper-back contact change the available hip excursion; touching the floor at the bottom is not required. A floor bridge, loaded bilateral hip thrust and single-leg hip thrust retain their separate instruction records.",
    references: [
      ...loadedThrust.references,
      thrustSetup,
      reference("Bret Contreras: 10 Steps to the Perfect Hip Thrust", "https://bretcontreras.com/10-steps-to-the-perfect-hip-thrust/", "Direct technique guidance for upper-back support, foot contacts and controlled pelvic movement; load and programming suggestions are not adopted.")
    ]
  }
].map((record3) => ({ ...record3, family: "hip_extension", review: b2Review, sourceChecked: "2026-10-13" }));

// ../gym-swap-site/dist/prototype/b2-comparisons.mjs?v=2.8.0
var applyB2Similarity = (edge) => edge.originalId === "barbell_rdl" && edge.cardId === "dumbbell_rdl" ? { ...edge, reviewLabel: "H3-a", similarity: "close", similarityReview: b2Review } : edge;
var originals3 = { H3: { id: "barbell_rdl", name: "Barbell Romanian deadlift" }, G1: { id: "floor_bridge", name: "Bodyweight glute bridge" } };
var comparison3 = (reviewLabel, cardId, similarity, keeps, changes, check) => {
  const original2 = originals3[reviewLabel.slice(0, 2)];
  return {
    reviewLabel,
    originalId: original2.id,
    originalName: original2.name,
    cardId,
    source: "hinges_and_hip_extension",
    similarity,
    keeps,
    changes,
    check,
    why: keeps,
    detail: changes,
    load: check,
    limited: similarity === "broader",
    basis: `Michael-approved Batch B hinge/bridge comparison ${reviewLabel}; October 13, 2026`,
    review: b2Review
  };
};
var b2Comparisons = [
  comparison3(
    "H3-b",
    "kettlebell_rdl",
    "close",
    "A standing-start bilateral hip hinge with the load in the hands.",
    "One compact shared handle changes hand spacing and clearance; available bell sizes can constrain loading.",
    "Keep this a hinge, not a swing or a mandatory floor pickup. Choose loading separately."
  ),
  comparison3(
    "H3-c",
    "smith_rdl",
    "some",
    "A two-foot, hand-loaded standing hinge.",
    "Rails determine bar travel, so stance and hip travel must fit the machine instead of freely controlling the bar path.",
    "Confirm a full usable hinge, reachable hooks and usable stops. Do not assume the guided bar\u2019s weight."
  ),
  comparison3(
    "H3-d",
    "cable_rdl",
    "some",
    "A resisted bilateral standing hinge.",
    "The forward and downward cable pull changes balance and how resistance acts through the hinge.",
    "Maintain footing and usable cable travel. Constant cable tension does not mean constant hip torque."
  ),
  comparison3(
    "H3-e",
    "band_rdl",
    "some",
    "A standing bilateral resisted hinge.",
    "Band force changes with stretch, changing resistance through the repetition instead of carrying a fixed mass.",
    "Secure the band beneath both feet. Band length and grip must allow controlled travel without slack or excessive stretch."
  ),
  comparison3(
    "H3-f",
    "hip_extension_45",
    "some",
    "A controlled hip hinge with relatively little knee movement.",
    "The apparatus secures the feet, supports the thighs and moves the load to the chest. This removes standing balance and hanging grip, while body orientation changes resistance through the hinge.",
    "Keep the hip crease free of the pad and move at the hips rather than repeatedly bending the spine. This record includes a plate held at the chest."
  ),
  comparison3(
    "H3-g",
    "barbell_hip_thrust",
    "broader",
    "Externally loaded hip extension.",
    "Bent-knee pelvic lifting with upper-back support replaces the standing torso hinge and hanging grip.",
    "This does not retain the original RDL task. Confirm bench stability and controlled bar entry and exit; doses do not transfer automatically."
  ),
  comparison3(
    "H3-h",
    "floor_bridge",
    "broader",
    "Controlled hip extension.",
    "Floor support, bent knees and no external load replace the standing loaded hinge.",
    "A partial match when the narrower hip-extension task is acceptable. It does not retain RDL loading or hand-held control."
  ),
  comparison3(
    "G1-a",
    "barbell_floor_bridge",
    "close",
    "Both floor foot contacts, upper-back floor support and dynamic hip extension.",
    "A padded bar adds resistance at the hips while retaining the movement and support arrangement; bar handling and clearance are added requirements.",
    "Confirm workable bar placement, removal and clearance. Added load is an optional choice, not a prescribed progression or repetition-equivalent replacement."
  ),
  comparison3(
    "G1-b",
    "bodyweight_bilateral_hip_thrust",
    "some",
    "Unloaded bilateral pelvic lifting and lowering with bent knees.",
    "Raised upper-back support changes the pivot and allows a different hip excursion; bench height and contact affect that range.",
    "Use stable upper-back support and a controlled range. No added load or forced floor touch is assumed."
  ),
  comparison3(
    "G1-c",
    "kickstand_bridge",
    "some",
    "Floor-supported dynamic hip extension with both foot contacts available.",
    "Uneven contribution emphasizes one side while retaining adjustable help from the other foot.",
    "Assistance is unmeasured. This does not preserve symmetric bilateral work."
  ),
  comparison3(
    "G1-d",
    "single_leg_floor_bridge",
    "some",
    "Upper-back floor support and repeated hip extension.",
    "Removing the second foot makes support one-sided and adds pelvic-control demand.",
    "Bilateral sharing is lost. Repetitions do not convert automatically, and this is not a difficulty ranking."
  ),
  comparison3(
    "G1-f",
    "band_abduction_bridge",
    "some",
    "Two-foot floor-supported hip lifting and lowering.",
    "Opening and returning the knees at the top adds a separate resisted abduction action while the hips stay raised.",
    "This is active opening and return, not simply holding band tension. The changed sequence does not imply equivalent counts or tempo."
  ),
  comparison3(
    "G1-e",
    "bridge_march",
    "broader",
    "A hip-extension position with upper-back floor support.",
    "Alternating foot lifts while holding pelvic height replaces repeated pelvic lifting.",
    "This is a control and hold task. Marching steps are not bridge repetitions."
  ),
  comparison3(
    "G1-g",
    "dumbbell_rdl",
    "broader",
    "Hip extension as part of a controlled hinge.",
    "Standing balance, grip and a moving torso replace bent-knee floor support.",
    "Shared hip extension is only a partial match. Bridge and RDL prescriptions do not transfer automatically."
  )
];

// ../gym-swap-site/dist/prototype/b1-content.mjs?v=2.8.0
var b1Review = {
  batch: "b1-approved-2026-10-13",
  basis: "Michael approved S1\u2013S3, all 26 directed comparisons and the disclosed setups, including the four shared instruction drafts. Stop after this squat group; broader machine/unilateral passes remain deferred."
};
var b1Equipment = {
  vertical_smith_squat_setup: "Vertical single-axis Smith station with suitable loading, reachable hooks and usable squat stops",
  squat_heel_support: "Stable nonslip ramp, wedge or plate arrangement supporting both raised heels throughout this squat",
  hack_squat_bar_clearance: "Behind-leg bar/plate clearance for the full intended squat and controlled pickup/set-down",
  cable_belt_squat_station: "Dedicated cable belt-squat platform with full travel, start/stop controls, balance handles and room for heel supports",
  cable_belt_squat_attachment: "Compatible hip belt and secured connectors with suitable belt-squat loading"
};
var reference2 = (label, url, scope) => ({ label, url, scope });
var gobletReference = reference2("NASM: Goblet Squat", "https://www.nasm.org/resource-center/exercise-library/goblet-squat", "Single chest-held DB/KB and bilateral squat mechanics. Heel support is an explicitly approved catalogue variation, not a source-prescribed substitution.");
var heelReference = reference2("Lu et al.: Heel Lift Insoles during Barbell Squats", "https://pmc.ncbi.nlm.nih.gov/articles/PMC9312299/", "Primary study supports changes in ankle position and loading distribution with heel elevation; it does not establish equivalent machine loading or zero back demand.");
var b1Content = [
  {
    id: "vertical_smith_back_squat",
    name: "Vertical Smith back squat \u2014 high bar",
    variationOf: "high_bar_squat",
    aliases: ["vertical smith back squat", "vertical smith high bar squat", "high bar vertical smith squat"],
    focus: "A back-loaded bilateral squat with a guided bar.",
    expect: "Squat beneath a high upper-back bar that travels on vertical rails.",
    needs: "Vertical Smith station with loading/hooks/stops \xB7 clear standing space",
    requires: ["vertical_smith_squat_setup", "standing_space"],
    setup: "Use a vertical, single-axis Smith station with suitable loading, reachable hooks and stops set for the intended squat. Rest the bar high on the upper-back musculature, not the neck. Establish a bilateral foot position that permits controlled hip-and-knee bending along the rail path, with no back pad or box. Check the release and rehook procedure before starting.",
    cue: "Keep the feet planted and control the torso beneath the guided bar.",
    cues: [
      "Brace the torso and release the bar using the station\u2019s controls.",
      "Bend the hips and knees smoothly through a range you can control while the bar follows the vertical rails.",
      "Stand with control while keeping the feet planted and the upper-back bar position steady.",
      "Secure the bar on its hooks before stepping out from beneath it."
    ],
    context: "The rails guide the bar but do not provide a back pad. This ordinary bilateral squat is distinct from the Smith split squat, an angled or dual-axis station, and a deliberately far-forward-foot leaning hack squat. Machine labels and bar markings do not establish equivalent loading.",
    references: [
      reference2("Life Fitness: Vertical Smith Machine", "https://www.lifefitness.com/en-hk/catalog/strength-training/plate-loaded/plate-loaded-vertical-smith-machine", "Manufacturer verifies vertical single-axis travel and rack positions; no universal machine-load or suitability claim adopted."),
      reference2("REP Fitness: Smith Machine Squat", "https://repfitness.com/blogs/guides/smith-machine-squat", "Upper-back placement and stop/release handling. No guaranteed rerack, rehabilitation, muscle-activation ranking or universal foot-position claim adopted.")
    ]
  },
  {
    id: "heel_supported_goblet_squat",
    name: "Heel-supported goblet squat",
    variationOf: "goblet_squat",
    aliases: ["heels supported goblet squat", "heel elevated goblet squat", "heels elevated goblet squat", "goblet squat on a ramp", "goblet squat on wedges"],
    focus: "A front-held bilateral squat with the heels supported above the forefeet.",
    expect: "Use stable heel elevation through a full controlled squat.",
    needs: "One DB or KB \xB7 stable heel ramp/wedge/plates \xB7 clear standing space",
    requires: [["goblet_dumbbell", "goblet_kettlebell"], "squat_heel_support", "standing_space"],
    setup: "Hold one dumbbell or kettlebell securely at the chest with both hands. Place both heels on a stable nonslip ramp, wedge or plate arrangement, with the forefeet also supported and room to squat. Keep the heel support in place throughout; no hand support is used.",
    cue: "Keep the weight close and squat through the full range you can control.",
    cues: [
      "Keep the forefeet and raised heels supported as you bend the hips and knees.",
      "Allow forward knee travel while maintaining a relatively upright, controlled torso and a steady chest hold.",
      "Lower through the full controlled squat available in this setup, then stand smoothly without bouncing or shifting the heel supports.",
      "Finish with a controlled way to set the weight down and step off the supports."
    ],
    context: "A ramp, wedge or stable plate arrangement supplies supported heel elevation; a loose or rocking stack does not establish the setup. Actively holding the heels off the floor is a different execution. No fixed wedge angle, stance width or universal depth is prescribed. Holding and balance demands remain; heel elevation does not establish zero back loading.",
    references: [gobletReference, heelReference]
  },
  {
    id: "heel_supported_barbell_hack_squat",
    name: "Heel-supported barbell hack squat",
    aliases: ["heels supported barbell hack squat", "heel elevated barbell hack squat", "heels elevated barbell hack squat", "behind body barbell hack squat with heel support"],
    focus: "Bilateral hack-squat action with a bar held behind the legs.",
    expect: "Keep the heels supported and the behind-leg bar clear through the squat.",
    needs: "Bar/loading \xB7 stable heel support \xB7 behind-leg clearance and controlled pickup/set-down",
    requires: ["barbell_load", "squat_heel_support", "hack_squat_bar_clearance", "standing_space"],
    setup: "Use a suitable bar/load with clearance behind the legs and a controlled pickup/set-down arrangement. Establish stable raised-heel and forefoot contacts on a nonslip ramp, wedge or plate arrangement. Take a two-hand overhand grip behind the legs and reach standing under control. Repetitions begin standing in this version.",
    cue: "Bend through the knees and hips while keeping the bar clear behind the legs.",
    cues: [
      "Keep the arms long and the grip secure while bending the knees and hips with a relatively upright, controlled torso.",
      "Keep the feet supported and the bar clear of the legs, plates and heel supports through the full intended squat.",
      "Extend the hips and knees to stand smoothly; lower under control for the next repetition.",
      "At the finish, use the planned controlled set-down before releasing the bar or leaving the heel supports."
    ],
    context: "Grip and bar/plate clearance can limit this movement. If contact stops descent early, the arrangement does not provide the full-range version described here. This version uses supported heels and begins each repetition standing; a floor-reset pickup and actively raised unsupported heels are separate executions. No rack, machine-equivalent load or zero back demand is assumed.",
    references: [
      reference2("Muscle & Strength: Barbell Hack Squat", "https://www.muscleandstrength.com/node/3894", "Publisher\u2019s direct instructions identify the behind-leg bar, heel-support option and bar/leg clearance. Standing-start repetitions are the approved catalogue adaptation; no growth or load-equivalence claim adopted."),
      heelReference
    ]
  },
  {
    id: "heel_supported_cable_belt_squat",
    name: "Heel-supported cable belt squat",
    aliases: ["heels supported cable belt squat", "heel elevated cable belt squat", "heels elevated cable belt squat", "cable belt squat with heel support"],
    focus: "Deep bilateral squatting with resistance attached at the hips.",
    expect: "Squat with supported heels and a hip belt connected to a cable below.",
    needs: "Dedicated cable belt-squat station \xB7 compatible belt/connectors/loading \xB7 stable heel support",
    requires: ["cable_belt_squat_station", "cable_belt_squat_attachment", "squat_heel_support"],
    setup: "Use a dedicated belt-squat platform with compatible hip belt/connectors, suitable loading, fixed balance handles and room for stable heel supports. Fit the belt around the hips and attach the cable below and between the feet. Establish supported raised heels and forefeet, and confirm that belt/cable/trolley travel allows the intended full descent. Follow the station\u2019s start/stop controls.",
    cue: "Use the handles for balance while the legs move the belt load.",
    cues: [
      "With the belt secured and foot contacts established, release the machine as designed.",
      "Bend the knees and hips through the full controlled squat while keeping the torso steady and the cable clear.",
      "Stand smoothly through the legs, using the fixed handles for balance without pulling yourself upward.",
      "Secure the machine at the finish before disconnecting the belt or stepping away."
    ],
    context: "Pelvic attachment replaces shoulder-pad loading, but there is no back pad guiding the torso. The station, belt and cable must accommodate the full range. A lever belt squat or improvised suspended-plate arrangement is not automatically this setup. Heel support does not establish machine-equivalent loading or zero back demand.",
    references: [
      reference2("Rogue: Rhino Trainer / Belt Squat Overview", "https://www.roguefitness.com/pages/rogue-monster-rhino-trainer-overview", "Manufacturer identifies hip-belt/cable setup, balance handles, release and heel-elevated variations. The combined setup is an approved catalogue choice; no clinical or spinal-unloading guarantee adopted.")
    ]
  }
].map((record3) => ({ ...record3, family: "squat", review: b1Review, sourceChecked: "2026-10-13" }));

// ../gym-swap-site/dist/prototype/b1-comparisons.mjs?v=2.8.0
var originals4 = {
  S1: { id: "high_bar_squat", name: "High-bar back squat" },
  S2: { id: "hack_squat", name: "Hack squat \u2014 inclined sled" },
  S3: { id: "db_front_squat", name: "Two-dumbbell front squat" }
};
var comparison4 = (reviewLabel, cardId, similarity, keeps, changes, check) => {
  const original2 = originals4[reviewLabel.slice(0, 2)];
  return {
    reviewLabel,
    originalId: original2.id,
    originalName: original2.name,
    cardId,
    source: "squats",
    similarity,
    keeps,
    changes,
    check,
    why: keeps,
    detail: changes,
    load: check,
    limited: similarity === "broader",
    basis: `Michael-approved Batch B squat comparison ${reviewLabel}; October 13, 2026`,
    review: b1Review
  };
};
var b1Comparisons = [
  comparison4(
    "S1-a",
    "low_bar_squat",
    "close",
    "Free-standing, bilateral back-loaded squatting.",
    "The lower rear-shoulder shelf generally involves more torso inclination to balance the bar, changing the position you must control.",
    "Use a maintainable low-bar shelf and grip with a suitable rack and safeties. Loads and repetitions do not transfer automatically."
  ),
  comparison4(
    "S1-b",
    "barbell_front_squat",
    "some",
    "An unsupported bilateral loaded squat.",
    "Front-shoulder support changes how the torso carries the bar. Maintaining the front rack can limit the movement before the legs do.",
    "Use a sustainable front rack and suitable rack/safeties; a power clean is not assumed. Choose loading separately."
  ),
  comparison4(
    "S1-c",
    "db_front_squat",
    "some",
    "Standing bilateral loaded squatting.",
    "Two separate front-held weights replace back loading, introducing shoulder-level handling and holding limits.",
    "Plan how to get both dumbbells into and out of position. Available weights and holding capacity may constrain this choice."
  ),
  comparison4(
    "S1-d",
    "goblet_squat",
    "some",
    "Unsupported bilateral squatting.",
    "A shared chest hold replaces the back bar. Holding capacity and the available single weight can constrain leg loading.",
    "Use one securely held DB or KB. The original back-squat load does not convert directly."
  ),
  comparison4(
    "S1-e",
    "landmine_squat",
    "some",
    "Loaded standing knee-and-hip bending.",
    "The chest-held bar end follows an arc. Body position must work with that arc instead of balancing a free back bar.",
    "Use a secured landmine anchor with clear bar travel and a controlled pickup/set-down. Choose loading separately."
  ),
  comparison4(
    "S1-f",
    "vertical_smith_back_squat",
    "some",
    "Back-loaded bilateral standing squatting.",
    "Rails control bar travel. Foot position must suit that fixed path while the unsupported torso still controls its position.",
    "This setup requires vertical single-axis rails with usable hooks/stops; a generic Smith label does not confirm that setup."
  ),
  comparison4(
    "S1-g",
    "hack_squat",
    "broader",
    "Loaded bilateral squatting through hip-and-knee bending.",
    "The back pad and carriage replace free-bar balance and much of the unsupported carrying task.",
    "Check the inclined sled\u2019s fit and usable range. This does not practise free back-bar control or preserve its load."
  ),
  comparison4(
    "S1-h",
    "leg_press",
    "broader",
    "Bilateral resisted hip-and-knee extension.",
    "Seated support removes standing squat balance and back-bar handling, retaining leg work without the original standing task.",
    "This is the seated selectorized version. Keep the pelvis/back supported; machine travel is not the original squat range."
  ),
  // Green hack choices follow the approved full-range, quadriceps-focused task.
  // The stable labels preserve the review order even when the tiers are grouped.
  comparison4(
    "S2-a",
    "v_squat",
    "close",
    "Supported, loaded bilateral squatting through a full usable range.",
    "A lever arc replaces straight rails, changing how the pads move relative to the feet while retaining the intended squat task.",
    "Close only when the forward-facing station permits the intended deep squat with pad and foot contacts maintained. The load does not transfer directly."
  ),
  comparison4(
    "S2-h",
    "heel_supported_goblet_squat",
    "close",
    "Full-range, quadriceps-focused bilateral squatting.",
    "Heel support accommodates forward knee travel. The chest hold and unsupported torso add holding and balance demands.",
    "Close only when holding and balance permit the full controlled squat. Use stable heel supports; this does not promise identical loading or zero back demand."
  ),
  comparison4(
    "S2-i",
    "heel_supported_barbell_hack_squat",
    "close",
    "Full-range, quadriceps-focused hack-squat action.",
    "The hands carry a bar behind the legs instead of shoulder pads. Grip and bar/plate clearance can become the limiting tasks.",
    "Close only when the bar and supports allow the full intended squat depth, not a shortened behind-body pickup. Repetitions begin standing; plan the pickup/set-down."
  ),
  comparison4(
    "S2-j",
    "heel_supported_cable_belt_squat",
    "close",
    "Deep bilateral squatting with the intended quadriceps focus.",
    "A pelvic attachment replaces shoulder-pad loading. No back pad guides the torso; fixed handles provide balance support.",
    "Close only when belt fit and cable travel permit the full controlled descent without pulling upward with the arms. Confirm the dedicated station and attachments."
  ),
  comparison4(
    "S2-b",
    "leg_press",
    "some",
    "Supported bilateral hip-and-knee extension against a machine.",
    "Seated support replaces standing shoulder-carriage support, changing the hip starting position and reachable travel.",
    "Keep the pelvis/back against the pads. This seated selectorized setup does not reproduce the same full squat range."
  ),
  comparison4(
    "S2-c",
    "vertical_smith_back_squat",
    "some",
    "Guided bilateral loaded squatting.",
    "The bar stays guided but the back pad disappears, leaving the torso to support the bar. Vertical travel also replaces the inclined path.",
    "This is an ordinary high-bar vertical Smith squat, not the heel-elevated hack execution. Confirm vertical rails, hooks and stops."
  ),
  comparison4(
    "S2-d",
    "high_bar_squat",
    "broader",
    "Bilateral loaded squatting.",
    "A free bar and unsupported torso replace pad-and-rail guidance. Balancing and carrying the back bar become part of each repetition.",
    "This ordinary high-bar setup does not imply the heel-elevated hack execution. Use a suitable rack/safeties and choose loading separately."
  ),
  comparison4(
    "S2-e",
    "barbell_front_squat",
    "broader",
    "Bilateral loaded squatting.",
    "A front rack and free-standing balance replace machine support. Maintaining that rack can constrain execution.",
    "Use a suitable rack/safeties and a maintainable front rack. Heel elevation and a matching hack-squat range are not implied by this ordinary setup."
  ),
  comparison4(
    "S2-f",
    "db_front_squat",
    "broader",
    "Bilateral loaded squatting.",
    "Two separate shoulder holds and unsupported balance replace sled support; positioning and holding the weights can limit the option.",
    "Plan controlled dumbbell positioning and set-down. This ordinary setup has no machine guidance or guaranteed matching squat range."
  ),
  comparison4(
    "S2-g",
    "goblet_squat",
    "broader",
    "Loaded knee-and-hip squatting.",
    "Chest-held loading and a freely balanced torso replace the supported sled, making holding capacity part of the task.",
    "This ordinary flat-foot setup does not establish the heel-supported, full-range hack emphasis. The heel-supported goblet squat is a distinct reviewed choice."
  ),
  comparison4(
    "S3-a",
    "barbell_front_squat",
    "close",
    "Free-standing bilateral squatting with front-shoulder loading.",
    "One connected bar replaces independent dumbbells, changing the rack and hand arrangement while retaining front loading.",
    "Use a sustainable front rack and suitable rack/safeties; no clean is assumed. Choose loading separately."
  ),
  comparison4(
    "S3-b",
    "goblet_squat",
    "close",
    "Front-loaded, free-standing bilateral squatting.",
    "One shared chest hold replaces two shoulder holds, changing handling and available loading while retaining the squat task.",
    "Holding capacity remains a limit. One weight does not establish an equivalent total load or training dose."
  ),
  comparison4(
    "S3-c",
    "high_bar_squat",
    "some",
    "Unsupported bilateral loaded squatting.",
    "Rear bar support removes the two front holds but introduces back-bar positioning and rack handling; the original front-loading task changes.",
    "Use a maintainable upper-back bar position and suitable rack/safeties. Dumbbell loading does not transfer directly."
  ),
  comparison4(
    "S3-d",
    "landmine_squat",
    "some",
    "Front-held bilateral standing squatting.",
    "The anchored bar end follows an arc rather than two independently held weights. Body position must follow that workable path.",
    "Confirm a secure anchor, clear travel and controlled bar handling. Select loading separately."
  ),
  comparison4(
    "S3-e",
    "goblet_box_squat",
    "some",
    "Front-loaded bilateral squatting and rising.",
    "A shared hold and controlled seated contact replace shoulder holds and the free bottom reversal; box height determines the bottom position.",
    "Use a stable box/bench and stay braced through contact. Stand without rocking or bouncing; the range may differ from the original."
  ),
  comparison4(
    "S3-f",
    "hack_squat",
    "broader",
    "Loaded bilateral squatting.",
    "The back pad and rails remove independent shoulder holds and free-standing load control.",
    "This does not preserve front-rack handling. Check the inclined machine\u2019s fit and usable range, and choose loading separately."
  ),
  comparison4(
    "S3-g",
    "leg_press",
    "broader",
    "Resisted bilateral knee-and-hip extension.",
    "Seated support replaces standing balance and all front-held loading, retaining leg work without reproducing the standing task.",
    "Use the seated selectorized setup and maintain back/pelvic pad contact. Machine travel and loading are not the original squat\u2019s."
  ),
  comparison4(
    "S3-h",
    "bodyweight_squat",
    "broader",
    "Unsupported bilateral squat movement.",
    "Removing both shoulder loads also removes their holding demand. Standing movement remains without the original external loading.",
    "Useful when no weight is available, but it does not preserve the externally loaded task. Do not convert the original dose automatically."
  )
];

// ../gym-swap-site/dist/prototype/a4-comparisons.mjs?v=2.8.0
var originals5 = {
  H1: { id: "reverse_hyper", name: "Reverse hyper \u2014 machine" },
  H2: { id: "bodyweight_horizontal_hip_extension", name: "GHD hip extension \u2014 bodyweight" }
};
var comparison5 = (reviewLabel, cardId, similarity, keeps, changes, check) => {
  const original2 = originals5[reviewLabel.slice(0, 2)];
  return {
    group: similarity === "some" ? 1 : 2,
    reviewLabel,
    originalId: original2.id,
    originalName: original2.name,
    cardId,
    source: "hinges_and_hip_extension",
    similarity,
    keeps,
    changes,
    check,
    why: keeps,
    detail: changes,
    load: check,
    limited: similarity === "broader",
    basis: `Michael-approved A4 comparison ${reviewLabel}; October 13, 2026`,
    review: a4Review
  };
};
var a4Comparisons = [
  comparison5(
    "H1-a",
    "bodyweight_horizontal_hip_extension",
    "some",
    "Supported two-leg hip extension with a steady trunk.",
    "Secures the legs and moves the torso instead. The torso\u2019s weight replaces the leg-and-pendulum loading task.",
    "Keep the hip crease free and use supported entry/exit. Bodyweight loading does not reproduce the reverse-hyper machine\u2019s resistance."
  ),
  comparison5(
    "H1-b",
    "bodyweight_hip_extension_45",
    "some",
    "Supported hip extension.",
    "Moves the torso instead of the legs. The angled support also changes where gravity challenges the hinge most.",
    "Secure the feet and leave the hip crease clear of the pad. No external weight is held in this version."
  ),
  comparison5(
    "H2-a",
    "bodyweight_hip_extension_45",
    "some",
    "Secured legs while the torso hinges at the hips.",
    "The support angle changes where gravity creates the greatest turning demand, changing the effort through the repetition.",
    "Leave the hip crease free and finish at torso-and-leg alignment. The bodyweight setup does not require a chest-held plate."
  ),
  comparison5(
    "H2-b",
    "reverse_hyper",
    "some",
    "Supported hip extension with a controlled trunk.",
    "Supports the torso and moves the legs instead. Leg-and-pendulum control replaces lifting the torso against gravity.",
    "Use the dedicated compatible station, strap and secured loading. No equal-resistance claim is implied."
  ),
  comparison5(
    "H1-c",
    "dumbbell_rdl",
    "broader",
    "Hip hinging with relatively little knee movement.",
    "Removes torso support, making grip, standing balance and holding the trunk position part of each repetition.",
    "Loses supported leg lifting. Let the controlled hinge determine descent; no floor touch or reverse-hyper load conversion is required."
  ),
  comparison5(
    "H1-d",
    "cable_rdl",
    "broader",
    "Resisted hip hinging.",
    "The low cable pulls the hands toward the pulley. A planted stance and controlled torso resist that forward pull instead of relying on a torso pad.",
    "Check cable travel and footing. This is a standing, facing-pulley hinge with a short bar, not a supported leg lift or a rope pull-through."
  ),
  comparison5(
    "H1-e",
    "barbell_hip_thrust",
    "broader",
    "Externally loaded hip extension.",
    "Feet stay planted and a bar loads the hips while the pelvis rises. Bent knees change hamstring contribution and remove the straight-leg lifting task.",
    "Does not preserve reverse-hyper leg travel. Secure the bench and plan controlled bar entry/exit; choose the load separately."
  ),
  comparison5(
    "H1-f",
    "floor_bridge",
    "broader",
    "Hip extension with upper-back support.",
    "Bent knees and floor support create a shorter lifting arc without machine resistance or a suspended leg lever.",
    "This bodyweight option preserves only part of the task and offers limited loading; it is not an equivalent loaded reverse hyper."
  ),
  comparison5(
    "H2-c",
    "dumbbell_rdl",
    "broader",
    "Hip hinging with a steady trunk.",
    "Removes secured feet and thigh support. Standing balance and grip now contribute, with weights held in front of the legs.",
    "Does not reproduce the horizontal torso-lifting resistance pattern. Follow the controlled hinge without requiring floor contact."
  ),
  comparison5(
    "H2-d",
    "cable_rdl",
    "broader",
    "Hip hinging with adjustable external resistance.",
    "Replaces pad and foot restraint with a planted stance resisting a forward cable pull. Footing and cable position affect execution.",
    "Loses secured-leg support. This facing-pulley setup implies neither constant hip resistance nor equivalent stack weight."
  ),
  comparison5(
    "H2-e",
    "barbell_hip_thrust",
    "broader",
    "Loaded hip extension with some body support.",
    "Bent knees and a bar across the hips replace the relatively straight-leg, torso-over-pad hinge. Knee position changes hamstring contribution.",
    "Preserves hip extension but not the original long-leg hinge. Secure the bench and plan bar clearance and controlled entry/exit."
  ),
  comparison5(
    "H2-f",
    "floor_bridge",
    "broader",
    "Bodyweight hip extension.",
    "Floor support and bent knees replace the suspended torso and relatively straight legs, substantially changing the lifting arc and loading demand.",
    "Does not preserve the GHD\u2019s hinging range or suspended torso lever. This is a partial-task bodyweight option."
  )
];

// ../gym-swap-site/dist/prototype/a3-content.mjs?v=2.8.0
var a3Equipment = {
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
var a3Content = [
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
    "needs": "Bar/plates \xB7 flat bench and rack \xB7 suitable unrack/rerack and spotter/safety arrangement",
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
    "needs": "Bar/plates \xB7 reachable low rack with suitable supports \xB7 clear lying space",
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
    "needs": "Suitable DB pair \xB7 bench locked around 30 degrees \xB7 stable foot support",
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
        "scope": "Supported inclined DB press. ACE illustrates 45\u201360 degrees; our approximately 30-degree catalogue setup is a separately approved choice."
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
    "needs": "Firm nonslip floor \xB7 clear body and arm space",
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
    "needs": "Fixed support that will not slide or tip \xB7 nonslip floor and body clearance",
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
    "needs": "Nonslip floor and body space \xB7 optional knee padding",
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
    "name": "TRX chest press \u2014 hands in handles, feet on floor",
    "aliases": [
      "trx push-up",
      "trx pushup",
      "trx chest press",
      "suspension chest press",
      "hands in handles push-up"
    ],
    "focus": "Suspended-hand pressing while holding a leaning plank.",
    "expect": "Your body moves while both hands control separate handles.",
    "needs": "Suitable suspension trainer and secure rated anchor \xB7 nonslip floor and body clearance",
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
    "name": "Ring push-up \u2014 feet on floor",
    "aliases": [
      "ring push-up",
      "ring pushup",
      "ring chest press",
      "gymnastics ring push-up"
    ],
    "focus": "Pressing with hands in independent rings and grounded feet.",
    "expect": "Keep a steady plank while controlling the moving rings.",
    "needs": "Two rings and adjustable straps on suitable secure anchors \xB7 nonslip floor and body space",
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
    "needs": "Suitable band/handles \xB7 secure anchor behind at chest height \xB7 standing and arm space",
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
    "needs": "DB pair suitable for fly handling \xB7 flat bench \xB7 stable foot support",
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

// ../gym-swap-site/dist/prototype/a3-comparisons.mjs?v=2.8.0
var a3Comparisons = [
  {
    "group": 1,
    "reviewLabel": "P1-a",
    "originalId": "barbell_bench_press",
    "originalName": "Flat barbell bench press",
    "cardId": "db_bench_press",
    "source": "chest_presses",
    "similarity": "close",
    "keeps": "Flat supported bilateral pressing",
    "changes": "Independent weights require separate steering and a different entry/exit; available DBs can limit loading.",
    "why": "Flat supported bilateral pressing",
    "detail": "Independent weights require separate steering and a different entry/exit; available DBs can limit loading.",
    "check": "Plan controlled DB entry and exit. Choose the pair separately from the original load.",
    "load": "Plan controlled DB entry and exit. Choose the pair separately from the original load.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P1-a; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "P1-b",
    "originalId": "barbell_bench_press",
    "originalName": "Flat barbell bench press",
    "cardId": "other_chest_press",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Supported chest pressing with elbow extension",
    "changes": "The station guides the handles and supports a seated body, changing steering and start position; inspect its actual travel.",
    "why": "Supported chest pressing with elbow extension",
    "detail": "The station guides the handles and supports a seated body, changing steering and start position; inspect its actual travel.",
    "check": "Check this station\u2019s seat, handles and travel. Its resistance setting does not transfer from another exercise.",
    "load": "Check this station\u2019s seat, handles and travel. Its resistance setting does not transfer from another exercise.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P1-b; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "P1-c",
    "originalId": "barbell_bench_press",
    "originalName": "Flat barbell bench press",
    "cardId": "db_floor_press",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Supported pressing",
    "changes": "Adds independent handling and removes lower travel when upper arms meet the floor; not full-range bench practice.",
    "why": "Supported pressing",
    "detail": "Adds independent handling and removes lower travel when upper arms meet the floor; not full-range bench practice.",
    "check": "Floor contact removes lower travel. Keep the return and put-down controlled; do not bounce.",
    "load": "Floor contact removes lower travel. Keep the return and put-down controlled; do not bounce.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P1-c; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "P1-d",
    "originalId": "barbell_bench_press",
    "originalName": "Flat barbell bench press",
    "cardId": "barbell_floor_press",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Linked-bar supported pressing",
    "changes": "Floor contact shortens the bottom range; retains shared-bar control but needs a reachable rack arrangement.",
    "why": "Linked-bar supported pressing",
    "detail": "Floor contact shortens the bottom range; retains shared-bar control but needs a reachable rack arrangement.",
    "check": "The rack must be reachable from the floor; shortened bottom travel is not a pin reset.",
    "load": "The rack must be reachable from the floor; shortened bottom travel is not a pin reset.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P1-d; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "P1-e",
    "originalId": "barbell_bench_press",
    "originalName": "Flat barbell bench press",
    "cardId": "low_incline_db_press",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Supported bilateral pressing",
    "changes": "Incline changes pressing direction relative to the torso; DBs add independent handling. It is not flat-bench practice.",
    "why": "Supported bilateral pressing",
    "detail": "Incline changes pressing direction relative to the torso; DBs add independent handling. It is not flat-bench practice.",
    "check": "Approximately 30 degrees is this catalogue setup. Keep independent DB control and choose loading separately.",
    "load": "Approximately 30 degrees is this catalogue setup. Keep independent DB control and choose loading separately.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P1-e; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "P1-f",
    "originalId": "barbell_bench_press",
    "originalName": "Flat barbell bench press",
    "cardId": "floor_pushup",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Chest pressing with elbow extension",
    "changes": "Move the body while holding a plank instead of lying under a bar; resistance is not selected by plate increments.",
    "why": "Chest pressing with elbow extension",
    "detail": "Move the body while holding a plank instead of lying under a bar; resistance is not selected by plate increments.",
    "check": "Maintain the plank through the chosen range. It is not automatically easier than a more upright press.",
    "load": "Maintain the plank through the chosen range. It is not automatically easier than a more upright press.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P1-f; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "P1-g",
    "originalId": "barbell_bench_press",
    "originalName": "Flat barbell bench press",
    "cardId": "hands_elevated_pushup",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Bilateral chest pressing",
    "changes": "Support height changes body angle and loading, with active plank control replacing bench support. Height is not a load conversion.",
    "why": "Bilateral chest pressing",
    "detail": "Support height changes body angle and loading, with active plank control replacing bench support. Height is not a load conversion.",
    "check": "The support must not slide or tip. Height changes bodyweight loading without a precise weight conversion.",
    "load": "The support must not slide or tip. Height changes bodyweight loading without a precise weight conversion.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P1-g; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "P1-h",
    "originalId": "barbell_bench_press",
    "originalName": "Flat barbell bench press",
    "cardId": "standing_band_chest_press",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Bilateral pressing",
    "changes": "Standing trunk control replaces the bench; the band becomes more stretched through the press, changing resistance across travel.",
    "why": "Bilateral pressing",
    "detail": "Standing trunk control replaces the bench; the band becomes more stretched through the press, changing resistance across travel.",
    "check": "Check the chest-height anchor, band condition and stretch limits; both feet stay grounded.",
    "load": "Check the chest-height anchor, band condition and stretch limits; both feet stay grounded.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P1-h; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "P1-i",
    "originalId": "barbell_bench_press",
    "originalName": "Flat barbell bench press",
    "cardId": "flat_db_fly",
    "source": "chest_presses",
    "similarity": "broader",
    "keeps": "Supported chest/shoulder arm-closing action",
    "changes": "Near-fixed elbow bend drops most elbow-extension work; a partial chest alternative, not a replacement for the complete press.",
    "why": "Supported chest/shoulder arm-closing action",
    "detail": "Near-fixed elbow bend drops most elbow-extension work; a partial chest alternative, not a replacement for the complete press.",
    "check": "Only a partial chest/shoulder alternative: most elbow-extension work is lost. Do not carry over press loads.",
    "load": "Only a partial chest/shoulder alternative: most elbow-extension work is lost. Do not carry over press loads.",
    "limited": true,
    "basis": "Michael-approved A3 comparison P1-i; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "P2-a",
    "originalId": "db_bench_press",
    "originalName": "Flat dumbbell bench press",
    "cardId": "barbell_bench_press",
    "source": "chest_presses",
    "similarity": "close",
    "keeps": "Flat supported bilateral pressing",
    "changes": "A shared bar links the hands, changing independent steering and setup. Needs an unrack/rerack arrangement.",
    "why": "Flat supported bilateral pressing",
    "detail": "A shared bar links the hands, changing independent steering and setup. Needs an unrack/rerack arrangement.",
    "check": "Use the specified bench/rack and unrack/rerack arrangement. Choose loading separately.",
    "load": "Use the specified bench/rack and unrack/rerack arrangement. Choose loading separately.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P2-a; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "P2-b",
    "originalId": "db_bench_press",
    "originalName": "Flat dumbbell bench press",
    "cardId": "db_floor_press",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Independent supported DB pressing",
    "changes": "Upper-arm floor contact removes bottom travel; useful without a bench but not equivalent lower-range practice.",
    "why": "Independent supported DB pressing",
    "detail": "Upper-arm floor contact removes bottom travel; useful without a bench but not equivalent lower-range practice.",
    "check": "Floor contact removes lower travel. Keep the return and put-down controlled; do not bounce.",
    "load": "Floor contact removes lower travel. Keep the return and put-down controlled; do not bounce.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P2-b; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "P2-c",
    "originalId": "db_bench_press",
    "originalName": "Flat dumbbell bench press",
    "cardId": "other_chest_press",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Supported pressing",
    "changes": "Station geometry sets handle travel rather than free DB paths; seat/reach adjustment must fit the task.",
    "why": "Supported pressing",
    "detail": "Station geometry sets handle travel rather than free DB paths; seat/reach adjustment must fit the task.",
    "check": "Check this station\u2019s seat, handles and travel. Its resistance setting does not transfer from another exercise.",
    "load": "Check this station\u2019s seat, handles and travel. Its resistance setting does not transfer from another exercise.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P2-c; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "P2-d",
    "originalId": "db_bench_press",
    "originalName": "Flat dumbbell bench press",
    "cardId": "barbell_floor_press",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Supported bilateral pressing",
    "changes": "Links the hands and shortens bottom travel together; loses independent DB handling and bench-depth range.",
    "why": "Supported bilateral pressing",
    "detail": "Links the hands and shortens bottom travel together; loses independent DB handling and bench-depth range.",
    "check": "The rack must be reachable from the floor; shortened bottom travel is not a pin reset.",
    "load": "The rack must be reachable from the floor; shortened bottom travel is not a pin reset.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P2-d; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "P2-e",
    "originalId": "db_bench_press",
    "originalName": "Flat dumbbell bench press",
    "cardId": "low_incline_db_press",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Independent supported DB pressing",
    "changes": "Changes the pressing angle and shoulder travel; retained implements do not make it the same flat press.",
    "why": "Independent supported DB pressing",
    "detail": "Changes the pressing angle and shoulder travel; retained implements do not make it the same flat press.",
    "check": "Approximately 30 degrees is this catalogue setup. Keep independent DB control and choose loading separately.",
    "load": "Approximately 30 degrees is this catalogue setup. Keep independent DB control and choose loading separately.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P2-e; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "P2-f",
    "originalId": "db_bench_press",
    "originalName": "Flat dumbbell bench press",
    "cardId": "floor_pushup",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Bilateral chest pressing",
    "changes": "Fixed hands support a moving plank instead of independent weights above a supported torso; loading is adjusted differently.",
    "why": "Bilateral chest pressing",
    "detail": "Fixed hands support a moving plank instead of independent weights above a supported torso; loading is adjusted differently.",
    "check": "Maintain the plank through the chosen range. It is not automatically easier than a more upright press.",
    "load": "Maintain the plank through the chosen range. It is not automatically easier than a more upright press.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P2-f; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "P2-g",
    "originalId": "db_bench_press",
    "originalName": "Flat dumbbell bench press",
    "cardId": "hands_elevated_pushup",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Bilateral chest pressing",
    "changes": "Body angle offers an adjustable bodyweight option; removes DB handling while adding whole-body position control.",
    "why": "Bilateral chest pressing",
    "detail": "Body angle offers an adjustable bodyweight option; removes DB handling while adding whole-body position control.",
    "check": "The support must not slide or tip. Height changes bodyweight loading without a precise weight conversion.",
    "load": "The support must not slide or tip. Height changes bodyweight loading without a precise weight conversion.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P2-g; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "P2-h",
    "originalId": "db_bench_press",
    "originalName": "Flat dumbbell bench press",
    "cardId": "standing_band_chest_press",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Two-hand pressing",
    "changes": "Standing support and band tension replace bench support and gravity-loaded DBs; resistance changes as the band stretches.",
    "why": "Two-hand pressing",
    "detail": "Standing support and band tension replace bench support and gravity-loaded DBs; resistance changes as the band stretches.",
    "check": "Check the chest-height anchor, band condition and stretch limits; both feet stay grounded.",
    "load": "Check the chest-height anchor, band condition and stretch limits; both feet stay grounded.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P2-h; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "P2-i",
    "originalId": "db_bench_press",
    "originalName": "Flat dumbbell bench press",
    "cardId": "flat_db_fly",
    "source": "chest_presses",
    "similarity": "broader",
    "keeps": "Independent loads and supported chest/shoulder movement",
    "changes": "An opening/closing arc with little elbow movement removes most triceps pressing work; not a press with a different grip.",
    "why": "Independent loads and supported chest/shoulder movement",
    "detail": "An opening/closing arc with little elbow movement removes most triceps pressing work; not a press with a different grip.",
    "check": "Only a partial chest/shoulder alternative: most elbow-extension work is lost. Do not carry over press loads.",
    "load": "Only a partial chest/shoulder alternative: most elbow-extension work is lost. Do not carry over press loads.",
    "limited": true,
    "basis": "Michael-approved A3 comparison P2-i; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "P3-c",
    "originalId": "chest_press_machine",
    "originalName": "Machine chest press",
    "cardId": "other_chest_press",
    "source": "chest_presses",
    "similarity": "close",
    "keeps": "Supported horizontal pressing and machine-guided handling",
    "changes": "Different settings/path may alter reach and travel. Green is conditional on a genuinely comparable press, not any station labeled chest.",
    "why": "Supported horizontal pressing and machine-guided handling",
    "detail": "Different settings/path may alter reach and travel. Green is conditional on a genuinely comparable press, not any station labeled chest.",
    "check": "Close only when the other station offers comparable supported horizontal pressing and usable travel. A machine name alone does not establish that match.",
    "load": "Close only when the other station offers comparable supported horizontal pressing and usable travel. A machine name alone does not establish that match.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P3-c; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    },
    "retainedLegacyPair": true
  },
  {
    "group": 1,
    "reviewLabel": "P3-a",
    "originalId": "chest_press_machine",
    "originalName": "Machine chest press",
    "cardId": "db_bench_press",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Supported chest pressing",
    "changes": "Free weights require independent steering and getting both loads into/out of position; station-guided handling is lost.",
    "why": "Supported chest pressing",
    "detail": "Free weights require independent steering and getting both loads into/out of position; station-guided handling is lost.",
    "check": "Plan controlled DB entry and exit. Choose the pair separately from the original load.",
    "load": "Plan controlled DB entry and exit. Choose the pair separately from the original load.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P3-a; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    },
    "retainedLegacyPair": true
  },
  {
    "group": 1,
    "reviewLabel": "P3-b",
    "originalId": "chest_press_machine",
    "originalName": "Machine chest press",
    "cardId": "db_floor_press",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Supported pressing",
    "changes": "Free DB handling replaces guidance and the floor cuts bottom travel; useful without a bench, but two meaningful changes.",
    "why": "Supported pressing",
    "detail": "Free DB handling replaces guidance and the floor cuts bottom travel; useful without a bench, but two meaningful changes.",
    "check": "Floor contact removes lower travel. Keep the return and put-down controlled; do not bounce.",
    "load": "Floor contact removes lower travel. Keep the return and put-down controlled; do not bounce.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P3-b; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    },
    "retainedLegacyPair": true
  },
  {
    "group": 1,
    "reviewLabel": "P3-d",
    "originalId": "chest_press_machine",
    "originalName": "Machine chest press",
    "cardId": "barbell_bench_press",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Supported bilateral pressing",
    "changes": "The lifter controls an unracked bar path and exit instead of the station providing guided travel.",
    "why": "Supported bilateral pressing",
    "detail": "The lifter controls an unracked bar path and exit instead of the station providing guided travel.",
    "check": "Use the specified bench/rack and unrack/rerack arrangement. Choose loading separately.",
    "load": "Use the specified bench/rack and unrack/rerack arrangement. Choose loading separately.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P3-d; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "P3-e",
    "originalId": "chest_press_machine",
    "originalName": "Machine chest press",
    "cardId": "low_incline_db_press",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Supported bilateral pressing",
    "changes": "Adds independent weights and an inclined pressing angle; does not reproduce the original station's horizontal path.",
    "why": "Supported bilateral pressing",
    "detail": "Adds independent weights and an inclined pressing angle; does not reproduce the original station's horizontal path.",
    "check": "Approximately 30 degrees is this catalogue setup. Keep independent DB control and choose loading separately.",
    "load": "Approximately 30 degrees is this catalogue setup. Keep independent DB control and choose loading separately.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P3-e; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "P3-f",
    "originalId": "chest_press_machine",
    "originalName": "Machine chest press",
    "cardId": "floor_pushup",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Bilateral chest pressing",
    "changes": "Active plank support replaces the seat/back pad; bodyweight and position replace a selectable machine resistance.",
    "why": "Bilateral chest pressing",
    "detail": "Active plank support replaces the seat/back pad; bodyweight and position replace a selectable machine resistance.",
    "check": "Maintain the plank through the chosen range. It is not automatically easier than a more upright press.",
    "load": "Maintain the plank through the chosen range. It is not automatically easier than a more upright press.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P3-f; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "P3-g",
    "originalId": "chest_press_machine",
    "originalName": "Machine chest press",
    "cardId": "hands_elevated_pushup",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Bilateral chest pressing",
    "changes": "Elevation changes bodyweight loading while the torso holds its own position; cannot infer equivalent resistance from support height.",
    "why": "Bilateral chest pressing",
    "detail": "Elevation changes bodyweight loading while the torso holds its own position; cannot infer equivalent resistance from support height.",
    "check": "The support must not slide or tip. Height changes bodyweight loading without a precise weight conversion.",
    "load": "The support must not slide or tip. Height changes bodyweight loading without a precise weight conversion.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P3-g; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "P3-h",
    "originalId": "chest_press_machine",
    "originalName": "Machine chest press",
    "cardId": "standing_band_chest_press",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Bilateral chest pressing",
    "changes": "Removes guided handles/back support and uses stretch-dependent resistance; standing control becomes part of the task.",
    "why": "Bilateral chest pressing",
    "detail": "Removes guided handles/back support and uses stretch-dependent resistance; standing control becomes part of the task.",
    "check": "Check the chest-height anchor, band condition and stretch limits; both feet stay grounded.",
    "load": "Check the chest-height anchor, band condition and stretch limits; both feet stay grounded.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P3-h; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "P3-i",
    "originalId": "chest_press_machine",
    "originalName": "Machine chest press",
    "cardId": "flat_db_fly",
    "source": "chest_presses",
    "similarity": "broader",
    "keeps": "Supported chest/shoulder movement",
    "changes": "Removes guided travel and most elbow-extension work; only the arm-closing portion is retained.",
    "why": "Supported chest/shoulder movement",
    "detail": "Removes guided travel and most elbow-extension work; only the arm-closing portion is retained.",
    "check": "Only a partial chest/shoulder alternative: most elbow-extension work is lost. Do not carry over press loads.",
    "load": "Only a partial chest/shoulder alternative: most elbow-extension work is lost. Do not carry over press loads.",
    "limited": true,
    "basis": "Michael-approved A3 comparison P3-i; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "P4-a",
    "originalId": "suspension_chest_press",
    "originalName": "TRX chest press \u2014 hands in handles, feet on floor",
    "cardId": "ring_chest_press",
    "source": "chest_presses",
    "similarity": "close",
    "keeps": "Suspended hands, moving plank and pressing",
    "changes": "Separate straps/anchor geometry change handle freedom. Compare at similar body lean and reach; rings are not automatically harder.",
    "why": "Suspended hands, moving plank and pressing",
    "detail": "Separate straps/anchor geometry change handle freedom. Compare at similar body lean and reach; rings are not automatically harder.",
    "check": "Close only at a comparable body lean and usable range. Check anchors, spacing and controlled ring travel.",
    "load": "Close only at a comparable body lean and usable range. Check anchors, spacing and controlled ring travel.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P4-a; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "P4-b",
    "originalId": "suspension_chest_press",
    "originalName": "TRX chest press \u2014 hands in handles, feet on floor",
    "cardId": "hands_elevated_pushup",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Inclined plank pressing",
    "changes": "Fixed support removes the task of controlling moving handles; height sets body angle differently. No exact load equivalence.",
    "why": "Inclined plank pressing",
    "detail": "Fixed support removes the task of controlling moving handles; height sets body angle differently. No exact load equivalence.",
    "check": "The support must not slide or tip. Height changes bodyweight loading without a precise weight conversion.",
    "load": "The support must not slide or tip. Height changes bodyweight loading without a precise weight conversion.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P4-b; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "P4-c",
    "originalId": "suspension_chest_press",
    "originalName": "TRX chest press \u2014 hands in handles, feet on floor",
    "cardId": "floor_pushup",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Moving plank and pressing",
    "changes": "Fixed hands remove strap movement; a lower body position may demand more pressing than an upright TRX setup.",
    "why": "Moving plank and pressing",
    "detail": "Fixed hands remove strap movement; a lower body position may demand more pressing than an upright TRX setup.",
    "check": "Maintain the plank through the chosen range. It is not automatically easier than a more upright press.",
    "load": "Maintain the plank through the chosen range. It is not automatically easier than a more upright press.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P4-c; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "P4-d",
    "originalId": "suspension_chest_press",
    "originalName": "TRX chest press \u2014 hands in handles, feet on floor",
    "cardId": "kneeling_pushup",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Bodyweight pressing with torso control",
    "changes": "Grounded knees shorten the supported body lever and fixed hands remove suspension control; it is no longer a feet-supported plank.",
    "why": "Bodyweight pressing with torso control",
    "detail": "Grounded knees shorten the supported body lever and fixed hands remove suspension control; it is no longer a feet-supported plank.",
    "check": "Keep the head-to-knee line without folding at the hips; grounded knees change the support task.",
    "load": "Keep the head-to-knee line without folding at the hips; grounded knees change the support task.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P4-d; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "P4-e",
    "originalId": "suspension_chest_press",
    "originalName": "TRX chest press \u2014 hands in handles, feet on floor",
    "cardId": "db_bench_press",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Pressing and independent hand-load control",
    "changes": "Bench support removes the moving-plank task; resistance becomes separately selected DBs with an entry/exit handling task.",
    "why": "Pressing and independent hand-load control",
    "detail": "Bench support removes the moving-plank task; resistance becomes separately selected DBs with an entry/exit handling task.",
    "check": "Plan controlled DB entry and exit. Choose the pair separately from the original load.",
    "load": "Plan controlled DB entry and exit. Choose the pair separately from the original load.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P4-e; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "P4-f",
    "originalId": "suspension_chest_press",
    "originalName": "TRX chest press \u2014 hands in handles, feet on floor",
    "cardId": "db_floor_press",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Independent bilateral pressing",
    "changes": "Supported torso removes plank control and floor contact restricts bottom travel; this retains pressing, not the suspension task.",
    "why": "Independent bilateral pressing",
    "detail": "Supported torso removes plank control and floor contact restricts bottom travel; this retains pressing, not the suspension task.",
    "check": "Floor contact removes lower travel. Keep the return and put-down controlled; do not bounce.",
    "load": "Floor contact removes lower travel. Keep the return and put-down controlled; do not bounce.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P4-f; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "P4-g",
    "originalId": "suspension_chest_press",
    "originalName": "TRX chest press \u2014 hands in handles, feet on floor",
    "cardId": "standing_band_chest_press",
    "source": "chest_presses",
    "similarity": "some",
    "keeps": "Pressing with active standing torso control",
    "changes": "Feet/body stay largely in place while hands move against stretch-dependent resistance; leaning-plank loading is lost.",
    "why": "Pressing with active standing torso control",
    "detail": "Feet/body stay largely in place while hands move against stretch-dependent resistance; leaning-plank loading is lost.",
    "check": "Check the chest-height anchor, band condition and stretch limits; both feet stay grounded.",
    "load": "Check the chest-height anchor, band condition and stretch limits; both feet stay grounded.",
    "limited": false,
    "basis": "Michael-approved A3 comparison P4-g; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "P4-h",
    "originalId": "suspension_chest_press",
    "originalName": "TRX chest press \u2014 hands in handles, feet on floor",
    "cardId": "flat_db_fly",
    "source": "chest_presses",
    "similarity": "broader",
    "keeps": "Chest/shoulder arm-closing action",
    "changes": "Bench support removes the moving plank and near-fixed elbows remove most pressing action; weakest whole-task match here.",
    "why": "Chest/shoulder arm-closing action",
    "detail": "Bench support removes the moving plank and near-fixed elbows remove most pressing action; weakest whole-task match here.",
    "check": "Only a partial chest/shoulder alternative: most elbow-extension work is lost. Do not carry over press loads.",
    "load": "Only a partial chest/shoulder alternative: most elbow-extension work is lost. Do not carry over press loads.",
    "limited": true,
    "basis": "Michael-approved A3 comparison P4-h; October 13, 2026",
    "review": {
      "batch": "a3-approved-2026-10-13",
      "basis": "Michael approved all 35 A3 comparisons, including conditional Greens and Blue fly options. Broader machine/unilateral passes and A4 remain deferred."
    }
  }
];

// ../gym-swap-site/dist/prototype/a2-comparisons.mjs?v=2.8.0
var a2Comparisons = [
  {
    "group": 1,
    "reviewLabel": "D1-a",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "two_db_side_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "close",
    "keeps": "Two-foot hip-and-knee extension from rest, side-held loading and standing trunk control.",
    "changes": "Each hand steers a separate weight instead of a rigid frame. Small DBs can require a deeper reach; the available pair can also limit loading. Green is for the stated comparable reach, not arbitrary floor contact.",
    "load": "Close match requires the declared weight position and a comparable hand pickup height; independent weights still need individual control.",
    "check": "Close match requires the declared weight position and a comparable hand pickup height; independent weights still need individual control.",
    "why": "Two-foot hip-and-knee extension from rest, side-held loading and standing trunk control.",
    "detail": "Each hand steers a separate weight instead of a rigid frame. Small DBs can require a deeper reach; the available pair can also limit loading. Green is for the stated comparable reach, not arbitrary floor contact.",
    "basis": "Michael-approved A2 review D1-a; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "D1-b",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "two_kb_side_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "close",
    "keeps": "Bilateral side-held pickup, hip-and-knee extension and a reset.",
    "changes": "Independent bells hang below their handles; their bodies need clearance beside the legs and set the bottom height. Available bell size/load can limit the match. This is not a one-sided suitcase lift or two bells between the feet.",
    "load": "Close match requires the declared weight position and a comparable hand pickup height; independent weights still need individual control.",
    "check": "Close match requires the declared weight position and a comparable hand pickup height; independent weights still need individual control.",
    "why": "Bilateral side-held pickup, hip-and-knee extension and a reset.",
    "detail": "Independent bells hang below their handles; their bodies need clearance beside the legs and set the bottom height. Available bell size/load can limit the match. This is not a one-sided suitcase lift or two bells between the feet.",
    "basis": "Michael-approved A2 review D1-b; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "D1-c",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "conventional_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "Two-foot lift from rest through hips and knees, hand-held loading and a shared implement.",
    "changes": "The bar must pass in front of the shins/knees, changing how the person positions the legs and torso while keeping the load close. It does not retain the hex frame's side-handle clearance.",
    "load": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "check": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "why": "Two-foot lift from rest through hips and knees, hand-held loading and a shared implement.",
    "detail": "The bar must pass in front of the shins/knees, changing how the person positions the legs and torso while keeping the load close. It does not retain the hex frame's side-handle clearance.",
    "basis": "Michael-approved A2 review D1-c; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "D1-d",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "sumo_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "Bilateral loaded pickup and hip-and-knee extension.",
    "changes": "Wider, turned-out legs create a different hip position and clearance around a front bar; this commonly changes torso position and travel. It requires its own stance setup, not just turning the toes out on the hex-bar version.",
    "load": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "check": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "why": "Bilateral loaded pickup and hip-and-knee extension.",
    "detail": "Wider, turned-out legs create a different hip position and clearance around a front bar; this commonly changes torso position and travel. It requires its own stance setup, not just turning the toes out on the hex-bar version.",
    "basis": "Michael-approved A2 review D1-d; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "D1-e",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "two_hand_kb_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "Two-foot pickup from rest and hip extension to standing, with knee movement to reach the bell.",
    "changes": "Both hands share one central handle instead of separate side handles; leg clearance and the available single-bell load change. A very wide squat-like version is not silently included.",
    "load": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "check": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "why": "Two-foot pickup from rest and hip extension to standing, with knee movement to reach the bell.",
    "detail": "Both hands share one central handle instead of separate side handles; leg clearance and the available single-bell load change. A very wide squat-like version is not silently included.",
    "basis": "Michael-approved A2 review D1-e; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "D1-f",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "two_hand_landmine_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "Bilateral hip-and-knee extension, hand-held loading and a settled bottom start.",
    "changes": "One end is anchored: the hands follow an arc toward the pivot as the bar rises, so stance and balance must accommodate that path. Grip access and plate clearance may limit the lift; it is not a free side-held frame.",
    "load": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "check": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "why": "Bilateral hip-and-knee extension, hand-held loading and a settled bottom start.",
    "detail": "One end is anchored: the hands follow an arc toward the pivot as the bar rises, so stance and balance must accommodate that path. Grip access and plate clearance may limit the lift; it is not a free side-held frame.",
    "basis": "Michael-approved A2 review D1-f; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "D1-k",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "barbell_rack_pull",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A settled two-foot hip-and-knee pickup.",
    "changes": "A below-knee rack start removes the lowest pickup segment; pins or straps support the shaft rather than the plates. The front bar also replaces the hex frame\u2019s side handles.",
    "load": "Use equal rated supports with controlled shaft contact; no bouncing or above-knee lockouts.",
    "check": "Use equal rated supports with controlled shaft contact; no bouncing or above-knee lockouts.",
    "why": "A settled two-foot hip-and-knee pickup.",
    "detail": "A below-knee rack start removes the lowest pickup segment; pins or straps support the shaft rather than the plates. The front bar also replaces the hex frame\u2019s side handles.",
    "basis": "Michael-approved A2 review D1-k; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "D1-l",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "barbell_block_pull",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A settled two-foot hip-and-knee pickup.",
    "changes": "Plate blocks shorten the bottom reach while leaving the bar free after lift-off. A front bar replaces the side-held hex frame.",
    "load": "Use equal stable blocks below the knees; the omitted floor segment is not retained.",
    "check": "Use equal stable blocks below the knees; the omitted floor segment is not retained.",
    "why": "A settled two-foot hip-and-knee pickup.",
    "detail": "Plate blocks shorten the bottom reach while leaving the bar free after lift-off. A front bar replaces the side-held hex frame.",
    "basis": "Michael-approved A2 review D1-l; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "D1-m",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "hex_bar_block_pull",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "Two-foot hip-and-knee extension from settled supports.",
    "changes": "Equal blocks under the plates shorten the bottom reach. The side handles and shared hex frame remain.",
    "load": "Feet remain on the floor; use low handles with frame clearance. This differs from high handles without blocks.",
    "check": "Feet remain on the floor; use low handles with frame clearance. This differs from high handles without blocks.",
    "why": "Two-foot hip-and-knee extension from settled supports.",
    "detail": "Equal blocks under the plates shorten the bottom reach. The side handles and shared hex frame remain.",
    "basis": "Michael-approved A2 review D1-m; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "D1-n",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "deficit_hex_bar_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A settled bilateral hip-and-knee pickup.",
    "changes": "A platform beneath the feet increases bottom reach and travel. Low handles and the shared frame remain.",
    "load": "The whole stance must be supported with frame and plate clearance; no fixed deficit height is prescribed.",
    "check": "The whole stance must be supported with frame and plate clearance; no fixed deficit height is prescribed.",
    "why": "A settled bilateral hip-and-knee pickup.",
    "detail": "A platform beneath the feet increases bottom reach and travel. Low handles and the shared frame remain.",
    "basis": "Michael-approved A2 review D1-n; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "D1-o",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "deficit_barbell_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A settled bilateral hip-and-knee pickup.",
    "changes": "Feet elevation adds bottom reach and travel. A front bar also replaces the side handles.",
    "load": "Use a stable whole-stance platform and clear bar/plate travel; preserve a controlled bottom position.",
    "check": "Use a stable whole-stance platform and clear bar/plate travel; preserve a controlled bottom position.",
    "why": "A settled bilateral hip-and-knee pickup.",
    "detail": "Feet elevation adds bottom reach and travel. A front bar also replaces the side handles.",
    "basis": "Michael-approved A2 review D1-o; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "D1-p",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "vertical_smith_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A two-foot hip-and-knee pickup with a shared bar.",
    "changes": "Vertical rails remove fore/aft steering, so stance must fit the fixed path. The bar also moves in front of the legs.",
    "load": "Confirm compatible bottom stops at comparable pickup height and controlled unhooking/rehooking; a generic Smith is insufficient.",
    "check": "Confirm compatible bottom stops at comparable pickup height and controlled unhooking/rehooking; a generic Smith is insufficient.",
    "why": "A two-foot hip-and-knee pickup with a shared bar.",
    "detail": "Vertical rails remove fore/aft steering, so stance must fit the fixed path. The bar also moves in front of the legs.",
    "basis": "Michael-approved A2 review D1-p; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "D1-q",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "dual_axis_smith_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A two-foot hip-and-knee pickup with a shared bar.",
    "changes": "The carriage permits fore/aft adjustment but still constrains the bar; it does not reproduce all free-bar control. Front-bar handling replaces side handles.",
    "load": "Both axes and compatible bottom support must be available. An angled fixed track is not dual-axis.",
    "check": "Both axes and compatible bottom support must be available. An angled fixed track is not dual-axis.",
    "why": "A two-foot hip-and-knee pickup with a shared bar.",
    "detail": "The carriage permits fore/aft adjustment but still constrains the bar; it does not reproduce all free-bar control. Front-bar handling replaces side handles.",
    "basis": "Michael-approved A2 review D1-q; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "D1-r",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "side_handle_lever_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "Standing two-leg hip-and-knee lifting with torso control.",
    "changes": "Pivoted handles follow an arc and lever geometry changes the resistance through the lift. Side-held grip placement remains.",
    "load": "Check the actual handle, horn and bottom-stop configuration; brand alone does not identify it.",
    "check": "Check the actual handle, horn and bottom-stop configuration; brand alone does not identify it.",
    "why": "Standing two-leg hip-and-knee lifting with torso control.",
    "detail": "Pivoted handles follow an arc and lever geometry changes the resistance through the lift. Side-held grip placement remains.",
    "basis": "Michael-approved A2 review D1-r; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "D1-s",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "jefferson_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A hand-held pickup using hips and knees.",
    "changes": "Straddling the bar changes leg contribution and control of torso orientation. The symmetrical side-handle frame is lost.",
    "load": "Use its own stance/grip instructions and leg clearance; no deliberate twisting or Jefferson curl.",
    "check": "Use its own stance/grip instructions and leg clearance; no deliberate twisting or Jefferson curl.",
    "why": "A hand-held pickup using hips and knees.",
    "detail": "Straddling the bar changes leg contribution and control of torso orientation. The symmetrical side-handle frame is lost.",
    "basis": "Michael-approved A2 review D1-s; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "D1-t",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "unequal_db_side_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A two-foot hip-and-knee lift from rest.",
    "changes": "Unequal side loading adds a tendency to lean or turn, while each hand handles a separate weight. Side-held placement remains, but equal connected loading does not.",
    "load": "Match intended pickup heights despite different DB sizes; this does not mean uneven barbell loading.",
    "check": "Match intended pickup heights despite different DB sizes; this does not mean uneven barbell loading.",
    "why": "A two-foot hip-and-knee lift from rest.",
    "detail": "Unequal side loading adds a tendency to lean or turn, while each hand handles a separate weight. Side-held placement remains, but equal connected loading does not.",
    "basis": "Michael-approved A2 review D1-t; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "D1-u",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "kickstand_db_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "Loaded hip-and-knee pickup with both feet contacting the floor.",
    "changes": "Rear-foot assistance biases contribution toward the forward leg, changing stance and balance. Separate weights replace the shared frame.",
    "load": "No fixed percentage split. This bottom-start lift differs from a kickstand RDL and a free single-leg balance.",
    "check": "No fixed percentage split. This bottom-start lift differs from a kickstand RDL and a free single-leg balance.",
    "why": "Loaded hip-and-knee pickup with both feet contacting the floor.",
    "detail": "Rear-foot assistance biases contribution toward the forward leg, changing stance and balance. Separate weights replace the shared frame.",
    "basis": "Michael-approved A2 review D1-u; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 4,
    "reviewLabel": "D1-g",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "barbell_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Loaded two-foot hip hinging, grip and torso control.",
    "changes": "The knees remain softly bent while the hips move back; each rep starts standing and reverses without a floor reset. Loses the original's bottom-start leg drive and does not retain side-held loading.",
    "load": "This standing-start hinge does not preserve the repeated floor pickup or bottom-start leg drive. Do not convert loads or repetitions.",
    "check": "This standing-start hinge does not preserve the repeated floor pickup or bottom-start leg drive. Do not convert loads or repetitions.",
    "why": "Loaded two-foot hip hinging, grip and torso control.",
    "detail": "The knees remain softly bent while the hips move back; each rep starts standing and reverses without a floor reset. Loses the original's bottom-start leg drive and does not retain side-held loading.",
    "basis": "Michael-approved A2 review D1-g; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 4,
    "reviewLabel": "D1-h",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "dumbbell_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Bilateral loaded hinge with independently held weights.",
    "changes": "Removes the repeated pickup from rest and uses less knee movement; separate weights also replace the hex frame. A useful hinge option, but not the original floor-lifting task.",
    "load": "This standing-start hinge does not preserve the repeated floor pickup or bottom-start leg drive. Do not convert loads or repetitions.",
    "check": "This standing-start hinge does not preserve the repeated floor pickup or bottom-start leg drive. Do not convert loads or repetitions.",
    "why": "Bilateral loaded hinge with independently held weights.",
    "detail": "Removes the repeated pickup from rest and uses less knee movement; separate weights also replace the hex frame. A useful hinge option, but not the original floor-lifting task.",
    "basis": "Michael-approved A2 review D1-h; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 4,
    "reviewLabel": "D1-i",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "cable_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Two-foot loaded hip hinging and trunk control.",
    "changes": "The cable pulls toward the pulley as well as downward, changing balance and the direction resisted. No grounded implement is lifted from rest; do not confuse this with a rope pull-through facing away.",
    "load": "This standing-start hinge does not preserve the repeated floor pickup or bottom-start leg drive. Do not convert loads or repetitions.",
    "check": "This standing-start hinge does not preserve the repeated floor pickup or bottom-start leg drive. Do not convert loads or repetitions.",
    "why": "Two-foot loaded hip hinging and trunk control.",
    "detail": "The cable pulls toward the pulley as well as downward, changing balance and the direction resisted. No grounded implement is lifted from rest; do not confuse this with a rope pull-through facing away.",
    "basis": "Michael-approved A2 review D1-i; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 4,
    "reviewLabel": "D1-j",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "band_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "A resisted standing hip hinge with both feet planted.",
    "changes": "Band tension changes as it lengthens, usually increasing toward standing; there is no rigid implement or floor breakaway. Band length and grip must permit the intended range; this is not the same loading throughout the lift.",
    "load": "This standing-start hinge does not preserve the repeated floor pickup or bottom-start leg drive. Do not convert loads or repetitions.",
    "check": "This standing-start hinge does not preserve the repeated floor pickup or bottom-start leg drive. Do not convert loads or repetitions.",
    "why": "A resisted standing hip hinge with both feet planted.",
    "detail": "Band tension changes as it lengthens, usually increasing toward standing; there is no rigid implement or floor breakaway. Band length and grip must permit the intended range; this is not the same loading throughout the lift.",
    "basis": "Michael-approved A2 review D1-j; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 4,
    "reviewLabel": "D1-v",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "hip_extension_45",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Resisted hip hinging with a controlled torso.",
    "changes": "Secured legs remove standing balance; a chest-held plate loads the moving torso instead of hanging from the hands.",
    "load": "Loses the knee-driven floor pickup and hanging-weight grip. Keep movement at the hips with plate clearance.",
    "check": "Loses the knee-driven floor pickup and hanging-weight grip. Keep movement at the hips with plate clearance.",
    "why": "Resisted hip hinging with a controlled torso.",
    "detail": "Secured legs remove standing balance; a chest-held plate loads the moving torso instead of hanging from the hands.",
    "basis": "Michael-approved A2 review D1-v; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 4,
    "reviewLabel": "D1-w",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "horizontal_hip_extension",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Supported, resisted hip extension.",
    "changes": "The legs are secured while the torso and chest-held plate move; horizontal orientation changes gravity\u2019s turning demand through the range.",
    "load": "Loses floor pickup, knee drive and standing balance. This is hip extension, not a glute-ham raise.",
    "check": "Loses floor pickup, knee drive and standing balance. This is hip extension, not a glute-ham raise.",
    "why": "Supported, resisted hip extension.",
    "detail": "The legs are secured while the torso and chest-held plate move; horizontal orientation changes gravity\u2019s turning demand through the range.",
    "basis": "Michael-approved A2 review D1-w; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 4,
    "reviewLabel": "D1-x",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "tippy_bird",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Practice moving at the hip while controlling the torso.",
    "changes": "Unloaded single-leg balance replaces the externally loaded two-leg pickup.",
    "load": "This is hinge practice, not equivalent strength work or a readiness test.",
    "check": "This is hinge practice, not equivalent strength work or a readiness test.",
    "why": "Practice moving at the hip while controlling the torso.",
    "detail": "Unloaded single-leg balance replaces the externally loaded two-leg pickup.",
    "basis": "Michael-approved A2 review D1-x; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 4,
    "reviewLabel": "D1-y",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "supported_single_leg_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Loaded hip hinging with deliberate torso and pelvis control.",
    "changes": "A fixed handhold reduces the balance demand while one standing leg performs the hinge.",
    "load": "Loses the bilateral floor reset and bottom-start knee drive. Hand assistance varies; use a reachable fixed support throughout.",
    "check": "Loses the bilateral floor reset and bottom-start knee drive. Hand assistance varies; use a reachable fixed support throughout.",
    "why": "Loaded hip hinging with deliberate torso and pelvis control.",
    "detail": "A fixed handhold reduces the balance demand while one standing leg performs the hinge.",
    "basis": "Michael-approved A2 review D1-y; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 4,
    "reviewLabel": "D1-z",
    "originalId": "hex_bar_deadlift",
    "originalName": "Hex-bar deadlift \u2014 low handles",
    "cardId": "single_leg_db_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Loaded hip hinging with torso control.",
    "changes": "One standing leg and an opposite-hand dumbbell add balance and pelvic-control demands to a standing-start hinge.",
    "load": "Loses the bilateral floor pickup and repeated reset; balance may limit execution before the available load does.",
    "check": "Loses the bilateral floor pickup and repeated reset; balance may limit execution before the available load does.",
    "why": "Loaded hip hinging with torso control.",
    "detail": "One standing leg and an opposite-hand dumbbell add balance and pelvic-control demands to a standing-start hinge.",
    "basis": "Michael-approved A2 review D1-z; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "D2-a",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "two_db_front_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "close",
    "keeps": "Bilateral hip-and-knee extension from rest with the load held in front of the legs.",
    "changes": "Independent weights remove the bar connecting the hands, adding separate steering and changing knee clearance. Their smaller diameter may demand more reach unless the start is adjusted; available loading may be limited.",
    "load": "Close match requires the declared weight position and a comparable hand pickup height; independent weights still need individual control.",
    "check": "Close match requires the declared weight position and a comparable hand pickup height; independent weights still need individual control.",
    "why": "Bilateral hip-and-knee extension from rest with the load held in front of the legs.",
    "detail": "Independent weights remove the bar connecting the hands, adding separate steering and changing knee clearance. Their smaller diameter may demand more reach unless the start is adjusted; available loading may be limited.",
    "basis": "Michael-approved A2 review D2-a; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "D2-b",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "hex_bar_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "Bilateral hip-and-knee extension from rest with a shared hand-held implement.",
    "changes": "Side handles remove the front bar that the shins/knees must clear, allowing different knee/torso positions. High handles would additionally shorten the reach and must be disclosed rather than silently treated as this setup.",
    "load": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "check": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "why": "Bilateral hip-and-knee extension from rest with a shared hand-held implement.",
    "detail": "Side handles remove the front bar that the shins/knees must clear, allowing different knee/torso positions. High handles would additionally shorten the reach and must be disclosed rather than silently treated as this setup.",
    "basis": "Michael-approved A2 review D2-b; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "D2-c",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "two_db_side_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "Bilateral pickup from rest through hips and knees.",
    "changes": "Moves the loads from in front to the sides and makes each hand control its own weight. Front-bar clearance is no longer trained; small DBs may also change depth and available loading.",
    "load": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "check": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "why": "Bilateral pickup from rest through hips and knees.",
    "detail": "Moves the loads from in front to the sides and makes each hand control its own weight. Front-bar clearance is no longer trained; small DBs may also change depth and available loading.",
    "basis": "Michael-approved A2 review D2-c; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "D2-d",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "sumo_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "Front-bar lift from rest, bilateral hip-and-knee extension and shared-bar control.",
    "changes": "Reorganizes the legs around the hands, changing hip position, knee tracking and usually the distance traveled. It retains a deadlift, but not the conventional stance task; do not promise the same muscular emphasis or load.",
    "load": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "check": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "why": "Front-bar lift from rest, bilateral hip-and-knee extension and shared-bar control.",
    "detail": "Reorganizes the legs around the hands, changing hip position, knee tracking and usually the distance traveled. It retains a deadlift, but not the conventional stance task; do not promise the same muscular emphasis or load.",
    "basis": "Michael-approved A2 review D2-d; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "D2-e",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "two_hand_kb_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "Bilateral pickup and hip extension, with knee movement to reach the weight.",
    "changes": "One compact central weight removes the long bar passing in front of the legs. Hand spacing and leg clearance change; a single bell may provide insufficient loading for the intended task.",
    "load": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "check": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "why": "Bilateral pickup and hip extension, with knee movement to reach the weight.",
    "detail": "One compact central weight removes the long bar passing in front of the legs. Hand spacing and leg clearance change; a single bell may provide insufficient loading for the intended task.",
    "basis": "Michael-approved A2 review D2-e; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 1,
    "reviewLabel": "D2-f",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "two_hand_landmine_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A two-foot loaded pickup with hip-and-knee extension.",
    "changes": "The anchored bar end arcs toward its pivot instead of traveling freely close to the shins. The lifter must accommodate the arc; landmine plate weight does not transfer to a free-bar load.",
    "load": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "check": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "why": "A two-foot loaded pickup with hip-and-knee extension.",
    "detail": "The anchored bar end arcs toward its pivot instead of traveling freely close to the shins. The lifter must accommodate the arc; landmine plate weight does not transfer to a free-bar load.",
    "basis": "Michael-approved A2 review D2-f; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "D2-g",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "barbell_block_pull",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "Conventional stance, front-bar handling and a complete reset before each pickup.",
    "changes": "The elevated start removes the lowest part of the floor lift, reducing the reach and the work done through that segment. It is an intentional shortened-range alternative, not full-range floor practice; at/above-knee rack lockouts are excluded.",
    "load": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "check": "Use the declared equipment, pickup height and execution; choose loading separately.",
    "why": "Conventional stance, front-bar handling and a complete reset before each pickup.",
    "detail": "The elevated start removes the lowest part of the floor lift, reducing the reach and the work done through that segment. It is an intentional shortened-range alternative, not full-range floor practice; at/above-knee rack lockouts are excluded.",
    "basis": "Michael-approved A2 review D2-g; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "D2-k",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "barbell_rack_pull",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A settled two-foot hip-and-knee pickup.",
    "changes": "A below-knee rack start removes the lowest pickup segment; pins or straps support the shaft rather than the plates. Conventional stance and front-bar handling remain.",
    "load": "Use equal rated supports with controlled shaft contact; no bouncing or above-knee lockouts.",
    "check": "Use equal rated supports with controlled shaft contact; no bouncing or above-knee lockouts.",
    "why": "A settled two-foot hip-and-knee pickup.",
    "detail": "A below-knee rack start removes the lowest pickup segment; pins or straps support the shaft rather than the plates. Conventional stance and front-bar handling remain.",
    "basis": "Michael-approved A2 review D2-k; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "D2-l",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "hex_bar_block_pull",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "Two-foot hip-and-knee extension from settled supports.",
    "changes": "Equal blocks under the plates shorten the bottom reach. Side handles replace the front bar, changing clearance around the legs.",
    "load": "Feet remain on the floor; use low handles with frame clearance. This differs from high handles without blocks.",
    "check": "Feet remain on the floor; use low handles with frame clearance. This differs from high handles without blocks.",
    "why": "Two-foot hip-and-knee extension from settled supports.",
    "detail": "Equal blocks under the plates shorten the bottom reach. Side handles replace the front bar, changing clearance around the legs.",
    "basis": "Michael-approved A2 review D2-l; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "D2-m",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "deficit_hex_bar_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A settled bilateral hip-and-knee pickup.",
    "changes": "A platform beneath the feet increases bottom reach and travel. The load is also held beside the legs instead of in front.",
    "load": "The whole stance must be supported with frame and plate clearance; no fixed deficit height is prescribed.",
    "check": "The whole stance must be supported with frame and plate clearance; no fixed deficit height is prescribed.",
    "why": "A settled bilateral hip-and-knee pickup.",
    "detail": "A platform beneath the feet increases bottom reach and travel. The load is also held beside the legs instead of in front.",
    "basis": "Michael-approved A2 review D2-m; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 2,
    "reviewLabel": "D2-n",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "deficit_barbell_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A settled bilateral hip-and-knee pickup.",
    "changes": "Feet elevation adds bottom reach and travel. Conventional stance and front-bar handling remain.",
    "load": "Use a stable whole-stance platform and clear bar/plate travel; preserve a controlled bottom position.",
    "check": "Use a stable whole-stance platform and clear bar/plate travel; preserve a controlled bottom position.",
    "why": "A settled bilateral hip-and-knee pickup.",
    "detail": "Feet elevation adds bottom reach and travel. Conventional stance and front-bar handling remain.",
    "basis": "Michael-approved A2 review D2-n; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "D2-o",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "vertical_smith_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A two-foot hip-and-knee pickup with a shared bar.",
    "changes": "Vertical rails remove fore/aft steering, so stance must fit the fixed path. Free-bar positioning is lost; counterbalance and friction may differ.",
    "load": "Confirm compatible bottom stops at comparable pickup height and controlled unhooking/rehooking; a generic Smith is insufficient.",
    "check": "Confirm compatible bottom stops at comparable pickup height and controlled unhooking/rehooking; a generic Smith is insufficient.",
    "why": "A two-foot hip-and-knee pickup with a shared bar.",
    "detail": "Vertical rails remove fore/aft steering, so stance must fit the fixed path. Free-bar positioning is lost; counterbalance and friction may differ.",
    "basis": "Michael-approved A2 review D2-o; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "D2-p",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "dual_axis_smith_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A two-foot hip-and-knee pickup with a shared bar.",
    "changes": "The carriage permits fore/aft adjustment but still constrains the bar; it does not reproduce all free-bar control. Carriage mechanics replace free-bar handling; loading transfers are not assumed.",
    "load": "Both axes and compatible bottom support must be available. An angled fixed track is not dual-axis.",
    "check": "Both axes and compatible bottom support must be available. An angled fixed track is not dual-axis.",
    "why": "A two-foot hip-and-knee pickup with a shared bar.",
    "detail": "The carriage permits fore/aft adjustment but still constrains the bar; it does not reproduce all free-bar control. Carriage mechanics replace free-bar handling; loading transfers are not assumed.",
    "basis": "Michael-approved A2 review D2-p; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "D2-q",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "side_handle_lever_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "Standing two-leg hip-and-knee lifting with torso control.",
    "changes": "Pivoted handles follow an arc and lever geometry changes the resistance through the lift. Side handles replace front-bar clearance and handling.",
    "load": "Check the actual handle, horn and bottom-stop configuration; brand alone does not identify it.",
    "check": "Check the actual handle, horn and bottom-stop configuration; brand alone does not identify it.",
    "why": "Standing two-leg hip-and-knee lifting with torso control.",
    "detail": "Pivoted handles follow an arc and lever geometry changes the resistance through the lift. Side handles replace front-bar clearance and handling.",
    "basis": "Michael-approved A2 review D2-q; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "D2-r",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "jefferson_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A hand-held pickup using hips and knees.",
    "changes": "Straddling the bar changes leg contribution and control of torso orientation. The symmetrical conventional stance and hands-outside-legs arrangement are lost.",
    "load": "Use its own stance/grip instructions and leg clearance; no deliberate twisting or Jefferson curl.",
    "check": "Use its own stance/grip instructions and leg clearance; no deliberate twisting or Jefferson curl.",
    "why": "A hand-held pickup using hips and knees.",
    "detail": "Straddling the bar changes leg contribution and control of torso orientation. The symmetrical conventional stance and hands-outside-legs arrangement are lost.",
    "basis": "Michael-approved A2 review D2-r; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "D2-s",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "unequal_db_side_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "A two-foot hip-and-knee lift from rest.",
    "changes": "Unequal side loading adds a tendency to lean or turn, while each hand handles a separate weight. The weights also move beside the legs rather than in front.",
    "load": "Match intended pickup heights despite different DB sizes; this does not mean uneven barbell loading.",
    "check": "Match intended pickup heights despite different DB sizes; this does not mean uneven barbell loading.",
    "why": "A two-foot hip-and-knee lift from rest.",
    "detail": "Unequal side loading adds a tendency to lean or turn, while each hand handles a separate weight. The weights also move beside the legs rather than in front.",
    "basis": "Michael-approved A2 review D2-s; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 3,
    "reviewLabel": "D2-t",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "kickstand_db_deadlift",
    "source": "hinges_and_hip_extension",
    "similarity": "some",
    "keeps": "Loaded hip-and-knee pickup with both feet contacting the floor.",
    "changes": "Rear-foot assistance biases contribution toward the forward leg, changing stance and balance. Side-held weights also replace the front bar.",
    "load": "No fixed percentage split. This bottom-start lift differs from a kickstand RDL and a free single-leg balance.",
    "check": "No fixed percentage split. This bottom-start lift differs from a kickstand RDL and a free single-leg balance.",
    "why": "Loaded hip-and-knee pickup with both feet contacting the floor.",
    "detail": "Rear-foot assistance biases contribution toward the forward leg, changing stance and balance. Side-held weights also replace the front bar.",
    "basis": "Michael-approved A2 review D2-t; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 4,
    "reviewLabel": "D2-h",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "barbell_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Bilateral hip extension, front-bar grip and standing torso control.",
    "changes": "Starts at the top and hinges with a smaller knee excursion; it removes floor breakaway and the repeated setup at the bottom. Reaching the floor is not its target.",
    "load": "This standing-start hinge does not preserve the repeated floor pickup or bottom-start leg drive. Do not convert loads or repetitions.",
    "check": "This standing-start hinge does not preserve the repeated floor pickup or bottom-start leg drive. Do not convert loads or repetitions.",
    "why": "Bilateral hip extension, front-bar grip and standing torso control.",
    "detail": "Starts at the top and hinges with a smaller knee excursion; it removes floor breakaway and the repeated setup at the bottom. Reaching the floor is not its target.",
    "basis": "Michael-approved A2 review D2-h; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 4,
    "reviewLabel": "D2-i",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "dumbbell_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Bilateral loaded hip hinging and trunk control.",
    "changes": "Both the repeated floor pickup and shared-bar handling are lost; each weight is controlled independently. Retains part of the task, not conventional deadlift practice.",
    "load": "This standing-start hinge does not preserve the repeated floor pickup or bottom-start leg drive. Do not convert loads or repetitions.",
    "check": "This standing-start hinge does not preserve the repeated floor pickup or bottom-start leg drive. Do not convert loads or repetitions.",
    "why": "Bilateral loaded hip hinging and trunk control.",
    "detail": "Both the repeated floor pickup and shared-bar handling are lost; each weight is controlled independently. Retains part of the task, not conventional deadlift practice.",
    "basis": "Michael-approved A2 review D2-i; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 4,
    "reviewLabel": "D2-j",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "band_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "A resisted two-foot hinge with hands holding the resistance.",
    "changes": "Changes both the task and loading: standing-start hinge, no rigid front bar, and tension that varies with stretch rather than a mass breaking from the floor. Available band range/tension can limit usefulness.",
    "load": "This standing-start hinge does not preserve the repeated floor pickup or bottom-start leg drive. Do not convert loads or repetitions.",
    "check": "This standing-start hinge does not preserve the repeated floor pickup or bottom-start leg drive. Do not convert loads or repetitions.",
    "why": "A resisted two-foot hinge with hands holding the resistance.",
    "detail": "Changes both the task and loading: standing-start hinge, no rigid front bar, and tension that varies with stretch rather than a mass breaking from the floor. Available band range/tension can limit usefulness.",
    "basis": "Michael-approved A2 review D2-j; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 4,
    "reviewLabel": "D2-u",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "hip_extension_45",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Resisted hip hinging with a controlled torso.",
    "changes": "Secured legs remove standing balance; a chest-held plate loads the moving torso instead of hanging from the hands.",
    "load": "Loses the knee-driven floor pickup and hanging-weight grip. Keep movement at the hips with plate clearance.",
    "check": "Loses the knee-driven floor pickup and hanging-weight grip. Keep movement at the hips with plate clearance.",
    "why": "Resisted hip hinging with a controlled torso.",
    "detail": "Secured legs remove standing balance; a chest-held plate loads the moving torso instead of hanging from the hands.",
    "basis": "Michael-approved A2 review D2-u; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 4,
    "reviewLabel": "D2-v",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "horizontal_hip_extension",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Supported, resisted hip extension.",
    "changes": "The legs are secured while the torso and chest-held plate move; horizontal orientation changes gravity\u2019s turning demand through the range.",
    "load": "Loses floor pickup, knee drive and standing balance. This is hip extension, not a glute-ham raise.",
    "check": "Loses floor pickup, knee drive and standing balance. This is hip extension, not a glute-ham raise.",
    "why": "Supported, resisted hip extension.",
    "detail": "The legs are secured while the torso and chest-held plate move; horizontal orientation changes gravity\u2019s turning demand through the range.",
    "basis": "Michael-approved A2 review D2-v; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 4,
    "reviewLabel": "D2-w",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "tippy_bird",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Practice moving at the hip while controlling the torso.",
    "changes": "Unloaded single-leg balance replaces the externally loaded two-leg pickup.",
    "load": "This is hinge practice, not equivalent strength work or a readiness test.",
    "check": "This is hinge practice, not equivalent strength work or a readiness test.",
    "why": "Practice moving at the hip while controlling the torso.",
    "detail": "Unloaded single-leg balance replaces the externally loaded two-leg pickup.",
    "basis": "Michael-approved A2 review D2-w; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 4,
    "reviewLabel": "D2-x",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "supported_single_leg_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Loaded hip hinging with deliberate torso and pelvis control.",
    "changes": "A fixed handhold reduces the balance demand while one standing leg performs the hinge.",
    "load": "Loses the bilateral floor reset and bottom-start knee drive. Hand assistance varies; use a reachable fixed support throughout.",
    "check": "Loses the bilateral floor reset and bottom-start knee drive. Hand assistance varies; use a reachable fixed support throughout.",
    "why": "Loaded hip hinging with deliberate torso and pelvis control.",
    "detail": "A fixed handhold reduces the balance demand while one standing leg performs the hinge.",
    "basis": "Michael-approved A2 review D2-x; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  },
  {
    "group": 4,
    "reviewLabel": "D2-y",
    "originalId": "conventional_deadlift",
    "originalName": "Conventional barbell deadlift",
    "cardId": "single_leg_db_rdl",
    "source": "hinges_and_hip_extension",
    "similarity": "broader",
    "keeps": "Loaded hip hinging with torso control.",
    "changes": "One standing leg and an opposite-hand dumbbell add balance and pelvic-control demands to a standing-start hinge.",
    "load": "Loses the bilateral floor pickup and repeated reset; balance may limit execution before the available load does.",
    "check": "Loses the bilateral floor pickup and repeated reset; balance may limit execution before the available load does.",
    "why": "Loaded hip hinging with torso control.",
    "detail": "One standing leg and an opposite-hand dumbbell add balance and pelvic-control demands to a standing-start hinge.",
    "basis": "Michael-approved A2 review D2-y; October 13, 2026",
    "review": {
      "batch": "a2-approved-2026-10-13",
      "basis": "Michael approved A2 and both Blue single-leg RDL comparisons for each original. Broader machine/unilateral passes, A1 machine supplement and A3\u2013A4 are deferred."
    }
  }
];

// ../gym-swap-site/dist/prototype/a1-content.mjs?v=2.8.0
var review = {
  batch: "a1-rows-group1-2026-10-13",
  basis: "Michael approved the complete A1 review, full-range pin resets, standing Kroc rows with limited body movement, and opposite-bell support for gorilla rows. Comparisons are reviewed coaching synthesis, not source-author substitution prescriptions."
};
var refs = {
  barbell: { label: "ACE: Bent-over row", url: "https://www.acefitness.org/resources/everyone/exercise-library/12/bent-over-row/", scope: "Held-hinge barbell rowing mechanics. The neutral two-dumbbell setup is an explicitly reviewed implement variation." },
  single: { label: "ACE: Single-arm row", url: "https://www.acefitness.org/resources/everyone/exercise-library/126/single-arm-row/", scope: "Hand-and-knee bench support and controlled one-arm dumbbell rowing." },
  landmine: { label: "Lincoln and colleagues: The Landmine Row (NSCA)", url: "https://www.researchgate.net/profile/Anthony-Weldon/publication/365629162_Exercise_Technique_The_Landmine_Row/links/66163ef139e7641c0ba88732/Exercise-Technique-The-Landmine-Row.pdf", scope: "Meadows row: perpendicular stance, sleeve grip, thigh bracing and outward elbow path. No loading prescription or clinical claim is adopted." },
  pin: { label: "John Gaglione: Dead-stop rack row", url: "https://t-nation.com/t/10-unconventional-upper-body-exercises/285856", scope: "Rack-supported reset mechanism; the source uses a supinated grip. Our overhand grip, individually chosen trunk angle and pins at full intended bottom reach are Michael-approved adaptations." },
  kroc: { label: "Kroc Rows \u2014 101: original technique explanation", url: "https://t-nation.com/t/kroc-rows-101/284491", scope: "Standing hand support, lower-rib finish and limited body movement. Heavy/high-repetition, failure and performance prescriptions are not adopted." },
  gorilla: { label: "Daniel Aipa: Gorilla row", url: "https://archive.t-nation.com/training/tip-do-the-gorilla-row/", scope: "Alternating floor-reset kettlebell row toward the hip; exact grounded-support version confirmed by Michael." },
  gorillaSupport: { label: "OPEX: Kettlebell gorilla row", url: "https://www.youtube.com/watch?v=DhxkHHRez7w", scope: "The published written description specifies pressing the opposite kettlebell into the floor. Video execution was not independently assessed; our hip/lower-rib finish follows the Aipa setup." },
  renegade: { label: "NASM: Renegade row and trunk control", url: "https://www.nasm.org/resource-center/blog/training/best-abs-exercises", scope: "Rowing from a plank creates a demand to resist rotation. Stable nonrolling dumbbells, spread feet and no added push-up define this reviewed version." }
};
var a1Equipment = {
  row_dumbbell_pair: "Dumbbell pair suitable for two-arm bent-over rowing",
  row_flat_bench: "Stable flat bench for hand-and-knee support",
  row_hand_support: "Immovable support for the nonworking hand, with dumbbell clearance",
  row_safeties: "Rack safeties that can support the bar at the intended full bottom reach",
  landmine_sleeve_space: "Usable sleeve grip and clear plate travel for a perpendicular Meadows row",
  gorilla_kettlebells: "Two kettlebells with stable bases and a reachable floor start",
  gorilla_floor: "Firm floor and space for a wide stance and alternating kettlebell rows",
  renegade_dumbbells: "Two stable, nonrolling dumbbells suitable for hand support and rowing",
  plank_row_space: "Firm nonslip floor and room for a spread-foot plank and dumbbell travel"
};
var a1Content = [
  {
    id: "two_db_bent_over_row",
    name: "Two-dumbbell bent-over row",
    focus: "Row with both arms while holding an unsupported hip hinge.",
    expect: "Each hand controls its own weight; both arms pull together.",
    needs: "Suitable dumbbell pair \xB7 clear standing and pickup space",
    requires: ["row_dumbbell_pair", "standing_space"],
    aliases: ["two db bent over row", "double dumbbell bent over row", "bilateral dumbbell bent over row"],
    cue: "Hold the hinge steady; row both weights together.",
    setup: "Stand on both feet with a dumbbell in each hand, palms facing each other. Soften the knees and move the hips back into a hinge you can hold. Let the arms hang with room for the weights to move. No bench or free-hand support is used.",
    cues: ["Keep the feet planted and the torso steady as both elbows travel back toward the lower ribs.", "Lift without standing up or swinging the weights; let each hand follow a comfortable path.", "Lower both weights under control until the arms extend. Keep holding the hinge between repetitions, then set the weights down with control."],
    context: "The independent weights change handling compared with a shared bar. Holding the torso in position is part of this exercise; chest support and alternating arms are different setups. Choose weights for this movement without converting from a machine or another row.",
    armPath: "Both elbows move back beside the torso; hands finish near the lower ribs.",
    resistanceDirection: "Gravity acts downward on two independently held dumbbells.",
    references: [refs.barbell, refs.single]
  },
  {
    id: "barbell_bent_over_row",
    name: "Barbell bent-over row \u2014 overhand",
    focus: "Two-arm rowing while holding an unsupported hip hinge.",
    expect: "The hands share one bar; the load stays suspended between repetitions.",
    needs: "Barbell and suitable loading arrangement \xB7 clear pickup and standing space",
    requires: ["barbell_load", "standing_space"],
    aliases: ["barbell bent over row", "bb bent over row", "overhand barbell row"],
    cue: "Keep the hinge; bring the bar toward your lower torso.",
    setup: "Use a barbell with suitable plates and collars, with space to pick it up and set it down. Take an overhand grip that lets the bar clear the legs. Plant both feet, soften the knees and hinge back, holding the torso steady with the arms hanging.",
    cues: ["Draw the elbows back to row the bar toward the lower torso without standing up or driving through the legs.", "Keep the grip secure and the trunk position steady as the bar travels.", "Lower under control until the arms extend. Keep the bar suspended between repetitions; finish by setting it down under control."],
    context: "This is an overhand continuous row. Floor-reset Pendlay rows and rack pin-reset rows have a different start between repetitions. A shared bar links the hands; weights from another exercise do not establish the load for this one.",
    armPath: "Both elbows travel back; the bar finishes near the lower torso.",
    resistanceDirection: "Gravity acts downward on one bar held by both hands.",
    references: [refs.barbell]
  },
  {
    id: "bench_single_arm_db_row",
    name: "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    focus: "One-arm rowing with the opposite hand and knee supported.",
    expect: "The bench provides support while one arm controls the dumbbell.",
    needs: "One suitable dumbbell \xB7 stable flat bench \xB7 movement space",
    requires: ["single_dumbbell", "row_flat_bench", "standing_space"],
    aliases: ["hand and knee supported dumbbell row", "bench supported single arm db row", "single arm dumbbell bench row"],
    cue: "Keep the support steady; row without turning the torso.",
    setup: "Place the nonworking hand and same-side knee on a stable flat bench. Plant the opposite foot on the floor and hold the dumbbell in that hand beside the bench. Position the torso over the support with room for the weight to hang and move.",
    cues: ["Keep the supporting hand, knee and foot steady while the working elbow travels back toward the lower ribs.", "Avoid deliberately turning the torso to lift the weight.", "Lower the dumbbell under control until the arm extends. Set it down before changing the support arrangement to work the other side."],
    context: "This exact version uses hand-and-knee bench support. A standing hand-supported row, a chest-supported row and a Kroc row have different support or movement demands. A unilateral row does not supply an automatic per-side conversion from a two-arm prescription.",
    armPath: "One elbow travels beside the torso; the dumbbell finishes near the lower ribs.",
    resistanceDirection: "Gravity acts downward on one dumbbell; the other hand and knee provide bench support.",
    references: [refs.single]
  },
  {
    id: "meadows_row",
    name: "Meadows row \u2014 thigh-braced",
    focus: "One-arm landmine rowing with an outward elbow path.",
    expect: "A thigh brace supports the torso while the hand follows the anchored bar\u2019s arc.",
    needs: "Secured landmine and loaded bar \xB7 usable sleeve grip \xB7 plate and standing clearance",
    requires: ["landmine_setup", "barbell_load", "landmine_sleeve_space", "standing_space"],
    aliases: ["meadows row", "thigh braced meadows row"],
    cue: "Brace on the forward thigh; row the sleeve with the elbow outward.",
    setup: "Secure the bar in a landmine attachment and load it with suitable plates and a collar, leaving a usable sleeve grip. Stand perpendicular to the bar in a staggered stance. Hinge over, brace the nonworking forearm on the forward thigh and take an overhand sleeve grip with the working hand. Check plate and body clearance before rowing.",
    cues: ["Keep the thigh brace and feet steady as the working elbow travels up and outward; bring the sleeve toward the side of the ribcage.", "Follow the bar\u2019s anchored arc without wrenching the torso around to finish the pull.", "Lower smoothly to an extended-arm reach while retaining the brace. Rest the load before changing sides."],
    context: "This is the perpendicular Meadows setup, distinct from a single-arm landmine row performed alongside the bar. The outward elbow path changes the emphasis of the row; it remains a bent-elbow rowing task. Sleeve thickness and plate clearance can limit grip and travel.",
    armPath: "The working elbow travels outward from the torso; the sleeve approaches the side of the ribcage.",
    resistanceDirection: "Gravity loads the free end of a pivoted bar; the hand follows a constrained arc rather than a straight cable line.",
    references: [refs.landmine]
  },
  {
    id: "pin_reset_barbell_row",
    name: "Pin-reset barbell row \u2014 full intended range",
    focus: "Two-arm hinged rowing with a complete rack-supported reset.",
    expect: "Adjust the start to your rowing position while keeping the full intended arm travel.",
    needs: "Barbell and suitable loading \xB7 adjustable rack safeties \xB7 clear bar and standing space",
    requires: ["barbell_load", "row_safeties", "standing_space"],
    aliases: ["pin reset row", "pin reset barbell row", "dead stop rack row", "rack reset row"],
    cue: "Set the pins at your full bottom reach; settle, brace, then row.",
    setup: "Choose an unsupported hinged trunk angle you can hold. With the arms extended and an overhand grip, set both rack safeties to meet the bar at the bottom of that intended row. Check the setting with an unloaded bar before adding suitable plates and collars. Leave room to row toward the lower torso without striking the rack.",
    cues: ["Plant the feet and establish the chosen hinge with the bar resting fully on the safeties.", "Brace and row the bar toward the lower torso, keeping the trunk angle steady without leg drive.", "Lower until the bar settles fully on both safeties. Re-establish the brace before each pull; do not bounce the bar off the pins."],
    context: "The adjustable start can accommodate a less horizontal trunk when a floor-reset Pendlay position is difficult to execute. Set the pins to the full bottom reach of the chosen row; raising them within an unchanged position would shorten the movement. A deliberately shortened partial is a separate variation. The pins support the bar between pulls, not your torso.",
    armPath: "Both arms begin extended and row toward the lower torso through the intended range.",
    resistanceDirection: "Gravity acts downward on the bar; rack safeties take its load at each complete reset.",
    references: [refs.barbell, refs.pin]
  },
  {
    id: "gorilla_row",
    name: "Gorilla row \u2014 opposite bell grounded",
    focus: "Alternating kettlebell rowing with support from the opposite hand.",
    expect: "One bell rows while the other stays planted for bracing; each repetition returns to the floor.",
    needs: "Two stable-base kettlebells \xB7 firm floor \xB7 wide-stance and rowing clearance",
    requires: ["gorilla_kettlebells", "gorilla_floor"],
    aliases: ["gorilla row", "alternating gorilla row", "kettlebell gorilla row"],
    cue: "Press one bell into the floor while rowing the other.",
    setup: "Place two stable-base kettlebells between your feet on a firm floor. Take a wide stance and hinge with softened knees to reach both handles. The bell height must allow this starting reach while you can hold the intended position. Grasp both handles and keep space for each bell to travel.",
    cues: ["Press the nonworking bell into the floor to brace through that arm; keep its base planted.", "Row the other bell toward the hip or lower ribs while maintaining the hinge, without a large torso turn to throw it upward.", "Return that bell fully to the floor before switching sides. Keep the opposite bell grounded throughout each pull."],
    context: "The floor-supported opposite hand is part of this version. If both bells remain lifted, the support and reset have changed. Bell height sets the floor reach, and a bell that tips or slides cannot provide the specified brace. Alternating sides does not determine how another exercise\u2019s repetitions should be counted.",
    armPath: "One elbow travels back toward the hip; the bell finishes near the hip or lower ribs.",
    resistanceDirection: "Gravity loads the working bell; the other bell and floor carry the bracing-hand force.",
    references: [refs.gorilla, refs.gorillaSupport]
  },
  {
    id: "renegade_row",
    name: "Renegade row \u2014 alternating plank rows",
    focus: "Row one dumbbell while holding a supported plank and resisting rotation.",
    expect: "The supporting arm and trunk work while the other arm rows.",
    needs: "Two stable nonrolling dumbbells \xB7 firm nonslip floor \xB7 plank and rowing space",
    requires: ["renegade_dumbbells", "plank_row_space"],
    aliases: ["renegade row", "push up position row", "plank dumbbell row"],
    cue: "Keep the plank steady as one elbow draws back.",
    setup: "Place two stable, nonrolling dumbbells on a firm nonslip floor. Grip the handles and extend into a plank with the hands beneath the shoulders and the feet spread for support. Check that the dumbbells remain planted when you transfer weight to one hand.",
    cues: ["Shift enough support to one hand to row the other dumbbell toward the ribs, drawing that elbow back.", "Keep the pelvis and chest facing the floor; avoid a large twist or sag to lift the dumbbell.", "Lower the weight under control until it is firmly supported again before changing arms. This version has no push-up between rows."],
    context: "The plank, supporting arm and resistance to rotation may limit the exercise before the rowing arm does. Stable dumbbells and a controllable load are essential to this setup. It does not preserve the loading or support demands of a standing or bench-supported row; round rolling dumbbells do not qualify.",
    armPath: "One elbow draws back beside the torso toward the ribs while the opposite arm supports the plank.",
    resistanceDirection: "Gravity loads the rowing dumbbell and the supported body; lifting one hand creates an asymmetric support demand.",
    references: [refs.renegade]
  },
  {
    id: "kroc_row",
    name: "Kroc row \u2014 standing hand support, limited body movement",
    focus: "One-arm dumbbell rowing from a standing, hand-supported stance.",
    expect: "Limited body movement accompanies the row; the return stays controlled.",
    needs: "One suitable dumbbell \xB7 immovable hand support \xB7 clear standing and dumbbell space",
    requires: ["single_dumbbell", "row_hand_support", "standing_space"],
    aliases: ["kroc row", "standing kroc row"],
    cue: "Row toward the lower ribs; keep body movement limited.",
    setup: "Plant both feet in a stable staggered stance. Hinge and brace the nonworking hand on an immovable support, leaving clearance for the dumbbell in the working hand. Keep the shoulders above the hips and begin with the working arm extended.",
    cues: ["Draw the elbow back and row the dumbbell toward the lower ribs. A small amount of body movement is permitted while maintaining the hand support.", "Keep the action a row: do not turn it into a large leg-and-hip drive or throw the weight upward.", "Lower the dumbbell under control to an extended-arm reach. Set it down before changing sides."],
    context: "Limited body movement distinguishes this version from a deliberately still-torso row. Clean-like heaving is a separate advanced technique with greater execution demands and is outside these instructions. Use a load that lets you retain the stated support and controlled return; the Kroc name does not prescribe heavy weights, high repetitions or training to failure.",
    armPath: "One elbow travels back; the dumbbell approaches the lower ribcage.",
    resistanceDirection: "Gravity acts downward on one dumbbell, with the opposite hand braced on an immovable support.",
    references: [refs.kroc]
  }
].map((record3) => ({ ...record3, family: "row", review, sourceChecked: "2026-10-13" }));
var a1Comparisons = [
  {
    "reviewLabel": "R1-m",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "meadows_row",
    "source": "rows",
    "similarity": "some",
    "keeps": "Bent-elbow rowing from a hinged torso.",
    "changes": "One arm follows a braced, outward path instead of both arms rowing together.",
    "load": "Distinct from the alongside-the-bar landmine row. Sleeve grip and plate travel must suit the setup.",
    "check": "Distinct from the alongside-the-bar landmine row. Sleeve grip and plate travel must suit the setup.",
    "why": "Bent-elbow rowing from a hinged torso.",
    "detail": "One arm follows an anchored arc with the elbow farther outward, replacing simultaneous independent DB rows; thigh bracing changes torso support and the arm path changes muscular emphasis.",
    "basis": "PROJECT_B_MUSCLE_ENDURANCE_BATCH_A_REVIEW.md R1-m; full A1 approval, October 13, 2026"
  },
  {
    "reviewLabel": "R1-n",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "pin_reset_barbell_row",
    "source": "rows",
    "similarity": "some",
    "keeps": "Bilateral hinged rowing.",
    "changes": "A shared bar and adjustable rack reset replace independent, continuously held weights.",
    "load": "Set the pins at full bottom reach for your chosen hinge. Pins support the bar between pulls, not your torso.",
    "check": "Set the pins at full bottom reach for your chosen hinge. Pins support the bar between pulls, not your torso.",
    "why": "Bilateral hinged rowing.",
    "detail": "A linked bar replaces independent DBs; the adjustable supported start interrupts continuous loading and creates a fresh start for each pull.",
    "basis": "PROJECT_B_MUSCLE_ENDURANCE_BATCH_A_REVIEW.md R1-n; full A1 approval, October 13, 2026"
  },
  {
    "reviewLabel": "R1-o",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "gorilla_row",
    "source": "rows",
    "similarity": "some",
    "keeps": "Rowing while holding a hinge, with separate weights.",
    "changes": "Arms alternate, with the opposite hand braced on a grounded bell.",
    "load": "Bell height must permit the starting reach and the grounded bell must stay stable. No automatic bilateral/per-side rep conversion.",
    "check": "Bell height must permit the starting reach and the grounded bell must stay stable. No automatic bilateral/per-side rep conversion.",
    "why": "Rowing while holding a hinge, with separate weights.",
    "detail": "One arm rows at a time, the opposite hand supplies floor-supported bracing, and each bell returns to the floor; this replaces simultaneous unsupported arm work.",
    "basis": "PROJECT_B_MUSCLE_ENDURANCE_BATCH_A_REVIEW.md R1-o; full A1 approval, October 13, 2026"
  },
  {
    "reviewLabel": "R1-p",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "renegade_row",
    "source": "rows",
    "similarity": "broader",
    "keeps": "Free-weight rowing with elbow bending.",
    "changes": "Alternating plank rows add supporting-arm and anti-rotation demands.",
    "load": "Supporting-arm or plank control can limit the task independently of rowing capacity. No push-up repetition or automatic DB-load transfer is included.",
    "check": "Supporting-arm or plank control can limit the task independently of rowing capacity. No push-up repetition or automatic DB-load transfer is included.",
    "why": "Free-weight rowing with elbow bending.",
    "detail": "A plank replaces the hip hinge, with alternating rowing plus a weight-bearing supporting arm and resistance to trunk rotation.",
    "basis": "PROJECT_B_MUSCLE_ENDURANCE_BATCH_A_REVIEW.md R1-p; full A1 approval, October 13, 2026"
  },
  {
    "reviewLabel": "R2-m",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "meadows_row",
    "source": "rows",
    "similarity": "some",
    "keeps": "Bent-elbow rowing with a hinged torso.",
    "changes": "One arm follows a braced, outward landmine arc instead of a two-hand free bar.",
    "load": "Distinct from the alongside-the-bar landmine row. Sleeve grip and plate travel must suit the setup.",
    "check": "Distinct from the alongside-the-bar landmine row. Sleeve grip and plate travel must suit the setup.",
    "why": "Bent-elbow rowing with a hinged torso.",
    "detail": "Thigh-braced unilateral work on an anchored arc replaces bilateral free-bar work; a more outward upper-arm path changes emphasis while retaining the recognizable row.",
    "basis": "PROJECT_B_MUSCLE_ENDURANCE_BATCH_A_REVIEW.md R2-m; full A1 approval, October 13, 2026"
  },
  {
    "reviewLabel": "R2-n",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "pin_reset_barbell_row",
    "source": "rows",
    "similarity": "some",
    "keeps": "Shared-bar bilateral rowing.",
    "changes": "A full reset on adjustable pins replaces the continuously suspended bar.",
    "load": "Set the pins at full bottom reach for your chosen hinge. Pins support the bar between pulls, not your torso.",
    "check": "Set the pins at full bottom reach for your chosen hinge. Pins support the bar between pulls, not your torso.",
    "why": "Shared-bar bilateral rowing.",
    "detail": "Adjustable pin height defines the bottom position and a dead start replaces continuous suspended loading, changing the start/re-brace task.",
    "basis": "PROJECT_B_MUSCLE_ENDURANCE_BATCH_A_REVIEW.md R2-n; full A1 approval, October 13, 2026"
  },
  {
    "reviewLabel": "R2-o",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "gorilla_row",
    "source": "rows",
    "similarity": "some",
    "keeps": "Rowing from a held hinge.",
    "changes": "Separate bells alternate, with floor support through the opposite hand.",
    "load": "Bell height must permit the starting reach and the grounded bell must stay stable. No automatic bilateral/per-side rep conversion.",
    "check": "Bell height must permit the starting reach and the grounded bell must stay stable. No automatic bilateral/per-side rep conversion.",
    "why": "Rowing from a held hinge.",
    "detail": "Alternating sides replace shared-bar bilateral work; floor resets and the grounded opposite hand change support and loading continuity.",
    "basis": "PROJECT_B_MUSCLE_ENDURANCE_BATCH_A_REVIEW.md R2-o; full A1 approval, October 13, 2026"
  },
  {
    "reviewLabel": "R2-p",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "renegade_row",
    "source": "rows",
    "similarity": "broader",
    "keeps": "Bent-elbow rowing against external load.",
    "changes": "A plank replaces the standing hinge; each arm rows separately.",
    "load": "Supporting-arm or plank control can limit the task independently of rowing capacity. No push-up repetition or automatic DB-load transfer is included.",
    "check": "Supporting-arm or plank control can limit the task independently of rowing capacity. No push-up repetition or automatic DB-load transfer is included.",
    "why": "Bent-elbow rowing against external load.",
    "detail": "The bilateral hinged row becomes alternating rows in a plank; the supporting arm and trunk must manage bodyweight and turning forces.",
    "basis": "PROJECT_B_MUSCLE_ENDURANCE_BATCH_A_REVIEW.md R2-p; full A1 approval, October 13, 2026"
  },
  {
    "reviewLabel": "R4-k",
    "originalId": "bench_single_arm_db_row",
    "originalName": "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    "cardId": "meadows_row",
    "source": "rows",
    "similarity": "some",
    "keeps": "Unilateral bent-elbow rowing with a brace.",
    "changes": "Thigh bracing replaces bench support; the outward elbow path changes emphasis.",
    "load": "Distinct from the alongside-the-bar landmine row. Sleeve grip and plate travel must suit the setup.",
    "check": "Distinct from the alongside-the-bar landmine row. Sleeve grip and plate travel must suit the setup.",
    "why": "Unilateral bent-elbow rowing with a brace.",
    "detail": "Thigh bracing replaces hand/knee bench support; sleeve grip, anchored arc and a more outward upper-arm path change handling and emphasis.",
    "basis": "PROJECT_B_MUSCLE_ENDURANCE_BATCH_A_REVIEW.md R4-k; full A1 approval, October 13, 2026"
  },
  {
    "reviewLabel": "R4-l",
    "originalId": "bench_single_arm_db_row",
    "originalName": "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    "cardId": "kroc_row",
    "source": "rows",
    "similarity": "some",
    "keeps": "Supported unilateral DB rowing.",
    "changes": "Both feet stay grounded and limited body movement replaces the still-torso bench setup.",
    "load": "Keep body movement limited and the return controlled. The name does not prescribe heavier weights or more repetitions.",
    "check": "Keep body movement limited and the return controlled. The name does not prescribe heavier weights or more repetitions.",
    "why": "Supported unilateral DB rowing.",
    "detail": "Grounded feet replace knee support and the named execution permits some body movement rather than requiring a deliberately still torso.",
    "basis": "PROJECT_B_MUSCLE_ENDURANCE_BATCH_A_REVIEW.md R4-l; full A1 approval, October 13, 2026"
  },
  {
    "reviewLabel": "R4-m",
    "originalId": "bench_single_arm_db_row",
    "originalName": "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    "cardId": "gorilla_row",
    "source": "rows",
    "similarity": "some",
    "keeps": "One arm rows while the other supplies support.",
    "changes": "The opposite bell supplies a floor-level brace in place of bench hand-and-knee support.",
    "load": "Bell height must permit the starting reach and the grounded bell must stay stable. No automatic bilateral/per-side rep conversion.",
    "check": "Bell height must permit the starting reach and the grounded bell must stay stable. No automatic bilateral/per-side rep conversion.",
    "why": "One arm rows while the other supplies support.",
    "detail": "Floor-level bell support replaces the bench hand/knee arrangement; both feet hold the hinged base and alternating floor resets change the work sequence.",
    "basis": "PROJECT_B_MUSCLE_ENDURANCE_BATCH_A_REVIEW.md R4-m; full A1 approval, October 13, 2026"
  },
  {
    "reviewLabel": "R4-n",
    "originalId": "bench_single_arm_db_row",
    "originalName": "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    "cardId": "renegade_row",
    "source": "rows",
    "similarity": "broader",
    "keeps": "Unilateral DB rowing with opposite-arm support.",
    "changes": "Plank support replaces the bench; trunk and supporting-arm effort may limit rowing.",
    "load": "Supporting-arm or plank control can limit the task independently of rowing capacity. No push-up repetition or automatic DB-load transfer is included.",
    "check": "Supporting-arm or plank control can limit the task independently of rowing capacity. No push-up repetition or automatic DB-load transfer is included.",
    "why": "Unilateral DB rowing with opposite-arm support.",
    "detail": "A plank replaces bench hand/knee support; bodyweight-bearing through the other arm and resisting trunk rotation become substantial parts of the task.",
    "basis": "PROJECT_B_MUSCLE_ENDURANCE_BATCH_A_REVIEW.md R4-n; full A1 approval, October 13, 2026"
  }
].map((edge) => ({ ...edge, review }));

// ../gym-swap-site/dist/prototype/a1-more-rows.mjs?v=2.8.0
var review2 = { batch: "a1-completion-2026-10-13", basis: "Michael approved the full A1 review and its exact setups; directed comparisons remain separate. Existing instruction material is reused where applicable." };
var ref = (label, url, scope) => ({ label, url, scope });
var ace = ref("ACE: Single-arm row", "https://www.acefitness.org/resources/everyone/exercise-library/126/single-arm-row/", "Supported rowing mechanics; equipment and support variations are reviewed Gym Swap adaptations.");
var cable = ref("ACE: Seated row", "https://www.acefitness.org/resources/everyone/exercise-library/48/seated-row/", "Cable rowing and controlled torso position; no prescription or substitution endorsement adopted.");
var nsca = ref("NSCA: Teaching resistance-training movement patterns", "https://www.nsca.com/contentassets/3d09f06f0b4c4f6fbd8cc382ed1f3d4a/ptq-10.2.1-progressive-strategies-for-teaching-fundamental-resistance-training-movement-patterns.pdf", "Supported, inverted and suspension rowing; comparison tiers are reviewed coaching judgments.");
var landmine = ref("NSCA: The Landmine Row", "https://www.researchgate.net/profile/Anthony-Weldon/publication/365629162_Exercise_Technique_The_Landmine_Row/links/66163ef139e7641c0ba88732/Exercise-Technique-The-Landmine-Row.pdf", "Alongside-bar single-arm and unsupported two-hand landmine technique.");
var machineBase = DATA.exercises.seated_cable_row.options.find((c) => c.id === "other_row_machine");
var tbarBase = DATA.exercises.seated_cable_row.options.find((c) => c.id === "supported_tbar_row");
var a1RowEquipment = {
  row_kettlebell_pair: "Two suitable kettlebells with leg and floor clearance for rowing",
  seated_row_station: "Low-cable row station with seat, foot braces and close neutral handle",
  chest_row_machine: "Row machine with an actual chest pad and usable two-arm handles",
  single_chest_row_machine: "Chest-supported row machine with an independently usable arm",
  supported_tbar_station: "Chest-supported T-bar station with pad, footholds and usable loading/release controls",
  landmine_row_handle: "Compatible two-hand landmine row handle and clear plate travel",
  landmine_side_clearance: "Usable shaft grip behind the sleeve and room alongside the landmine bar",
  pendlay_floor: "Floor and plate height permitting a near-horizontal trunk and extended-arm reset",
  low_row_suspension: "Secure bodyweight-rated suspension setup adjusted for an inclined low row",
  single_row_suspension: "Secure suspension trainer in its manufacturer-specified single-hand configuration",
  low_row_floor: "Nonslip footing and room to hold an inclined body position while rowing",
  inverted_bar_setup: "Bodyweight-rated low bar secured against rolling, lifting or unhooking",
  single_low_cable: "Low pulley, single handle and unobstructed cable travel"
};
var a1MoreRows = [
  {
    id: "two_kb_bent_over_row",
    name: "Two-kettlebell bent-over row",
    aliases: ["two kb bent over row", "double kettlebell bent over row"],
    focus: "Two-arm rowing while holding an unsupported hinge.",
    expect: "Two separate bells hang below their handles and move together.",
    needs: "Two kettlebells \xB7 clear standing space",
    requires: ["row_kettlebell_pair", "standing_space"],
    setup: "Stand on both feet with one kettlebell in each hand. Soften the knees and hinge back, letting the arms hang with the palms facing each other. Allow clearance between the bells, legs and floor.",
    cues: ["Hold the torso steady as both elbows draw back toward the lower ribs.", "Avoid standing up to lift the bells.", "Lower both bells under control to extended arms; keep the load suspended between repetitions."],
    context: "Bell size and handle shape change handling and available weight increments. Choose the load separately from a dumbbell or barbell row.",
    armPath: "Both elbows travel back beside the torso toward the lower ribs.",
    resistanceDirection: "Gravity loads two independently held kettlebells.",
    references: [ace]
  },
  {
    id: "incline_db_row",
    name: "Chest-supported dumbbell row",
    aliases: ["chest supported row", "incline dumbbell row", "incline db row", "two dumbbell chest supported row"],
    focus: "Two-arm rowing with the chest supported on an inclined bench.",
    expect: "The pad supports the torso while each arm controls its own weight.",
    needs: "Dumbbell pair \xB7 stable bench at roughly 30\u201345\xB0",
    requires: ["dumbbells", "bench"],
    setup: "Set a stable bench at roughly 30\u201345\xB0 and lock its adjustment. Position the chest on the pad, with supported feet and room for the dumbbells to hang without hitting the floor or frame.",
    cues: ["Keep chest contact and a braced torso; let the arms hang with palms facing each other.", "Row both elbows back while keeping the neck aligned and the shoulders away from the ears.", "Lower the weights smoothly without lifting the chest, forcing the elbows far behind the torso or using the pad to bounce."],
    context: "Chest support reduces the demand to hold an unsupported hinge; it does not remove all trunk control. Set the weights for this row rather than converting a cable-stack number.",
    armPath: "Both elbows travel back toward the lower ribs.",
    resistanceDirection: "Gravity acts down on separate dumbbells while the pad supports the torso.",
    references: [nsca],
    reusedFrom: "incline_db_row"
  },
  {
    id: "seated_cable_row",
    name: "Seated cable row \u2014 close neutral handle",
    aliases: ["seated low cable row", "close neutral cable row"],
    focus: "Two-arm cable rowing from a seated, unpadded-torso position.",
    expect: "The cable pulls forward while the feet and trunk help maintain position.",
    needs: "Seated low-cable row station \xB7 foot braces \xB7 close neutral handle",
    requires: ["seated_row_station"],
    setup: "Fit a close neutral two-hand handle to the low cable. Sit with the feet on the station\u2019s braces, knees slightly bent and torso upright. Take the handle with arms extended without rounding forward to gain extra reach. This version has no chest pad.",
    cues: ["Keep the torso steady as both elbows draw back and the handle approaches the lower torso.", "Do not rock backward to finish the pull.", "Let the arms extend on a controlled return without being pulled out of the seated position."],
    context: "The torso still resists the cable\u2019s forward pull. Seat, foot braces and a suitable handle are required; another stack\u2019s number does not establish the same resistance.",
    armPath: "Elbows travel beside the torso; the handle approaches the lower ribs or abdomen.",
    resistanceDirection: "Cable tension pulls the handle toward the low pulley.",
    references: [cable]
  },
  {
    id: "chest_supported_row_machine",
    name: "Seated chest-supported machine row \u2014 two arms",
    aliases: ["two arm chest supported machine row", "bilateral supported machine row"],
    focus: "Two-arm rowing with a chest pad and guided handles.",
    expect: "The pad supports the torso and the machine sets the handle path.",
    needs: "Seated row machine with chest pad \xB7 suitable handles and loading",
    requires: ["chest_row_machine"],
    setup: "Use a row machine that has a chest pad. Adjust the seat and pad for a reachable starting position with the chest supported and feet secure. Use both handles together and check the station\u2019s loading and release controls.",
    cues: ["Keep the chest against the pad as both elbows draw back.", "Keep the neck aligned; avoid lifting the torso off the pad to extend the pull.", "Return the handles smoothly without letting the resistance pull you out of position."],
    context: "A padless row machine is a different support arrangement. Handle paths and starting reach vary by machine.",
    armPath: "Both elbows draw back along the machine\u2019s rowing path.",
    resistanceDirection: "Guided levers or cables load the handles along the station\u2019s path.",
    references: [nsca],
    variationOf: machineBase.id
  },
  {
    id: "smith_bent_over_row",
    name: "Smith-machine bent-over row \u2014 overhand",
    aliases: ["smith bent over row", "smith machine row"],
    focus: "Two-arm rowing in an unsupported hinge with a guided bar.",
    expect: "The rails guide the bar; the torso still holds the hinge.",
    needs: "Smith machine with usable hooks/stops \xB7 clear standing space",
    requires: ["smith_machine", "standing_space"],
    setup: "Check the machine\u2019s rail direction, hooks and stops. Position the bar and feet so an overhand grip and held hinge leave room to row toward the lower torso. Choose suitable loading and a controlled way to unhook and rehook the bar.",
    cues: ["Hold the hinge and draw both elbows back as the bar travels on its rails.", "Do not stand up or use leg drive to force the bar along an unsuitable path.", "Lower smoothly to extended arms; rehook the bar under control when finished."],
    context: "Rail guidance changes steering but does not support the chest. The actual rail angle and bar-to-body clearance must fit the row.",
    armPath: "Both elbows draw back; bar travel is constrained by the rails.",
    resistanceDirection: "The loaded bar moves along the Smith rails.",
    references: [ref("Major Fitness: Smith-machine row", "https://www.majorfitness.com/blogs/training-tips/smith-machine-row", "Guided-row setup only; no universal safety or difficulty claim adopted.")]
  },
  {
    id: "landmine_tbar_row",
    name: "Landmine T-bar row \u2014 unsupported, two hands",
    aliases: ["unsupported landmine t bar row", "two hand landmine row"],
    focus: "Two-arm rowing from a held hinge with an anchored bar.",
    expect: "Both hands share a handle that follows the bar\u2019s arc.",
    needs: "Secured landmine \xB7 barbell/loading \xB7 compatible row handle \xB7 standing space",
    requires: ["landmine_setup", "barbell_load", "landmine_row_handle", "standing_space"],
    setup: "Secure the bar in a landmine, fit a compatible two-hand rowing handle and secure suitable plates. Straddle the bar facing away from the pivot. Hinge with both feet planted and grasp the handle, leaving plate and body clearance.",
    cues: ["Hold the hinge and draw the handle toward the lower torso with both arms.", "Follow the anchored arc without standing up to lift the load.", "Lower under control to extended arms; use a controlled pickup and set-down."],
    context: "This version has no chest support. Plate size and handle position can restrict travel; an unsecured bar wedged in a corner is not the specified anchor.",
    armPath: "Both elbows draw back toward the lower torso.",
    resistanceDirection: "The weighted free end follows an arc about the landmine pivot.",
    references: [landmine]
  },
  {
    id: "supported_tbar_row",
    name: "Chest-supported T-bar row",
    aliases: ["supported t bar row", "chest supported t bar machine row"],
    focus: "Two-arm lever rowing with chest support.",
    expect: "The station supports the torso and guides a shared rowing handle.",
    needs: "Chest-supported T-bar station \xB7 pad, footholds and loading/release controls",
    requires: ["supported_tbar_station"],
    setup: tbarBase.cues[0] + " " + tbarBase.setup,
    cues: tbarBase.cues.slice(1),
    context: "This is the supported machine version, not an unsupported landmine row. Keep the chest against the pad and check the handle reach before adding resistance.",
    armPath: "Elbows draw back along the station\u2019s rowing path.",
    resistanceDirection: "The loaded lever follows the machine\u2019s pivoted path.",
    references: [nsca],
    reusedFrom: tbarBase.id
  },
  {
    id: "pendlay_row",
    name: "Pendlay row \u2014 floor reset",
    aliases: ["pendlay row", "floor reset barbell row"],
    focus: "Two-arm rowing from a floor reset with the torso near horizontal.",
    expect: "Each pull begins with the plates settled and the brace re-established.",
    needs: "Barbell and plates/collars \xB7 suitable floor reach \xB7 clear standing space",
    requires: ["barbell_load", "pendlay_floor", "standing_space"],
    setup: "Use plates that allow the bar to rest on the floor at a reachable height. Take an overhand grip, plant both feet and hinge until the torso is near horizontal with the arms extended. Leave room for the bar to clear the legs and travel toward the lower torso.",
    cues: ["Brace before each pull and keep the torso angle steady as the bar rows toward the lower torso.", "Avoid deliberate leg drive or standing up to finish.", "Lower until the plates settle fully on the floor, then reset the brace before the next pull."],
    context: "Floor reach and plate diameter must permit this position. The reset supports the bar between pulls, not the torso. Pin-reset rows offer an adjustable start without requiring this near-horizontal floor setup.",
    armPath: "Both elbows travel back from an extended-arm floor start.",
    resistanceDirection: "Gravity loads a shared bar; the floor supports it at each complete reset.",
    references: [ref("StrongLifts: Pendlay row technique", "https://stronglifts.com/barbell-row/", "Floor-reset and near-horizontal-trunk identity; no performance superiority claim adopted.")]
  },
  {
    id: "single_arm_landmine_row",
    name: "Single-arm landmine row \u2014 alongside bar, unsupported",
    aliases: ["unsupported single arm landmine row", "alongside bar landmine row"],
    focus: "One-arm rowing while holding an unsupported hinge.",
    expect: "The anchored arc and one-sided load change steering and trunk control.",
    needs: "Secured landmine \xB7 barbell/loading \xB7 shaft grip and side clearance",
    requires: ["landmine_setup", "barbell_load", "landmine_side_clearance", "standing_space"],
    setup: "Stand beside the loaded end of a secured landmine bar, facing away from its pivot with the bar outside the working-side leg. Hinge and grip the shaft just behind the sleeve. Both feet stay grounded; no bench or free-hand brace is used.",
    cues: ["Keep the hinge steady and draw the elbow back as the bar follows its arc.", "Resist turning the torso to throw the load upward.", "Lower smoothly to the intended extended-arm reach and rest the load before changing sides."],
    context: "This alongside-bar, unsupported setup is distinct from the perpendicular, thigh-braced Meadows row. Grip and plate clearance can limit travel.",
    armPath: "The working elbow draws back beside the torso.",
    resistanceDirection: "The weighted bar end follows its anchored arc.",
    references: [landmine]
  },
  {
    id: "suspension_low_row",
    name: "Suspension low row \u2014 two arms",
    aliases: ["two arm suspension row", "trx low row", "suspension low row"],
    focus: "Horizontal pulling while maintaining body alignment.",
    expect: "Move an inclined body toward two handles with the feet grounded.",
    needs: "Secure suspension setup for low rows \xB7 nonslip floor and body clearance",
    requires: ["low_row_suspension", "low_row_floor"],
    setup: "Secure and adjust the suspension trainer for rowing. Face the anchor, hold the handles with palms facing each other and lean back with the feet planted. Choose an angle where you can maintain a straight line through the torso and hips.",
    cues: ["Pull the chest toward the handles by drawing both elbows back beside the torso.", "Keep the hips aligned without thrusting them to start the pull.", "Extend the arms under control, maintaining tension and secure footing."],
    context: "Body angle changes resistance. This inclined horizontal row is distinct from an upright foot-assisted pull-up and from a trust-fall row. It is not a load conversion or a required test before pull-ups.",
    armPath: "Both elbows bend back beside the torso as the chest approaches the handles.",
    resistanceDirection: "Strap tension acts toward the anchor while gravity loads the inclined body.",
    references: [nsca]
  },
  {
    id: "inverted_bar_row",
    name: "Fixed-bar inverted row",
    aliases: ["inverted row", "inverted bar row", "bodyweight inverted row"],
    focus: "Horizontal bodyweight pulling beneath a fixed low bar.",
    expect: "Pull the chest toward the bar while keeping the body aligned.",
    needs: "Secured bodyweight-rated low bar \xB7 nonslip floor and body clearance",
    requires: ["inverted_bar_setup", "low_row_floor"],
    setup: "Secure a low bar against rolling, lifting or unhooking. Lie beneath it, take an overhand grip, extend the arms and plant the heels on nonslip flooring. Set bar height and foot position to allow a controlled, aligned body position and clear travel.",
    cues: ["Draw both elbows back to bring the chest toward the bar without throwing the hips upward.", "Keep the torso and hips aligned throughout the pull.", "Lower smoothly until the arms extend, retaining control and heel contact."],
    context: "Changing bar height and body angle changes resistance. This is horizontal pulling; it does not reproduce overhead reach or establish readiness for a first pull-up.",
    armPath: "Both elbows draw back as the chest approaches the fixed bar.",
    resistanceDirection: "Gravity loads the inclined body; the hands and heels share support.",
    references: [nsca]
  },
  {
    id: "hand_supported_db_row",
    name: "Single-arm dumbbell row \u2014 standing hand support",
    aliases: ["hand supported db row", "standing hand supported dumbbell row"],
    focus: "One-arm rowing with both feet grounded and the free hand braced.",
    expect: "The stance and supporting hand steady the hinged torso.",
    needs: "One dumbbell \xB7 immovable hand support \xB7 standing space",
    requires: ["single_dumbbell", "row_hand_support", "standing_space"],
    setup: "Plant both feet in a staggered stance. Hinge and brace the free hand on a support that cannot slide or tip. Let the working arm hang with clearance for the dumbbell.",
    cues: ["Keep the support and torso steady as the elbow draws back toward the lower ribs.", "Avoid deliberately turning or lifting the torso to move the weight.", "Lower to an extended arm under control; set the weight down before changing sides."],
    context: "Replacing bench knee support with a planted foot changes the support base. This still-torso version is distinct from the limited body movement permitted in the Kroc row.",
    armPath: "One elbow travels back beside the torso.",
    resistanceDirection: "Gravity loads one dumbbell; the opposite hand braces against a fixed support.",
    references: [ace]
  },
  {
    id: "bench_single_arm_kb_row",
    name: "Single-arm kettlebell row \u2014 hand-and-knee bench support",
    aliases: ["bench supported kettlebell row", "single arm kb bench row"],
    focus: "Unilateral rowing with hand-and-knee bench support.",
    expect: "A hanging bell replaces the dumbbell while the support arrangement stays the same.",
    needs: "One kettlebell \xB7 stable flat bench \xB7 standing space",
    requires: ["single_kettlebell", "row_flat_bench", "standing_space"],
    setup: "Place the nonworking hand and same-side knee on a stable flat bench. Plant the opposite foot and hold the kettlebell in that hand. Leave room for the bell body below the grip to clear the bench and floor.",
    cues: ["Keep the support steady as the elbow draws back toward the lower ribs.", "Avoid turning the torso or swinging the bell to finish the pull.", "Lower to an extended arm with control and set the bell down before changing sides."],
    context: "Bell shape changes grip feel and clearance. Available kettlebell increments do not establish a match to the dumbbell load.",
    armPath: "One elbow draws back beside the torso.",
    resistanceDirection: "Gravity loads a bell suspended below its handle.",
    references: [ace],
    variationOf: "bench_single_arm_db_row"
  },
  {
    id: "single_arm_incline_db_row",
    name: "Chest-supported dumbbell row \u2014 single arm",
    aliases: ["single arm incline db row", "single arm chest supported row"],
    focus: "One-arm rowing with the chest supported on an inclined bench.",
    expect: "The unused hand rests on the bench while the working arm rows.",
    needs: "One dumbbell \xB7 stable bench at roughly 30\u201345\xB0",
    requires: ["single_dumbbell", "bench"],
    setup: "Lock a stable bench at roughly 30\u201345\xB0. Place the chest on the pad with the feet supported. Hold one dumbbell, let that arm hang clear of the bench and rest the other hand on the bench without rowing.",
    cues: ["Keep chest contact and draw the working elbow back toward the lower ribs.", "Keep the torso from turning or lifting off the pad.", "Lower the weight smoothly to an extended arm; set it down before switching sides."],
    context: "Chest support changes torso-holding demands but does not eliminate the need to control a one-sided load. Keep the unused arm out of the rowing task.",
    armPath: "One elbow travels back beside the torso.",
    resistanceDirection: "Gravity loads one dumbbell while the pad supports the chest.",
    references: [ace, nsca],
    variationOf: "incline_db_row"
  },
  {
    id: "hand_supported_cable_row",
    name: "Single-arm low-cable row \u2014 standing hand support",
    aliases: ["hand supported cable row", "supported single arm low cable row"],
    focus: "One-arm cable rowing with a supported hinged stance.",
    expect: "The cable pulls toward the pulley while the free hand braces.",
    needs: "Low pulley and single handle \xB7 immovable hand support \xB7 standing space",
    requires: ["single_low_cable", "row_hand_support", "standing_space"],
    setup: "Fit a single handle to a low pulley. Stand facing it in a staggered stance, hinge and brace the free hand on an immovable support reachable throughout the row. Leave unobstructed cable travel.",
    cues: ["Hold the hinge and draw the working elbow back toward the lower ribs.", "Keep the torso steady against the cable\u2019s forward pull without turning to finish.", "Extend the arm smoothly while retaining the hand support and stance."],
    context: "A freestanding cable row without the hand brace is a different setup. The cable\u2019s line of pull differs from a dumbbell\u2019s downward pull.",
    armPath: "One elbow draws back beside the torso.",
    resistanceDirection: "Cable tension acts toward the low pulley.",
    references: [ace, cable]
  },
  {
    id: "single_arm_chest_supported_machine_row",
    name: "Seated chest-supported machine row \u2014 single arm",
    aliases: ["single arm supported machine row", "unilateral chest supported machine row"],
    focus: "One-arm machine rowing with chest support.",
    expect: "One independent handle moves while the unused arm stays out of the row.",
    needs: "Chest-supported machine with an independently usable arm",
    requires: ["single_chest_row_machine"],
    setup: "Choose a chest-supported row machine that permits one arm to work independently. Adjust the seat, pad and handle reach; keep the chest supported and feet secure. Check the loading and release controls for unilateral use.",
    cues: ["Draw the working elbow back along the machine\u2019s path with the chest on the pad.", "Keep the unused arm from assisting and avoid twisting to extend the pull.", "Return the handle smoothly to the intended reach before releasing it."],
    context: "Linked machine arms may not allow this movement. Chest support reduces torso-holding demand, while the guided path reduces free-weight steering.",
    armPath: "One elbow travels back along the station\u2019s row path.",
    resistanceDirection: "The independently usable lever or cable loads one handle.",
    references: [nsca],
    variationOf: machineBase.id
  },
  {
    id: "single_arm_suspension_row",
    name: "Suspension low row \u2014 single arm, no torso turn",
    aliases: ["single arm suspension row", "single arm trx row"],
    focus: "Unilateral horizontal pulling while resisting torso rotation.",
    expect: "One hand pulls the inclined body toward the handle.",
    needs: "Secure single-hand suspension configuration \xB7 nonslip floor and body clearance",
    requires: ["single_row_suspension", "low_row_floor"],
    setup: "Use the trainer\u2019s specified single-hand configuration and a secure bodyweight-rated anchor. Face the anchor and lean back from planted feet at a manageable angle, holding the handle with one hand and keeping the torso aligned.",
    cues: ["Draw the elbow back to pull the chest toward the handle.", "Keep the chest and hips from deliberately turning; keep the feet planted.", "Extend the arm slowly without letting the trunk collapse or rotate, then reset before changing hands."],
    context: "Body alignment and resistance to turning replace external bench support. Body angle changes resistance but does not convert to a dumbbell load. This version has no deliberate reaching rotation.",
    armPath: "One elbow draws back beside the torso.",
    resistanceDirection: "Strap tension acts toward the anchor on one hand while gravity loads the inclined body.",
    references: [ref("TRX: Single-arm row", "https://www.trxtraining.com/blogs/news/trx-weekly-exercise-trx-single-arm-row", "Single-hand configuration and rotation control; reviewed base omits a deliberate torso turn.")]
  }
].map((record3) => ({ ...record3, cue: record3.cues[0], family: "row", review: review2, sourceChecked: "2026-10-13" }));

// ../gym-swap-site/dist/prototype/a1-pulls.mjs?v=2.8.0
var review3 = { batch: "a1-completion-2026-10-13", basis: "Michael approved the full A1 vertical-pull menu, both exact band arrangements, upright foot-assisted pulls and the distinction between assisted lowering emphasis and unsupported negatives." };
var ref2 = (label, url, scope) => ({ label, url, scope });
var pulldown = ref2("NASM: Lat-pulldown mechanics", "https://www.nasm.org/resource-center/blog/training/the-biomechanics-of-the-lat-pulldown-muscles-grip-and-form", "Front vertical-pull mechanics; exact disclosed support and implement variants are reviewed synthesis.");
var pullup = ref2("NASM: Chin-ups and pull-ups", "https://www.nasm.org/resource-center/blog/chin-ups-vs-pull-ups-the-difference-the-benefits-muscles-worked", "Overhand pulling and assistance; no strength threshold, progression prescription or guaranteed outcome adopted.");
var trx = ref2("TRX: Upright foot-assisted pull-up", "https://www.trxtraining.com/blogs/news/trx-moves-of-the-week-trx-for-fun", "Upright position below the anchor, grounded feet and controlled return. The ring and fixed-bar adaptations are Michael-reviewed setups.");
var chain = ref2("ACE: Kinetic chain", "https://www.acefitness.org/fitness-certifications/ace-answers/exam-preparation-blog/2929/what-is-the-kinetic-chain/", "Fixed-bar pull-up versus pulldown mechanics; no universal safety, stability or rehabilitation claim adopted.");
var legacy = DATA.exercises.lat_pulldown.options.find((c) => c.id === "other_pulldown");
var assist = DATA.exercises.lat_pulldown.options.find((c) => c.id === "assisted_pullup");
var a1PullEquipment = {
  front_pulldown_station: "Complete front-pulldown station with seat, thigh restraint and overhand bar",
  seated_dual_pulldown: "Overhead dual-cable station with seat, thigh restraint and two neutral handles",
  front_lever_pulldown: "Independent-arm front-pulldown machine with underhand handles, seat and thigh pads",
  dual_high_cable: "Two high pulleys, neutral handles and clear overhead cable travel",
  single_high_cable: "One high pulley, single neutral handle and clear overhead travel",
  kneeling_pull_space: "Floor surface and space to kneel upright beneath the pull",
  overhead_pulldown_band: "Suitable band and compatible secured overhead anchor for two-arm pulldowns",
  assisted_pullup_machine: "Counterweight pull-up machine with intended kneeling pad and usable entry/exit controls",
  pullup_bar: "Secured bodyweight-rated overhead pull-up bar with an overhand grip",
  pullup_clearance: "Clear head, body and foot travel with controlled access to the pull-up bar",
  floor_pullup_bar: "Secured bar adjusted for upright pulling with feet staying on the floor",
  pullup_floor: "Nonslip floor and space for grounded feet and bent knees beneath the hands",
  overhead_pullup_band: "Compatible long loop band secured overhead and retained under both feet together",
  pullup_band_access: "Controlled entry and exit with room for the band within its stretch limits",
  dip_band_setup: "Secured dip bars with a retained compatible band spanning them for knee support",
  upright_suspension_setup: "Suspension handles adjusted for upright overhead pulling on a rated secure anchor",
  ring_pullup_setup: "Gymnastics rings and adjustable straps on rated overhead supports",
  pullup_top_step: "Stable step or box giving controlled access to the top position",
  pullup_floor_top_access: "Low-bar foot-assisted top access with clearance to lift both feet for lowering",
  straight_arm_cable: "High cable and straight bar with clear overhead-to-thigh travel"
};
var lowering = (reviewLabel, text2) => ({ id: "lowering_emphasis", reviewLabel, name: "Assisted pull-up with lowering emphasis", description: text2 });
var uprightCues = ["Keep the torso upright beneath the hands as the elbows bend and the body rises; press through the feet for assistance.", "Control the handles and torso rather than leaning back into a horizontal row.", "Lower smoothly toward the starting overhead reach, retaining foot contact and using leg help as needed."];
var a1Pulls = [
  {
    id: "lat_pulldown",
    name: "Lat pulldown \u2014 seated front, overhand bar",
    aliases: ["lat pulldown", "front lat pulldown", "overhand lat pulldown", "another front pulldown station"],
    focus: "Two-arm bent-elbow vertical pulling from a supported seated position.",
    expect: "The bar moves toward the body while the seat and thigh restraint steady the base.",
    needs: "Complete seated pulldown station \xB7 thigh restraint \xB7 overhand bar",
    requires: ["front_pulldown_station"],
    setup: legacy.cues[0] + " Adjust the thigh restraint and select suitable resistance. Take a moderate overhand grip on the shared bar, with feet stable and the bar reachable overhead.",
    cues: [legacy.cues[1], legacy.cues[2], "Keep the torso steady rather than rocking backward to turn the pull into a row."],
    context: "The hands and bar move toward a relatively stationary body: an open-chain upper-limb task. Stack adjustment usually makes lower resistance straightforward to select. Pull-ups move the body toward the handholds and use different ways of adjusting assistance; chain type does not determine medical suitability or safety.",
    armPath: "Both elbows bend down beside the torso as the bar descends in front of the head.",
    resistanceDirection: "Cable tension pulls the bar back toward the overhead pulley.",
    references: [pulldown, chain],
    reusedFrom: "other_pulldown"
  },
  {
    id: "seated_dual_cable_pulldown",
    name: "Seated dual-cable pulldown \u2014 two neutral handles",
    aliases: ["seated dual cable pulldown", "two handle seated pulldown"],
    focus: "Two-arm overhead pulling with independently controlled handles.",
    expect: "The seat and thigh restraint steady the base while each arm chooses its own path.",
    needs: "Overhead dual cables \xB7 seated restraint \xB7 two short neutral handles",
    requires: ["seated_dual_pulldown"],
    setup: "Use a dedicated dual-cable pulldown setup with a seat and thigh restraint. Adjust the supports and handle reach, then take one short handle in each hand with palms facing each other.",
    cues: ["Keep the feet planted and torso steady as both elbows draw downward.", "Bring the handles toward the upper torso without leaning back to turn the movement into a row.", "Extend both arms smoothly toward the overhead starting reach."],
    context: "Two high pulleys alone do not provide this seated and restrained setup. Independent handles change steering; stack numbers and cable ratios do not automatically match a shared-bar station.",
    armPath: "Both elbows bend down with independently steered neutral handles.",
    resistanceDirection: "Separate cables pull toward their overhead pulleys.",
    references: [pulldown, ref2("Life Fitness: PWR Play station configurations", "https://www.lifefitness.com/en-us/catalog/strength-training/cable-machines-functional-trainers/pwr-play", "Equipment configurations with seated restraint; not a claim about every dual pulley.")],
    variationOf: "lat_pulldown"
  },
  {
    id: "lever_front_pulldown",
    name: "Plate-loaded front pulldown \u2014 independent arms, underhand",
    aliases: ["independent arm front pulldown", "plate loaded front pulldown"],
    focus: "Two-arm overhead pulling with seated restraint and guided independent levers.",
    expect: "Underhand handles follow the machine\u2019s front-pulldown arcs.",
    needs: "Independent-arm front-pulldown machine \xB7 seat/thigh pads \xB7 suitable plates",
    requires: ["front_lever_pulldown"],
    setup: "Use a front-pulldown machine with independently moving arms and underhand handles. Fit suitable plates, adjust the seat and thigh pads, and check that the overhead handles are reachable with feet secure.",
    cues: ["Keep the torso steady and pull both handles down toward the upper torso.", "Follow the lever path without lifting off the seat or rocking backward.", "Return both handles under control to the intended overhead reach."],
    context: "This exact front-pulldown machine is not interchangeable with a diagonally pulling high-row machine. Lever arcs, minimum resistance and starting reach vary.",
    armPath: "Both elbows bend downward; palms face toward the user.",
    resistanceDirection: "Plate-loaded levers resist along the machine\u2019s guided arcs.",
    references: [ref2("Hammer Strength: Iso-Lateral Front Lat Pulldown", "https://www.lifefitness.com/en-us/catalog/strength-training/plate-loaded/plate-loaded-iso-lateral-front-lat-pulldown", "Independent-arm front-pulldown equipment and underhand handles; no substitution endorsement.")]
  },
  {
    id: "kneeling_two_cable_pulldown",
    name: "Tall-kneeling dual-cable pulldown \u2014 two arms",
    aliases: ["kneeling two cable pulldown", "tall kneeling dual cable pulldown"],
    focus: "Two-arm bent-elbow overhead pulling without a seat or thigh restraint.",
    expect: "The kneeling base and torso must stay controlled against cable tension.",
    needs: "Two high pulleys and neutral handles \xB7 kneeling space",
    requires: ["dual_high_cable", "kneeling_pull_space"],
    setup: "Attach two neutral handles to high pulleys. Kneel tall beneath or just behind their pull, with room to reach overhead and return without the cables dragging across the body. Select resistance that allows you to remain grounded.",
    cues: ["Keep the hips over the kneeling base and draw both elbows down.", "Avoid leaning back or turning the pull into a forward row.", "Return the handles overhead with control, staying tall and grounded."],
    context: "Without thigh restraint, maintaining body position can limit the usable resistance. Do not improvise a body tie-down to counter the cable pull.",
    armPath: "Both elbows bend down from an overhead reach.",
    resistanceDirection: "Two cables pull toward overhead pulleys against an unrestrained kneeling base.",
    references: [pulldown]
  },
  {
    id: "half_kneeling_cable_pulldown",
    name: "Half-kneeling single-arm cable pulldown",
    aliases: ["half kneeling cable pulldown", "single arm half kneeling pulldown"],
    focus: "One-arm bent-elbow overhead pulling from a split kneeling base.",
    expect: "The torso controls leaning and turning while one arm pulls.",
    needs: "High pulley and neutral handle \xB7 kneeling space",
    requires: ["single_high_cable", "kneeling_pull_space"],
    setup: "Place the working-side knee on the floor and the opposite foot forward. Position the body beneath or slightly behind a high pulley, with an overhead neutral handle in the working hand and clear cable travel.",
    cues: ["Keep the pelvis and torso steady as the working elbow draws down toward the side.", "Avoid leaning or rotating to finish the pull.", "Return the arm overhead under control, then reset before changing sides."],
    context: "This is one disclosed single-arm pulldown setup. An unspecified single-arm pulldown does not automatically mean half-kneeling. Two-arm repetitions do not convert automatically to per-side work.",
    armPath: "One elbow bends down toward the working side of the torso.",
    resistanceDirection: "Cable tension pulls the single handle toward the high pulley.",
    references: [pulldown]
  },
  {
    id: "assisted_pullup",
    name: "Counterweight-assisted pull-up \u2014 kneeling pad",
    aliases: ["machine assisted pullup", "counterweight assisted pullup", "kneeling pad pullup", "machine assisted negative pullup"],
    focus: "Bent-elbow vertical pulling with machine assistance.",
    expect: "The body rises toward fixed handles while the pad supports part of its weight.",
    needs: "Counterweight pull-up machine with intended kneeling pad and entry/exit controls",
    requires: ["assisted_pullup_machine"],
    setup: assist.cues[0] + " Select assistance while unloaded. Use the intended kneeling pad and overhand handles, following the station\u2019s specified entry sequence.",
    cues: ["Keep the torso steady as the elbows draw down and the body rises toward the handles.", "Avoid swinging or bouncing off the moving pad.", "Lower under control with knees supported, then use the station\u2019s specified exit sequence."],
    context: "More counterweight generally supplies more help, rather than more lifting resistance. Assistance remains on ascent and descent at the chosen setting. Never change the pin while the mechanism is loaded.",
    armPath: "Both elbows bend down as the body rises toward fixed overhand handles.",
    resistanceDirection: "Bodyweight acts downward; the counterweighted pad supplies upward assistance.",
    references: [pullup],
    reusedFrom: assist.id,
    executionVariants: [lowering("R3-e-N", "Use an assisted ascent and emphasize a controlled descent. The same pad setting helps in both directions; this does not provide assistance only on ascent.")]
  },
  {
    id: "kneeling_band_pulldown",
    name: "Tall-kneeling band pulldown \u2014 two arms",
    aliases: ["kneeling band pulldown", "two arm band pulldown"],
    focus: "Two-arm bent-elbow overhead pulling against band tension.",
    expect: "Band resistance changes through the pull, without seated restraint.",
    needs: "Suitable band and secured compatible overhead anchor \xB7 kneeling space",
    requires: ["overhead_pulldown_band", "kneeling_pull_space"],
    setup: "Secure a suitable band to a compatible overhead anchor according to its instructions. Kneel tall beneath the pull and hold the handles or intended grip ends, leaving overhead travel within the band\u2019s stretch limits.",
    cues: ["Hold the torso steady as both elbows draw down toward the sides.", "Keep the hands secure and avoid leaning back to extend the pull.", "Let the arms return overhead with control rather than allowing the band to snap back."],
    context: "Tension changes as the band stretches. The available band may not supply the desired resistance, and there is no automatic band-to-stack conversion.",
    armPath: "Both elbows bend down from the overhead starting reach.",
    resistanceDirection: "Band tension draws the hands toward the overhead anchor and changes with stretch.",
    references: [ref2("Jim Stoppani: Band pulldown instruction", "https://www.jimstoppani.com/training/build-a-bigger-back-with-bands", "Original band-pulldown setup; no workout or loading prescription adopted.")]
  },
  {
    id: "overhand_pullup",
    name: "Strict overhand pull-up",
    aliases: ["overhand pullup", "strict pullup", "bodyweight overhand pullup"],
    focus: "Two-arm bent-elbow vertical pulling against bodyweight.",
    expect: "Raise the body toward a fixed bar without leg assistance or kipping.",
    needs: "Secured overhead pull-up bar \xB7 controlled access and body clearance",
    requires: ["pullup_bar", "pullup_clearance"],
    setup: "Use a secured bodyweight-rated bar with controlled access and enough head and foot clearance. Take an overhand grip and begin with the arms extended, body steady and feet clear.",
    cues: ["Draw the elbows down to raise the body toward the bar without swinging or driving the legs.", "Maintain torso control rather than craning the neck to claim extra height.", "Lower smoothly to the starting extended-arm reach and use controlled access to finish."],
    context: "Bodyweight is the baseline resistance. Having a suitable bar does not establish that the intended repetitions are achievable; assistance requires a different setup. A fixed-bar pull-up is closed chain at the upper limb, which does not by itself establish safety or joint suitability.",
    armPath: "Both elbows bend as the body rises toward the fixed overhand grip.",
    resistanceDirection: "Gravity loads the body beneath a fixed bar.",
    references: [pullup, chain]
  },
  {
    id: "straight_arm_cable_pulldown",
    name: "Standing straight-arm cable pulldown",
    aliases: ["straight arm cable pulldown", "standing straight arm pulldown"],
    focus: "Move the upper arms down toward the body against cable resistance.",
    expect: "A nearly fixed elbow angle makes this different from a bent-elbow pulldown.",
    needs: "High cable and straight bar \xB7 standing and arm-travel space",
    requires: ["straight_arm_cable", "standing_space"],
    setup: "Attach a straight bar to a high cable. Stand facing the pulley with a slight hip hinge, holding the bar overhead and in front of the body. Keep a soft elbow bend and room for the bar to travel toward the thighs.",
    cues: ["Keep the elbow angle nearly fixed as the upper arms move down and the bar approaches the thighs.", "Keep the torso steady without turning the movement into a rocking pull.", "Return the bar toward the overhead starting position with control."],
    context: "This preserves only part of a bent-elbow vertical pull: it omits repeated elbow bending.",
    armPath: "Upper arms travel toward the body while elbow angle stays nearly fixed.",
    resistanceDirection: "Cable tension acts toward the high pulley.",
    references: [ref2("TRX: Straight-arm pulldown description", "https://www.trxtraining.com/blogs/news/lower-lat-exercises", "Straight-arm cable action only; no muscle-isolation ranking adopted.")],
    family: "shoulder_pull"
  },
  {
    id: "floor_assisted_pullup",
    name: "Floor-assisted pull-up \u2014 one or two feet",
    aliases: ["floor assisted pullup", "foot assisted pullup", "feet assisted pullup", "foot assisted negative pullup"],
    focus: "Upright vertical pulling with adjustable help from the legs.",
    expect: "The body moves toward a fixed bar while grounded feet share the load.",
    needs: "Secured bar at suitable height \xB7 nonslip floor and knee travel",
    requires: ["floor_pullup_bar", "pullup_floor"],
    setup: "Set a secured bar so the arms can reach overhead while the knees bend and the feet remain on the floor. Take an overhand grip and position the torso upright beneath the hands. Begin with two grounded feet; one-foot support is an explicit variation.",
    cues: ["Bend the elbows to raise the body while pressing through the feet for the help needed.", "Keep the torso beneath the bar rather than leaning back into a row.", "Lower under control while retaining foot contact; adjust leg effort rather than dropping through the descent."],
    context: "Foot assistance is self-regulated, not a measured counterweight. One grounded foot changes the support base and may add uneven leg or hip effort; maintain upright control. Lifting both feet clear for an unsupported descent is the separately described negative pull-up.",
    armPath: "Both elbows bend downward as the upright body rises.",
    resistanceDirection: "Bodyweight acts downward while the grounded foot or feet supply adjustable support.",
    references: [trx],
    executionVariants: [lowering("R3-i-N", "Assist the ascent with the feet and emphasize controlled lowering. Foot pressure may change between phases, but retaining help on descent makes this an assisted repetition, not an unsupported negative.")]
  },
  {
    id: "overhead_band_assisted_pullup",
    name: "Overhead-band-assisted pull-up \u2014 feet together",
    aliases: ["overhead band assisted pullup", "feet together band pullup", "overhead band assisted negative pullup"],
    focus: "Vertical pulling with a band supporting both feet.",
    expect: "The band helps in both directions, with help changing as it stretches.",
    needs: "Overhead pull-up bar \xB7 compatible long loop band \xB7 controlled band access",
    requires: ["pullup_bar", "overhead_pullup_band", "pullup_band_access"],
    setup: "Secure a compatible long loop band to the overhead bar as its instructions permit. Use controlled access to retain the band under both feet held together, then take an overhand grip with clear travel within the band\u2019s stretch limits.",
    cues: ["Keep the feet together and retained on the band as the elbows draw down and the body rises.", "Control the torso without swinging or using a sudden leg thrust.", "Lower smoothly with the feet still supported; exit under control using the band setup\u2019s entry/exit arrangement."],
    context: "Band color is not a universal assistance value. Check retention and stretch limits. Do not step out of a tensioned band mid-repetition to create an unsupported negative.",
    armPath: "Both elbows bend down as the body rises to the overhead bar.",
    resistanceDirection: "Bodyweight acts down; band tension supplies stretch-dependent upward assistance at the feet.",
    references: [ref2("NASM: Band-assisted pull-up", "https://www.nasm.org/resource-center/exercise-library/band-assisted-pull-up", "Overhead-band assistance and controlled return; feet-together retention is Michael\u2019s approved exact setup.")],
    executionVariants: [lowering("R3-j-N", "Keep the feet in the same band for an assisted ascent and emphasized controlled lowering. Band assistance remains during descent and changes with stretch; this is not an unassisted negative.")]
  },
  {
    id: "dip_bar_band_assisted_pullup",
    name: "Dip-bar-band-assisted pull-up \u2014 knees supported",
    aliases: ["dip bar band assisted pullup", "knees on band pullup", "dip bar band assisted negative pullup"],
    focus: "Vertical pulling with band support beneath the knees.",
    expect: "Hands hold a separate overhead bar while a band spans the dip bars below.",
    needs: "Overhead pull-up bar \xB7 secured dip bars and retained compatible band \xB7 clear body travel",
    requires: ["pullup_bar", "dip_band_setup", "pullup_clearance"],
    setup: "Use secured parallel dip bars beneath a separate overhead pull-up bar. Wrap or secure a compatible band across the dip bars so it is retained for knee support within its stretch limits. Establish controlled access, place the knees on the band and take an overhand grip on the overhead bar.",
    cues: ["Keep the knees supported as the elbows draw down and the body rises toward the overhead handhold.", "Keep the torso controlled and leave room for the knees and band to move without striking the bars.", "Lower smoothly with the knees still supported; unload the arrangement before removing the knees."],
    context: "This exact arrangement is Michael\u2019s confirmed coaching addition. Dip-bar stability, band retention and controlled access are essential. Help depends on stretch and anchor geometry, not a selected stack setting.",
    armPath: "Both elbows bend down; hands stay on the separate overhead bar.",
    resistanceDirection: "Gravity loads the body; the band spanning the dip bars supplies upward knee support.",
    references: [ref2("NASM: General band-assisted pull-up mechanics", "https://www.nasm.org/resource-center/exercise-library/band-assisted-pull-up", "General band assistance only. The dip-bar/knee-support arrangement was supplied and approved by Michael, not prescribed by this source.")],
    executionVariants: [lowering("R3-k-N", "Use the same knee-supported ascent and emphasize controlled descent. The band still helps on the way down; do not remove the knees mid-repetition.")]
  },
  {
    id: "trx_floor_assisted_pullup",
    name: "Upright TRX floor-assisted pull-up",
    aliases: ["trx floor assisted pullup", "upright suspension pullup", "trx pullup", "trx assisted negative pullup"],
    focus: "Upright overhead pulling with grounded-foot assistance.",
    expect: "Neutral handles can move while the feet share the load.",
    needs: "Suspension handles and rated overhead anchor \xB7 nonslip floor and knee travel",
    requires: ["upright_suspension_setup", "pullup_floor"],
    setup: "Adjust the suspension handles above the shoulders so you can start seated beneath the anchor with an upright torso, straight arms, neutral hands, bent knees and feet flat. Keep the anchor secure and enough room to rise while retaining foot contact.",
    cues: uprightCues,
    context: "This upright pull-up differs from an inclined suspension low row. The handles can move, so do not treat them as a rigid bar. Foot pressure supplies adjustable assistance rather than a calibrated load.",
    armPath: "Both elbows bend down with neutral handles above the shoulders.",
    resistanceDirection: "Strap tension supports the hands toward the overhead anchor; the feet share bodyweight support.",
    references: [trx],
    executionVariants: [lowering("R3-l-N", "Use leg help for the ascent and emphasize a controlled descent toward overhead reach. Keep the torso upright, handles controlled and feet grounded; leg help may remain during lowering.")]
  },
  {
    id: "ring_floor_assisted_pullup",
    name: "Upright ring floor-assisted pull-up",
    aliases: ["ring floor assisted pullup", "upright assisted ring pullup", "ring assisted negative pullup"],
    focus: "Upright overhead pulling with grounded feet and independent rings.",
    expect: "The rings can rotate and move separately while leg effort supplies help.",
    needs: "Rings, adjustable straps and rated supports \xB7 nonslip floor and knee travel",
    requires: ["ring_pullup_setup", "pullup_floor"],
    setup: "Secure both rings to rated overhead supports. Adjust height and spacing so you can sit beneath them with an upright torso, arms reaching overhead, initially neutral hands, bent knees and grounded feet. Check strap adjustment and clear body travel.",
    cues: uprightCues,
    context: "Keep the torso beneath the hands for a vertical pull. Ring rotation permits hand-position adjustment but adds control demands; leaning back into a ring row changes the movement. This is Michael\u2019s approved ring adaptation of upright foot-assisted pulling.",
    armPath: "Both elbows bend down while independent rings can rotate with the hands.",
    resistanceDirection: "Separate straps transmit support toward the overhead anchors while grounded feet share the load.",
    references: [trx],
    executionVariants: [lowering("R3-m-N", "Assist the ascent with the legs, then emphasize controlled lowering with foot help as needed. Retain upright body position and control each ring; leaning into a row changes the task.")]
  },
  {
    id: "negative_pullup",
    name: "Negative overhand pull-up \u2014 unsupported lowering",
    aliases: ["negative pullup", "eccentric overhand pullup", "unsupported lowering pullup"],
    focus: "Controlled bodyweight lowering through a vertical pull-up path.",
    expect: "Supported access replaces the pull upward; the descent is unsupported.",
    needs: "Secured pull-up bar \xB7 stable top-access step OR low-bar floor access \xB7 body clearance",
    requires: ["pullup_bar", ["pullup_top_step", "pullup_floor_top_access"], "pullup_clearance"],
    setup: "Take an overhand grip and reach the top using a stable step/box, or use the legs to rise beneath a suitably low bar. Establish the top position before removing foot support. For low-bar access, allow enough bent-knee clearance to lift both feet before lowering.",
    cues: ["Once positioned at the top, lift the feet clear only when you can control the unsupported descent.", "Lower the body smoothly as the arms extend without swinging or dropping.", "Return to the step or floor under control and reset with support before another descent."],
    context: "This is lowering-only work, not a full up/down replacement. Being unable to pull up does not establish an ability to lower under control. Do not escape a moving machine pad or step out of a tensioned band to remove help. Supported descent belongs to the assisted parent variations.",
    armPath: "Both elbows extend as the body lowers away from the overhead bar.",
    resistanceDirection: "Gravity loads the body during descent after foot support is removed.",
    references: [ref2("GMB: Negative pull-up instruction", "https://gmb.io/pull-ups/", "Unsupported lowering identity; stable-step or floor-assisted access is the reviewed Gym Swap setup. No progression or guarantee adopted.")]
  }
].map((record3) => ({ ...record3, cue: record3.cues[0], family: record3.family ?? "vertical_pull", review: review3, sourceChecked: "2026-10-13" }));

// ../gym-swap-site/dist/prototype/a1-comparisons.mjs?v=2.8.0
var review4 = { batch: "a1-completion-2026-10-13", basis: "Michael approved all 62 A1 comparisons and six execution variants." };
var approved = [
  {
    "reviewLabel": "R1-a",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "barbell_bent_over_row",
    "source": "horizontal_rows",
    "similarity": "close",
    "keeps": "Two-arm rowing while holding the hinge.",
    "changes": "One bar connects the hands, so their spacing and paths cannot adjust independently.",
    "load": "Available bar loading is chosen separately.",
    "check": "Available bar loading is chosen separately.",
    "why": "Two-arm rowing while holding the hinge.",
    "detail": "One bar connects the hands, so their spacing and paths cannot adjust independently.",
    "basis": "Michael-approved A1 review R1-a; October 13, 2026"
  },
  {
    "reviewLabel": "R1-b",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "two_kb_bent_over_row",
    "source": "horizontal_rows",
    "similarity": "close",
    "keeps": "Independent weights, bilateral rowing, unsupported hinge.",
    "changes": "Bell bodies hang below the hands; handle shape, bell clearance and available increments change grip/handling.",
    "load": "Bells must clear the legs and floor through the intended row; no automatic DB-to-KB load match.",
    "check": "Bells must clear the legs and floor through the intended row; no automatic DB-to-KB load match.",
    "why": "Independent weights, bilateral rowing, unsupported hinge.",
    "detail": "Bell bodies hang below the hands; handle shape, bell clearance and available increments change grip/handling.",
    "basis": "Michael-approved A1 review R1-b; October 13, 2026"
  },
  {
    "reviewLabel": "R1-c",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "incline_db_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Two independently controlled weights and bilateral rowing.",
    "changes": "The pad supports the torso, reducing the work of sustaining the unsupported hinge; posture-holding fatigue is less likely to be the limiting task.",
    "load": "Does not preserve the original hinge-hold demand; keep chest on pad and allow DB clearance.",
    "check": "Does not preserve the original hinge-hold demand; keep chest on pad and allow DB clearance.",
    "why": "Two independently controlled weights and bilateral rowing.",
    "detail": "The pad supports the torso, reducing the work of sustaining the unsupported hinge; posture-holding fatigue is less likely to be the limiting task.",
    "basis": "Michael-approved A1 review R1-c; October 13, 2026"
  },
  {
    "reviewLabel": "R1-d",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "seated_cable_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Two-arm rowing with elbow bending.",
    "changes": "Sitting removes the standing hinge; the cable pulls forward, so the torso resists a forward pull rather than holding the same bent-over position.",
    "load": "Not chest-supported; do not imply the trunk has no work.",
    "check": "Not chest-supported; do not imply the trunk has no work.",
    "why": "Two-arm rowing with elbow bending.",
    "detail": "Sitting removes the standing hinge; the cable pulls forward, so the torso resists a forward pull rather than holding the same bent-over position.",
    "basis": "Michael-approved A1 review R1-d; October 13, 2026"
  },
  {
    "reviewLabel": "R1-e",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "chest_supported_row_machine",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Bilateral rowing.",
    "changes": "The chest pad reduces torso-holding demand and the lever guides the handles, reducing freedom to steer two separate weights.",
    "load": "A padless machine does not qualify for this comparison.",
    "check": "A padless machine does not qualify for this comparison.",
    "why": "Bilateral rowing.",
    "detail": "The chest pad reduces torso-holding demand and the lever guides the handles, reducing freedom to steer two separate weights.",
    "basis": "Michael-approved A1 review R1-e; October 13, 2026"
  },
  {
    "reviewLabel": "R1-f",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "smith_bent_over_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Bilateral rowing while holding a hinge.",
    "changes": "Rails guide a shared bar, so the arms no longer steer separate free weights; the torso still holds itself in position.",
    "load": "Actual rail angle and bar clearance must fit the row; a guided bar does not provide chest support.",
    "check": "Actual rail angle and bar clearance must fit the row; a guided bar does not provide chest support.",
    "why": "Bilateral rowing while holding a hinge.",
    "detail": "Rails guide a shared bar, so the arms no longer steer separate free weights; the torso still holds itself in position.",
    "basis": "Michael-approved A1 review R1-f; October 13, 2026"
  },
  {
    "reviewLabel": "R1-g",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "landmine_tbar_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Bilateral rowing in a held hinge.",
    "changes": "A linked handle follows the anchored bar's arc; the hands lose independent paths and the resistance direction changes as the bar moves.",
    "load": "Plate size/handle position can limit travel; an unsecured bar in a corner is not the specified setup.",
    "check": "Plate size/handle position can limit travel; an unsecured bar in a corner is not the specified setup.",
    "why": "Bilateral rowing in a held hinge.",
    "detail": "A linked handle follows the anchored bar's arc; the hands lose independent paths and the resistance direction changes as the bar moves.",
    "basis": "Michael-approved A1 review R1-g; October 13, 2026"
  },
  {
    "reviewLabel": "R1-h",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "bench_single_arm_db_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "A free-weight row with elbow bending.",
    "changes": "Support changes torso-holding demands, and each arm works separately rather than completing a bilateral repetition.",
    "load": "Does not retain simultaneous two-arm work; no automatic conversion to per-side reps.",
    "check": "Does not retain simultaneous two-arm work; no automatic conversion to per-side reps.",
    "why": "A free-weight row with elbow bending.",
    "detail": "Support changes torso-holding demands, and each arm works separately rather than completing a bilateral repetition.",
    "basis": "Michael-approved A1 review R1-h; October 13, 2026"
  },
  {
    "reviewLabel": "R1-j",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "pendlay_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Bilateral unsupported rowing.",
    "changes": "The linked bar replaces independent DBs; each pull starts from a floor reset rather than a continuously suspended load, changing the start and re-bracing task.",
    "load": "Floor reach/plate diameter must permit the specified position. A floor reset does not support the torso; no deliberate leg drive in this base setup.",
    "check": "Floor reach/plate diameter must permit the specified position. A floor reset does not support the torso; no deliberate leg drive in this base setup.",
    "why": "Bilateral unsupported rowing.",
    "detail": "The linked bar replaces independent DBs; each pull starts from a floor reset rather than a continuously suspended load, changing the start and re-bracing task.",
    "basis": "Michael-approved A1 review R1-j; October 13, 2026"
  },
  {
    "reviewLabel": "R1-k",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "single_arm_landmine_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Rowing from a held hinge.",
    "changes": "One arm follows an anchored arc instead of both arms steering separate weights; the one-sided pull changes the demand to resist turning.",
    "load": "No bench or free-hand support is assumed. Plate/body clearance can limit travel; this is not the perpendicular Meadows setup.",
    "check": "No bench or free-hand support is assumed. Plate/body clearance can limit travel; this is not the perpendicular Meadows setup.",
    "why": "Rowing from a held hinge.",
    "detail": "One arm follows an anchored arc instead of both arms steering separate weights; the one-sided pull changes the demand to resist turning.",
    "basis": "Michael-approved A1 review R1-k; October 13, 2026"
  },
  {
    "reviewLabel": "R1-m",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "meadows_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Bent-elbow rowing from a hinged torso.",
    "changes": "One arm follows an anchored arc with the elbow farther outward, replacing simultaneous independent DB rows; thigh bracing changes torso support and the arm path changes muscular emphasis.",
    "load": "Distinct from the alongside-the-bar landmine row. Sleeve grip and plate travel must suit the setup.",
    "check": "Distinct from the alongside-the-bar landmine row. Sleeve grip and plate travel must suit the setup.",
    "why": "Bent-elbow rowing from a hinged torso.",
    "detail": "One arm follows an anchored arc with the elbow farther outward, replacing simultaneous independent DB rows; thigh bracing changes torso support and the arm path changes muscular emphasis.",
    "basis": "Michael-approved A1 review R1-m; October 13, 2026"
  },
  {
    "reviewLabel": "R1-n",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "pin_reset_barbell_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Bilateral hinged rowing.",
    "changes": "A linked bar replaces independent DBs; the adjustable supported start interrupts continuous loading and creates a fresh start for each pull.",
    "load": "Set pins to allow the reviewed bottom reach with arms extended. A deliberately shortened partial requires another comparison; pins support the bar, not the torso.",
    "check": "Set pins to allow the reviewed bottom reach with arms extended. A deliberately shortened partial requires another comparison; pins support the bar, not the torso.",
    "why": "Bilateral hinged rowing.",
    "detail": "A linked bar replaces independent DBs; the adjustable supported start interrupts continuous loading and creates a fresh start for each pull.",
    "basis": "Michael-approved A1 review R1-n; October 13, 2026"
  },
  {
    "reviewLabel": "R1-o",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "gorilla_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Rowing while holding a hinge, with separate weights.",
    "changes": "One arm rows at a time, the opposite hand supplies floor-supported bracing, and each bell returns to the floor; this replaces simultaneous unsupported arm work.",
    "load": "Bell height must permit the starting reach and the grounded bell must stay stable. No automatic bilateral/per-side rep conversion.",
    "check": "Bell height must permit the starting reach and the grounded bell must stay stable. No automatic bilateral/per-side rep conversion.",
    "why": "Rowing while holding a hinge, with separate weights.",
    "detail": "One arm rows at a time, the opposite hand supplies floor-supported bracing, and each bell returns to the floor; this replaces simultaneous unsupported arm work.",
    "basis": "Michael-approved A1 review R1-o; October 13, 2026"
  },
  {
    "reviewLabel": "R1-i",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "suspension_low_row",
    "source": "horizontal_rows",
    "similarity": "broader",
    "keeps": "Horizontal rowing with both elbows bending.",
    "changes": "Pull the body toward the handles while controlling a suspended plank; body angle sets resistance instead of selecting two free weights.",
    "load": "Loses the loaded hinge hold and independent external-load selection. Keep the body controlled throughout; do not drop backward into the straps.",
    "check": "Loses the loaded hinge hold and independent external-load selection. Keep the body controlled throughout; do not drop backward into the straps.",
    "why": "Horizontal rowing with both elbows bending.",
    "detail": "Pull the body toward the handles while controlling a suspended plank; body angle sets resistance instead of selecting two free weights.",
    "basis": "Michael-approved A1 review R1-i; October 13, 2026"
  },
  {
    "reviewLabel": "R1-l",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "inverted_bar_row",
    "source": "horizontal_rows",
    "similarity": "broader",
    "keeps": "Bilateral horizontal pulling with elbow bending.",
    "changes": "Move the body toward a fixed bar while holding body alignment; bar height/body angle alter the resistance instead of choosing external weights.",
    "load": "Loses the loaded hinge hold and separate DB handling. A bar that can roll, lift off or unhook is not this setup.",
    "check": "Loses the loaded hinge hold and separate DB handling. A bar that can roll, lift off or unhook is not this setup.",
    "why": "Bilateral horizontal pulling with elbow bending.",
    "detail": "Move the body toward a fixed bar while holding body alignment; bar height/body angle alter the resistance instead of choosing external weights.",
    "basis": "Michael-approved A1 review R1-l; October 13, 2026"
  },
  {
    "reviewLabel": "R1-p",
    "originalId": "two_db_bent_over_row",
    "originalName": "Two-dumbbell bent-over row",
    "cardId": "renegade_row",
    "source": "horizontal_rows",
    "similarity": "broader",
    "keeps": "Free-weight rowing with elbow bending.",
    "changes": "A plank replaces the hip hinge, with alternating rowing plus a weight-bearing supporting arm and resistance to trunk rotation.",
    "load": "Supporting-arm or plank control can limit the task independently of rowing capacity. No push-up repetition or automatic DB-load transfer is included.",
    "check": "Supporting-arm or plank control can limit the task independently of rowing capacity. No push-up repetition or automatic DB-load transfer is included.",
    "why": "Free-weight rowing with elbow bending.",
    "detail": "A plank replaces the hip hinge, with alternating rowing plus a weight-bearing supporting arm and resistance to trunk rotation.",
    "basis": "Michael-approved A1 review R1-p; October 13, 2026"
  },
  {
    "reviewLabel": "R2-a",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "two_db_bent_over_row",
    "source": "horizontal_rows",
    "similarity": "close",
    "keeps": "Bilateral free-weight rowing and an unsupported hinge.",
    "changes": "Each hand controls its own weight and path rather than moving a shared bar.",
    "load": "Available DBs may limit heavy loading; total bar weight is not a DB prescription.",
    "check": "Available DBs may limit heavy loading; total bar weight is not a DB prescription.",
    "why": "Bilateral free-weight rowing and an unsupported hinge.",
    "detail": "Each hand controls its own weight and path rather than moving a shared bar.",
    "basis": "Michael-approved A1 review R2-a; October 13, 2026"
  },
  {
    "reviewLabel": "R2-b",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "two_kb_bent_over_row",
    "source": "horizontal_rows",
    "similarity": "close",
    "keeps": "Bilateral free-weight rowing and a held hinge.",
    "changes": "Each hand manages a separate hanging bell; the bar's linked grip is replaced by independent control and different clearance.",
    "load": "Available increments and grip/clearance can limit useful loading.",
    "check": "Available increments and grip/clearance can limit useful loading.",
    "why": "Bilateral free-weight rowing and a held hinge.",
    "detail": "Each hand manages a separate hanging bell; the bar's linked grip is replaced by independent control and different clearance.",
    "basis": "Michael-approved A1 review R2-b; October 13, 2026"
  },
  {
    "reviewLabel": "R2-c",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "incline_db_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Bilateral rowing.",
    "changes": "Chest support reduces the unsupported torso hold; separate DBs also allow independent arm paths instead of a shared bar.",
    "load": "Neither the original hinge endurance nor shared-bar handling is retained.",
    "check": "Neither the original hinge endurance nor shared-bar handling is retained.",
    "why": "Bilateral rowing.",
    "detail": "Chest support reduces the unsupported torso hold; separate DBs also allow independent arm paths instead of a shared bar.",
    "basis": "Michael-approved A1 review R2-c; October 13, 2026"
  },
  {
    "reviewLabel": "R2-d",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "seated_cable_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Bilateral pulling on a linked handle.",
    "changes": "The seated forward cable pull replaces the standing free-weight hinge; the trunk still steadies the torso against that pull.",
    "load": "Cable ratios/stack settings do not transfer from barbell weights.",
    "check": "Cable ratios/stack settings do not transfer from barbell weights.",
    "why": "Bilateral pulling on a linked handle.",
    "detail": "The seated forward cable pull replaces the standing free-weight hinge; the trunk still steadies the torso against that pull.",
    "basis": "Michael-approved A1 review R2-d; October 13, 2026"
  },
  {
    "reviewLabel": "R2-e",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "supported_tbar_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Two-arm rowing on linked handles.",
    "changes": "The pad supports the torso and the lever constrains the path; the original unsupported hold and freely steered bar are removed.",
    "load": "Check the station's loading/release arrangement. An unsupported landmine row is R2-g, not this record.",
    "check": "Check the station's loading/release arrangement. An unsupported landmine row is R2-g, not this record.",
    "why": "Two-arm rowing on linked handles.",
    "detail": "The pad supports the torso and the lever constrains the path; the original unsupported hold and freely steered bar are removed.",
    "basis": "Michael-approved A1 review R2-e; October 13, 2026"
  },
  {
    "reviewLabel": "R2-f",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "smith_bent_over_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Shared-bar bilateral row and torso held in a hinge.",
    "changes": "Rails remove free steering of the bar but do not hold the torso; stance must accommodate the station's rail path.",
    "load": "Do not infer reduced trunk loading or universal ease from the rails.",
    "check": "Do not infer reduced trunk loading or universal ease from the rails.",
    "why": "Shared-bar bilateral row and torso held in a hinge.",
    "detail": "Rails remove free steering of the bar but do not hold the torso; stance must accommodate the station's rail path.",
    "basis": "Michael-approved A1 review R2-f; October 13, 2026"
  },
  {
    "reviewLabel": "R2-g",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "landmine_tbar_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Shared-handle two-arm rowing with a held hinge.",
    "changes": "The anchored lever follows an arc instead of a freely steered bar; load position and the resistance through the repetition change.",
    "load": "Added plate weight does not equal the barbell-row load; check plate/body clearance.",
    "check": "Added plate weight does not equal the barbell-row load; check plate/body clearance.",
    "why": "Shared-handle two-arm rowing with a held hinge.",
    "detail": "The anchored lever follows an arc instead of a freely steered bar; load position and the resistance through the repetition change.",
    "basis": "Michael-approved A1 review R2-g; October 13, 2026"
  },
  {
    "reviewLabel": "R2-h",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "bench_single_arm_db_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Free-weight rowing with elbow bending.",
    "changes": "External hand/knee support replaces the unsupported hinge, and independent sides replace simultaneous shared-bar work.",
    "load": "Does not preserve the bilateral/trunk task or imply a per-side prescription.",
    "check": "Does not preserve the bilateral/trunk task or imply a per-side prescription.",
    "why": "Free-weight rowing with elbow bending.",
    "detail": "External hand/knee support replaces the unsupported hinge, and independent sides replace simultaneous shared-bar work.",
    "basis": "Michael-approved A1 review R2-h; October 13, 2026"
  },
  {
    "reviewLabel": "R2-j",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "pendlay_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Shared-bar bilateral rowing and an unsupported torso.",
    "changes": "Floor resets interrupt the suspended load and require a fresh start/re-brace; the near-horizontal floor-start position may also differ from the original held hinge.",
    "load": "Does not preserve continuous loading. Reaching the actual floor start must suit the plate diameter/setup; no automatic weight transfer.",
    "check": "Does not preserve continuous loading. Reaching the actual floor start must suit the plate diameter/setup; no automatic weight transfer.",
    "why": "Shared-bar bilateral rowing and an unsupported torso.",
    "detail": "Floor resets interrupt the suspended load and require a fresh start/re-brace; the near-horizontal floor-start position may also differ from the original held hinge.",
    "basis": "Michael-approved A1 review R2-j; October 13, 2026"
  },
  {
    "reviewLabel": "R2-k",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "single_arm_landmine_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Unsupported hinged rowing.",
    "changes": "Unilateral work replaces the shared two-hand bar and follows an anchored arc, changing both side-to-side control and load handling.",
    "load": "No hand/bench support; plate clearance can shorten travel. No automatic per-side prescription.",
    "check": "No hand/bench support; plate clearance can shorten travel. No automatic per-side prescription.",
    "why": "Unsupported hinged rowing.",
    "detail": "Unilateral work replaces the shared two-hand bar and follows an anchored arc, changing both side-to-side control and load handling.",
    "basis": "Michael-approved A1 review R2-k; October 13, 2026"
  },
  {
    "reviewLabel": "R2-m",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "meadows_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Bent-elbow rowing with a hinged torso.",
    "changes": "Thigh-braced unilateral work on an anchored arc replaces bilateral free-bar work; a more outward upper-arm path changes emphasis while retaining the recognizable row.",
    "load": "Distinct from the alongside-the-bar landmine row. Sleeve grip and plate travel must suit the setup.",
    "check": "Distinct from the alongside-the-bar landmine row. Sleeve grip and plate travel must suit the setup.",
    "why": "Bent-elbow rowing with a hinged torso.",
    "detail": "Thigh-braced unilateral work on an anchored arc replaces bilateral free-bar work; a more outward upper-arm path changes emphasis while retaining the recognizable row.",
    "basis": "Michael-approved A1 review R2-m; October 13, 2026"
  },
  {
    "reviewLabel": "R2-n",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "pin_reset_barbell_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Shared-bar bilateral rowing.",
    "changes": "Adjustable pin height defines the bottom position and a dead start replaces continuous suspended loading, changing the start/re-brace task.",
    "load": "Set pins to allow the reviewed bottom reach with arms extended. A deliberately shortened partial requires another comparison; pins support the bar, not the torso.",
    "check": "Set pins to allow the reviewed bottom reach with arms extended. A deliberately shortened partial requires another comparison; pins support the bar, not the torso.",
    "why": "Shared-bar bilateral rowing.",
    "detail": "Adjustable pin height defines the bottom position and a dead start replaces continuous suspended loading, changing the start/re-brace task.",
    "basis": "Michael-approved A1 review R2-n; October 13, 2026"
  },
  {
    "reviewLabel": "R2-o",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "gorilla_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Rowing from a held hinge.",
    "changes": "Alternating sides replace shared-bar bilateral work; floor resets and the grounded opposite hand change support and loading continuity.",
    "load": "Bell height must permit the starting reach and the grounded bell must stay stable. No automatic bilateral/per-side rep conversion.",
    "check": "Bell height must permit the starting reach and the grounded bell must stay stable. No automatic bilateral/per-side rep conversion.",
    "why": "Rowing from a held hinge.",
    "detail": "Alternating sides replace shared-bar bilateral work; floor resets and the grounded opposite hand change support and loading continuity.",
    "basis": "Michael-approved A1 review R2-o; October 13, 2026"
  },
  {
    "reviewLabel": "R2-i",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "suspension_low_row",
    "source": "horizontal_rows",
    "similarity": "broader",
    "keeps": "Bilateral horizontal rowing.",
    "changes": "The body moves as an aligned unit toward the handles; body angle changes resistance and trunk control becomes a suspended-plank task.",
    "load": "Loses the unsupported loaded hinge and barbell loading increments. No trust-fall or dynamic catch.",
    "check": "Loses the unsupported loaded hinge and barbell loading increments. No trust-fall or dynamic catch.",
    "why": "Bilateral horizontal rowing.",
    "detail": "The body moves as an aligned unit toward the handles; body angle changes resistance and trunk control becomes a suspended-plank task.",
    "basis": "Michael-approved A1 review R2-i; October 13, 2026"
  },
  {
    "reviewLabel": "R2-l",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "inverted_bar_row",
    "source": "horizontal_rows",
    "similarity": "broader",
    "keeps": "Bilateral horizontal pulling on a shared grip.",
    "changes": "Pull the body toward the bar while controlling alignment; angle changes resistance instead of loading a freely moved barbell.",
    "load": "Loses the externally loaded hinge hold and barbell-load selection; bar must remain secured against rolling/lifting/unhooking.",
    "check": "Loses the externally loaded hinge hold and barbell-load selection; bar must remain secured against rolling/lifting/unhooking.",
    "why": "Bilateral horizontal pulling on a shared grip.",
    "detail": "Pull the body toward the bar while controlling alignment; angle changes resistance instead of loading a freely moved barbell.",
    "basis": "Michael-approved A1 review R2-l; October 13, 2026"
  },
  {
    "reviewLabel": "R2-p",
    "originalId": "barbell_bent_over_row",
    "originalName": "Barbell bent-over row \u2014 overhand",
    "cardId": "renegade_row",
    "source": "horizontal_rows",
    "similarity": "broader",
    "keeps": "Bent-elbow rowing against external load.",
    "changes": "The bilateral hinged row becomes alternating rows in a plank; the supporting arm and trunk must manage bodyweight and turning forces.",
    "load": "Supporting-arm or plank control can limit the task independently of rowing capacity. No push-up repetition or automatic DB-load transfer is included.",
    "check": "Supporting-arm or plank control can limit the task independently of rowing capacity. No push-up repetition or automatic DB-load transfer is included.",
    "why": "Bent-elbow rowing against external load.",
    "detail": "The bilateral hinged row becomes alternating rows in a plank; the supporting arm and trunk must manage bodyweight and turning forces.",
    "basis": "Michael-approved A1 review R2-p; October 13, 2026"
  },
  {
    "reviewLabel": "R3-a",
    "originalId": "lat_pulldown",
    "originalName": "Lat pulldown \u2014 seated front, overhand bar",
    "cardId": "seated_dual_cable_pulldown",
    "source": "vertical_pulls",
    "similarity": "close",
    "keeps": "Bilateral bent-elbow overhead pulling with the body seated and restrained.",
    "changes": "Separate handles let each arm steer its own path; the hands are no longer linked by a long bar.",
    "load": "Two high pulleys alone do not establish a suitable seated/restraint setup; cable ratios may differ.",
    "check": "Two high pulleys alone do not establish a suitable seated/restraint setup; cable ratios may differ.",
    "why": "Bilateral bent-elbow overhead pulling with the body seated and restrained.",
    "detail": "Separate handles let each arm steer its own path; the hands are no longer linked by a long bar.",
    "basis": "Michael-approved A1 review R3-a; October 13, 2026"
  },
  {
    "reviewLabel": "R3-b",
    "originalId": "lat_pulldown",
    "originalName": "Lat pulldown \u2014 seated front, overhand bar",
    "cardId": "lever_front_pulldown",
    "source": "vertical_pulls",
    "similarity": "close",
    "keeps": "Bilateral overhead-to-body pulling with elbow bending and seated restraint.",
    "changes": "Guided lever arcs replace the cable/bar; each arm moves its own lever and the palms-facing grip changes hand/forearm position.",
    "load": "Green applies to this front-pulldown path, not a high-row machine; fixed paths and starting reach may not match.",
    "check": "Green applies to this front-pulldown path, not a high-row machine; fixed paths and starting reach may not match.",
    "why": "Bilateral overhead-to-body pulling with elbow bending and seated restraint.",
    "detail": "Guided lever arcs replace the cable/bar; each arm moves its own lever and the palms-facing grip changes hand/forearm position.",
    "basis": "Michael-approved A1 review R3-b; October 13, 2026"
  },
  {
    "reviewLabel": "R3-e",
    "originalId": "lat_pulldown",
    "originalName": "Lat pulldown \u2014 seated front, overhand bar",
    "cardId": "assisted_pullup",
    "source": "vertical_pulls",
    "similarity": "close",
    "keeps": "Bent-elbow vertical pulling from overhead.",
    "changes": "The body rises toward fixed handles while the platform supports part of its weight; assistance replaces selecting cable resistance and remains during descent.",
    "load": "More counterweight generally supplies more help. Follow the station's entry/exit controls; never change its pin while loaded.",
    "check": "More counterweight generally supplies more help. Follow the station's entry/exit controls; never change its pin while loaded.",
    "why": "Bent-elbow vertical pulling from overhead.",
    "detail": "The body rises toward fixed handles while the platform supports part of its weight; assistance replaces selecting cable resistance and remains during descent.",
    "basis": "Michael-approved A1 review R3-e; October 13, 2026"
  },
  {
    "reviewLabel": "R3-i",
    "originalId": "lat_pulldown",
    "originalName": "Lat pulldown \u2014 seated front, overhand bar",
    "cardId": "floor_assisted_pullup",
    "source": "vertical_pulls",
    "similarity": "close",
    "keeps": "Bent-elbow vertical pulling; the body rises toward the bar.",
    "changes": "Pressing through the foot/feet supplies adjustable help on both ascent and descent, so the arms need not move all bodyweight. One foot changes the support base and can add uneven leg/hip effort.",
    "load": "Assistance is self-regulated, not a measured counterweight. Bar height must allow overhead reach and useful travel while feet stay in contact; leaning back into a row changes the task.",
    "check": "Assistance is self-regulated, not a measured counterweight. Bar height must allow overhead reach and useful travel while feet stay in contact; leaning back into a row changes the task.",
    "why": "Bent-elbow vertical pulling; the body rises toward the bar.",
    "detail": "Pressing through the foot/feet supplies adjustable help on both ascent and descent, so the arms need not move all bodyweight. One foot changes the support base and can add uneven leg/hip effort.",
    "basis": "Michael-approved A1 review R3-i; October 13, 2026"
  },
  {
    "reviewLabel": "R3-j",
    "originalId": "lat_pulldown",
    "originalName": "Lat pulldown \u2014 seated front, overhand bar",
    "cardId": "overhead_band_assisted_pullup",
    "source": "vertical_pulls",
    "similarity": "close",
    "keeps": "Bent-elbow vertical bodyweight pulling.",
    "changes": "The stretched band supports the feet through both phases; its changing stretch means the amount of help changes through the repetition.",
    "load": "Band stretch limits, foot retention and controlled entry/exit matter; band color is not a universal assistance value. No stepping out of a tensioned band mid-repetition to make a negative.",
    "check": "Band stretch limits, foot retention and controlled entry/exit matter; band color is not a universal assistance value. No stepping out of a tensioned band mid-repetition to make a negative.",
    "why": "Bent-elbow vertical bodyweight pulling.",
    "detail": "The stretched band supports the feet through both phases; its changing stretch means the amount of help changes through the repetition.",
    "basis": "Michael-approved A1 review R3-j; October 13, 2026"
  },
  {
    "reviewLabel": "R3-k",
    "originalId": "lat_pulldown",
    "originalName": "Lat pulldown \u2014 seated front, overhand bar",
    "cardId": "dip_bar_band_assisted_pullup",
    "source": "vertical_pulls",
    "similarity": "close",
    "keeps": "Bent-elbow vertical pull toward an overhead bar.",
    "changes": "The band supports the knees from below while the body rises and lowers; help depends on band stretch and this anchor geometry, not a selected stack.",
    "load": "Dip-bar stability, band retention/stretch and sufficient knee/torso travel are required; hands remain on the overhead bar.",
    "check": "Dip-bar stability, band retention/stretch and sufficient knee/torso travel are required; hands remain on the overhead bar.",
    "why": "Bent-elbow vertical pull toward an overhead bar.",
    "detail": "The band supports the knees from below while the body rises and lowers; help depends on band stretch and this anchor geometry, not a selected stack.",
    "basis": "Michael-approved A1 review R3-k; October 13, 2026"
  },
  {
    "reviewLabel": "R3-l",
    "originalId": "lat_pulldown",
    "originalName": "Lat pulldown \u2014 seated front, overhand bar",
    "cardId": "trx_floor_assisted_pullup",
    "source": "vertical_pulls",
    "similarity": "close",
    "keeps": "Bent-elbow overhead-to-body pulling, with adjustable leg help.",
    "changes": "The body rises beneath movable handles while the feet share the load; handle position and leg effort must be controlled rather than pulling a restrained cable stack.",
    "load": "Stay upright beneath the anchor: an inclined plank would be the low row. Anchor/strap height must permit overhead reach and travel without losing foot contact.",
    "check": "Stay upright beneath the anchor: an inclined plank would be the low row. Anchor/strap height must permit overhead reach and travel without losing foot contact.",
    "why": "Bent-elbow overhead-to-body pulling, with adjustable leg help.",
    "detail": "The body rises beneath movable handles while the feet share the load; handle position and leg effort must be controlled rather than pulling a restrained cable stack.",
    "basis": "Michael-approved A1 review R3-l; October 13, 2026"
  },
  {
    "reviewLabel": "R3-m",
    "originalId": "lat_pulldown",
    "originalName": "Lat pulldown \u2014 seated front, overhand bar",
    "cardId": "ring_floor_assisted_pullup",
    "source": "vertical_pulls",
    "similarity": "close",
    "keeps": "Bent-elbow overhead pulling with foot assistance.",
    "changes": "Independently suspended rings can turn and move separately, allowing hand-path adjustment but adding handle control; legs regulate assistance through both phases.",
    "load": "Keep the torso beneath the hands for a vertical pull. Correct ring height/spacing and foot contact are essential; this is not a leaning ring row.",
    "check": "Keep the torso beneath the hands for a vertical pull. Correct ring height/spacing and foot contact are essential; this is not a leaning ring row.",
    "why": "Bent-elbow overhead pulling with foot assistance.",
    "detail": "Independently suspended rings can turn and move separately, allowing hand-path adjustment but adding handle control; legs regulate assistance through both phases.",
    "basis": "Michael-approved A1 review R3-m; October 13, 2026"
  },
  {
    "reviewLabel": "R3-g",
    "originalId": "lat_pulldown",
    "originalName": "Lat pulldown \u2014 seated front, overhand bar",
    "cardId": "overhand_pullup",
    "source": "vertical_pulls",
    "similarity": "close",
    "keeps": "Bilateral bent-elbow vertical pull.",
    "changes": "Bodyweight supplies the baseline resistance and the body moves toward the bar; load cannot be dialed below that baseline without assistance.",
    "load": "May be unsuitable for the intended volume even when a pulldown is manageable. This is not automatically an available or achievable option.",
    "check": "May be unsuitable for the intended volume even when a pulldown is manageable. This is not automatically an available or achievable option.",
    "why": "Bilateral bent-elbow vertical pull.",
    "detail": "Bodyweight supplies the baseline resistance and the body moves toward the bar; load cannot be dialed below that baseline without assistance.",
    "basis": "Michael-approved A1 review R3-g; October 13, 2026"
  },
  {
    "reviewLabel": "R3-c",
    "originalId": "lat_pulldown",
    "originalName": "Lat pulldown \u2014 seated front, overhand bar",
    "cardId": "kneeling_two_cable_pulldown",
    "source": "vertical_pulls",
    "similarity": "some",
    "keeps": "Bilateral bent-elbow overhead pull with cable resistance.",
    "changes": "Removing the seat/thigh restraint means body position and remaining grounded can limit the pull before the chosen stack does.",
    "load": "Needs enough overhead travel without the cables turning this into a forward row; no improvised body tie-down.",
    "check": "Needs enough overhead travel without the cables turning this into a forward row; no improvised body tie-down.",
    "why": "Bilateral bent-elbow overhead pull with cable resistance.",
    "detail": "Removing the seat/thigh restraint means body position and remaining grounded can limit the pull before the chosen stack does.",
    "basis": "Michael-approved A1 review R3-c; October 13, 2026"
  },
  {
    "reviewLabel": "R3-d",
    "originalId": "lat_pulldown",
    "originalName": "Lat pulldown \u2014 seated front, overhand bar",
    "cardId": "half_kneeling_cable_pulldown",
    "source": "vertical_pulls",
    "similarity": "some",
    "keeps": "One side of the original bent-elbow overhead action.",
    "changes": "Independent arm work and an unrestrained split base require control of leaning/turning; the two arms no longer pull together.",
    "load": "No automatic bilateral-to-per-side rep conversion or silent mapping of every single-arm pulldown to this posture.",
    "check": "No automatic bilateral-to-per-side rep conversion or silent mapping of every single-arm pulldown to this posture.",
    "why": "One side of the original bent-elbow overhead action.",
    "detail": "Independent arm work and an unrestrained split base require control of leaning/turning; the two arms no longer pull together.",
    "basis": "Michael-approved A1 review R3-d; October 13, 2026"
  },
  {
    "reviewLabel": "R3-f",
    "originalId": "lat_pulldown",
    "originalName": "Lat pulldown \u2014 seated front, overhand bar",
    "cardId": "kneeling_band_pulldown",
    "source": "vertical_pulls",
    "similarity": "some",
    "keeps": "Bilateral bent-elbow overhead pull.",
    "changes": "Band tension changes with stretch, so the challenge varies through the repetition; seat and thigh restraint are absent.",
    "load": "Band/anchor travel must stay within the product's limits; available tension may not meet the loading goal.",
    "check": "Band/anchor travel must stay within the product's limits; available tension may not meet the loading goal.",
    "why": "Bilateral bent-elbow overhead pull.",
    "detail": "Band tension changes with stretch, so the challenge varies through the repetition; seat and thigh restraint are absent.",
    "basis": "Michael-approved A1 review R3-f; October 13, 2026"
  },
  {
    "reviewLabel": "R3-o",
    "originalId": "lat_pulldown",
    "originalName": "Lat pulldown \u2014 seated front, overhand bar",
    "cardId": "inverted_bar_row",
    "source": "vertical_pulls",
    "similarity": "broader",
    "keeps": "Bilateral pulling with elbow bending and body control; useful horizontal pulling practice in Michael's coaching approach.",
    "changes": "Pulling the chest toward a low bar replaces the overhead vertical path; angle changes how much bodyweight is resisted.",
    "load": "Does not preserve overhead reach or vertical pulling. Secure the bar against rolling/lifting/unhooking; not a demonstrated readiness threshold for a first pull-up.",
    "check": "Does not preserve overhead reach or vertical pulling. Secure the bar against rolling/lifting/unhooking; not a demonstrated readiness threshold for a first pull-up.",
    "why": "Bilateral pulling with elbow bending and body control; useful horizontal pulling practice in Michael's coaching approach.",
    "detail": "Pulling the chest toward a low bar replaces the overhead vertical path; angle changes how much bodyweight is resisted.",
    "basis": "Michael-approved A1 review R3-o; October 13, 2026"
  },
  {
    "reviewLabel": "R3-p",
    "originalId": "lat_pulldown",
    "originalName": "Lat pulldown \u2014 seated front, overhand bar",
    "cardId": "suspension_low_row",
    "source": "vertical_pulls",
    "similarity": "broader",
    "keeps": "Bilateral bent-elbow pulling and body control.",
    "changes": "Move an inclined body toward handles while controlling alignment and handle movement; this horizontal row replaces the seated overhead pull.",
    "load": "Loses the vertical overhead path and cable-load selection; a useful broader alternative, not equivalent overhead practice.",
    "check": "Loses the vertical overhead path and cable-load selection; a useful broader alternative, not equivalent overhead practice.",
    "why": "Bilateral bent-elbow pulling and body control.",
    "detail": "Move an inclined body toward handles while controlling alignment and handle movement; this horizontal row replaces the seated overhead pull.",
    "basis": "Michael-approved A1 review R3-p; October 13, 2026"
  },
  {
    "reviewLabel": "R3-n",
    "originalId": "lat_pulldown",
    "originalName": "Lat pulldown \u2014 seated front, overhand bar",
    "cardId": "negative_pullup",
    "source": "vertical_pulls",
    "similarity": "broader",
    "keeps": "Controlled lowering through the vertical bent-elbow pull-up path.",
    "changes": "The legs/support handle access to the top, then the arms control bodyweight downward. This removes the requirement to pull all bodyweight up but keeps the unsupported lowering demand.",
    "load": "Does not replace the original full up/down repetition. Being unable to pull up does not establish an ability to lower under control. Use supported top access before removing foot support; do not leave a moving machine pad or tensioned band mid-repetition.",
    "check": "Does not replace the original full up/down repetition. Being unable to pull up does not establish an ability to lower under control. Use supported top access before removing foot support; do not leave a moving machine pad or tensioned band mid-repetition.",
    "why": "Controlled lowering through the vertical bent-elbow pull-up path.",
    "detail": "The legs/support handle access to the top, then the arms control bodyweight downward. This removes the requirement to pull all bodyweight up but keeps the unsupported lowering demand.",
    "basis": "Michael-approved A1 review R3-n; October 13, 2026"
  },
  {
    "reviewLabel": "R3-h",
    "originalId": "lat_pulldown",
    "originalName": "Lat pulldown \u2014 seated front, overhand bar",
    "cardId": "straight_arm_cable_pulldown",
    "source": "vertical_pulls",
    "similarity": "broader",
    "keeps": "Resisted movement of the upper arms down toward the body.",
    "changes": "Holding elbow angle nearly fixed removes the repeated elbow-bending task, so this is a shoulder-dominant pull rather than the original combined shoulder/elbow action.",
    "load": "Partial option only; it does not replace a full bent-elbow vertical pull.",
    "check": "Partial option only; it does not replace a full bent-elbow vertical pull.",
    "why": "Resisted movement of the upper arms down toward the body.",
    "detail": "Holding elbow angle nearly fixed removes the repeated elbow-bending task, so this is a shoulder-dominant pull rather than the original combined shoulder/elbow action.",
    "basis": "Michael-approved A1 review R3-h; October 13, 2026"
  },
  {
    "reviewLabel": "R4-a",
    "originalId": "bench_single_arm_db_row",
    "originalName": "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    "cardId": "hand_supported_db_row",
    "source": "horizontal_rows",
    "similarity": "close",
    "keeps": "One-arm free-weight row with external free-hand support.",
    "changes": "Replacing the supported knee with a planted foot changes how the base supports the hips; stance and hand pressure help keep the torso steady.",
    "load": "Handhold height must permit the intended hinge; not the unsupported version.",
    "check": "Handhold height must permit the intended hinge; not the unsupported version.",
    "why": "One-arm free-weight row with external free-hand support.",
    "detail": "Replacing the supported knee with a planted foot changes how the base supports the hips; stance and hand pressure help keep the torso steady.",
    "basis": "Michael-approved A1 review R4-a; October 13, 2026"
  },
  {
    "reviewLabel": "R4-b",
    "originalId": "bench_single_arm_db_row",
    "originalName": "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    "cardId": "bench_single_arm_kb_row",
    "source": "horizontal_rows",
    "similarity": "close",
    "keeps": "Unilateral gravity-loaded row and the same support arrangement.",
    "changes": "The bell hangs below the grip, changing handle feel, clearance and available weight increments.",
    "load": "Keep bell clear of bench/floor; weight availability may limit the option.",
    "check": "Keep bell clear of bench/floor; weight availability may limit the option.",
    "why": "Unilateral gravity-loaded row and the same support arrangement.",
    "detail": "The bell hangs below the grip, changing handle feel, clearance and available weight increments.",
    "basis": "Michael-approved A1 review R4-b; October 13, 2026"
  },
  {
    "reviewLabel": "R4-c",
    "originalId": "bench_single_arm_db_row",
    "originalName": "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    "cardId": "single_arm_incline_db_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "One-arm free-weight rowing.",
    "changes": "Chest contact replaces the hand/knee support arrangement, reducing the need to hold the torso over that base while controlling a one-sided load.",
    "load": "Remains unilateral; chest support does not eliminate all twisting demand. Check bench stability and weight clearance.",
    "check": "Remains unilateral; chest support does not eliminate all twisting demand. Check bench stability and weight clearance.",
    "why": "One-arm free-weight rowing.",
    "detail": "Chest contact replaces the hand/knee support arrangement, reducing the need to hold the torso over that base while controlling a one-sided load.",
    "basis": "Michael-approved A1 review R4-c; October 13, 2026"
  },
  {
    "reviewLabel": "R4-d",
    "originalId": "bench_single_arm_db_row",
    "originalName": "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    "cardId": "hand_supported_cable_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "One-arm rowing with free-hand support.",
    "changes": "The cable pulls toward the pulley rather than vertically down, changing the line of resistance and what the torso/hand support must oppose.",
    "load": "Needs clear cable travel and a usable support throughout; a freestanding cable row is a different setup.",
    "check": "Needs clear cable travel and a usable support throughout; a freestanding cable row is a different setup.",
    "why": "One-arm rowing with free-hand support.",
    "detail": "The cable pulls toward the pulley rather than vertically down, changing the line of resistance and what the torso/hand support must oppose.",
    "basis": "Michael-approved A1 review R4-d; October 13, 2026"
  },
  {
    "reviewLabel": "R4-e",
    "originalId": "bench_single_arm_db_row",
    "originalName": "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    "cardId": "single_arm_chest_supported_machine_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "One side rows against resistance with external torso support.",
    "changes": "The chest pad and guided lever reduce torso-holding and handle-steering demands relative to the free DB.",
    "load": "A machine with linked arms may not permit this setup; do not assume independent use.",
    "check": "A machine with linked arms may not permit this setup; do not assume independent use.",
    "why": "One side rows against resistance with external torso support.",
    "detail": "The chest pad and guided lever reduce torso-holding and handle-steering demands relative to the free DB.",
    "basis": "Michael-approved A1 review R4-e; October 13, 2026"
  },
  {
    "reviewLabel": "R4-f",
    "originalId": "bench_single_arm_db_row",
    "originalName": "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    "cardId": "incline_db_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Gravity-loaded rowing with external torso support.",
    "changes": "The pad supports the torso and both arms work together; it removes the separate-side task and changes one-sided trunk control.",
    "load": "Does not preserve unilateral work; no per-side-to-bilateral rep conversion.",
    "check": "Does not preserve unilateral work; no per-side-to-bilateral rep conversion.",
    "why": "Gravity-loaded rowing with external torso support.",
    "detail": "The pad supports the torso and both arms work together; it removes the separate-side task and changes one-sided trunk control.",
    "basis": "Michael-approved A1 review R4-f; October 13, 2026"
  },
  {
    "reviewLabel": "R4-i",
    "originalId": "bench_single_arm_db_row",
    "originalName": "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    "cardId": "single_arm_landmine_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Unilateral rowing with elbow bending.",
    "changes": "Removing hand/knee bench support adds the task of holding the hinge and resisting turning; the anchored arc also replaces the DB's freely steered path.",
    "load": "This setup has no free-hand brace and is not a Meadows row. Plate clearance and available loads need checking independently.",
    "check": "This setup has no free-hand brace and is not a Meadows row. Plate clearance and available loads need checking independently.",
    "why": "Unilateral rowing with elbow bending.",
    "detail": "Removing hand/knee bench support adds the task of holding the hinge and resisting turning; the anchored arc also replaces the DB's freely steered path.",
    "basis": "Michael-approved A1 review R4-i; October 13, 2026"
  },
  {
    "reviewLabel": "R4-k",
    "originalId": "bench_single_arm_db_row",
    "originalName": "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    "cardId": "meadows_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Unilateral bent-elbow rowing with a brace.",
    "changes": "Thigh bracing replaces hand/knee bench support; sleeve grip, anchored arc and a more outward upper-arm path change handling and emphasis.",
    "load": "Distinct from the alongside-the-bar landmine row. Sleeve grip and plate travel must suit the setup.",
    "check": "Distinct from the alongside-the-bar landmine row. Sleeve grip and plate travel must suit the setup.",
    "why": "Unilateral bent-elbow rowing with a brace.",
    "detail": "Thigh bracing replaces hand/knee bench support; sleeve grip, anchored arc and a more outward upper-arm path change handling and emphasis.",
    "basis": "Michael-approved A1 review R4-k; October 13, 2026"
  },
  {
    "reviewLabel": "R4-l",
    "originalId": "bench_single_arm_db_row",
    "originalName": "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    "cardId": "kroc_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "Supported unilateral DB rowing.",
    "changes": "Grounded feet replace knee support and the named execution permits some body movement rather than requiring a deliberately still torso.",
    "load": "Do not import maximal-load, high-repetition, failure or progression instructions. This is a row rather than a clean-like heave; ordinary DB rows also allow shoulder-blade movement.",
    "check": "Do not import maximal-load, high-repetition, failure or progression instructions. This is a row rather than a clean-like heave; ordinary DB rows also allow shoulder-blade movement.",
    "why": "Supported unilateral DB rowing.",
    "detail": "Grounded feet replace knee support and the named execution permits some body movement rather than requiring a deliberately still torso.",
    "basis": "Michael-approved A1 review R4-l; October 13, 2026"
  },
  {
    "reviewLabel": "R4-m",
    "originalId": "bench_single_arm_db_row",
    "originalName": "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    "cardId": "gorilla_row",
    "source": "horizontal_rows",
    "similarity": "some",
    "keeps": "One arm rows while the other supplies support.",
    "changes": "Floor-level bell support replaces the bench hand/knee arrangement; both feet hold the hinged base and alternating floor resets change the work sequence.",
    "load": "Bell height must permit the starting reach and the grounded bell must stay stable. No automatic bilateral/per-side rep conversion.",
    "check": "Bell height must permit the starting reach and the grounded bell must stay stable. No automatic bilateral/per-side rep conversion.",
    "why": "One arm rows while the other supplies support.",
    "detail": "Floor-level bell support replaces the bench hand/knee arrangement; both feet hold the hinged base and alternating floor resets change the work sequence.",
    "basis": "Michael-approved A1 review R4-m; October 13, 2026"
  },
  {
    "reviewLabel": "R4-g",
    "originalId": "bench_single_arm_db_row",
    "originalName": "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    "cardId": "single_arm_suspension_row",
    "source": "horizontal_rows",
    "similarity": "broader",
    "keeps": "One-arm horizontal pulling.",
    "changes": "The unsupported body moves toward one handle; controlling a suspended plank and resisting turning replaces bench bracing.",
    "load": "Loses external torso support and independently selected DB loading; body angle is not a DB-load conversion.",
    "check": "Loses external torso support and independently selected DB loading; body angle is not a DB-load conversion.",
    "why": "One-arm horizontal pulling.",
    "detail": "The unsupported body moves toward one handle; controlling a suspended plank and resisting turning replaces bench bracing.",
    "basis": "Michael-approved A1 review R4-g; October 13, 2026"
  },
  {
    "reviewLabel": "R4-h",
    "originalId": "bench_single_arm_db_row",
    "originalName": "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    "cardId": "seated_band_row",
    "source": "horizontal_rows",
    "similarity": "broader",
    "keeps": "Rowing with elbow bending.",
    "changes": "Two arms pull against stretching resistance; seated trunk control replaces the original bench support and separate-side work.",
    "load": "Loses unilateral loading and the original support arrangement; limited band tension may be insufficient.",
    "check": "Loses unilateral loading and the original support arrangement; limited band tension may be insufficient.",
    "why": "Rowing with elbow bending.",
    "detail": "Two arms pull against stretching resistance; seated trunk control replaces the original bench support and separate-side work.",
    "basis": "Michael-approved A1 review R4-h; October 13, 2026"
  },
  {
    "reviewLabel": "R4-j",
    "originalId": "bench_single_arm_db_row",
    "originalName": "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    "cardId": "inverted_bar_row",
    "source": "horizontal_rows",
    "similarity": "broader",
    "keeps": "Horizontal pulling with elbow bending.",
    "changes": "Both arms move the body toward a fixed bar while controlling body alignment, replacing the supported single-arm external-load task.",
    "load": "Loses unilateral work, bench support and independent DB-load selection. Check bar retention; body angle is not a per-side load conversion.",
    "check": "Loses unilateral work, bench support and independent DB-load selection. Check bar retention; body angle is not a per-side load conversion.",
    "why": "Horizontal pulling with elbow bending.",
    "detail": "Both arms move the body toward a fixed bar while controlling body alignment, replacing the supported single-arm external-load task.",
    "basis": "Michael-approved A1 review R4-j; October 13, 2026"
  },
  {
    "reviewLabel": "R4-n",
    "originalId": "bench_single_arm_db_row",
    "originalName": "Single-arm dumbbell row \u2014 hand-and-knee bench support",
    "cardId": "renegade_row",
    "source": "horizontal_rows",
    "similarity": "broader",
    "keeps": "Unilateral DB rowing with opposite-arm support.",
    "changes": "A plank replaces bench hand/knee support; bodyweight-bearing through the other arm and resisting trunk rotation become substantial parts of the task.",
    "load": "Supporting-arm or plank control can limit the task independently of rowing capacity. No push-up repetition or automatic DB-load transfer is included.",
    "check": "Supporting-arm or plank control can limit the task independently of rowing capacity. No push-up repetition or automatic DB-load transfer is included.",
    "why": "Unilateral DB rowing with opposite-arm support.",
    "detail": "A plank replaces bench hand/knee support; bodyweight-bearing through the other arm and resisting trunk rotation become substantial parts of the task.",
    "basis": "Michael-approved A1 review R4-n; October 13, 2026"
  }
];
var a1AllComparisons = approved.map((edge) => ({ ...edge, ...a1Comparisons.find((prior) => prior.reviewLabel === edge.reviewLabel), source: edge.source, review: review4 }));

// ../gym-swap-site/dist/prototype/content.mjs?v=2.8.0
var review5 = { batch: "content-expansion-2026-10-08", basis: "Michael approved the scope and coaching distinctions; Codex drafted and source-checked the implementation wording." };
var baseContent = [
  {
    id: "goblet_squat",
    name: "Goblet squat",
    focus: "A loaded standing squat for your legs and hips.",
    expect: "Hold one weight at your chest. Balance and trunk control matter.",
    needs: "One dumbbell OR kettlebell \xB7 standing space",
    requires: [["goblet_dumbbell", "goblet_kettlebell"], "standing_space"],
    aliases: ["goblet squat", "goblet", "loaded goblet squat"],
    cue: "Keep the weight close; lower with control.",
    setup: "Stand with your feet in a position that lets you squat while staying balanced. Hold one dumbbell or kettlebell securely at your chest with both hands.",
    cues: ["Bend at the hips and knees, keeping the weight close and your feet planted.", "Lower only through a range where you can control your balance, pelvis, and back.", "Push through your feet to return to standing while keeping the weight steady."],
    context: "Establish a controlled bodyweight squat before adding a goblet load. Adding weight increases the demand compared with the same unweighted movement; your trunk and upper back help maintain your position. The app cannot assess squat control.",
    references: [{ label: "NASM: Goblet squat", url: "https://www.nasm.org/resource-center/exercise-library/goblet-squat", scope: "Exercise identification and basic setup; no universal suitability, injury-prevention, or muscle-activation ranking is adopted." }]
  },
  {
    id: "dumbbell_rdl",
    name: "Dumbbell Romanian deadlift",
    focus: "A loaded hip hinge for the hamstrings and glutes.",
    expect: "Two separate weights allow more freedom in hand position than a bar.",
    needs: "Two suitable dumbbells \xB7 standing space",
    requires: ["dumbbells", "standing_space"],
    aliases: ["db rdl", "dumbbell rdl", "dumbbell romanian deadlift", "two dumbbell rdl"],
    cue: "Hips back, weights close; no need to reach the floor.",
    setup: "Use two dumbbells you can handle for this hinge, with clear space to pick them up and set them down. Start standing with feet about hip-width apart and one weight in each hand.",
    cues: ["Keep a slight knee bend and your torso steady as your hips move backward.", "Let the weights travel close to your legs; stop the descent before you lose control of your position.", "Bring the hips forward to stand, without leaning backward."],
    context: "This is the two-weight, two-foot version. Independent weights allow hand-position flexibility. Lighter dumbbells can offer less added weight than a full-size barbell, but a lighter weight does not establish hinge technique. One-sided loading is a different variation.",
    references: [{ label: "NASM: Dumbbell Romanian deadlift", url: "https://www.nasm.org/resource-center/exercise-library/dumbbell-romanian-deadlift", scope: "Exercise identity and hip-hinge mechanics; no reduced-joint-stress or injury-prevention claim is adopted." }]
  },
  {
    id: "floor_bridge",
    name: "Bodyweight glute bridge",
    focus: "Hip extension with your upper back on the floor.",
    expect: "Lift your hips using bodyweight resistance and floor support.",
    needs: "Clear floor space to lie down, plant feet, and lift hips",
    requires: ["bridge_space"],
    aliases: ["glute bridge", "bodyweight glute bridge", "floor bridge", "hip bridge"],
    cue: "Lift your pelvis without arching for extra height.",
    setup: "Lie on your back with knees bent and feet planted on a stable floor surface. Keep the upper back supported; a mat is optional padding.",
    cues: ["Press through your feet and lift the pelvis with control.", "Stop the lift before gaining height by excessively arching the lower back.", "Lower your hips smoothly to the floor."],
    context: "This entry uses bodyweight and keeps the upper back on the floor. It is a different setup from a shoulders-elevated hip thrust; adding a bench or external load would be a separate variation.",
    references: [{ label: "ACE: Glute bridge", url: "https://www.acefitness.org/resources/everyone/exercise-library/49/glute-bridge/", scope: "Floor setup and controlled hip extension." }]
  },
  {
    id: "standing_hip_hinge",
    name: "Standing hip-hinge practice",
    focus: "Practice moving at the hips without added weight.",
    expect: "Move your hips back as your torso tips forward.",
    needs: "Clear standing space",
    requires: ["standing_space"],
    aliases: ["hip hinge practice", "standing hip hinge", "unloaded hinge", "hip hinge drill"],
    cue: "Slight knee bend; move from the hips.",
    setup: "Stand with feet planted and space around you. Begin with a slight knee bend and no added weight.",
    cues: ["Move your hips backward while the torso tips forward as a unit.", "Use only a range where you can keep the movement controlled.", "Bring your hips forward to return to standing."],
    context: "The purpose here is movement practice. It does not replace the loading of an RDL or certify readiness to lift.",
    references: [{ label: "ACE: Romanian deadlift teaching discussion", url: "https://www.acefitness.org/continuing-education/certified/may-2025/8865/the-ace-do-it-better-series-the-romanian-deadlift/", scope: "Unloaded standing hinge description only; no clinical claims or readiness thresholds are adopted." }]
  },
  {
    id: "bird_dog",
    name: "Bird dog",
    focus: "Practice trunk control while opposite limbs reach.",
    expect: "From hands and knees, reach one arm and the opposite leg.",
    needs: "Suitable floor surface \xB7 clear arm and leg reaching space",
    requires: ["reaching_space"],
    aliases: ["bird dog", "birddog", "quadruped bird dog", "opposite arm leg reach"],
    cue: "Keep the pelvis steady; reach only as far as you can control.",
    setup: "Start on hands and knees, with hands under shoulders and knees under hips. Leave room ahead and behind for your limbs; a mat is optional padding.",
    cues: ["Reach one arm and the opposite leg without twisting the pelvis or increasing your back arch.", "Use a shorter reach if needed to keep your position steady.", "Return with control, then explore the other side."],
    context: "This is quadruped trunk-control practice, not a standing single-leg hinge or a substitute for every exercise involving the core.",
    references: [{ label: "ACE: Bird dog", url: "https://www.acefitness.org/resources/everyone/exercise-library/14/bird-dog/", scope: "Quadruped setup, opposite-limb reach, and controlled trunk position." }]
  },
  {
    id: "wall_calf_stretch",
    name: "Wall-supported calf stretch",
    focus: "Explore a calf stretch with the rear knee straight.",
    expect: "A held position with your hands supported on a wall.",
    needs: "Fixed wall \xB7 clear standing space",
    requires: ["fixed_wall", "standing_space"],
    aliases: ["calf stretch", "wall calf stretch", "standing calf stretch", "straight knee calf stretch"],
    cue: "Rear heel down and knee straight; avoid forcing the stretch.",
    setup: "Face a fixed wall and rest your hands against it. Step one foot back with enough space to keep that heel on the floor.",
    cues: ["Keep the rear knee straight and the heel down.", "Bend the front knee and gently shift toward the wall.", "Hold without bouncing or forcing the position; release smoothly and change sides."],
    context: "This is flexibility practice. The bent-knee version has a different setup and is not included in this entry. It is not a calf-raise replacement or a treatment for ankle symptoms.",
    references: [{ label: "NHS: Flexibility exercises \u2014 calf stretch", url: "https://www.nhs.uk/live-well/exercise/flexibility-exercises/", scope: "Wall-supported, rear-knee-straight calf stretch; no schedule or treatment claim is adopted." }]
  }
].map((record3) => ({ ...record3, review: review5, sourceChecked: "2026-10-08" }));
var content = [...baseContent, ...day1Content.map(applyB4Aliases), ...a1Content, ...a1MoreRows, ...a1Pulls, ...a2Content, ...a3Content, ...a4Content, ...b1Content, ...b2Content, ...b3Content, ...b4Content];
var baseComparisons = [
  {
    originalId: "leg_press",
    originalName: "Leg press",
    cardId: "goblet_squat",
    source: "squats",
    keeps: "Hip-and-knee movement for your legs.",
    changes: "Standing balance and trunk control replace machine support.",
    load: "Not automatically easier. Leg-press weights do not convert directly.",
    why: "Keeps a hip-and-knee movement involving the quadriceps and glutes.",
    detail: "A leg press supports the torso. The goblet squat requires standing balance while holding the load; this may limit you before your legs do. Depending on the machine and its minimum resistance, a leg press can offer less resistance than a standing bodyweight squat. This is not true of every machine.",
    basis: "Michael\u2019s approved squat comparison and knowledge_base/02_squats.md"
  },
  {
    originalId: "barbell_rdl",
    originalName: "Barbell Romanian deadlift",
    cardId: "dumbbell_rdl",
    source: "hinges_and_hip_extension",
    keeps: "A loaded hip hinge for hamstrings and glutes.",
    changes: "Independent hand positions instead of a fixed bar.",
    load: "Dumbbell availability may limit a heavy loading goal.",
    why: "Retains the loaded hip hinge, with the hamstrings and glutes contributing while the torso stays steady.",
    detail: "Separate weights change handling and loading choices. Light dumbbells may allow less added weight than a full-size barbell; the heaviest available pair may still be insufficient for a heavy barbell goal.",
    basis: "Michael\u2019s approved RDL comparison and knowledge_base/03_hinges.md"
  },
  {
    originalId: "hip_thrust_machine",
    originalName: "Hip-thrust machine",
    cardId: "floor_bridge",
    source: "hinges_and_hip_extension",
    limited: true,
    keeps: "Hip extension with the upper back supported.",
    changes: "Floor support generally reduces range versus a shoulders-elevated setup.",
    load: "Does not preserve a heavy loading goal.",
    why: "Offers bodyweight hip extension with floor support as a limited alternative.",
    detail: "A floor start generally allows less hip movement than a comparable shoulders-elevated setup. Bodyweight may provide much less resistance than a loaded hip-thrust machine. The actual machine design and load matter; this is not an equivalent heavy-strength substitute.",
    basis: "Michael\u2019s approved bridge comparison and knowledge_base/03_hinges.md"
  }
];
var comparisons = [...baseComparisons.map(applyB2Similarity), ...day1Comparisons, ...a1AllComparisons, ...a2Comparisons, ...a3Comparisons, ...a4Comparisons, ...b1Comparisons, ...b2Comparisons, ...b3Comparisons, ...b4Comparisons];
var canonicalContentId = (id) => id === "other_pulldown" ? "lat_pulldown" : id;
var contentById = (id) => content.find((record3) => record3.id === canonicalContentId(id));
var comparisonOriginalId = (id) => id === "other_chest_press" ? "chest_press_machine" : id;
var originalInstructionId = (id) => id === "chest_press_machine" ? "other_chest_press" : id;
var comparisonFor = (id, originalId) => comparisons.find((record3) => record3.cardId === id && record3.originalId === comparisonOriginalId(originalId));

// ../gym-swap-site/dist/prototype/release.mjs?v=2.8.1
var BUILD = "2.8.1";

// ../gym-swap-site/dist/prototype/scenario.mjs?v=2.8.0
var original = DATA.exercises.seated_cable_row;
var swap = original.options.find((option) => option.id === "incline_db_row");
var source = DATA.sources[original.source];
var loadNote = "Do not convert the cable-stack number directly into a dumbbell weight.";
var cardCopy = {
  name: "Chest-supported dumbbell row",
  keeps: "Rowing for your back and rear shoulders.",
  changes: "Less torso stabilization than an unsupported seated row.",
  load: "Cable weights don\u2019t convert directly.",
  image: "/prototype/assets/chest-supported-row.png?v=2.1.3",
  imageAlt: "A person rowing dumbbells with their chest against an inclined backrest, a separate short seat below their hips, and feet on the floor."
};
var expandedCard = (record3) => ({ ...record3, label: record3.name });
var legacyOriginals = [original, DATA.exercises.chest_press_machine];
var explanationPairs = {
  seated_cable_row: ["incline_db_row", "seated_band_row", "other_row_machine"],
  chest_press_machine: ["db_bench_press", "db_floor_press", "other_chest_press"]
};
var legacyCards = legacyOriginals.flatMap((item2) => item2.options.filter((card) => explanationPairs[item2.id].includes(card.id)));
var maintainedCard = (id) => contentById(id) ? expandedCard(contentById(id)) : legacyCards.find((card) => card.id === id);
var originalIds = [...new Set(comparisons.map((edge) => edge.originalId))];
var exercises = [...legacyOriginals.map((item2) => {
  const edges = comparisons.filter((edge) => edge.originalId === item2.id);
  const retained = item2.options.filter((card) => explanationPairs[item2.id].includes(card.id) && !edges.some((edge) => edge.cardId === card.id));
  return { ...item2, options: [...retained.map((card) => ({ ...card, ...maintainedCard(card.id) })), ...edges.map((edge) => ({ ...maintainedCard(edge.cardId), why: edge.why, changes: edge.detail, partial: !!edge.limited }))] };
}), ...originalIds.filter((id) => !legacyOriginals.some((item2) => item2.id === id)).map((id) => {
  const edges = comparisons.filter((edge) => edge.originalId === id), first = edges[0];
  return {
    id,
    label: first.originalName,
    source: first.source,
    options: edges.map((edge) => ({ ...maintainedCard(edge.cardId), why: edge.why, changes: edge.detail, partial: !!edge.limited }))
  };
})];
var exerciseIds = exercises.map((exercise) => exercise.id);
var exerciseById = (id) => exercises.find((exercise) => exercise.id === id);
var allowedOptions = {
  seated_cable_row: ["incline_db_row", "seated_band_row", "other_row_machine"],
  chest_press_machine: ["db_bench_press", "db_floor_press", "other_chest_press"],
  ...Object.fromEntries(originalIds.map((id) => [id, comparisons.filter((edge) => edge.originalId === id).map((edge) => edge.cardId)]))
};
var cardsFor = (id) => (exerciseById(comparisonOriginalId(id))?.options ?? []).filter((card) => allowedOptions[comparisonOriginalId(id)]?.includes(card.id));
var cards = [...new Map([...legacyCards, ...content.map((record3) => ({ ...legacyCards.find((card) => card.id === record3.id), ...expandedCard(record3) }))].map((card) => [card.id, card])).values()];
var cardIds = cards.map((card) => card.id);
var cardById = (id) => cards.find((card) => card.id === id);
var pressLoadNote = "Do not assume the machine's weight setting transfers to dumbbells.";
var legacyCopies = {
  incline_db_row: cardCopy,
  seated_band_row: { name: "Seated band row", keeps: "A seated rowing movement.", changes: "Resistance changes as the band stretches." },
  other_row_machine: { name: "Seated machine row", keeps: "Rowing for your back and rear shoulders.", changes: "Handle path and chest support vary by machine." },
  db_bench_press: { name: "Flat dumbbell bench press", keeps: "Pressing for chest, front shoulders, and triceps.", changes: "Each arm controls its own weight and path.", load: "Machine weights don\u2019t convert directly." },
  db_floor_press: { name: "Dumbbell floor press", keeps: "A chest press without a bench.", changes: "Floor limits upper-arm descent.", load: "Machine weights don\u2019t convert directly." },
  other_chest_press: { name: "Another chest-press machine", keeps: "A supported machine chest press.", changes: "Seat, handles, path, and resistance can differ." }
};
var copies = { ...Object.fromEntries(content.map((record3) => [record3.id, { name: record3.name, ...comparisons.find((edge) => edge.cardId === record3.id) }])), ...legacyCopies };
var requirements = {
  incline_db_row: ["dumbbells", "bench"],
  seated_band_row: ["band", "row_anchor", "floor_space"],
  other_row_machine: ["row_machine"],
  db_bench_press: ["dumbbells", "bench"],
  db_floor_press: ["dumbbells", "lying_space"],
  other_chest_press: ["chest_machine"],
  ...Object.fromEntries(content.map((record3) => [record3.id, record3.requires]))
};
var equipmentLabels = {
  dumbbells: "Suitable dumbbell pair",
  bench: "Bench",
  band: "Suitable resistance band",
  row_anchor: "Anchor for seated band rowing",
  floor_space: "Clear sitting space",
  row_machine: "Seated rowing machine",
  lying_space: "Clear room to lie down and move your arms",
  chest_machine: "Another chest-press machine",
  goblet_dumbbell: "One dumbbell suitable for your goblet squat",
  goblet_kettlebell: "One kettlebell suitable for your goblet squat",
  standing_space: "Clear standing and movement space",
  bridge_space: "Floor space to lie down, plant feet, and lift hips",
  reaching_space: "Suitable floor surface and room to reach an arm and leg",
  fixed_wall: "Fixed wall for hand support",
  ...day1Equipment,
  ...a1Equipment,
  ...a1RowEquipment,
  ...a1PullEquipment,
  ...a2Equipment,
  ...a3Equipment,
  ...a4Equipment,
  ...b1Equipment,
  ...b2Equipment,
  ...b3Equipment,
  ...b4Equipment
};
var isDumbbellPress = (id) => ["db_bench_press", "db_floor_press"].includes(id);
var capabilities = {
  flat_db_fly: { key: "benchFlat", equipment: "bench", question: "Can this bench lie flat?", label: "Flat position", yes: "Lies flat", no: "Different bench needed" },
  incline_db_row: { key: "benchIncline", equipment: "bench", question: "Can the backrest lock at roughly a 30\u201345\xB0 incline?", label: "Incline", yes: "Roughly 30\u201345\xB0", no: "Different bench needed" },
  single_arm_incline_db_row: { key: "benchIncline", equipment: "bench", question: "Can the backrest lock at roughly a 30\u201345\xB0 incline?", label: "Incline", yes: "Roughly 30\u201345\xB0", no: "Different bench needed" },
  seated_band_row: { key: "bandAnchor", equipment: "row_anchor", question: "Is this anchor secured and suitable for seated band rowing?", label: "Anchor setup", yes: "Reported suitable", no: "Different anchor needed" },
  other_row_machine: { key: "machineSetup", equipment: "row_machine", question: "Are the seat, handles, and any chest pad adjusted for your starting position?", label: "Machine setup", yes: "Reported adjusted", no: "Setup needs adjustment" },
  db_bench_press: { key: "benchFlat", equipment: "bench", question: "Can this bench lie flat?", label: "Flat position", yes: "Lies flat", no: "Different bench needed" },
  db_floor_press: { key: "floorLying", equipment: "lying_space", question: "Is there clear room to lie down and move your arms with the dumbbells?", label: "Lying space", yes: "Room confirmed", no: "Different space needed" },
  other_chest_press: { key: "pressMachineSetup", equipment: "chest_machine", question: "Have you checked the seat, handles, and resistance adjustments on this station?", label: "Machine setup", yes: "Reported checked", no: "Setup needs adjustment" },
  dumbbell_rdl: { key: "rdlPair", equipment: "dumbbells", question: "Is this pair a suitable load for your two-dumbbell RDL?", label: "RDL load", yes: "Pair confirmed for this RDL", no: "Different RDL weights needed" }
};

// ../gym-swap-site/dist/prototype/discovery.mjs?v=2.8.0
var discoveryCopy = {
  incline_db_row: { focus: "Rowing for your back and rear shoulders.", expect: "Chest supported on an inclined backrest.", needs: "Dumbbells \xB7 bench at about 45\xB0" },
  seated_band_row: { focus: "A seated rowing movement.", expect: "Band resistance changes as it stretches.", needs: "Band \xB7 secure rowing anchor \xB7 sitting space" },
  other_row_machine: { focus: "Rowing for your back and rear shoulders.", expect: "Adjust the seat, handles, and any chest support.", needs: "Seated rowing machine" },
  db_bench_press: { focus: "Pressing for chest, front shoulders, and triceps.", expect: "Each arm controls its own weight and path.", needs: "Dumbbells \xB7 flat bench" },
  db_floor_press: { focus: "A chest press from the floor.", expect: "Floor limits upper-arm descent.", needs: "Dumbbells \xB7 clear lying and arm space" },
  other_chest_press: { focus: "A supported machine chest press.", expect: "Check the seat, handles, and resistance adjustments.", needs: "Chest-press machine" },
  ...Object.fromEntries(content.map(({ id, focus, expect, needs }) => [id, { focus, expect, needs }]))
};
var exerciseName = (id) => id === "other_chest_press" ? "Machine chest press" : copies[id]?.name ?? "";
var rows = [.../* @__PURE__ */ new Set(["incline_db_row", "seated_band_row", "other_row_machine", ...content.filter((c) => c.family === "row").map((c) => c.id)])];
var verticalPulls = content.filter((c) => c.family === "vertical_pull").map((c) => c.id);
var shoulderPulls = content.filter((c) => c.family === "shoulder_pull").map((c) => c.id);
var presses = ["db_bench_press", "db_floor_press", "other_chest_press", ...content.filter((c) => c.family === "horizontal_press").map((c) => c.id)];
var chestExercises = [...presses, ...content.filter((c) => c.family === "chest_fly").map((c) => c.id)];
var categories = [
  { id: "horizontal_pull", label: "Horizontal rowing", group: "Movement", short: "Pull", ids: rows, aliases: ["row", "rows", "horizontal pull", "rowing"] },
  { id: "vertical_pull", label: "Vertical pulling", group: "Movement", ids: verticalPulls, aliases: ["vertical pull", "overhead pulling"] },
  { id: "straight_arm_pull", label: "Straight-arm pulling", group: "Movement", ids: shoulderPulls, aliases: ["straight arm pull"] },
  { id: "horizontal_push", label: "Horizontal pressing", group: "Movement", short: "Push", ids: presses, aliases: ["push", "press", "horizontal push", "pressing"] },
  { id: "back", label: "Back", group: "Muscle group", ids: [...rows, ...verticalPulls, ...shoulderPulls], aliases: ["back", "back muscles"] },
  { id: "chest", label: "Chest", group: "Muscle group", ids: chestExercises, aliases: ["chest", "pecs", "pectoral", "chest muscles"] },
  { id: "squat", label: "Squat & split squat", group: "Movement", ids: ["goblet_squat", ...content.filter((c) => ["squat", "split_squat"].includes(c.family)).map((c) => c.id)], aliases: ["squat", "squats", "split squat"] },
  { id: "hinge", label: "Hip hinge", group: "Movement", ids: ["dumbbell_rdl", "standing_hip_hinge", ...content.filter((c) => c.family === "hinge").map((c) => c.id)], aliases: ["hinge", "hip hinge"] },
  { id: "hip_extension", label: "Hip extension", group: "Movement", ids: ["floor_bridge", ...content.filter((c) => c.family === "hip_extension").map((c) => c.id)], aliases: ["hip extension"] },
  { id: "core_control", label: "Core control", group: "Movement", ids: ["bird_dog"], aliases: ["core control", "trunk control"] },
  { id: "movement_practice", label: "Movement practice", group: "Movement", ids: ["standing_hip_hinge", "bird_dog", "wall_calf_stretch", "tippy_bird"], aliases: ["movement practice", "mobility", "flexibility", "stability", "balance", "coordination", "general practice"] },
  { id: "legs_hips", label: "Legs & hips", group: "Muscle group", ids: ["goblet_squat", "dumbbell_rdl", "floor_bridge", ...content.filter((c) => ["squat", "split_squat", "hinge", "hip_extension"].includes(c.family)).map((c) => c.id)], aliases: ["legs", "hips", "legs and hips", "quads", "hamstrings", "glutes"] },
  { id: "calves", label: "Calves", group: "Muscle group", ids: ["wall_calf_stretch"], aliases: ["calves", "calf"] }
];
var normalize = (value) => String(value).normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
var aliases = {
  incline_db_row: ["chest supported row", "incline dumbbell row", "incline db row"],
  seated_band_row: ["seated band row", "band row", "banded row"],
  other_row_machine: ["machine row", "seated machine row", "row machine"],
  db_bench_press: ["flat db press", "dumbbell bench press", "db bench press", "flat dumbbell press"],
  db_floor_press: ["db floor press", "dumbbell floor press"],
  other_chest_press: ["chest press", "machine press", "machine chest press", "chest press machine"],
  ...Object.fromEntries(content.map((record3) => [record3.id, record3.aliases]))
};
var originalAliases = {
  seated_cable_row: ["seated row", "cable row", "seated cable row"],
  chest_press_machine: ["chest press", "machine press", "machine chest press", "chest press machine"],
  leg_press: ["leg press", "leg press machine"],
  barbell_rdl: ["barbell rdl", "bb rdl", "barbell romanian deadlift"],
  hip_thrust_machine: ["hip thrust machine", "machine hip thrust"]
};
var searchEntries = [
  ...exercises.map((item2) => ({ key: `replace:${item2.id}`, kind: "replace", id: item2.id, label: item2.label, group: "Exercise", action: "See swaps", aliases: [...originalAliases[item2.id] ?? [], ...aliases[item2.id] ?? [], ...copies[item2.id]?.name ? [copies[item2.id].name] : []] })),
  ...cards.map((card) => ({ key: `card:${card.id}`, kind: "card", id: card.id, label: exerciseName(card.id), group: "Exercise", action: "Explore exercise", aliases: [...aliases[card.id] ?? [], ...originalAliases[card.id] ?? []] })),
  ...categories.map((item2) => ({ ...item2, key: `category:${item2.id}`, kind: "category", action: "Explore exercises" }))
];

// ../gym-swap-site/dist/prototype/card-details.mjs?v=2.8.0
function detailSections(id, { mode, originalId } = {}) {
  const card = cardById(id);
  if (!card) return [];
  const record3 = contentById(id);
  const setup = record3 ? [record3.setup] : [card.setup, card.cues[0]].filter(Boolean);
  const steps = record3 ? record3.cues : card.cues.slice(1);
  const sections = [
    { id: "setup-detail", title: "Setup", paragraphs: setup },
    { id: "instruction-detail", title: "How to do it", steps, paragraphs: [record3?.context, ...(record3?.executionVariants ?? []).map((variant) => `${variant.name}: ${variant.description}`)].filter(Boolean) }
  ];
  const original2 = exerciseById(originalId);
  if (mode === "replace" && original2?.options.some((option) => option.id === id)) {
    const edge = comparisonFor(id, originalId);
    const originalOption = original2.options.find((option) => option.id === id);
    const paragraphs = edge ? [edge.why, edge.detail, edge.check ?? edge.load].filter(Boolean) : [originalOption.why, originalOption.changes].filter(Boolean);
    if (id === "incline_db_row") paragraphs.push(loadNote);
    else if (isDumbbellPress(id) && originalId === "chest_press_machine") paragraphs.push(pressLoadNote);
    sections.push({ id: "comparison-detail", title: `Compared with ${original2.label}`, subject: copies[id].name, paragraphs });
  }
  return sections;
}

// ../gym-swap-site/dist/prototype/library-contract.mjs?v=1
var CONTRACT_VERSION = 1;
var REQUEST_MODES = Object.freeze(["inspect", "discover", "compare", "substitute"]);
var FACT_STATES = Object.freeze(["yes", "no", "unknown"]);
var fail = (message) => {
  throw new TypeError(`Library contract: ${message}`);
};
var record = (value) => !!value && typeof value === "object" && !Array.isArray(value) && [Object.prototype, null].includes(Object.getPrototypeOf(value));
var identifier = (value) => typeof value === "string" && /^[a-z][a-z0-9_:-]{0,159}$/.test(value) && !["constructor", "prototype"].includes(value);
var text = (value, max = 600) => typeof value === "string" && value.length <= max;
function keys(value, allowed, required = allowed) {
  if (!record(value) || Object.keys(value).some((key) => !allowed.includes(key)) || required.some((key) => !Object.hasOwn(value, key))) fail("unexpected or missing fields");
}
function ids(value, max = 100) {
  if (!Array.isArray(value) || value.length > max || Array.from(value).some((x) => !identifier(x)) || new Set(value).size !== value.length) fail("invalid identifier list");
}
function facts(value) {
  if (!record(value) || Object.keys(value).length > 100 || Object.entries(value).some(([key, state]) => !identifier(key) || !FACT_STATES.includes(state))) fail("invalid reported facts");
}
function freezeData(value) {
  if (value && typeof value === "object" && !Object.isFrozen(value)) {
    Object.values(value).forEach(freezeData);
    Object.freeze(value);
  }
  return value;
}
var copy = (value) => freezeData(structuredClone(value));
function validateLibraryRequest(value) {
  keys(value, ["version", "mode", "query", "baselineId", "candidateId", "intent", "constraints", "contextRevision"]);
  if (value.version !== CONTRACT_VERSION || !REQUEST_MODES.includes(value.mode) || !text(value.query) || !Number.isSafeInteger(value.contextRevision) || value.contextRevision < 0) fail("invalid request");
  for (const key of ["baselineId", "candidateId"]) if (value[key] !== null && !identifier(value[key])) fail("invalid exercise identity");
  const needsBaseline = ["compare", "substitute"].includes(value.mode);
  const needsCandidate = ["inspect", "compare"].includes(value.mode);
  if (needsBaseline !== (value.baselineId !== null) || needsCandidate !== (value.candidateId !== null)) fail("identities do not match request mode");
  keys(value.intent, ["purposeIds", "movementIds", "muscleIds"]);
  Object.values(value.intent).forEach((list) => ids(list));
  keys(value.constraints, ["allowedEquipmentTypes", "positionIds", "mustPreserve"]);
  if (value.constraints.allowedEquipmentTypes !== null) ids(value.constraints.allowedEquipmentTypes);
  ids(value.constraints.positionIds);
  ids(value.constraints.mustPreserve);
  return copy(value);
}
function validateVisitContext(value) {
  keys(value, ["version", "revision", "items", "spaceFacts", "handlingChecks"]);
  if (value.version !== CONTRACT_VERSION || !Number.isSafeInteger(value.revision) || value.revision < 0 || !Array.isArray(value.items) || value.items.length > 120 || !Array.isArray(value.handlingChecks) || value.handlingChecks.length > 240) fail("invalid visit");
  const itemIds = /* @__PURE__ */ new Set();
  for (const item2 of value.items) {
    keys(item2, ["id", "type", "count", "reportedWeightKg", "presence", "access", "capabilities"]);
    if (!identifier(item2.id) || !identifier(item2.type) || itemIds.has(item2.id)) fail("invalid or duplicate physical item");
    itemIds.add(item2.id);
    if (item2.count !== null && (!Number.isSafeInteger(item2.count) || item2.count < 1 || item2.count > 100)) fail("invalid item count");
    if (item2.reportedWeightKg !== null && (!Number.isFinite(item2.reportedWeightKg) || item2.reportedWeightKg < 0)) fail("invalid reported weight");
    if (!["present", "absent", "unknown"].includes(item2.presence) || !["available", "busy", "unknown"].includes(item2.access)) fail("invalid presence or access");
    if (item2.access !== "unknown" && item2.presence !== "present") fail("access requires reported presence");
    facts(item2.capabilities);
  }
  facts(value.spaceFacts);
  const checks = /* @__PURE__ */ new Set();
  for (const check of value.handlingChecks) {
    keys(check, ["exerciseId", "itemIds", "checkId", "value"]);
    ids(check.itemIds);
    if (!identifier(check.exerciseId) || !identifier(check.checkId) || !check.itemIds.length || check.itemIds.some((id) => !itemIds.has(id)) || !FACT_STATES.includes(check.value)) fail("invalid handling check");
    const key = JSON.stringify([check.exerciseId, [...check.itemIds].sort(), check.checkId]);
    if (checks.has(key)) fail("duplicate handling check");
    checks.add(key);
  }
  return copy(value);
}
function validateRequirement(value) {
  let nodes = 0;
  function visit(node, depth = 0) {
    if (++nodes > 200 || depth > 10 || !record(node)) fail("invalid requirement tree");
    if (node.kind === "all") {
      keys(node, ["kind", "clauses"]);
      if (!Array.isArray(node.clauses) || !node.clauses.length) fail("empty requirement group");
      for (const child of node.clauses) visit(child, depth + 1);
    } else if (node.kind === "any") {
      keys(node, ["kind", "branches"]);
      if (!Array.isArray(node.branches) || !node.branches.length) fail("empty requirement alternatives");
      const branchIds = /* @__PURE__ */ new Set();
      for (const branch of node.branches) {
        keys(branch, ["id", "instructionRef", "requires"]);
        if (!identifier(branch.id) || !identifier(branch.instructionRef) || branchIds.has(branch.id)) fail("invalid requirement branch");
        branchIds.add(branch.id);
        visit(branch.requires, depth + 1);
      }
    } else if (node.kind === "item") {
      keys(node, ["kind", "role", "type", "count", "capabilities"]);
      if (!identifier(node.role) || !identifier(node.type) || !Number.isSafeInteger(node.count) || node.count < 1 || node.count > 100) fail("invalid item requirement");
      ids(node.capabilities);
    } else if (node.kind === "context") {
      keys(node, ["kind", "fact"]);
      if (!identifier(node.fact)) fail("invalid context requirement");
    } else if (node.kind === "handling") {
      keys(node, ["kind", "exerciseId", "itemRole", "checkId"]);
      if (![node.exerciseId, node.itemRole, node.checkId].every(identifier)) fail("invalid handling requirement");
    } else if (node.kind === "legacy") {
      keys(node, ["kind", "namespace", "key"]);
      if (!["equipment", "capability"].includes(node.namespace) || typeof node.key !== "string" || !identifier(node.key.toLowerCase())) fail("invalid legacy requirement");
    } else fail("unknown requirement kind");
  }
  visit(value);
  return copy(value);
}

// ../gym-swap-site/dist/prototype/library.mjs?v=1
var canonical = (id) => comparisonOriginalId(canonicalContentId(id));
var hash = (text2) => {
  let n = 2166136261;
  for (const c of text2) n = Math.imul(n ^ c.charCodeAt(0), 16777619);
  return (n >>> 0).toString(16);
};
var legacyWorkoutCatalogue = freezeData([...new Set(searchEntries.filter((x) => x.kind !== "category").map((x) => comparisonOriginalId(x.id)))].map((id) => {
  const entries = searchEntries.filter((x) => x.kind !== "category" && comparisonOriginalId(x.id) === id);
  const instructionId = originalInstructionId(id), record3 = contentById(instructionId), card = cardById(instructionId);
  const label = exerciseById(id)?.label ?? entries[0].label;
  return {
    id,
    label,
    instructionId,
    setup: record3?.expect ?? record3?.setup ?? card?.setup ?? "",
    aliases: [...new Set(entries.flatMap((x) => [x.label, ...x.aliases]))],
    signature: hash(JSON.stringify([label, record3?.setup ?? card?.setup, record3?.cues ?? card?.cues]))
  };
}));
var legacyRequirement = (key, namespace = "equipment") => ({ kind: "legacy", namespace, key });
function requirementFor(instructionId) {
  const declared = requirements[instructionId];
  if (!declared?.length) return null;
  const clauses = declared.map((item2, index) => Array.isArray(item2) ? { kind: "any", branches: item2.map((key) => ({ id: `option_${index}_${key}`, instructionRef: instructionId, requires: legacyRequirement(key) })) } : legacyRequirement(item2));
  if (capabilities[instructionId]) clauses.push(legacyRequirement(capabilities[instructionId].key, "capability"));
  if (isDumbbellPress(instructionId)) clauses.push(legacyRequirement("pressingPair", "capability"));
  return { format: "legacy-reports", physicalItemsNormalized: false, evaluator: "state.assess", expression: validateRequirement({ kind: "all", clauses }) };
}
var records = legacyWorkoutCatalogue.map((legacy2) => {
  const record3 = contentById(legacy2.instructionId), card = cardById(legacy2.instructionId);
  const sections = card ? detailSections(legacy2.instructionId) : [];
  const legacyOriginal = Object.values(DATA.exercises).find((e) => e.options?.some((c) => c.id === legacy2.instructionId));
  const legacySource = DATA.sources[(legacyOriginal ?? DATA.exercises[legacy2.id])?.source];
  return {
    id: legacy2.id,
    name: legacy2.label,
    instructionId: legacy2.instructionId,
    aliases: legacy2.aliases,
    // These attributes require source-supported extraction in the content step.
    variant: { workingLimbs: null, position: null, support: null, resistance: null },
    task: null,
    purposeIds: [],
    family: record3?.family ?? null,
    focus: record3?.focus ?? discoveryCopy[legacy2.instructionId]?.focus ?? null,
    instructions: card ? {
      setup: sections.find((x) => x.id === "setup-detail")?.paragraphs ?? [],
      steps: sections.find((x) => x.id === "instruction-detail")?.steps ?? [],
      detail: sections.find((x) => x.id === "instruction-detail")?.paragraphs ?? []
    } : null,
    requirements: requirementFor(legacy2.instructionId),
    references: record3?.references ?? (legacySource?.references ?? []).map((reference3) => ({
      ...reference3,
      scope: "Document-level reference; exercise-specific claims require their own source mapping."
    })),
    sourceDocument: record3 ? null : legacySource ? { key: (legacyOriginal ?? DATA.exercises[legacy2.id]).source, title: legacySource.title } : null,
    provenance: {
      kind: record3 ? "maintained-profile" : card ? "legacy-card" : "original-only",
      source: record3 ? { module: "dist/prototype/content.mjs", recordId: record3.id } : card ? { module: "dist/data.mjs", originalId: legacyOriginal?.id ?? null, cardId: legacy2.instructionId } : { module: "dist/data.mjs", originalId: legacy2.id },
      review: record3?.review ?? null,
      sourceCheckedAt: record3?.sourceChecked ?? null
    },
    availability: {
      legacyBrowse: !!card,
      legacyReplaceOriginal: !!exerciseById(legacy2.id),
      structuredDiscovery: false,
      familyRuleComparison: false
    },
    compatibility: { workoutSignature: legacy2.signature }
  };
});
var maintainedComparisons = exercises.flatMap((original2) => cardsFor(original2.id).map((card) => {
  const edge = comparisons.find((e) => e.originalId === original2.id && e.cardId === card.id);
  return {
    id: `${original2.id}__${card.id}`,
    baselineId: canonical(original2.id),
    candidateId: canonical(card.id),
    compatibility: { originalId: original2.id, cardId: card.id },
    similarity: edge?.similarity ?? null,
    text: edge ? { keeps: edge.keeps, changes: edge.changes, check: edge.check ?? edge.load ?? null, why: edge.why, detail: edge.detail } : { keeps: card.why, changes: card.changes, check: null, why: card.why, detail: card.changes },
    provenance: { kind: edge ? "maintained-pair" : "legacy-pair", review: edge?.review ?? null, basis: edge?.basis ?? null }
  };
}));
var library = freezeData(structuredClone({
  contractVersion: CONTRACT_VERSION,
  sourceBuild: BUILD,
  adapterRevision: "library-contract-2",
  exercises: records,
  maintainedComparisons,
  familyRules: [],
  // The experimental rules are not promoted by this adapter.
  legacyExplanationPairs: explanationPairs
}));
var byId = new Map(library.exercises.map((record3) => [record3.id, record3]));
var getExercise = (id) => typeof id === "string" ? byId.get(canonical(id)) ?? null : null;
function getMaintainedComparison(baselineId, candidateId) {
  const a = getExercise(baselineId), b = getExercise(candidateId);
  return a && b ? library.maintainedComparisons.find((edge) => edge.baselineId === a.id && edge.candidateId === b.id) ?? null : null;
}
var ambiguousAliases = /* @__PURE__ */ new Map([
  ["chest supported row", ["incline_db_row", "chest_supported_row_machine"]]
]);
function resolveExercise(input) {
  if (typeof input !== "string" || input.length > 600) throw new TypeError("Invalid exercise lookup");
  const exactId = getExercise(input);
  if (exactId) return { status: "resolved", id: exactId.id, via: "id" };
  const query = normalize(input);
  if (!query) return { status: "unmatched", candidates: [] };
  const matches = ambiguousAliases.get(query) ?? library.exercises.filter((record3) => [record3.name, ...record3.aliases].some((alias) => normalize(alias) === query)).map((record3) => record3.id);
  return matches.length === 1 ? { status: "resolved", id: matches[0], via: "alias" } : { status: matches.length ? "ambiguous" : "unmatched", candidates: [...matches] };
}

// ../gym-swap-site/dist/prototype/requirements.mjs?v=1
function evaluateRequirements(expression, visit, { allowedEquipmentTypes = null } = {}) {
  const requirement = validateRequirement(expression), context = validateVisitContext(visit);
  if (allowedEquipmentTypes !== null && (!Array.isArray(allowedEquipmentTypes) || Array.from(allowedEquipmentTypes).some((x) => typeof x !== "string"))) throw new TypeError("Invalid equipment boundary");
  const initial = () => ({ unresolvedFacts: [], conflictingFacts: [], unsupportedFacts: [], branchIds: [], instructionRefs: [], itemBindings: [], used: {} });
  const status = (result2) => result2.unsupportedFacts.length ? "unsupported" : result2.conflictingFacts.length ? "conflict" : result2.unresolvedFacts.length ? "unknown" : "confirmed";
  const rank = { confirmed: 0, unknown: 1, conflict: 2, unsupported: 3 };
  function plans(node) {
    if (node.kind === "any") {
      const list = node.branches.flatMap((branch) => plans(branch.requires).map((plan) => ({
        ...plan,
        branchIds: [...plan.branchIds, branch.id],
        instructionRefs: [...plan.instructionRefs, branch.instructionRef]
      })));
      if (list.length > 64) throw new TypeError("Too many requirement alternatives");
      return list;
    }
    if (node.kind === "all") {
      let list = [{ clauses: [], branchIds: [], instructionRefs: [] }];
      for (const child of node.clauses) {
        const next = [];
        for (const left of list) for (const right of plans(child)) {
          next.push({ clauses: [...left.clauses, ...right.clauses], branchIds: [...left.branchIds, ...right.branchIds], instructionRefs: [...left.instructionRefs, ...right.instructionRefs] });
          if (next.length > 64) throw new TypeError("Too many requirement alternatives");
        }
        list = next;
      }
      return list;
    }
    return [{ clauses: [node], branchIds: [], instructionRefs: [] }];
  }
  function run(node, result2) {
    if (node.kind === "item") {
      let uncertainty = function(item2) {
        return Number(item2.presence !== "present") + Number(item2.access !== "available") + Number(item2.count === null) + node.capabilities.filter((cap) => item2.capabilities[cap] !== "yes").length;
      };
      const key = `item:${node.role}:${node.type}`;
      if (allowedEquipmentTypes !== null && !allowedEquipmentTypes.includes(node.type)) {
        result2.conflictingFacts.push(`restricted:${node.type}`);
        return result2;
      }
      const matching = context.items.filter((item2) => item2.type === node.type);
      const usable = matching.filter((item2) => item2.presence !== "absent" && item2.access !== "busy" && node.capabilities.every((cap) => item2.capabilities[cap] !== "no"));
      usable.sort((a, b) => uncertainty(a) - uncertainty(b) || a.id.localeCompare(b.id));
      let remaining = node.count;
      for (const item2 of usable) {
        if (!remaining) break;
        const used2 = result2.used[item2.id] ?? 0;
        const available = item2.count === null ? used2 ? 0 : remaining : Math.max(0, item2.count - used2);
        const units = Math.min(remaining, available);
        if (!units) continue;
        result2.itemBindings.push({ role: node.role, itemId: item2.id, count: item2.count === null ? null : units });
        result2.used[item2.id] = used2 + units;
        remaining -= units;
        if (item2.count === null) result2.unresolvedFacts.push(`count:${item2.id}`);
        if (item2.presence !== "present") result2.unresolvedFacts.push(`presence:${item2.id}`);
        if (item2.access !== "available") result2.unresolvedFacts.push(`access:${item2.id}`);
        for (const cap of node.capabilities) if (item2.capabilities[cap] !== "yes") result2.unresolvedFacts.push(`capability:${item2.id}:${cap}`);
      }
      if (remaining) (matching.length ? result2.conflictingFacts : result2.unresolvedFacts).push(`${key}:count_${node.count}`);
    } else if (node.kind === "context") {
      const value = context.spaceFacts[node.fact] ?? "unknown";
      if (value !== "yes") (value === "no" ? result2.conflictingFacts : result2.unresolvedFacts).push(`space:${node.fact}`);
    } else if (node.kind === "handling") {
      const bindings = result2.itemBindings.filter((binding) => binding.role === node.itemRole);
      if (!bindings.length) {
        if (!result2.conflictingFacts.length && !result2.unresolvedFacts.length) result2.unsupportedFacts.push(`unbound_role:${node.itemRole}`);
        return result2;
      }
      const itemIds = [...new Set(bindings.map((binding) => binding.itemId))].sort();
      const check = context.handlingChecks.find((check2) => check2.exerciseId === node.exerciseId && check2.checkId === node.checkId && JSON.stringify([...check2.itemIds].sort()) === JSON.stringify(itemIds));
      const value = check?.value ?? "unknown";
      if (value !== "yes") (value === "no" ? result2.conflictingFacts : result2.unresolvedFacts).push(`handling:${node.exerciseId}:${node.itemRole}:${node.checkId}`);
    } else result2.unsupportedFacts.push(`legacy:${node.namespace}:${node.key}`);
    return result2;
  }
  const candidates = plans(requirement).map((plan) => {
    let result2 = { ...initial(), branchIds: plan.branchIds, instructionRefs: plan.instructionRefs };
    const order = { item: 0, context: 1, legacy: 2, handling: 3 };
    for (const clause of [...plan.clauses].sort((a, b) => order[a.kind] - order[b.kind])) result2 = run(clause, result2);
    return result2;
  });
  candidates.sort((a, b) => rank[status(a)] - rank[status(b)] || a.unresolvedFacts.length - b.unresolvedFacts.length);
  const result = candidates[0];
  const { used, unsupportedFacts, ...setup } = result;
  return freezeData({
    ...setup,
    status: status(result),
    unresolvedFacts: [...new Set(result.unresolvedFacts)],
    conflictingFacts: [.../* @__PURE__ */ new Set([...result.conflictingFacts, ...unsupportedFacts])],
    instructionRefs: [...new Set(result.instructionRefs)]
  });
}

// ../gym-swap-site/pilot/source-review.json
var source_review_default = {
  schemaVersion: 1,
  revision: "six-row-source-review-2026-10-17-v3-documentation",
  accessedAt: "2026-10-14T16:47:25Z",
  profileIds: [
    "two_db_bent_over_row",
    "incline_db_row",
    "bench_single_arm_db_row",
    "seated_cable_row",
    "seated_band_row",
    "chest_supported_row_machine"
  ],
  scope: "Local six-profile discovery and deterministic family-rule pilot; source verification only.",
  negativeComparisonReferences: [
    {
      exerciseId: "straight_arm_cable_pulldown",
      claimIds: [
        "profile:straight_arm_cable_pulldown:task"
      ],
      discoverable: false,
      scope: "Negative comparison only when the purpose requires the six-row pilot's repeated elbow bending."
    }
  ],
  sourcePolicy: {
    authoringOwner: "Codex researches, drafts and checks; Michael reviews governing principles, representative batches and consequential exceptions.",
    classification: "External verification, maintained coaching approval and exact generated-output acceptance are distinct.",
    reuse: "Original brief summaries and local references only; no external media or full text copied.",
    retrieval: "Only the released curated pilot artefact may support the local decision path. No live open-web retrieval in user flows.",
    productionEvidence: "Existing production evidence and historical paid evaluations remain unchanged.",
    restrictions: [
      "No diagnosis or symptom-based prescriptions.",
      "No automatic programming, progression, load conversion or effectiveness guarantee.",
      "No source or valid citation independently establishes setup readiness, eligibility or an exact substitute tier.",
      "Unknown machine geometry and band anchoring remain unknown."
    ]
  },
  sources: [
    {
      id: "source:ace-bent-over-row",
      title: "ACE Exercise Library: Bent-over Row",
      uri: "https://www.acefitness.org/resources/everyone/exercise-library/12/bent-over-row/",
      localPath: null,
      accessedAt: "2026-10-14T16:39:46Z",
      sourceRevision: null,
      contentSha256: null,
      locator: "Exercise description; Equipment: Barbell",
      reviewClassification: "external-source",
      verificationStatus: "verified-scoped",
      verificationMethod: "web-text",
      supportedClaimIds: [
        "source-fact:ace:barbell-held-hinge"
      ],
      scope: "Held-hinge barbell-row mechanism only.",
      limits: [
        "Does not document neutral two-dumbbell execution.",
        "Does not establish substitution tiers, automatic loads or individual suitability."
      ],
      reuse: "original-summary-only",
      rightsStatus: "not-assessed; no images, videos or full text copied"
    },
    {
      id: "source:ace-single-arm-row",
      title: "ACE Exercise Library: Single-arm Row",
      uri: "https://www.acefitness.org/resources/everyone/exercise-library/126/single-arm-row/",
      localPath: null,
      accessedAt: "2026-10-14T16:39:46Z",
      sourceRevision: null,
      contentSha256: null,
      locator: "Steps 1\u20133",
      reviewClassification: "external-source",
      verificationStatus: "verified-scoped",
      verificationMethod: "web-text",
      supportedClaimIds: [
        "source-fact:ace:hand-knee-row",
        "profile:bench_single_arm_db_row:execution"
      ],
      scope: "Hand-and-knee bench support, one dumbbell, elbow bending and controlled return.",
      limits: [
        "Do not import the source instruction to hold the scapula fixed throughout; use the maintained project cues.",
        "No prescription or safety/equivalence claim adopted."
      ],
      reuse: "original-summary-only",
      rightsStatus: "not-assessed; no images, videos or full text copied"
    },
    {
      id: "source:ace-seated-row",
      title: "ACE Exercise Library: Seated Row",
      uri: "https://www.acefitness.org/resources/everyone/exercise-library/48/seated-row/",
      localPath: null,
      accessedAt: "2026-10-14T16:39:46Z",
      sourceRevision: null,
      contentSha256: null,
      locator: "Exercise description",
      reviewClassification: "external-source",
      verificationStatus: "verified-scoped",
      verificationMethod: "web-text",
      supportedClaimIds: [
        "source-fact:ace:seated-cable-row",
        "profile:seated_cable_row:execution"
      ],
      scope: "Seated cable row and narrow-handle bent-elbow action.",
      limits: [
        "The text places feet on the floor; station-specific foot braces are supported separately by the local profile and manufacturer example.",
        "The source does not establish every seated machine as this close-neutral no-chest-pad variant."
      ],
      reuse: "original-summary-only",
      rightsStatus: "not-assessed; no images, videos or full text copied"
    },
    {
      id: "source:nsca-movement-patterns",
      title: "Lincoln, Ill and Ibrahim: Progressive Strategies for Teaching Fundamental Resistance Training Movement Patterns; NSCA PTQ 10.2 (2023)",
      uri: "https://www.nsca.com/contentassets/3d09f06f0b4c4f6fbd8cc382ed1f3d4a/ptq-10.2.1-progressive-strategies-for-teaching-fundamental-resistance-training-movement-patterns.pdf",
      localPath: null,
      accessedAt: "2026-10-14T16:39:46Z",
      sourceRevision: null,
      contentSha256: null,
      locator: "Printed pp. 6\u20137; p. 13 Figure 5 description (PDF pages 1\u20132 and 8)",
      reviewClassification: "external-source",
      verificationStatus: "verified-scoped",
      verificationMethod: "web-text",
      supportedClaimIds: [
        "source-fact:nsca:horizontal-pull",
        "source-fact:nsca:bench-support"
      ],
      scope: "Horizontal versus vertical pulling and general external-support/postural-demand distinctions.",
      limits: [
        "Prone bench example is a horizontal barbell pull, not the exact 30\u201345-degree dumbbell setup or a seated chest-pad machine.",
        "Do not import progression order, novice/advanced classifications, clinical claims, or readiness scores."
      ],
      reuse: "original-summary-only",
      rightsStatus: "not-assessed; no images, videos or full text copied"
    },
    {
      id: "source:ace-shoulder-illustrations",
      title: "ACE Shoulder Exercises illustration sheet",
      uri: "https://contentcdn.eacefitness.com/certifiednews/images/article/pdfs/ShoulderExercises.pdf",
      localPath: null,
      accessedAt: "2026-10-14T16:39:46Z",
      sourceRevision: null,
      contentSha256: null,
      locator: "PDF page 3 label: 45 Degree Incline Row",
      reviewClassification: "external-source",
      verificationStatus: "verified-scoped",
      verificationMethod: "web-text",
      supportedClaimIds: [
        "source-fact:ace:incline-row-identity"
      ],
      scope: "Historical document-level identification reference.",
      limits: [
        "Identification does not establish the approved 30\u201345-degree range or all rowing variants.",
        "No EMG, effectiveness, activation ranking, substitute tier or safety claim adopted.",
        "Only extracted exercise label was used; no video or demonstration was reviewed."
      ],
      reuse: "original-summary-only",
      rightsStatus: "not-assessed; no images, videos or full text copied"
    },
    {
      id: "source:life-fitness-pwr-play",
      title: "Life Fitness: PWR Play; Traditional Cable Stations, Row",
      uri: "https://www.lifefitness.com/en-us/catalog/strength-training/cable-machines-functional-trainers/pwr-play",
      localPath: null,
      accessedAt: "2026-10-14T16:39:46Z",
      sourceRevision: null,
      contentSha256: null,
      locator: "Traditional Cable Stations > Row",
      reviewClassification: "external-source",
      verificationStatus: "verified-scoped",
      verificationMethod: "web-text",
      supportedClaimIds: [
        "source-fact:life-fitness:row-foot-platforms"
      ],
      scope: "Equipment-specific foot-platform and row-handle example.",
      limits: [
        "One product does not establish every gym station configuration.",
        "Do not turn published cable ratios, marketing, ergonomic or performance claims into load conversions."
      ],
      reuse: "original-summary-only",
      rightsStatus: "not-assessed; no images, videos or full text copied"
    },
    {
      id: "source:nsca-tsac48",
      title: "Lentine and Dawes: Using Complexes to Help Improve Tactical Job Performance; NSCA TSAC Report 48",
      uri: "https://www.nsca.com/globalassets/education/tsac-report/tsac-report-48.pdf",
      localPath: null,
      accessedAt: "2026-10-14T16:39:46Z",
      sourceRevision: null,
      contentSha256: null,
      locator: "Printed p. 16 Table 1 (PDF page 16)",
      reviewClassification: "external-source",
      verificationStatus: "verified-scoped",
      verificationMethod: "web-text",
      supportedClaimIds: [
        "source-fact:nsca:dumbbell-row-category"
      ],
      scope: "Dumbbell bent-over-row category identification only.",
      limits: [
        "Does not establish simultaneous neutral-grip two-dumbbell execution.",
        "Do not import the source complex, sets, reps, loading or performance promises."
      ],
      reuse: "original-summary-only",
      rightsStatus: "not-assessed; no images, videos or full text copied"
    },
    {
      id: "source:local-a1-group1",
      title: "Approved A1 group 1 instruction records",
      uri: null,
      localPath: "dist/prototype/a1-content.mjs",
      accessedAt: "2026-10-14T16:39:46Z",
      sourceRevision: "2026-10-13",
      contentSha256: "5211a7c59039b68a5715ea1328244c8d20290953431e6becb314eaedc89c6c75",
      locator: "two_db_bent_over_row; bench_single_arm_db_row; review.batch a1-rows-group1-2026-10-13",
      reviewClassification: "maintained-approved-profile",
      verificationStatus: "verified-local-record",
      verificationMethod: "read-maintained-file-and-review-metadata",
      supportedClaimIds: [
        "profile:two_db_bent_over_row:identity",
        "profile:two_db_bent_over_row:execution",
        "profile:two_db_bent_over_row:requirements",
        "profile:bench_single_arm_db_row:identity",
        "profile:bench_single_arm_db_row:execution",
        "profile:bench_single_arm_db_row:requirements",
        "principle:resistance"
      ],
      scope: "Exact two-dumbbell held-hinge and hand-and-knee supported single-arm profiles.",
      limits: [
        "Independent dumbbells are an explicitly approved adaptation of the external mechanism sources."
      ],
      reuse: "maintained-project-record",
      review: {
        approvedBy: "Michael",
        recordedAt: "2026-10-13",
        exactGeneratedOutputReviewed: false
      }
    },
    {
      id: "source:local-a1-more-rows",
      title: "Approved A1 completion instruction records",
      uri: null,
      localPath: "dist/prototype/a1-more-rows.mjs",
      accessedAt: "2026-10-14T16:39:46Z",
      sourceRevision: "2026-10-13",
      contentSha256: "8c82a7199e4adfb9fd54c175ceb7fc43873f8b3e47d36e404cdc5d29e4be1b80",
      locator: "incline_db_row; seated_cable_row; chest_supported_row_machine; review.batch a1-completion-2026-10-13",
      reviewClassification: "maintained-approved-profile",
      verificationStatus: "verified-local-record",
      verificationMethod: "read-maintained-file-and-review-metadata",
      supportedClaimIds: [
        "profile:incline_db_row:identity",
        "profile:incline_db_row:setup",
        "profile:incline_db_row:trunk-control",
        "profile:incline_db_row:execution",
        "profile:seated_cable_row:identity",
        "profile:seated_cable_row:execution",
        "profile:seated_cable_row:resistance",
        "profile:chest_supported_row_machine:identity",
        "profile:chest_supported_row_machine:setup",
        "profile:chest_supported_row_machine:execution",
        "principle:resistance",
        "principle:handles"
      ],
      scope: "Exact incline-dumbbell, close-neutral unpadded cable and two-arm chest-pad machine setups.",
      limits: [
        "Manufacturer-specific path geometry, exact force curves and weight matching remain unresolved."
      ],
      reuse: "maintained-project-record",
      review: {
        approvedBy: "Michael",
        recordedAt: "2026-10-13",
        exactGeneratedOutputReviewed: false
      }
    },
    {
      id: "source:local-a1-comparisons",
      title: "Approved A1 directed comparisons",
      uri: null,
      localPath: "dist/prototype/a1-comparisons.mjs",
      accessedAt: "2026-10-14T16:39:46Z",
      sourceRevision: "2026-10-13",
      contentSha256: "0c00b942a4818fed958a411454a3066d950441a11e6fca398bf1f3543ebd0e3d",
      locator: "R1-c,d,e,h; R4-f,h; review.batch a1-completion-2026-10-13",
      reviewClassification: "maintained-approved-comparison",
      verificationStatus: "verified-local-record",
      verificationMethod: "read-maintained-file-and-review-metadata",
      supportedClaimIds: [
        "profile:seated_cable_row:resistance",
        "profile:seated_band_row:identity",
        "profile:chest_supported_row_machine:identity",
        "principle:support",
        "principle:arms",
        "principle:handles",
        "pair:two_db_bent_over_row:incline_db_row",
        "pair:two_db_bent_over_row:seated_cable_row",
        "pair:two_db_bent_over_row:chest_supported_row_machine",
        "pair:two_db_bent_over_row:bench_single_arm_db_row",
        "pair:bench_single_arm_db_row:incline_db_row",
        "pair:bench_single_arm_db_row:seated_band_row"
      ],
      scope: "Six existing reviewed pilot directions and their scoped support/arm-use distinctions.",
      limits: [
        "Do not infer reverse edges or claim all rule-derived pair wording was individually approved."
      ],
      reuse: "maintained-project-record",
      review: {
        approvedBy: "Michael",
        recordedAt: "2026-10-13",
        exactGeneratedOutputReviewed: false
      }
    },
    {
      id: "source:local-legacy-rows",
      title: "Accepted legacy seated-row cards",
      uri: null,
      localPath: "dist/data.mjs",
      accessedAt: "2026-10-14T16:39:46Z",
      sourceRevision: "2026-10-07",
      contentSha256: "d93f6c939470a24ffd6218766b562cdef8a1fc42a5f2ea5c8791b18ff499fad3",
      locator: "DATA.exercises.seated_cable_row.options incline_db_row and seated_band_row; DATA.sources.horizontal_rows",
      reviewClassification: "maintained-accepted-legacy-profile",
      verificationStatus: "verified-local-record",
      verificationMethod: "read-maintained-file-and-review-metadata",
      supportedClaimIds: [
        "profile:seated_band_row:requirements",
        "profile:seated_band_row:execution",
        "profile:seated_band_row:resistance",
        "principle:resistance",
        "pair:seated_cable_row:incline_db_row",
        "pair:seated_cable_row:seated_band_row"
      ],
      scope: "Retained incline/band directions and seated-band setup/return facts.",
      limits: [
        "The document-level ACE reference identifies only the incline row, not the band card or every horizontal row.",
        "Band anchor direction/height, grip and handle arrangement are unspecified."
      ],
      reuse: "maintained-project-record",
      review: {
        approvedBy: "Michael",
        recordedAt: "2026-10-07",
        exactGeneratedOutputReviewed: false
      }
    },
    {
      id: "source:local-approved-principles",
      title: "Michael-approved six-row experiment profiles and family principles",
      uri: null,
      localPath: "trial/core.mjs",
      accessedAt: "2026-10-14T16:39:46Z",
      sourceRevision: "2026-10-14",
      contentSha256: "29951c33a3046f9f84a0f5714ec541da4ce49797f9bb75c059bbd4efff04085a",
      locator: "APPROVAL; RELEASE rows-trial-2026-10-14-r2; principles task/support/arms/resistance/handles",
      reviewClassification: "maintained-approved-principle",
      verificationStatus: "verified-local-record",
      verificationMethod: "read-maintained-file-and-review-metadata",
      supportedClaimIds: [
        "profile:incline_db_row:trunk-control",
        "profile:seated_cable_row:resistance",
        "profile:seated_band_row:identity",
        "profile:seated_band_row:resistance",
        "principle:task",
        "principle:support",
        "principle:arms",
        "principle:resistance",
        "principle:handles",
        "pair:seated_cable_row:incline_db_row",
        "pair:seated_cable_row:seated_band_row"
      ],
      scope: "Five reviewed trial principles, bounded to the six exact rowing profiles.",
      limits: [
        "Historical experiment is a provenance record, not production decision code.",
        "Generated wording was not individually reviewed; historical paid outputs are not newly accepted evidence."
      ],
      reuse: "maintained-project-record",
      review: {
        approvedBy: "Michael",
        recordedAt: "2026-10-14",
        exactGeneratedOutputReviewed: false
      }
    },
    {
      id: "source:local-michael-incline",
      title: "Michael\u2019s supplied incline-row instruction and confirmed coaching decisions",
      uri: null,
      localPath: "../PROJECT_B_CONTENT_PLAN.md",
      accessedAt: "2026-10-17T19:17:17Z",
      sourceRevision: "2026-10-08",
      contentSha256: "3dfa78c865651ba05243de52631bdf06866e5c1e13463043205adac86a3ccfb1",
      locator: "Section 14: Michael\u2019s demo and instruction example; row-specific decisions 1\u20132",
      reviewClassification: "maintained-approved-profile",
      verificationStatus: "verified-local-record",
      verificationMethod: "read-maintained-file-and-review-metadata",
      supportedClaimIds: [
        "profile:incline_db_row:setup",
        "profile:incline_db_row:trunk-control",
        "principle:support"
      ],
      scope: "Primary local coaching source for roughly 30\u201345-degree incline, chest contact and whole-body bracing.",
      limits: [
        "Video was not watched/imported; screenshots do not establish exact observed bench angle.",
        "Confirmed angle/cue intent does not approve new media or every generated sentence."
      ],
      reuse: "maintained-project-record",
      review: {
        approvedBy: "Michael",
        recordedAt: "2026-10-08",
        exactGeneratedOutputReviewed: false
      },
      snapshotReconciliation: {
        recordedAt: "2026-10-17",
        previousContentSha256: "7107a46e65b7bbff57c4ffbf86b567550f9e5414d0a144f857a1bdd94941173d",
        reason: "October 17 planning/status reconciliation; cited Section 14 coaching text is unchanged. No new coaching approval.",
        comparisonPath: "../review_history/2026-10-13-before-b4-build/PROJECT_B_CONTENT_PLAN.md",
        comparisonSha256: "f0b6b0eb6909c8db3d7b0ed563e20e5c06719d4b77dfbb6d60dab642126aad2a",
        scopedSection: "## 14.",
        scopedSectionSha256: "173fc5f8ee17926dc9f38ac7b5a518e1cc3e9c5dbd69fc9868667264a77af093",
        limitation: "Exact October 14 whole-file snapshot is unavailable; scoped text was compared with the retained October 13 checkpoint and October 17 Git changes.",
        record: "SOURCE_RECONCILIATION_2026-10-17.md"
      }
    },
    {
      id: "source:local-a1-review",
      title: "Michael-approved A1 review and source ledger",
      uri: null,
      localPath: "../PROJECT_B_MUSCLE_ENDURANCE_BATCH_A_REVIEW.md",
      accessedAt: "2026-10-14T16:39:46Z",
      sourceRevision: "2026-10-13",
      contentSha256: "16cc75c6ae4ed1572431eaec3d6565ddc17223edc8f6ef07698a0157e9b7bb5a",
      locator: "A1 approval ledger; R1-c,d,e,h; R4-f,h; source ledger S01/S02/S03/S13/S14/S27/S28",
      reviewClassification: "maintained-approved-profile-and-principle",
      verificationStatus: "verified-local-record",
      verificationMethod: "read-maintained-file-and-review-metadata",
      supportedClaimIds: [
        "profile:two_db_bent_over_row:identity",
        "profile:incline_db_row:identity",
        "profile:incline_db_row:setup",
        "profile:bench_single_arm_db_row:identity",
        "profile:seated_cable_row:identity",
        "profile:seated_band_row:identity",
        "profile:chest_supported_row_machine:identity",
        "principle:task",
        "pair:two_db_bent_over_row:incline_db_row",
        "pair:two_db_bent_over_row:seated_cable_row",
        "pair:two_db_bent_over_row:chest_supported_row_machine",
        "pair:two_db_bent_over_row:bench_single_arm_db_row",
        "pair:bench_single_arm_db_row:incline_db_row",
        "pair:bench_single_arm_db_row:seated_band_row"
      ],
      scope: "Exact setup choices, directed tiers and mechanical adaptations approved in A1.",
      limits: [
        "Source authors do not prescribe these substitutions; tiers are reviewed Gym Swap coaching synthesis.",
        "Later-family content in this file is outside the six-row pilot."
      ],
      reuse: "maintained-project-record",
      review: {
        approvedBy: "Michael",
        recordedAt: "2026-10-13",
        exactGeneratedOutputReviewed: false
      }
    },
    {
      id: "source:local-row-brief",
      title: "Accepted row alternatives and preferences brief",
      uri: null,
      localPath: "../PROJECT_B_ROW_ALTERNATIVES_BRIEF.md",
      accessedAt: "2026-10-14T16:39:46Z",
      sourceRevision: "2026-10-07",
      contentSha256: "8c6450940fbb0dbd3667c1d47f02816c28ef6fa5d2afee8f62dcf33bd65ad10b",
      locator: "Sections 2, 4 and 9; accepted build 2.3.0",
      reviewClassification: "maintained-approved-profile-and-principle",
      verificationStatus: "verified-local-record",
      verificationMethod: "read-maintained-file-and-review-metadata",
      supportedClaimIds: [
        "profile:seated_band_row:requirements",
        "profile:seated_band_row:execution",
        "profile:seated_band_row:resistance",
        "pair:seated_cable_row:incline_db_row",
        "pair:seated_cable_row:seated_band_row"
      ],
      scope: "Anchored seated-band variation, temporary setup reports and accepted legacy direction boundaries.",
      limits: [
        "Explicitly excludes silently replacing the secured-anchor variation with band-around-feet instructions.",
        "Does not establish a new clinical or detailed biomechanics review."
      ],
      reuse: "maintained-project-record",
      review: {
        approvedBy: "Michael",
        recordedAt: "2026-10-07",
        exactGeneratedOutputReviewed: false
      }
    },
    {
      id: "source:local-row-guide",
      title: "Existing horizontal-row knowledge-base guide",
      uri: null,
      localPath: "../knowledge_base/06_rows.md",
      accessedAt: "2026-10-14T16:39:46Z",
      sourceRevision: "2026-10-07",
      contentSha256: "669e3e98b9cdd73b8403979aa79440fceeb1064eda878114543d9177315fd42d",
      locator: "Preserve the task; Source notes",
      reviewClassification: "maintained-accepted-legacy-principle",
      verificationStatus: "verified-local-record",
      verificationMethod: "read-maintained-file-and-review-metadata",
      supportedClaimIds: [
        "principle:task"
      ],
      scope: "Task preservation and historical 45-degree incline-recognition scope.",
      limits: [
        "Retain legacy evidence as-is; this guide does not silently acquire the newer 30\u201345-degree range.",
        "No new general generation eligibility follows from this record."
      ],
      reuse: "maintained-project-record",
      review: {
        approvedBy: "Michael",
        recordedAt: "2026-10-07",
        exactGeneratedOutputReviewed: false
      }
    },
    {
      id: "source:local-a1-pulls",
      title: "Approved A1 standing straight-arm cable pulldown instruction record",
      uri: null,
      localPath: "dist/prototype/a1-pulls.mjs",
      accessedAt: "2026-10-14T16:47:25Z",
      sourceRevision: "2026-10-13",
      contentSha256: "91fa08b85f3593702f62a5b77bd1575b706e59f6806cdb9f44518fdedecdeeba",
      locator: "straight_arm_cable_pulldown: expect, first cue, context and armPath; review.batch a1-completion-2026-10-13",
      reviewClassification: "maintained-approved-profile",
      verificationStatus: "verified-local-record",
      verificationMethod: "read-maintained-file-and-review-metadata",
      supportedClaimIds: [
        "profile:straight_arm_cable_pulldown:task"
      ],
      scope: "Nearly fixed elbow-angle task, used only as a negative comparison against repeated bent-elbow rowing.",
      limits: [
        "This is not a seventh discoverable pilot profile or a new substitute direction.",
        "No programming, load conversion, muscle-isolation ranking, individual suitability or safety claim adopted.",
        "The maintained external reference is provenance only; this addition verifies the approved local record."
      ],
      reuse: "maintained-project-record",
      review: {
        approvedBy: "Michael",
        recordedAt: "2026-10-13",
        exactGeneratedOutputReviewed: false
      }
    }
  ],
  claims: [
    {
      id: "profile:straight_arm_cable_pulldown:task",
      text: "The maintained straight-arm cable pulldown moves the upper arms toward the body while retaining a soft, nearly fixed elbow angle. It omits repeated elbow bending and does not preserve the six-row pilot's rowing task when that action must be retained.",
      sourceIds: [
        "source:local-a1-pulls"
      ],
      scope: {
        exerciseIds: [
          "straight_arm_cable_pulldown"
        ],
        comparisonUse: "negative-only",
        conditions: [
          "The purpose requires repeated elbow bending documented in the six exact rowing profiles."
        ]
      },
      basis: "maintained-approved-negative-comparison-reference"
    },
    {
      id: "source-fact:ace:barbell-held-hinge",
      text: "ACE documents bent-elbow barbell rowing while retaining a hip hinge, followed by a controlled return.",
      sourceIds: [
        "source:ace-bent-over-row"
      ],
      scope: {
        exerciseIds: [
          "barbell_bent_over_row"
        ]
      },
      basis: "direct-external-source"
    },
    {
      id: "source-fact:ace:hand-knee-row",
      text: "ACE documents one dumbbell with the opposite hand and knee on a bench, elbow bending beside the torso, and avoidance of deliberate torso rotation.",
      sourceIds: [
        "source:ace-single-arm-row"
      ],
      scope: {
        exerciseIds: [
          "bench_single_arm_db_row"
        ]
      },
      basis: "direct-external-source"
    },
    {
      id: "source-fact:ace:seated-cable-row",
      text: "ACE documents seated pulley rowing with a narrow two-hand handle, elbows beside the ribs, and controlled arm extension.",
      sourceIds: [
        "source:ace-seated-row"
      ],
      scope: {
        exerciseIds: [
          "seated_cable_row"
        ]
      },
      basis: "direct-external-source"
    },
    {
      id: "source-fact:nsca:horizontal-pull",
      text: "NSCA distinguishes rowing as horizontal pulling from overhead pulling.",
      sourceIds: [
        "source:nsca-movement-patterns"
      ],
      scope: {
        familyIds: [
          "row"
        ]
      },
      basis: "direct-external-source"
    },
    {
      id: "source-fact:nsca:bench-support",
      text: "NSCA describes bench support as reducing demand for postural stability in a prone bench pull. Its example uses a barbell on a horizontal bench.",
      sourceIds: [
        "source:nsca-movement-patterns"
      ],
      scope: {
        familyIds: [
          "row"
        ],
        conditions: [
          "Bench support is explicitly present."
        ]
      },
      basis: "direct-external-source"
    },
    {
      id: "source-fact:ace:incline-row-identity",
      text: "The ACE illustration sheet identifies a 45-degree incline row. It establishes recognition only.",
      sourceIds: [
        "source:ace-shoulder-illustrations"
      ],
      scope: {
        exerciseIds: [
          "incline_db_row"
        ]
      },
      basis: "direct-external-source"
    },
    {
      id: "source-fact:life-fitness:row-foot-platforms",
      text: "The Life Fitness PWR Play Row station specification lists angled foot platforms and a standard row handle.",
      sourceIds: [
        "source:life-fitness-pwr-play"
      ],
      scope: {
        exerciseIds: [
          "seated_cable_row"
        ],
        conditions: [
          "Equipment-specific example; verify the actual station."
        ]
      },
      basis: "direct-external-source"
    },
    {
      id: "source-fact:nsca:dumbbell-row-category",
      text: "NSCA TSAC Report 48 names dumbbell bent-over rows in an implement-specific table. It does not establish the exact neutral two-dumbbell execution.",
      sourceIds: [
        "source:nsca-tsac48"
      ],
      scope: {
        exerciseIds: [
          "two_db_bent_over_row"
        ]
      },
      basis: "direct-external-source"
    },
    {
      id: "profile:two_db_bent_over_row:identity",
      text: "Two arms row together while the feet are planted and the torso holds an unsupported hip hinge; each hand controls one dumbbell.",
      sourceIds: [
        "source:local-a1-group1",
        "source:local-a1-review"
      ],
      scope: {
        exerciseIds: [
          "two_db_bent_over_row"
        ]
      },
      basis: "maintained-approved-profile"
    },
    {
      id: "profile:two_db_bent_over_row:execution",
      text: "Both elbows draw back beside the torso toward the lower ribs; lower both weights under control and retain the hinge between repetitions.",
      sourceIds: [
        "source:local-a1-group1"
      ],
      scope: {
        exerciseIds: [
          "two_db_bent_over_row"
        ]
      },
      basis: "maintained-approved-profile"
    },
    {
      id: "profile:two_db_bent_over_row:requirements",
      text: "Requires two suitable dumbbells plus standing, pickup and movement clearance; neither chest nor free-hand support is part of this version.",
      sourceIds: [
        "source:local-a1-group1"
      ],
      scope: {
        exerciseIds: [
          "two_db_bent_over_row"
        ]
      },
      basis: "maintained-approved-profile"
    },
    {
      id: "profile:incline_db_row:identity",
      text: "Two-arm dumbbell rowing with chest contact on an inclined bench and independently controlled dumbbells.",
      sourceIds: [
        "source:local-a1-more-rows",
        "source:local-a1-review"
      ],
      scope: {
        exerciseIds: [
          "incline_db_row"
        ]
      },
      basis: "maintained-approved-profile"
    },
    {
      id: "profile:incline_db_row:setup",
      text: "Michael approved a roughly 30\u201345-degree locked bench, supported feet, chest contact, and clearance for hanging and moving dumbbells.",
      sourceIds: [
        "source:local-michael-incline",
        "source:local-a1-more-rows",
        "source:local-a1-review"
      ],
      scope: {
        exerciseIds: [
          "incline_db_row"
        ]
      },
      basis: "maintained-approved-profile"
    },
    {
      id: "profile:incline_db_row:trunk-control",
      text: "Chest support changes the task of sustaining an unsupported hinge and does not remove all trunk control; retain chest contact and body bracing.",
      sourceIds: [
        "source:local-michael-incline",
        "source:local-a1-more-rows",
        "source:local-approved-principles"
      ],
      scope: {
        exerciseIds: [
          "incline_db_row"
        ]
      },
      basis: "maintained-approved-profile"
    },
    {
      id: "profile:incline_db_row:execution",
      text: "Both elbows row back toward the lower ribs; lower smoothly without lifting the chest or bouncing against the pad.",
      sourceIds: [
        "source:local-a1-more-rows"
      ],
      scope: {
        exerciseIds: [
          "incline_db_row"
        ]
      },
      basis: "maintained-approved-profile"
    },
    {
      id: "profile:bench_single_arm_db_row:identity",
      text: "One-arm dumbbell rowing with the opposite hand and knee on a flat bench and the working-side foot planted.",
      sourceIds: [
        "source:local-a1-group1",
        "source:local-a1-review"
      ],
      scope: {
        exerciseIds: [
          "bench_single_arm_db_row"
        ]
      },
      basis: "maintained-approved-profile"
    },
    {
      id: "profile:bench_single_arm_db_row:execution",
      text: "The working elbow draws back beside the torso; keep hand, knee and foot support steady, control the return, and avoid deliberately rotating the torso.",
      sourceIds: [
        "source:local-a1-group1",
        "source:ace-single-arm-row"
      ],
      scope: {
        exerciseIds: [
          "bench_single_arm_db_row"
        ]
      },
      basis: "maintained-approved-profile-with-direct-external-support"
    },
    {
      id: "profile:bench_single_arm_db_row:requirements",
      text: "Requires one suitable dumbbell, a stable flat bench and standing/movement clearance. Set the weight down before changing the support arrangement.",
      sourceIds: [
        "source:local-a1-group1"
      ],
      scope: {
        exerciseIds: [
          "bench_single_arm_db_row"
        ]
      },
      basis: "maintained-approved-profile"
    },
    {
      id: "profile:seated_cable_row:identity",
      text: "Both arms use one close neutral handle on a seated low-cable station; the feet use braces and there is no chest pad.",
      sourceIds: [
        "source:local-a1-more-rows",
        "source:local-a1-review"
      ],
      scope: {
        exerciseIds: [
          "seated_cable_row"
        ]
      },
      basis: "maintained-approved-profile"
    },
    {
      id: "profile:seated_cable_row:execution",
      text: "Hold the torso steady while the elbows draw back and the handle approaches the lower torso; return with controlled arm extension without rocking.",
      sourceIds: [
        "source:local-a1-more-rows",
        "source:ace-seated-row"
      ],
      scope: {
        exerciseIds: [
          "seated_cable_row"
        ]
      },
      basis: "maintained-approved-profile-with-direct-external-support"
    },
    {
      id: "profile:seated_cable_row:resistance",
      text: "Cable tension pulls the handle toward its low pulley; the unpadded torso still resists that forward pull.",
      sourceIds: [
        "source:local-a1-more-rows",
        "source:local-a1-comparisons",
        "source:local-approved-principles"
      ],
      scope: {
        exerciseIds: [
          "seated_cable_row"
        ]
      },
      basis: "maintained-approved-profile"
    },
    {
      id: "profile:seated_band_row:identity",
      text: "A seated two-arm row without a chest pad or hand-and-knee bench support; both arms bend during rowing.",
      sourceIds: [
        "source:local-a1-review",
        "source:local-a1-comparisons",
        "source:local-approved-principles"
      ],
      scope: {
        exerciseIds: [
          "seated_band_row"
        ]
      },
      basis: "maintained-approved-profile"
    },
    {
      id: "profile:seated_band_row:requirements",
      text: "Requires a suitable resistance band, a secured anchor suitable for seated rowing, and clear sitting space. Familiarity with securing and checking that arrangement is required.",
      sourceIds: [
        "source:local-legacy-rows",
        "source:local-row-brief"
      ],
      scope: {
        exerciseIds: [
          "seated_band_row"
        ]
      },
      basis: "maintained-approved-profile"
    },
    {
      id: "profile:seated_band_row:execution",
      text: "Keep the torso steady and neck aligned while rowing; control the return without being pulled out of the seated position.",
      sourceIds: [
        "source:local-legacy-rows",
        "source:local-row-brief"
      ],
      scope: {
        exerciseIds: [
          "seated_band_row"
        ]
      },
      basis: "maintained-approved-profile"
    },
    {
      id: "profile:seated_band_row:resistance",
      text: "Band resistance changes as it stretches. Exact anchor position, grip, handle arrangement and force curve are not established.",
      sourceIds: [
        "source:local-legacy-rows",
        "source:local-row-brief",
        "source:local-approved-principles"
      ],
      scope: {
        exerciseIds: [
          "seated_band_row"
        ]
      },
      basis: "maintained-approved-profile"
    },
    {
      id: "profile:chest_supported_row_machine:identity",
      text: "Seated two-arm rowing with an actual chest pad and handles guided by the station; a padless machine is a different setup.",
      sourceIds: [
        "source:local-a1-more-rows",
        "source:local-a1-comparisons",
        "source:local-a1-review"
      ],
      scope: {
        exerciseIds: [
          "chest_supported_row_machine"
        ]
      },
      basis: "maintained-approved-profile"
    },
    {
      id: "profile:chest_supported_row_machine:setup",
      text: "Adjust the seat, chest pad and handle reach for the actual station; keep chest contact and feet secure, and check loading and release controls.",
      sourceIds: [
        "source:local-a1-more-rows"
      ],
      scope: {
        exerciseIds: [
          "chest_supported_row_machine"
        ]
      },
      basis: "maintained-approved-profile"
    },
    {
      id: "profile:chest_supported_row_machine:execution",
      text: "Both elbows draw back along the actual machine path; return smoothly while retaining chest contact. Handle paths and starting reach vary by machine.",
      sourceIds: [
        "source:local-a1-more-rows"
      ],
      scope: {
        exerciseIds: [
          "chest_supported_row_machine"
        ]
      },
      basis: "maintained-approved-profile"
    },
    {
      id: "principle:task",
      text: "A shared muscle group does not establish substitution. Retaining this rowing task requires the documented rowing arm action and repeated elbow bending.",
      sourceIds: [
        "source:local-approved-principles",
        "source:local-row-guide",
        "source:local-a1-review"
      ],
      scope: {
        familyIds: [
          "row"
        ],
        conditions: [
          "Exact profiles and movement task are known."
        ]
      },
      basis: "maintained-approved-principle"
    },
    {
      id: "principle:support",
      text: "Chest support changes the unsupported torso-hold task without removing all trunk control; hand-and-knee support, a seat without a chest pad, and chest support remain distinct.",
      sourceIds: [
        "source:local-approved-principles",
        "source:local-a1-comparisons",
        "source:local-michael-incline"
      ],
      scope: {
        familyIds: [
          "row"
        ],
        conditions: [
          "Both support arrangements are documented."
        ]
      },
      basis: "maintained-approved-principle"
    },
    {
      id: "principle:arms",
      text: "Changing between bilateral and unilateral rowing changes the separate-arm task. It can be a qualified alternative unless arm-use pattern must be preserved. Sets, reps and loads are never converted automatically.",
      sourceIds: [
        "source:local-approved-principles",
        "source:local-a1-comparisons"
      ],
      scope: {
        familyIds: [
          "row"
        ],
        conditions: [
          "Working arms are documented in both profiles."
        ]
      },
      basis: "maintained-approved-principle"
    },
    {
      id: "principle:resistance",
      text: "Gravity-loaded dumbbells, cable tension toward a pulley, stretching bands and machine-guided handles have different resistance and handling mechanisms. Exact force curves, activation rankings and weight equivalence are not inferred.",
      sourceIds: [
        "source:local-approved-principles",
        "source:local-a1-group1",
        "source:local-a1-more-rows",
        "source:local-legacy-rows"
      ],
      scope: {
        familyIds: [
          "row"
        ],
        conditions: [
          "The resistance mechanism is documented."
        ]
      },
      basis: "maintained-approved-principle"
    },
    {
      id: "principle:handles",
      text: "Shared or guided handles change the freedom to steer separate weights. Apply that distinction only when handle control is explicitly known; band handle arrangement remains unresolved.",
      sourceIds: [
        "source:local-approved-principles",
        "source:local-a1-comparisons",
        "source:local-a1-more-rows"
      ],
      scope: {
        familyIds: [
          "row"
        ],
        conditions: [
          "Handle control is explicitly known in both profiles."
        ]
      },
      basis: "maintained-approved-principle"
    },
    {
      id: "pair:two_db_bent_over_row:incline_db_row",
      text: "R1-c: Some differences; two-arm independent-weight rowing remains, while chest support replaces the unsupported hinge-hold task.",
      sourceIds: [
        "source:local-a1-comparisons",
        "source:local-a1-review"
      ],
      scope: {
        baselineId: "two_db_bent_over_row",
        candidateId: "incline_db_row"
      },
      basis: "maintained-approved-directed-comparison"
    },
    {
      id: "pair:two_db_bent_over_row:seated_cable_row",
      text: "R1-d: Some differences; two-arm rowing remains, while sitting and the forward cable pull replace the standing hinge. Trunk control remains necessary.",
      sourceIds: [
        "source:local-a1-comparisons",
        "source:local-a1-review"
      ],
      scope: {
        baselineId: "two_db_bent_over_row",
        candidateId: "seated_cable_row"
      },
      basis: "maintained-approved-directed-comparison"
    },
    {
      id: "pair:two_db_bent_over_row:chest_supported_row_machine",
      text: "R1-e: Some differences; bilateral rowing remains, while chest support and guided handles change torso holding and independent steering. A padless machine does not qualify.",
      sourceIds: [
        "source:local-a1-comparisons",
        "source:local-a1-review"
      ],
      scope: {
        baselineId: "two_db_bent_over_row",
        candidateId: "chest_supported_row_machine"
      },
      basis: "maintained-approved-directed-comparison"
    },
    {
      id: "pair:two_db_bent_over_row:bench_single_arm_db_row",
      text: "R1-h: Some differences; dumbbell rowing with elbow bending remains, while support and separate-arm performance change. No automatic per-side prescription conversion.",
      sourceIds: [
        "source:local-a1-comparisons",
        "source:local-a1-review"
      ],
      scope: {
        baselineId: "two_db_bent_over_row",
        candidateId: "bench_single_arm_db_row"
      },
      basis: "maintained-approved-directed-comparison"
    },
    {
      id: "pair:bench_single_arm_db_row:incline_db_row",
      text: "R4-f: Some differences; externally supported gravity-loaded rowing remains, while chest support and simultaneous two-arm work replace the separate-side task.",
      sourceIds: [
        "source:local-a1-comparisons",
        "source:local-a1-review"
      ],
      scope: {
        baselineId: "bench_single_arm_db_row",
        candidateId: "incline_db_row"
      },
      basis: "maintained-approved-directed-comparison"
    },
    {
      id: "pair:bench_single_arm_db_row:seated_band_row",
      text: "R4-h: Broader alternative; rowing with elbow bending remains, while seated two-arm band rowing changes resistance, support and separate-side work.",
      sourceIds: [
        "source:local-a1-comparisons",
        "source:local-a1-review"
      ],
      scope: {
        baselineId: "bench_single_arm_db_row",
        candidateId: "seated_band_row"
      },
      basis: "maintained-approved-directed-comparison"
    },
    {
      id: "pair:seated_cable_row:incline_db_row",
      text: "The retained cable-row card preserves rowing while chest support, position, resistance and loading change. The pilot retains its existing Some differences tier.",
      sourceIds: [
        "source:local-legacy-rows",
        "source:local-row-brief",
        "source:local-approved-principles"
      ],
      scope: {
        baselineId: "seated_cable_row",
        candidateId: "incline_db_row"
      },
      basis: "maintained-accepted-legacy-direction"
    },
    {
      id: "pair:seated_cable_row:seated_band_row",
      text: "The retained cable-row card preserves seated rowing while the stretching-band resistance and available loading differ. The pilot retains its existing Some differences tier.",
      sourceIds: [
        "source:local-legacy-rows",
        "source:local-row-brief",
        "source:local-approved-principles"
      ],
      scope: {
        baselineId: "seated_cable_row",
        candidateId: "seated_band_row"
      },
      basis: "maintained-accepted-legacy-direction"
    }
  ],
  profiles: [
    {
      id: "two_db_bent_over_row",
      facts: {
        task: "horizontal-row",
        arms: "bilateral",
        support: "unsupported-hinge",
        resistance: "gravity",
        handleControl: "independent-weights",
        position: "standing-hinge"
      },
      claimIds: [
        "profile:two_db_bent_over_row:identity",
        "profile:two_db_bent_over_row:execution",
        "profile:two_db_bent_over_row:requirements"
      ],
      reviewClassification: "maintained-approved-profile",
      verificationStatus: "verified-local-exact-profile",
      limits: [
        "Neutral two-dumbbell execution is an approved local adaptation.",
        "Reported count or weight does not establish movement-specific handling ability."
      ]
    },
    {
      id: "incline_db_row",
      facts: {
        task: "horizontal-row",
        arms: "bilateral",
        support: "chest",
        resistance: "gravity",
        handleControl: "independent-weights",
        position: "incline-bench"
      },
      claimIds: [
        "profile:incline_db_row:identity",
        "profile:incline_db_row:setup",
        "profile:incline_db_row:trunk-control",
        "profile:incline_db_row:execution"
      ],
      reviewClassification: "maintained-approved-profile",
      verificationStatus: "verified-local-exact-profile",
      limits: [
        "The 30\u201345-degree range comes from Michael\u2019s approved local instructions.",
        "Chest contact does not establish zero trunk work."
      ]
    },
    {
      id: "bench_single_arm_db_row",
      facts: {
        task: "horizontal-row",
        arms: "unilateral",
        support: "hand-and-knee",
        resistance: "gravity",
        handleControl: "independent-weight",
        position: "hand-and-knee-bench"
      },
      claimIds: [
        "profile:bench_single_arm_db_row:identity",
        "profile:bench_single_arm_db_row:execution",
        "profile:bench_single_arm_db_row:requirements"
      ],
      reviewClassification: "maintained-approved-profile",
      verificationStatus: "verified-local-exact-profile",
      limits: [
        "Hand-and-knee support is not chest support.",
        "No automatic bilateral-to-per-side sets/reps/load conversion."
      ]
    },
    {
      id: "seated_cable_row",
      facts: {
        task: "horizontal-row",
        arms: "bilateral",
        support: "seated-without-chest-pad",
        resistance: "cable",
        handleControl: "shared-handle",
        position: "seated"
      },
      claimIds: [
        "profile:seated_cable_row:identity",
        "profile:seated_cable_row:execution",
        "profile:seated_cable_row:resistance"
      ],
      reviewClassification: "maintained-approved-profile",
      verificationStatus: "verified-local-exact-profile",
      limits: [
        "A generic cable stack alone does not establish seat, foot braces, close neutral handle or access.",
        "No exact resistance curve or stack equivalence."
      ]
    },
    {
      id: "seated_band_row",
      facts: {
        task: "horizontal-row",
        arms: "bilateral",
        support: "seated-without-chest-pad",
        resistance: "band",
        handleControl: null,
        position: "seated"
      },
      claimIds: [
        "profile:seated_band_row:identity",
        "profile:seated_band_row:requirements",
        "profile:seated_band_row:execution",
        "profile:seated_band_row:resistance"
      ],
      reviewClassification: "maintained-approved-profile",
      verificationStatus: "verified-local-exact-profile",
      limits: [
        "Exact anchor position and height remain unknown.",
        "Grip, handle arrangement, exact elbow path and exact resistance curve remain unknown.",
        "Do not replace the anchored variation with band-around-feet execution."
      ]
    },
    {
      id: "chest_supported_row_machine",
      facts: {
        task: "horizontal-row",
        arms: "bilateral",
        support: "chest",
        resistance: "machine",
        handleControl: "guided-handles",
        position: "seated-machine"
      },
      claimIds: [
        "profile:chest_supported_row_machine:identity",
        "profile:chest_supported_row_machine:setup",
        "profile:chest_supported_row_machine:execution"
      ],
      reviewClassification: "maintained-approved-profile",
      verificationStatus: "verified-local-exact-profile",
      limits: [
        "Exact station handle path, loading system, starting reach and force curve remain unknown until the equipment is checked.",
        "Seated, machine or guided labels do not independently establish chest support."
      ]
    }
  ],
  principles: [
    {
      id: "principle:task",
      claimId: "principle:task",
      reviewClassification: "maintained-approved-principle",
      approvedLocalRevision: "rows-trial-2026-10-14-r2",
      exactRuleOutputIndividuallyReviewed: false
    },
    {
      id: "principle:support",
      claimId: "principle:support",
      reviewClassification: "maintained-approved-principle",
      approvedLocalRevision: "rows-trial-2026-10-14-r2",
      exactRuleOutputIndividuallyReviewed: false
    },
    {
      id: "principle:arms",
      claimId: "principle:arms",
      reviewClassification: "maintained-approved-principle",
      approvedLocalRevision: "rows-trial-2026-10-14-r2",
      exactRuleOutputIndividuallyReviewed: false
    },
    {
      id: "principle:resistance",
      claimId: "principle:resistance",
      reviewClassification: "maintained-approved-principle",
      approvedLocalRevision: "rows-trial-2026-10-14-r2",
      exactRuleOutputIndividuallyReviewed: false
    },
    {
      id: "principle:handles",
      claimId: "principle:handles",
      reviewClassification: "maintained-approved-principle",
      approvedLocalRevision: "rows-trial-2026-10-14-r2",
      exactRuleOutputIndividuallyReviewed: false
    }
  ],
  directedComparisons: [
    {
      id: "pair:two_db_bent_over_row:incline_db_row",
      baselineId: "two_db_bent_over_row",
      candidateId: "incline_db_row",
      claimId: "pair:two_db_bent_over_row:incline_db_row",
      reviewClassification: "maintained-approved-directed-comparison"
    },
    {
      id: "pair:two_db_bent_over_row:seated_cable_row",
      baselineId: "two_db_bent_over_row",
      candidateId: "seated_cable_row",
      claimId: "pair:two_db_bent_over_row:seated_cable_row",
      reviewClassification: "maintained-approved-directed-comparison"
    },
    {
      id: "pair:two_db_bent_over_row:chest_supported_row_machine",
      baselineId: "two_db_bent_over_row",
      candidateId: "chest_supported_row_machine",
      claimId: "pair:two_db_bent_over_row:chest_supported_row_machine",
      reviewClassification: "maintained-approved-directed-comparison"
    },
    {
      id: "pair:two_db_bent_over_row:bench_single_arm_db_row",
      baselineId: "two_db_bent_over_row",
      candidateId: "bench_single_arm_db_row",
      claimId: "pair:two_db_bent_over_row:bench_single_arm_db_row",
      reviewClassification: "maintained-approved-directed-comparison"
    },
    {
      id: "pair:bench_single_arm_db_row:incline_db_row",
      baselineId: "bench_single_arm_db_row",
      candidateId: "incline_db_row",
      claimId: "pair:bench_single_arm_db_row:incline_db_row",
      reviewClassification: "maintained-approved-directed-comparison"
    },
    {
      id: "pair:bench_single_arm_db_row:seated_band_row",
      baselineId: "bench_single_arm_db_row",
      candidateId: "seated_band_row",
      claimId: "pair:bench_single_arm_db_row:seated_band_row",
      reviewClassification: "maintained-approved-directed-comparison"
    },
    {
      id: "pair:seated_cable_row:incline_db_row",
      baselineId: "seated_cable_row",
      candidateId: "incline_db_row",
      claimId: "pair:seated_cable_row:incline_db_row",
      reviewClassification: "maintained-accepted-legacy-direction"
    },
    {
      id: "pair:seated_cable_row:seated_band_row",
      baselineId: "seated_cable_row",
      candidateId: "seated_band_row",
      claimId: "pair:seated_cable_row:seated_band_row",
      reviewClassification: "maintained-accepted-legacy-direction"
    }
  ],
  gaps: [
    {
      profileId: "two_db_bent_over_row",
      status: "approved-local-adaptation",
      details: "External sources verify held-hinge rowing and the dumbbell-row category; exact neutral independent two-dumbbell execution comes from the approved local profile."
    },
    {
      profileId: "incline_db_row",
      status: "approved-local-source",
      details: "The 30\u201345-degree range and maintained bracing cue are Michael\u2019s confirmed coaching facts. External NSCA support is general, and ACE identifies only a 45-degree incline row."
    },
    {
      profileId: "seated_band_row",
      status: "consequential-unknowns-retained",
      details: "No exact external manufacturer band/anchor configuration was adopted. Anchor position/height, handle arrangement and exact arm path remain unresolved; the accepted anchored profile remains bounded."
    },
    {
      profileId: "chest_supported_row_machine",
      status: "equipment-specific-unknowns-retained",
      details: "NSCA supports the general support distinction, not this exact machine. The reviewed profile defines chest-pad two-arm rowing, while actual station geometry and loading remain to be checked."
    }
  ],
  inaccessibleSources: [],
  verificationLimits: [
    "All seven attempted external references were accessible through their official pages/PDF text.",
    "External document revisions and content hashes were not captured because no full-text snapshots were downloaded. Local source bytes were hashed.",
    "No video or actual gym apparatus was inspected.",
    "This source check does not approve exact generated model outputs or widen the production explanation allowlist."
  ]
};

// ../gym-swap-site/dist/prototype/library-contract.mjs
var CONTRACT_VERSION2 = 1;
var REQUEST_MODES2 = Object.freeze(["inspect", "discover", "compare", "substitute"]);
var FACT_STATES2 = Object.freeze(["yes", "no", "unknown"]);
var fail2 = (message) => {
  throw new TypeError(`Library contract: ${message}`);
};
var record2 = (value) => !!value && typeof value === "object" && !Array.isArray(value) && [Object.prototype, null].includes(Object.getPrototypeOf(value));
var identifier2 = (value) => typeof value === "string" && /^[a-z][a-z0-9_:-]{0,159}$/.test(value) && !["constructor", "prototype"].includes(value);
function keys2(value, allowed, required = allowed) {
  if (!record2(value) || Object.keys(value).some((key) => !allowed.includes(key)) || required.some((key) => !Object.hasOwn(value, key))) fail2("unexpected or missing fields");
}
function ids2(value, max = 100) {
  if (!Array.isArray(value) || value.length > max || Array.from(value).some((x) => !identifier2(x)) || new Set(value).size !== value.length) fail2("invalid identifier list");
}
function facts2(value) {
  if (!record2(value) || Object.keys(value).length > 100 || Object.entries(value).some(([key, state]) => !identifier2(key) || !FACT_STATES2.includes(state))) fail2("invalid reported facts");
}
function freezeData2(value) {
  if (value && typeof value === "object" && !Object.isFrozen(value)) {
    Object.values(value).forEach(freezeData2);
    Object.freeze(value);
  }
  return value;
}
var copy2 = (value) => freezeData2(structuredClone(value));
function validateVisitContext2(value) {
  keys2(value, ["version", "revision", "items", "spaceFacts", "handlingChecks"]);
  if (value.version !== CONTRACT_VERSION2 || !Number.isSafeInteger(value.revision) || value.revision < 0 || !Array.isArray(value.items) || value.items.length > 120 || !Array.isArray(value.handlingChecks) || value.handlingChecks.length > 240) fail2("invalid visit");
  const itemIds = /* @__PURE__ */ new Set();
  for (const item2 of value.items) {
    keys2(item2, ["id", "type", "count", "reportedWeightKg", "presence", "access", "capabilities"]);
    if (!identifier2(item2.id) || !identifier2(item2.type) || itemIds.has(item2.id)) fail2("invalid or duplicate physical item");
    itemIds.add(item2.id);
    if (item2.count !== null && (!Number.isSafeInteger(item2.count) || item2.count < 1 || item2.count > 100)) fail2("invalid item count");
    if (item2.reportedWeightKg !== null && (!Number.isFinite(item2.reportedWeightKg) || item2.reportedWeightKg < 0)) fail2("invalid reported weight");
    if (!["present", "absent", "unknown"].includes(item2.presence) || !["available", "busy", "unknown"].includes(item2.access)) fail2("invalid presence or access");
    if (item2.access !== "unknown" && item2.presence !== "present") fail2("access requires reported presence");
    facts2(item2.capabilities);
  }
  facts2(value.spaceFacts);
  const checks = /* @__PURE__ */ new Set();
  for (const check of value.handlingChecks) {
    keys2(check, ["exerciseId", "itemIds", "checkId", "value"]);
    ids2(check.itemIds);
    if (!identifier2(check.exerciseId) || !identifier2(check.checkId) || !check.itemIds.length || check.itemIds.some((id) => !itemIds.has(id)) || !FACT_STATES2.includes(check.value)) fail2("invalid handling check");
    const key = JSON.stringify([check.exerciseId, [...check.itemIds].sort(), check.checkId]);
    if (checks.has(key)) fail2("duplicate handling check");
    checks.add(key);
  }
  return copy2(value);
}

// ../gym-swap-site/pilot/evidence.mjs
function validatePilotEvidence(value) {
  if (!value || value.schemaVersion !== 1) throw new TypeError("Invalid pilot evidence version");
  const index = (list, label) => {
    if (!Array.isArray(list) || !list.length || list.length > 200) throw new TypeError(`Invalid ${label}`);
    const map = /* @__PURE__ */ new Map();
    for (const record3 of list) {
      if (!record3 || typeof record3.id !== "string" || !/^[a-z][a-z0-9_:-]+$/.test(record3.id) || map.has(record3.id)) throw new TypeError(`Invalid ${label} identity`);
      map.set(record3.id, record3);
    }
    return map;
  };
  const sources = index(value.sources, "sources"), claims = index(value.claims, "claims"), profiles = index(value.profiles, "profiles");
  const refs2 = (ids3, map) => Array.isArray(ids3) && ids3.length && Array.from(ids3).every((id) => typeof id === "string" && map.has(id));
  for (const source2 of sources.values()) if (!source2.title || !["verified-scoped", "verified-local-record"].includes(source2.verificationStatus) || !refs2(source2.supportedClaimIds, claims) || !source2.scope || !Array.isArray(source2.limits) || source2.uri !== null && (!/^https:\/\//.test(source2.uri) || new URL(source2.uri).protocol !== "https:") || source2.review?.exactGeneratedOutputReviewed === true) throw new TypeError(`Unverified pilot source: ${source2.id}`);
  for (const claim of claims.values()) if (!claim.text || !claim.scope || !refs2(claim.sourceIds, sources) || claim.sourceIds.some((id) => !sources.get(id).supportedClaimIds.includes(claim.id))) throw new TypeError(`Dangling pilot claim: ${claim.id}`);
  for (const profile of profiles.values()) if (!refs2(profile.claimIds, claims) || profile.verificationStatus !== "verified-local-exact-profile" || profile.claimIds.some((id) => !claims.get(id).scope.exerciseIds?.includes(profile.id))) throw new TypeError(`Unscoped pilot profile: ${profile.id}`);
  for (const rule of value.principles ?? []) if (!claims.has(rule.claimId) || rule.exactRuleOutputIndividuallyReviewed !== false) throw new TypeError("Invalid pilot principle review");
  for (const pair of value.directedComparisons ?? []) if (!profiles.has(pair.baselineId) || !profiles.has(pair.candidateId) || !claims.has(pair.claimId) || claims.get(pair.claimId).scope.baselineId !== pair.baselineId || claims.get(pair.claimId).scope.candidateId !== pair.candidateId) throw new TypeError("Invalid pilot comparison scope");
  return freezeData2(structuredClone(value));
}
var pilotEvidence = validatePilotEvidence(source_review_default);
var profileClaimIds = (id) => pilotEvidence.profiles.find((profile) => profile.id === id)?.claimIds ?? [];
var sourcesForClaims = (ids3) => [...new Set(ids3.flatMap((id) => pilotEvidence.claims.find((claim) => claim.id === id)?.sourceIds ?? []))];

// ../gym-swap-site/dist/prototype/row-pilot.mjs
var ROW_PILOT_REVISION = "rows-local-1";
var ROW_IDS = Object.freeze(["two_db_bent_over_row", "incline_db_row", "bench_single_arm_db_row", "seated_cable_row", "seated_band_row", "chest_supported_row_machine"]);
var NEGATIVE_ROW_ID = "straight_arm_cable_pulldown";
var item = (role, type, count, capabilities2 = []) => ({ kind: "item", role, type, count, capabilities: capabilities2 });
var space = (fact) => ({ kind: "context", fact });
var handling = (exerciseId, itemRole) => ({ kind: "handling", exerciseId, itemRole, checkId: "controlled_row_setup" });
var all = (clauses) => ({ kind: "all", clauses });
var sharedSpace = [space("firm_ground"), space("row_clearance")];
var attributes = {
  two_db_bent_over_row: {
    arms: "bilateral",
    support: "held_hinge",
    resistance: "gravity",
    handles: "independent",
    position: "standing",
    requires: all([item("weights", "dumbbell", 2), handling("two_db_bent_over_row", "weights"), ...sharedSpace])
  },
  incline_db_row: {
    arms: "bilateral",
    support: "chest",
    resistance: "gravity",
    handles: "independent",
    position: "incline_bench",
    requires: all([item("weights", "dumbbell", 2), item("bench", "bench", 1, ["stable", "incline_30_45"]), handling("incline_db_row", "weights"), ...sharedSpace])
  },
  bench_single_arm_db_row: {
    arms: "unilateral",
    support: "hand_knee",
    resistance: "gravity",
    handles: "independent",
    position: "bench_supported",
    requires: all([item("weights", "dumbbell", 1), item("bench", "bench", 1, ["stable", "flat"]), handling("bench_single_arm_db_row", "weights"), ...sharedSpace])
  },
  seated_cable_row: {
    arms: "bilateral",
    support: "seated_unpadded",
    resistance: "cable",
    handles: "shared",
    position: "seated",
    requires: all([item("station", "cable_row_station", 1, ["seat_foot_braces_close_handle"]), handling("seated_cable_row", "station"), space("row_clearance")])
  },
  seated_band_row: {
    arms: "bilateral",
    support: "seated_unpadded",
    resistance: "band",
    handles: null,
    position: "seated",
    requires: all([item("band", "band", 1), item("anchor", "band_anchor", 1, ["secured_for_row"]), handling("seated_band_row", "band"), ...sharedSpace])
  },
  chest_supported_row_machine: {
    arms: "bilateral",
    support: "chest",
    resistance: "machine",
    handles: "guided",
    position: "seated",
    requires: all([item("station", "chest_row_machine", 1, ["chest_pad", "two_arm_handles"]), handling("chest_supported_row_machine", "station"), space("row_clearance")])
  }
};
var rowProfiles = freezeData(Object.fromEntries(ROW_IDS.map((id) => {
  const maintained = getExercise(id), record3 = contentById(id);
  return [id, {
    ...structuredClone(maintained),
    task: "horizontal_row",
    purposeIds: ["rowing"],
    ...attributes[id],
    requires: validateRequirement(attributes[id].requires),
    family: "row",
    variant: { workingLimbs: attributes[id].arms, position: attributes[id].position, support: attributes[id].support, resistance: attributes[id].resistance },
    armPath: record3?.armPath ?? null,
    resistanceDirection: record3?.resistanceDirection ?? null,
    unknowns: id === "seated_band_row" ? ["exact_elbow_path", "handle_arrangement", "anchor_position", "exact_resistance_curve"] : id === "chest_supported_row_machine" ? ["exact_handle_path", "exact_resistance_curve", "independent_arm_mechanism"] : ["load_equivalence"],
    sourceRefs: sourcesForClaims(profileClaimIds(id)),
    evidenceClaimIds: profileClaimIds(id),
    sourcedFields: {
      identity: `profile:${id}:identity`,
      arms: `profile:${id}:identity`,
      support: `profile:${id}:identity`,
      resistance: "principle:resistance",
      requirements: `profile:${id}:${profileClaimIds(id).includes(`profile:${id}:requirements`) ? "requirements" : profileClaimIds(id).includes(`profile:${id}:setup`) ? "setup" : "identity"}`
    },
    availability: { ...maintained.availability, structuredDiscovery: true, familyRuleComparison: true },
    pilotRevision: ROW_PILOT_REVISION
  }];
})));
var rowRules = freezeData([
  {
    id: "row_task",
    evaluatorId: "horizontal_row_v1",
    requiredProfileFields: ["task", "arms", "support", "resistance"],
    conditions: ["Both exact row variants are documented."],
    exceptions: ["A shared muscle tag does not preserve the requested task."],
    claim: "Rowing with elbow bending is the shared task.",
    sourceRefs: ["approved_row_task"],
    prohibitedConclusions: ["muscle_overlap_equivalence"]
  },
  {
    id: "row_support",
    evaluatorId: "row_support_v1",
    requiredProfileFields: ["support"],
    conditions: ["Support arrangement is explicitly documented."],
    exceptions: ["Machine or seated labels do not establish chest support."],
    claim: "Chest support changes the held-torso task; it does not remove all trunk control.",
    sourceRefs: ["approved_row_support"],
    prohibitedConclusions: ["zero_trunk_control", "safety", "treatment"]
  },
  {
    id: "row_arms",
    evaluatorId: "row_arms_v1",
    requiredProfileFields: ["arms"],
    conditions: ["One-arm or two-arm performance is documented."],
    exceptions: ["Independent handles do not establish unilateral performance."],
    claim: "Changing arm use changes the separate-arm task; prescriptions stay as supplied.",
    sourceRefs: ["approved_row_arms"],
    prohibitedConclusions: ["repetition_conversion"]
  },
  {
    id: "row_resistance",
    evaluatorId: "row_resistance_v1",
    requiredProfileFields: ["resistance"],
    conditions: ["The resistance mechanism is documented."],
    exceptions: ["Exact curves, machine design and loading remain unspecified."],
    claim: "Gravity, pulley, band and machine resistance differ in handling; weights do not convert directly.",
    sourceRefs: ["approved_row_resistance"],
    prohibitedConclusions: ["load_conversion", "exact_force_curve", "activation_ranking"]
  },
  {
    id: "row_handles",
    evaluatorId: "row_handles_v1",
    requiredProfileFields: ["handles"],
    conditions: ["Both handle arrangements are known."],
    exceptions: ["Band handle arrangement is unknown; machine guidance does not establish an exact path."],
    claim: "Guided or shared handles change the freedom to steer separate weights.",
    sourceRefs: ["approved_row_handles"],
    prohibitedConclusions: ["invented_path"]
  }
].map((rule) => ({ ...rule, sourceRefs: sourcesForClaims([`principle:${rule.id.slice(4)}`]), evidenceClaimIds: [`principle:${rule.id.slice(4)}`], revision: ROW_PILOT_REVISION, status: "local-pilot", coachingReview: { kind: "principle", reference: "approved local six-row trial; correction/pilot approval in this conversation" }, outputReview: "not-applicable" })));
var support = { held_hinge: "an unsupported held hinge", chest: "chest support", hand_knee: "hand-and-knee bench support", seated_unpadded: "seated trunk control without a chest pad" };
var resistance = { gravity: "gravity-loaded dumbbells", cable: "cable resistance toward its pulley", band: "stretching-band resistance", machine: "machine resistance through its handles" };
var handles = { independent: "independently controlled dumbbells", shared: "a shared handle", guided: "guided machine handles" };
var emptyPilotVisit = () => ({ version: 1, revision: 0, items: [], spaceFacts: {}, handlingChecks: [] });
function compareRows(baselineId, candidateId, { mustPreserve = [] } = {}) {
  const a = rowProfiles[baselineId], b = rowProfiles[candidateId];
  if (!a || !b && candidateId !== NEGATIVE_ROW_ID || baselineId === candidateId) throw new TypeError("Unsupported row comparison");
  if (candidateId === NEGATIVE_ROW_ID) return freezeData({ similarity: "poor", basis: { kind: "family-rule", ids: ["row_task"] }, keeps: "The requested bent-elbow rowing task is not retained.", changes: "A straight-arm pulldown keeps the elbows nearly fixed.", check: "Shared muscles do not establish a suitable substitute.", claimIds: ["principle:task", "profile:straight_arm_cable_pulldown:task"], differences: ["task"] });
  const missing = ["task", "arms", "support", "resistance"].filter((field) => !a[field] || !b[field]);
  if (missing.length) return freezeData({ similarity: null, basis: { kind: "none", ids: [] }, keeps: "", changes: "", check: "Essential profile facts are missing.", claimIds: [], differences: missing });
  const differences = ["arms", "support", "resistance", "position", "handles"].filter((field) => a[field] !== b[field] && (field !== "handles" || a.handles && b.handles));
  const poor = mustPreserve.includes("arm_pattern") && a.arms !== b.arms || mustPreserve.includes("chest_support") && b.support !== "chest" || mustPreserve.includes("independent_handles") && b.handles !== "independent";
  const maintained = getMaintainedComparison(baselineId, candidateId);
  const similarity = poor ? "poor" : maintained?.similarity ?? (differences.includes("arms") && differences.includes("support") && differences.includes("resistance") ? "broader" : differences.length ? "some" : "close");
  const changes = [];
  if (differences.includes("support")) changes.push(`Changes from ${support[a.support]} to ${support[b.support]}.`);
  if (differences.includes("arms")) changes.push(`Changes from ${a.arms === "bilateral" ? "both arms together" : "one arm at a time"} to ${b.arms === "bilateral" ? "both arms together" : "one arm at a time"}.`);
  if (differences.includes("resistance")) changes.push(`Changes from ${resistance[a.resistance]} to ${resistance[b.resistance]}.`);
  if (differences.includes("handles")) changes.push(`Changes from ${handles[a.handles]} to ${handles[b.handles]}.`);
  const ruleIds = ["row_task", ...differences.filter((field) => ["arms", "support", "resistance", "handles"].includes(field)).map((field) => `row_${field}`)];
  const claimIds = [...profileClaimIds(a.id), ...profileClaimIds(b.id), ...ruleIds.map((id) => `principle:${id.slice(4)}`), ...maintained ? [`pair:${a.id}:${b.id}`] : []];
  const checks = [
    poor ? "This setup does not preserve an explicit comparison constraint." : "",
    maintained?.text.check,
    b.support === "chest" ? "Chest support does not remove all trunk control." : "",
    b.resistance === "band" ? "Use a secure rowing anchor; band tension may limit the available loading. Exact anchor position and handle arrangement remain unspecified." : "",
    b.resistance === "machine" ? "Handle path and starting reach depend on the machine." : "",
    differences.includes("arms") ? "No automatic per-side repetition conversion." : "",
    "Choose the load separately; no direct weight conversion."
  ].filter(Boolean);
  return freezeData({
    similarity,
    differences,
    basis: maintained && !poor ? { kind: "maintained-pair", ids: [maintained.id] } : { kind: "family-rule", ids: ruleIds },
    keeps: maintained && !poor ? maintained.text.keeps : a.arms === b.arms ? `${b.arms === "bilateral" ? "Two-arm" : "Single-arm"} rowing with elbow bending.` : "Rowing with elbow bending.",
    changes: maintained && !poor ? maintained.text.changes : changes.join(" ") || "The documented principal task and support are retained.",
    check: checks.join(" "),
    claimIds
  });
}
function relevance(profile, request) {
  if (request.intent.purposeIds.some((id) => !profile.purposeIds.includes(id)) || request.intent.movementIds.some((id) => id !== profile.task) || request.intent.muscleIds.some((id) => !["back", "rear_shoulders"].includes(id))) return null;
  if (request.constraints.positionIds.length && !request.constraints.positionIds.includes(profile.position)) return null;
  if (request.constraints.mustPreserve.includes("chest_support") && profile.support !== "chest" || request.constraints.mustPreserve.includes("independent_handles") && profile.handles !== "independent") return null;
  if (request.query.trim() && !/row|back|pull|torso|support|arm|workout|kettlebell|dumbbell|machine|bench|band|cable|resistance|range|bottom/i.test(request.query)) return null;
  return "direct";
}
function decideRows(rawRequest, rawContext) {
  const request = validateLibraryRequest(rawRequest), context = validateVisitContext(rawContext);
  if (request.contextRevision !== context.revision) throw new TypeError("Stale visit context");
  if (request.constraints.mustPreserve.some((id) => !["arm_pattern", "chest_support", "independent_handles", "horizontal_row"].includes(id))) return freezeData({ status: "unsupported", message: "That constraint is outside this row pilot.", decisions: [] });
  if (/\b(pain|injury|rehab|diagnos\w*|treatment|symptoms?)\b|how many (sets|reps)|prescribe|convert.*\b(kg|lbs?|weight)\b/i.test(request.query)) return freezeData({ status: "limited", message: "This pilot compares documented setups. It cannot prescribe treatment, programming or converted loads.", decisions: [] });
  if (request.baselineId && !rowProfiles[request.baselineId]) return freezeData({ status: "unsupported", message: "Choose one of the six documented rowing setups.", decisions: [] });
  if (!request.baselineId && request.constraints.mustPreserve.includes("arm_pattern")) return freezeData({ status: "unsupported", message: "Choose a baseline before asking to preserve its arm-use pattern.", decisions: [] });
  if (request.baselineId && request.baselineId === request.candidateId) return freezeData({ status: "no-match", message: "Choose a different exercise to compare; you can keep the original.", decisions: [] });
  const ids3 = request.candidateId ? [request.candidateId] : ROW_IDS.filter((id) => id !== request.baselineId);
  const decisions = ids3.map((id) => {
    const profile = rowProfiles[id];
    if (!profile) {
      const negative = id === NEGATIVE_ROW_ID && request.baselineId ? compareRows(request.baselineId, id) : null;
      return {
        exerciseId: id,
        baselineId: request.baselineId,
        eligibility: negative ? "excluded" : "unsupported",
        relevance: null,
        similarity: negative?.similarity ?? null,
        setup: { status: "unsupported", unresolvedFacts: [], conflictingFacts: ["outside_pilot"], branchIds: [], instructionRefs: [], itemBindings: [] },
        comparison: negative,
        basis: negative?.basis ?? { kind: "none", ids: [] },
        essentialClaimIds: negative?.claimIds ?? [],
        reasonIds: ["outside_pilot"],
        contextRevision: context.revision
      };
    }
    const comparison6 = request.baselineId && request.baselineId !== id ? compareRows(request.baselineId, id, request.constraints) : null;
    const relevant = relevance(profile, request), setup = evaluateRequirements(profile.requires, context, request.constraints);
    const reasonIds = [...setup.conflictingFacts, ...setup.unresolvedFacts];
    const excluded = !relevant || comparison6?.similarity === "poor";
    if (!relevant) reasonIds.push("intent_or_position_mismatch");
    if (comparison6?.similarity === "poor") reasonIds.push("must_preserve_conflict");
    return {
      exerciseId: id,
      baselineId: request.baselineId,
      eligibility: excluded || setup.status === "conflict" ? "excluded" : setup.status === "unsupported" || comparison6?.similarity === null ? "unsupported" : setup.status === "confirmed" ? "eligible" : "conditional",
      relevance: relevant,
      similarity: comparison6?.similarity ?? null,
      setup: { ...setup, instructionRefs: setup.instructionRefs.length ? setup.instructionRefs : [id] },
      basis: comparison6?.basis ?? { kind: "profile", ids: [id] },
      comparison: comparison6,
      essentialClaimIds: comparison6?.claimIds ?? profile.evidenceClaimIds,
      reasonIds,
      contextRevision: context.revision
    };
  });
  const order = { eligible: 0, conditional: 1, excluded: 2, unsupported: 3 }, tier = { close: 0, some: 1, broader: 2, poor: 3 };
  decisions.sort((a, b) => order[a.eligibility] - order[b.eligibility] || (tier[a.similarity] ?? 0) - (tier[b.similarity] ?? 0) || ROW_IDS.indexOf(a.exerciseId) - ROW_IDS.indexOf(b.exerciseId));
  const matches = decisions.filter((d) => ["eligible", "conditional"].includes(d.eligibility));
  const scopeMessage = /range|bottom|force curve|more resistance/i.test(request.query) ? "Exact comparative range and resistance at a particular point are not established. The documented support and handle differences remain available." : "";
  return freezeData({ status: matches.length ? "results" : "no-match", message: matches.length ? scopeMessage : "No documented pilot setup fits these facts and constraints. Edit them or keep the original.", decisions });
}
function resolveRow(input) {
  const query = String(input).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const ambiguous = { "chest supported row": ["incline_db_row", "chest_supported_row_machine"], "seated row": ["seated_cable_row", "seated_band_row", "chest_supported_row_machine"], "dumbbell row": ["two_db_bent_over_row", "incline_db_row", "bench_single_arm_db_row"] };
  if (ambiguous[query]) return { status: "ambiguous", candidates: ambiguous[query] };
  const result = resolveExercise(input);
  return result.status === "resolved" && !rowProfiles[result.id] ? { status: "unmatched", candidates: [] } : result;
}

// ../gym-swap-site/dist/prototype/equipment-notes.mjs
var noteTypes = {
  dumbbell: { label: "Dumbbells", pattern: "(?:dumbbells?|dbs?)", keys: ["dumbbells", "single_dumbbell", "goblet_dumbbell", "row_dumbbell_pair", "renegade_dumbbells", "side_deadlift_dbs", "front_deadlift_dbs", "unequal_deadlift_dbs", "incline_press_dbs", "fly_dbs"] },
  kettlebell: { label: "Kettlebells", pattern: "(?:kettlebells?|kbs?)", keys: ["single_kettlebell", "goblet_kettlebell", "gorilla_kettlebells", "row_kettlebell_pair", "side_deadlift_kbs", "central_deadlift_kb"] },
  bench: { label: "Bench", pattern: "(?:(?:adjustable|flat|fixed incline) )?bench(?:es)?", keys: ["bench", "row_flat_bench", "low_incline_press_bench", "hip_thrust_bench"] },
  smith: { label: "Smith machine", pattern: "smith(?: machine)?", keys: ["smith_machine", "vertical_smith_deadlift_setup", "dual_axis_deadlift_setup", "vertical_smith_squat_setup"] },
  barbell: { label: "Barbell", pattern: "(?:barbells?|bb)", keys: ["barbell_load", "landmine_setup", "barbell_bench_station"] },
  band: { label: "Resistance band", pattern: "(?:resistance )?bands?", keys: ["band", "long_band", "thigh_band", "overhead_pulldown_band", "overhead_pullup_band", "dip_band_setup", "band_chest_press_setup"] },
  cable_row_station: { label: "Seated cable-row station", pattern: "(?:seated )?cable[ -]row (?:station|machine)", keys: ["seated_row_station"] },
  chest_row_machine: { label: "Chest-pad row machine", pattern: "chest[ -](?:pad|supported) row machine", keys: ["row_machine"] }
};
function adaptPilot(visit, notes, changed) {
  const next = structuredClone(visit), unresolved = [], affected = /* @__PURE__ */ new Set();
  for (const type of changed) {
    const fact = notes.facts[type];
    if (!["dumbbell", "kettlebell", "bench", "band", "cable_row_station", "chest_row_machine"].includes(type)) {
      unresolved.push(`${noteTypes[type].label}: outside the six-row physical-item adapter.`);
      continue;
    }
    const matches = next.items.filter((item3) => item3.type === type);
    if (matches.length > 1) {
      matches.forEach((item3) => affected.add(item3.id));
      unresolved.push(`${noteTypes[type].label}: multiple physical records; edit them in the manual pilot form.`);
      continue;
    }
    if (!matches.length && next.items.length >= 12) {
      unresolved.push("Physical-item limit reached; use the manual pilot form.");
      continue;
    }
    const item2 = matches[0] ?? { id: `note_${type}`, type, reportedWeightKg: null, capabilities: {} };
    Object.assign(item2, { count: fact.count, presence: fact.presence, access: fact.access, capabilities: {} });
    if (!matches.length) next.items.push(item2);
    affected.add(item2.id);
  }
  next.handlingChecks = next.handlingChecks.filter((check) => !check.itemIds.some((id) => affected.has(id)));
  next.revision++;
  return { visit: next, unresolved };
}

// ../gym-swap-site/dist/prototype/workout.mjs
var MAX_TEXT = 24e3;
var MAX_ENTRIES = 120;
var workoutCatalogue = legacyWorkoutCatalogue;
var catalogueEntry = (id) => workoutCatalogue.find((x) => x.id === id);
var alternativeSignature = (id) => catalogueEntry(comparisonOriginalId(id))?.signature ?? null;
var alternativesFor = (id) => cardsFor(id);
var usableMatch = (entry) => entry.matchId && catalogueEntry(entry.matchId)?.signature === entry.matchSignature ? entry.matchId : null;
var usableChoice = (entry) => !entry.choice?.pilot && entry.choice?.kind === "alternative" && usableMatch(entry) && alternativesFor(entry.matchId).some((x) => x.id === entry.choice.id) && alternativeSignature(entry.choice.id) === entry.choice.signature;
function validateWorkout(value) {
  const string = (x, max) => typeof x === "string" && x.length <= max;
  const id = (x) => string(x, 160) && /^[a-zA-Z0-9_-]+$/.test(x);
  if (!value || value.version !== 1 || !id(value.id) || !string(value.title, 200) || !string(value.sourceText, MAX_TEXT) || !string(value.notes, MAX_TEXT) || !Array.isArray(value.entries) || !value.entries.length || value.entries.length > MAX_ENTRIES || !Number.isInteger(value.position) || value.position < 0 || value.position >= value.entries.length) throw new Error("invalid_workout");
  const ids3 = /* @__PURE__ */ new Set();
  const entries = value.entries.map((e) => {
    if (!e || !id(e.id) || ids3.has(e.id) || !string(e.label, 2e3) || !e.label.trim() || !string(e.notes, MAX_TEXT) || !string(e.sourceText, MAX_TEXT) || !(e.matchId === null || id(e.matchId)) || !(e.matchSignature === null || id(e.matchSignature)) || !["proposed", "matched", "ambiguous", "unmatched", "written"].includes(e.review)) throw new Error("invalid_entry");
    ids3.add(e.id);
    let choice = null;
    if (e.choice !== null) {
      if (e.choice?.kind === "original") choice = { kind: "original" };
      else if (e.choice?.kind === "alternative" && id(e.choice.id) && id(e.choice.signature)) {
        choice = { kind: "alternative", id: e.choice.id, signature: e.choice.signature };
        if (e.choice.pilot !== void 0) {
          const p = e.choice.pilot;
          if (!p || p.version !== 1 || !id(p.revision) || !id(p.baselineId) || !id(p.dependencySignature) || !Array.isArray(p.mustPreserve) || p.mustPreserve.length > 20 || Array.from(p.mustPreserve).some((x) => !id(x)) || new Set(p.mustPreserve).size !== p.mustPreserve.length || Object.keys(p).some((key) => !["version", "revision", "baselineId", "dependencySignature", "mustPreserve"].includes(key))) throw new Error("invalid_pilot_choice");
          choice.pilot = { version: 1, revision: p.revision, baselineId: p.baselineId, dependencySignature: p.dependencySignature, mustPreserve: [...p.mustPreserve] };
        }
      } else throw new Error("invalid_choice");
    }
    return { id: e.id, label: e.label, notes: e.notes, sourceText: e.sourceText, matchId: e.matchId, matchSignature: e.matchSignature, review: e.review, choice, candidates: Array.isArray(e.candidates) ? e.candidates.filter(id).slice(0, 8) : [], warning: string(e.warning, 1e3) ? e.warning : "" };
  });
  return { version: 1, id: value.id, title: value.title, sourceText: value.sourceText, notes: value.notes, entries, position: value.position, warnings: Array.isArray(value.warnings) ? value.warnings.filter((x) => string(x, 1e3)).slice(0, 10) : [] };
}

// ../gym-swap-site/pilot/workout-policy.mjs
function fingerprint(value) {
  let hash2 = 14695981039346656037n;
  for (const char of JSON.stringify(value)) hash2 = BigInt.asUintN(64, (hash2 ^ BigInt(char.codePointAt(0))) * 1099511628211n);
  return `p_${hash2.toString(16).padStart(16, "0")}`;
}
var dependencies = (a, b) => fingerprint([ROW_PILOT_REVISION, rowProfiles[a], rowProfiles[b], rowRules, pilotEvidence]);
var workoutPolicy = {
  supports: (id) => Object.hasOwn(rowProfiles, id),
  candidateMatches(label) {
    const result = resolveRow(label);
    return result.status === "ambiguous" ? result.candidates.map(catalogueEntry).filter(Boolean) : null;
  },
  reviewDraft(draft) {
    return { ...draft, entries: draft.entries.map((entry) => {
      if (["matched", "written"].includes(entry.review)) return entry;
      const candidates = this.candidateMatches(entry.label);
      return candidates ? {
        ...entry,
        matchId: null,
        matchSignature: null,
        review: "ambiguous",
        candidates: candidates.map((item2) => item2.id),
        choice: null,
        warning: "Choose the exact rowing support and arm-use setup, or keep this entry as written."
      } : entry;
    }) };
  },
  usableChoice(entry) {
    if (!entry.choice?.pilot) return usableChoice(entry);
    const p = entry.choice.pilot, a = usableMatch(entry), b = entry.choice.id;
    return entry.choice.kind === "alternative" && a && this.supports(a) && this.supports(b) && a !== b && p.revision === ROW_PILOT_REVISION && p.baselineId === a && p.dependencySignature === dependencies(a, b) && entry.choice.signature === alternativeSignature(b) && compareRows(a, b, { mustPreserve: p.mustPreserve }).similarity !== "poor";
  },
  choose(workout, entryId, candidateId, mustPreserve = []) {
    const entry = workout.entries.find((e) => e.id === entryId), a = entry && usableMatch(entry);
    if (!a || !this.supports(a) || !this.supports(candidateId) || a === candidateId || !Array.isArray(mustPreserve) || Array.from(mustPreserve).some((id) => !["arm_pattern", "chest_support", "independent_handles", "horizontal_row"].includes(id)) || compareRows(a, candidateId, { mustPreserve }).similarity === "poor") throw new TypeError("This alternative does not preserve the selected row task and constraints.");
    const choice = {
      kind: "alternative",
      id: candidateId,
      signature: alternativeSignature(candidateId),
      pilot: { version: 1, revision: ROW_PILOT_REVISION, baselineId: a, dependencySignature: dependencies(a, candidateId), mustPreserve: [...mustPreserve] }
    };
    return validateWorkout({ ...workout, entries: workout.entries.map((e) => e.id === entryId ? { ...e, choice } : e) });
  }
};

// ../gym-swap-site/pilot/ui.mjs
var esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
var types = { dumbbell: "Dumbbell", kettlebell: "Kettlebell", bench: "Bench", cable_row_station: "Seated cable-row station", band: "Resistance band", band_anchor: "Secured band anchor", chest_row_machine: "Chest-pad row machine" };
var caps = { bench: { stable: "Stable support", flat: "Usable flat", incline_30_45: "Locked around 30\u201345\xB0" }, cable_row_station: { seat_foot_braces_close_handle: "Seat, foot braces and close neutral handle" }, band_anchor: { secured_for_row: "Secured for this rowing setup" }, chest_row_machine: { chest_pad: "Actual chest pad", two_arm_handles: "Usable two-arm handles" } };
var factOptions = [["unknown", "Not checked"], ["yes", "Yes"], ["no", "No"]];
var select = (attributes2, value, options) => `<select ${attributes2}>${options.map(([id, label]) => `<option value="${id}" ${id === value ? "selected" : ""}>${esc(label)}</option>`).join("")}</select>`;
var names = ROW_IDS.map((id) => [id, rowProfiles[id].name]);
var labels = { eligible: "Reported setup confirmed", conditional: "Setup to check", excluded: "Setup or constraint conflict", unsupported: "Outside this pilot" };
var tiers = { close: "Close match", some: "Some differences", broader: "Broader alternative", poor: "Poor substitute for this task" };
function mountRowPilot({ workout, onExisting, onClearVisit, onVisitChange }) {
  let visit = emptyPilotVisit(), nextItem = 0, current = [], target = null, standaloneChoice = null, previousStandalone = null, focusedCandidate = null, standaloneUndoAvailable = false;
  const style = document.createElement("style");
  style.textContent = `.library-pilot{color:var(--ink);background:var(--bg);border:1px solid var(--border);border-radius:8px;width:880px;max-width:calc(100% - 16px);max-height:94dvh;padding:24px;overflow:auto}.library-pilot::backdrop{background:rgb(0 0 0 / .45)}.library-pilot h1{font-size:1.35rem}.library-pilot h2{font-size:1.1rem}.pilot-head,.pilot-actions{display:flex;gap:12px;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:14px}.pilot-fields{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0}.library-pilot label{display:block}.library-pilot input:not([type=checkbox]),.library-pilot select{width:100%;padding:10px;border:1px solid var(--border);border-radius:5px;background:var(--paper);color:var(--ink)}.pilot-card,.pilot-item{background:var(--paper);border:1px solid var(--border);padding:16px;margin:14px 0;border-radius:6px}.pilot-card p{margin:8px 0}.pilot-card ol{padding-left:24px}.pilot-card summary,.library-pilot details>summary{padding:10px 0}.pilot-item h3{font-size:1rem}.pilot-status{font-weight:600}.pilot-small{font-size:.85rem;color:var(--muted)}.pilot-warning{padding:12px;border-left:3px solid var(--teal);margin:12px 0}.pilot-handling{margin:12px 0}.pilot-card button{min-height:44px}.pilot-sources p{margin:8px 0}@media(max-width:540px){.pilot-fields{grid-template-columns:1fr}.library-pilot{padding:14px;max-height:98dvh}}`;
  document.head.append(style);
  const opener = document.createElement("button");
  opener.type = "button";
  opener.className = "button secondary";
  opener.textContent = "Explore the six-row pilot";
  document.querySelector(".primary-navigation").after(opener);
  const dialog = document.createElement("dialog");
  dialog.className = "library-pilot";
  dialog.setAttribute("aria-labelledby", "pilot-title");
  document.body.append(dialog);
  dialog.innerHTML = `<div class="pilot-head"><h1 id="pilot-title">Explore rowing setups</h1><button class="button secondary" type="button" data-pilot-close>Back to Gym Swap</button></div><p class="pilot-small">Local pilot \xB7 Six documented setups \xB7 Equipment reports last for this visit.</p>
  <p id="pilot-target" class="pilot-warning" hidden></p><button id="pilot-existing" class="button secondary" type="button" data-pilot-existing hidden>See existing reviewed swaps</button><form id="pilot-form"><div class="pilot-fields"><label>Task${select('id="pilot-mode"', "discover", [["discover", "Discover rows"], ["inspect", "Inspect one setup"], ["substitute", "Find substitutes"], ["compare", "Compare two setups"]])}</label>
  <label id="pilot-baseline-field">Baseline exercise${select('id="pilot-baseline"', "incline_db_row", names)}</label><label id="pilot-candidate-field">Candidate exercise${select('id="pilot-candidate"', "chest_supported_row_machine", [...names, [NEGATIVE_ROW_ID, "Straight-arm cable pulldown \u2014 different task"], ["chest supported row", "Chest-supported row \u2014 setup uncertain"]])}</label>
  <label>Exercise name or focus (optional)<input id="pilot-query" maxlength="600" placeholder="For example: torso support"></label></div>
  <label><input type="checkbox" id="pilot-arms"> Preserve the baseline\u2019s one-arm or two-arm pattern</label><label><input type="checkbox" id="pilot-chest"> Require chest support</label><label><input type="checkbox" id="pilot-only"> Use only the equipment types reported here</label>
  <div class="pilot-actions"><button type="submit" class="button primary">Show setups</button><button class="button secondary" type="button" data-pilot-reset>Clear visit reports</button></div></form>
  <details id="pilot-inventory"><summary>Manual physical equipment and space</summary><p class="pilot-small">Count actual units. A weight value does not confirm handling or suitability for an exercise.</p>
  <div class="pilot-fields"><label>Add physical equipment${select('id="pilot-add-type"', "dumbbell", Object.entries(types))}</label><button class="button secondary" type="button" data-pilot-add>Add item</button></div><div id="pilot-items"></div>
  <div class="pilot-fields"><label>Firm, stable ground${select('data-pilot-space="firm_ground"', "unknown", factOptions)}</label><label>Clear rowing and pickup space${select('data-pilot-space="row_clearance"', "unknown", factOptions)}</label></div></details>
  <p id="pilot-error" role="alert"></p><p id="pilot-selected" class="pilot-warning" hidden></p><div id="pilot-results" aria-live="polite"></div>`;
  const $ = (id) => dialog.querySelector(`#${id}`);
  const notePanel = document.getElementById("equipment-note-panel"), noteHome = document.createComment("equipment note home");
  notePanel.before(noteHome);
  const showNotes = () => dialog.querySelector("#pilot-target").before(notePanel);
  const returnNotes = () => noteHome.after(notePanel);
  const mustPreserve = () => [$("pilot-arms").checked && !$("pilot-arms").disabled ? "arm_pattern" : "", $("pilot-chest").checked ? "chest_support" : ""].filter(Boolean);
  function request({ mode = $("pilot-mode").value, candidateId = null, baselineId = $("pilot-baseline").value } = {}) {
    return {
      version: 1,
      mode,
      query: $("pilot-query").value,
      baselineId: ["substitute", "compare"].includes(mode) ? baselineId : null,
      candidateId: ["inspect", "compare"].includes(mode) ? candidateId ?? $("pilot-candidate").value : null,
      intent: { purposeIds: ["rowing"], movementIds: ["horizontal_row"], muscleIds: [] },
      constraints: { allowedEquipmentTypes: $("pilot-only").checked ? [...new Set(visit.items.filter((item2) => item2.presence !== "absent").map((item2) => item2.type))] : null, positionIds: [], mustPreserve: mustPreserve() },
      contextRevision: visit.revision
    };
  }
  function controls() {
    const mode = $("pilot-mode").value;
    $("pilot-baseline-field").hidden = !["substitute", "compare"].includes(mode);
    $("pilot-candidate-field").hidden = !["inspect", "compare"].includes(mode);
    $("pilot-arms").disabled = !["substitute", "compare"].includes(mode);
  }
  function renderItems() {
    $("pilot-items").innerHTML = visit.items.map((item2) => `<article class="pilot-item"><div class="pilot-actions"><h3>${esc(types[item2.type])} \xB7 item ${esc(item2.id.split("_").at(-1))}</h3><button class="text-button" type="button" data-pilot-remove="${item2.id}">Remove item</button></div><div class="pilot-fields">
    <label>Physical units (blank if unknown)<input type="number" min="1" max="100" step="1" data-pilot-item="${item2.id}" data-field="count" value="${item2.count ?? ""}"></label>
    <label>Reported weight per unit, kg (optional)<input type="number" min="0" step="any" data-pilot-item="${item2.id}" data-field="reportedWeightKg" value="${item2.reportedWeightKg ?? ""}"></label>
    <label>Presence${select(`data-pilot-item="${item2.id}" data-field="presence"`, item2.presence, [["present", "Present"], ["absent", "Absent"], ["unknown", "Not sure"]])}</label>
    <label>Access now${select(`data-pilot-item="${item2.id}" data-field="access" ${item2.presence !== "present" ? "disabled" : ""}`, item2.access, [["unknown", "Not checked"], ["available", "Available"], ["busy", "In use"]])}</label>
    ${Object.entries(caps[item2.type] ?? {}).map(([key, label]) => `<label>${esc(label)}${select(`data-pilot-item="${item2.id}" data-cap="${key}"`, item2.capabilities[key] ?? "unknown", factOptions)}</label>`).join("")}</div></article>`).join("");
    for (const field of dialog.querySelectorAll("[data-pilot-space]")) field.value = visit.spaceFacts[field.dataset.pilotSpace] ?? "unknown";
  }
  function describeReason(reason) {
    if (reason.startsWith("space:")) return reason.endsWith("firm_ground") ? "Firm, stable ground" : "Clear rowing and pickup space";
    if (reason.startsWith("handling:")) return "Handling for this exact exercise";
    if (reason.startsWith("capability:")) {
      const [, id, cap] = reason.split(":");
      const item2 = visit.items.find((item3) => item3.id === id);
      return caps[item2?.type]?.[cap] ?? "Equipment feature";
    }
    if (reason.startsWith("restricted:")) return `${types[reason.slice(11)] ?? "Equipment"} outside your listed types`;
    if (reason.startsWith("item:")) return "Required physical equipment or unit count";
    if (reason.startsWith("count:")) return "Physical unit count";
    if (reason.startsWith("access:")) return "Current access";
    if (reason.startsWith("presence:")) return "Physical presence";
    return reason === "must_preserve_conflict" ? "Requested arm use or support" : "Request outside the documented setup";
  }
  function handlingControl(decision) {
    const node = rowProfiles[decision.exerciseId].requires.clauses.find((node2) => node2.kind === "handling");
    const ids3 = [...new Set(decision.setup.itemBindings.filter((binding) => binding.role === node.itemRole).map((binding) => binding.itemId))].sort();
    if (!ids3.length || decision.setup.status === "conflict") return "";
    const check = visit.handlingChecks.find((check2) => check2.exerciseId === decision.exerciseId && check2.checkId === node.checkId && JSON.stringify([...check2.itemIds].sort()) === JSON.stringify(ids3));
    return `<label class="pilot-handling">Can you control and check this exact rowing setup with the bound equipment?${select(`data-pilot-handling="${decision.exerciseId}"`, check?.value ?? "unknown", factOptions)}</label>`;
  }
  function focusedQuestion(decision) {
    if (decision.setup.status === "conflict") return "";
    const reason = decision.setup.unresolvedFacts[0];
    if (!reason) return '<p class="pilot-small">Reported checks retained for this setup.</p>';
    const [kind, id, capability] = reason.split(":");
    if (kind === "handling") return handlingControl(decision);
    if (kind === "space") return `<label>${esc(describeReason(reason))}${select(`data-pilot-space="${id}"`, visit.spaceFacts[id] ?? "unknown", factOptions)}</label>`;
    const item2 = visit.items.find((item3) => item3.id === id);
    if (item2 && kind === "capability") return `<label>${esc(describeReason(reason))}${select(`data-pilot-item="${id}" data-cap="${capability}"`, item2.capabilities[capability] ?? "unknown", factOptions)}</label>`;
    if (item2 && kind === "count") return `<label>Physical units of ${esc(types[item2.type])}<input type="number" min="1" max="100" data-pilot-item="${id}" data-field="count" value="${item2.count ?? ""}"></label>`;
    if (item2 && ["presence", "access"].includes(kind)) return `<label>${esc(describeReason(reason))} \xB7 ${esc(types[item2.type])}${select(`data-pilot-item="${id}" data-field="${kind}"`, item2[kind], kind === "presence" ? [["unknown", "Not checked"], ["present", "Present"], ["absent", "Absent"]] : [["unknown", "Not checked"], ["available", "Available"], ["busy", "In use"]])}</label>`;
    return '<p class="pilot-small">Required physical item is unreported. Add a note above or use Manual physical equipment and space below.</p>';
  }
  function card(decision) {
    const profile = rowProfiles[decision.exerciseId];
    if (!profile) return `<p class="pilot-warning">This candidate is outside the six-row pilot${decision.similarity === "poor" ? " and does not preserve the rowing task" : ""}.</p>`;
    const c = decision.comparison, sources = sourcesForClaims(decision.essentialClaimIds).map((id) => pilotEvidence.sources.find((source2) => source2.id === id));
    const reasons = [...new Set(decision.reasonIds.map(describeReason))];
    const instructions = profile.instructions;
    return `<article class="pilot-card" data-pilot-card="${profile.id}"><h2 tabindex="-1">${esc(profile.name)}</h2><p class="pilot-status">${esc(labels[decision.eligibility])}${c ? ` \xB7 ${esc(tiers[c.similarity] ?? "Comparison incomplete")}` : ""}</p>
    ${c ? `<p class="pilot-small">${c.basis.kind === "maintained-pair" ? "Maintained directed comparison" : "Comparison from reviewed row principles"}</p><p><strong>Keeps</strong> ${esc(c.keeps)}</p><p><strong>Changes</strong> ${esc(c.changes)}</p><p><strong>Check</strong> ${esc(c.check)}</p>` : `<p>${esc(profile.focus)}</p>`}
    ${reasons.length ? `<p class="pilot-small">${decision.eligibility === "excluded" ? "Conflict / check" : "To check"}: ${esc(reasons.join("; "))}.</p>` : ""}${focusedCandidate === profile.id ? focusedQuestion(decision) : `<button type="button" class="text-button" data-pilot-check="${profile.id}">Check this setup</button>`}
    ${["eligible", "conditional"].includes(decision.eligibility) ? `<button type="button" class="button primary" data-pilot-choose="${profile.id}">${target ? "Use this swap" : "Use this setup"}</button>` : ""}
    <p class="pilot-small">Card: ${esc(profile.id)} \xB7 Gym Swap maintained instructions</p>${instructions.setup.map((p) => `<p>${esc(p)}</p>`).join("")}<details><summary>How to do it and detail</summary><ol>${instructions.steps.map((p) => `<li>${esc(p)}</li>`).join("")}</ol>${instructions.detail.map((p) => `<p>${esc(p)}</p>`).join("")}</details>
    <details class="pilot-sources"><summary>Sources and limits</summary><p class="pilot-small">Maintained profiles and reviewed principles support these facts. Exact rule wording has not been individually reviewed.</p>${sources.map((source2) => `<p>${source2.uri ? `<a href="${esc(source2.uri)}" target="_blank" rel="noopener noreferrer">${esc(source2.title)}</a>` : `<strong>${esc(source2.title)}</strong>`}<br><span class="pilot-small">${esc(source2.scope)}</span></p>`).join("")}<p class="pilot-small">Unresolved: ${esc(profile.unknowns.map((id) => id.replaceAll("_", " ")).join("; "))}.</p></details></article>`;
  }
  function submit() {
    controls();
    $("pilot-error").textContent = "";
    try {
      const mode = $("pilot-mode").value, rawCandidate = $("pilot-candidate").value;
      const resolution = ["inspect", "compare"].includes(mode) && rawCandidate !== NEGATIVE_ROW_ID ? resolveRow(rawCandidate) : mode === "discover" && $("pilot-query").value.trim() ? resolveRow($("pilot-query").value) : null;
      if (resolution?.status === "ambiguous") {
        current = [];
        $("pilot-results").innerHTML = `<p class="pilot-warning">Which exact setup do you mean?</p>${resolution.candidates.filter((id) => rowProfiles[id]).map((id) => `<button type="button" class="button secondary" data-pilot-resolve="${id}">${esc(rowProfiles[id].name)}</button>`).join("")}`;
        return;
      }
      const result = decideRows(request({ candidateId: resolution?.status === "resolved" && ["inspect", "compare"].includes(mode) ? resolution.id : null }), visit);
      current = result.decisions;
      const listMode = ["discover", "substitute"].includes(mode), visible = listMode ? current.filter((d) => ["eligible", "conditional"].includes(d.eligibility)) : current;
      const conflicts = listMode ? current.filter((d) => !["eligible", "conditional"].includes(d.eligibility)) : [];
      $("pilot-results").innerHTML = `${result.message ? `<p class="pilot-warning">${esc(result.message)}</p>` : ""}${visible.map(card).join("")}${conflicts.length ? `<details><summary>Why ${conflicts.length} other setups are outside this request</summary>${conflicts.map(card).join("")}</details>` : ""}`;
      if (!standaloneChoice) $("pilot-selected").hidden = true;
      if (standaloneChoice && !target) {
        $("pilot-selected").hidden = false;
        const selected = current.find((decision) => decision.exerciseId === standaloneChoice);
        $("pilot-selected").textContent = `Selected: ${rowProfiles[standaloneChoice].name} \xB7 ${selected ? labels[selected.eligibility] : "Recheck against the current request"}. Saved workouts are unchanged.`;
        const undoButton = document.createElement("button");
        undoButton.type = "button";
        undoButton.className = "text-button";
        undoButton.dataset.pilotUndo = "";
        undoButton.textContent = "Undo selection";
        if (standaloneUndoAvailable) $("pilot-selected").append(undoButton);
      }
      workout.refreshVisit();
    } catch (error) {
      $("pilot-error").textContent = "Check the request and physical reports. " + error.message;
      current = [];
      $("pilot-results").replaceChildren();
    }
  }
  function updateVisit(next, { invalidateHandling = false, renderInventory = true } = {}) {
    const clean = validateVisitContext2({ ...next, revision: visit.revision + 1, handlingChecks: invalidateHandling ? [] : next.handlingChecks });
    const previous = visit;
    visit = structuredClone(clean);
    onVisitChange?.(visit, previous);
    if (renderInventory) renderItems();
    submit();
  }
  function close(returnToEntry = true) {
    const old = target;
    target = null;
    $("pilot-mode").disabled = false;
    $("pilot-baseline").disabled = false;
    if (dialog.open) dialog.close();
    returnNotes();
    if (returnToEntry && old) workout.backToEntry();
  }
  function reset() {
    visit = { ...emptyPilotVisit(), revision: visit.revision + 1 };
    standaloneChoice = null, previousStandalone = null;
    focusedCandidate = null;
    standaloneUndoAvailable = false;
    $("pilot-selected").hidden = true;
    renderItems();
    if (dialog.open) submit();
    workout.refreshVisit();
  }
  dialog.addEventListener("cancel", () => close());
  $("pilot-form").addEventListener("submit", (event) => {
    event.preventDefault();
    submit();
  });
  dialog.addEventListener("input", (event) => {
    const field = event.target;
    if (!field.dataset.pilotItem || !["count", "reportedWeightKg"].includes(field.dataset.field)) return;
    try {
      const next = structuredClone(visit), item2 = next.items.find((item3) => item3.id === field.dataset.pilotItem);
      item2[field.dataset.field] = field.value === "" ? null : Number(field.value);
      updateVisit(next, { invalidateHandling: true, renderInventory: false });
    } catch (error) {
      $("pilot-error").textContent = "Report was not applied. " + error.message;
    }
  });
  dialog.addEventListener("change", (event) => {
    const field = event.target;
    try {
      if (field.dataset.pilotSpace) {
        updateVisit({ ...visit, spaceFacts: { ...visit.spaceFacts, [field.dataset.pilotSpace]: field.value } }, { invalidateHandling: true });
        return;
      }
      if (field.dataset.pilotItem) {
        if (["count", "reportedWeightKg"].includes(field.dataset.field)) return;
        const next = structuredClone(visit), item2 = next.items.find((item3) => item3.id === field.dataset.pilotItem);
        if (field.dataset.cap) item2.capabilities[field.dataset.cap] = field.value;
        else item2[field.dataset.field] = ["count", "reportedWeightKg"].includes(field.dataset.field) ? field.value === "" ? null : Number(field.value) : field.value;
        if (item2.presence !== "present") item2.access = "unknown";
        updateVisit(next, { invalidateHandling: true });
        return;
      }
      if (field.dataset.pilotHandling) {
        const decision = current.find((decision2) => decision2.exerciseId === field.dataset.pilotHandling), node = rowProfiles[decision.exerciseId].requires.clauses.find((node2) => node2.kind === "handling");
        const ids3 = [...new Set(decision.setup.itemBindings.filter((binding) => binding.role === node.itemRole).map((binding) => binding.itemId))].sort();
        updateVisit({ ...visit, handlingChecks: [...visit.handlingChecks.filter((check) => check.exerciseId !== decision.exerciseId), { exerciseId: decision.exerciseId, itemIds: ids3, checkId: node.checkId, value: field.value }] });
        return;
      }
      if (field.id !== "pilot-add-type") submit();
    } catch (error) {
      $("pilot-error").textContent = "Report was not applied. " + error.message;
      renderItems();
    }
  });
  dialog.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.pilotCheck) {
      focusedCandidate = button.dataset.pilotCheck;
      submit();
    }
    if (button.hasAttribute("data-pilot-undo") && standaloneUndoAvailable) {
      standaloneChoice = previousStandalone;
      previousStandalone = null;
      standaloneUndoAvailable = false;
      submit();
    }
    if (button.hasAttribute("data-pilot-close")) close();
    if (button.hasAttribute("data-pilot-existing") && target) {
      const entry = workout.currentEntry();
      if (entry?.id === target.occurrenceId) {
        close(false);
        onExisting(entry);
      }
      return;
    }
    if (button.hasAttribute("data-pilot-reset")) {
      reset();
      onClearVisit?.();
    }
    if (button.hasAttribute("data-pilot-add")) {
      if (visit.items.length >= 12) {
        $("pilot-error").textContent = "This pilot supports up to twelve physical item records.";
        return;
      }
      const item2 = { id: `item_${++nextItem}`, type: $("pilot-add-type").value, count: 1, reportedWeightKg: null, presence: "present", access: "unknown", capabilities: {} };
      updateVisit({ ...visit, items: [...visit.items, item2] });
    }
    if (button.dataset.pilotRemove) updateVisit({ ...visit, items: visit.items.filter((item2) => item2.id !== button.dataset.pilotRemove) }, { invalidateHandling: true });
    if (button.dataset.pilotResolve) {
      if ($("pilot-mode").value === "discover") {
        $("pilot-mode").value = "inspect";
        $("pilot-query").value = "";
      }
      $("pilot-candidate").value = button.dataset.pilotResolve;
      submit();
    }
    if (button.dataset.pilotChoose) {
      const id = button.dataset.pilotChoose;
      submit();
      const decision = current.find((decision2) => decision2.exerciseId === id);
      if (!decision || !["eligible", "conditional"].includes(decision.eligibility)) return;
      if (target) {
        if (workout.occurrenceId !== target.occurrenceId) {
          $("pilot-error").textContent = "The workout entry changed. Reopen its alternatives.";
          return;
        }
        if (workout.chooseAlternative(id, mustPreserve())) close(false);
      } else {
        previousStandalone = standaloneChoice;
        standaloneChoice = id;
        standaloneUndoAvailable = true;
        $("pilot-selected").hidden = false;
        $("pilot-selected").textContent = `Selected: ${rowProfiles[id].name} \xB7 ${labels[decision.eligibility]}. Saved workouts are unchanged.`;
        const undoButton = document.createElement("button");
        undoButton.type = "button";
        undoButton.className = "text-button";
        undoButton.dataset.pilotUndo = "";
        undoButton.textContent = "Undo selection";
        if (standaloneUndoAvailable) $("pilot-selected").append(undoButton);
      }
    }
  });
  opener.addEventListener("click", () => {
    target = null;
    $("pilot-target").hidden = true;
    $("pilot-existing").hidden = true;
    $("pilot-mode").value = "discover";
    showNotes();
    dialog.showModal();
    renderItems();
    submit();
  });
  document.getElementById("new-session").addEventListener("click", () => {
    close(false);
    reset();
  });
  return {
    supports: (id) => !!rowProfiles[id],
    close,
    reset,
    captureVisit: () => structuredClone(visit),
    noteIssues: (notes) => adaptPilot(visit, notes, Object.keys(notes.facts)).unresolved,
    restoreVisit(snapshot) {
      visit = structuredClone(validateVisitContext2({ ...snapshot, revision: visit.revision + 1 }));
      renderItems();
      if (dialog.open) submit();
    },
    applyNoteFacts(notes, changed) {
      const result = adaptPilot(visit, notes, changed);
      visit = structuredClone(validateVisitContext2(result.visit));
      renderItems();
      if (dialog.open) submit();
      return result.unresolved;
    },
    openForWorkout(entry) {
      target = { occurrenceId: entry.id, baselineId: entry.matchId };
      $("pilot-target").hidden = false;
      $("pilot-target").textContent = `Choose for this occurrence of ${entry.label}. Your original notes and targets stay as supplied.`;
      $("pilot-existing").hidden = !alternativesFor(entry.matchId).length;
      $("pilot-mode").value = "substitute";
      $("pilot-mode").disabled = true;
      $("pilot-baseline").value = entry.matchId;
      $("pilot-baseline").disabled = true;
      $("pilot-query").value = "";
      $("pilot-selected").hidden = true;
      showNotes();
      if (!dialog.open) dialog.showModal();
      renderItems();
      submit();
    },
    choiceStatus(baselineId, id, preserve = []) {
      try {
        const result = decideRows({ ...request({ mode: "compare", baselineId, candidateId: id }), query: "", constraints: { ...request().constraints, mustPreserve: preserve } }, visit);
        return labels[result.decisions[0]?.eligibility] ?? "Setup to check";
      } catch {
        return "Setup to check";
      }
    }
  };
}
export {
  mountRowPilot,
  workoutPolicy
};
