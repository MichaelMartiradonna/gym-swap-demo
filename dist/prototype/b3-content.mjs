import {day1Content} from './day1-content.mjs?v=2.8.0';

// Approved B3: one shared standing-start variation, distinct from the floor deadlift.
export const b3Review = {
  batch:'b3-approved-2026-10-13',
  basis:'Michael approved B3 (D3/H4), all seventeen directed comparisons, both disclosed original setups and the low-handle hex-bar RDL variation. Stop after this group; no RAG promotion or later groups.',
};
export const b3Equipment = {
  hex_rdl_setup:'Low-handle hex bar with secured loading, frame/plate clearance through the hinge and a controlled pickup/set-down arrangement',
};
const rdl=day1Content.find(record=>record.id==='barbell_rdl');

export const b3Content = [{
  id:'hex_bar_rdl',name:'Hex-bar Romanian deadlift — low handles',variationOf:'barbell_rdl',
  aliases:['low handle hex bar rdl','low handle trap bar rdl','low handle hex bar romanian deadlift','low handle trap bar romanian deadlift'],
  focus:'Bilateral hip hinging with a hex frame held by neutral side handles.',
  expect:'Hinge from standing with modest knee bend, keeping the frame clear and the load controlled.',
  needs:'Low-handle hex bar/secured loading · hinge clearance · controlled pickup/set-down · standing space',
  requires:['hex_rdl_setup','standing_space'],
  setup:'Set suitable secured plates on a low-handle hex bar and plan a controlled pickup and set-down. Reach standing inside the centered frame with a neutral grip on both low handles, arms long and feet planted. Check that the frame, legs and plates have clearance through the intended hinge. Each repetition begins standing.',
  cue:'Move the hips back with modest knee bend; reverse the hinge without a settled floor reset.',
  cues:[
    ...rdl.cues.slice(0,3),
    'Keep the frame clear as it lowers and rises. Reverse the hinge within controlled range without settling the plates between repetitions.',
    'At the finish, use the planned controlled set-down before releasing the handles or stepping out of the frame.',
  ],
  context:'The initial pickup and final set-down are handling phases, separate from the standing-start repetitions. Floor contact is not a depth target. This low-handle version does not include a deficit, raised heels or a locked-knee stiff-leg execution. High handles change hand/frame/plate relationships and floor clearance; they are not silently included. The floor-reset hex-bar deadlift remains a separate exercise.',
  references:[...rdl.references,{
    label:'Eleiko: The Hex Bar',url:'https://enterprise.eleiko.com/media/MIQX8EB1380.pdf',
    scope:'Manufacturer paper identifies neutral side handles and the hex-bar RDL as a distinct exercise. Low handles and these concise instructions are the approved catalogue setup; no clinical, performance or load-equivalence claims adopted.',
  },{
    label:'Eleiko: How to Get the Most Out of Your Trap Bar',url:'https://eleiko.com/en/stories/how-to-get-the-most-out-of-your-trap-bar',
    scope:'Manufacturer identifies two handle heights and a Romanian-deadlift variation. No reduced-back-stress, easier-exercise or injury-prevention claims adopted.',
  }],
  family:'hinge',review:b3Review,sourceChecked:'2026-10-13',
}];
