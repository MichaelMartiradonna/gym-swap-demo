// Insert supported equipment names only. Counts, availability, setup claims and
// report state are untouched; Apply equipment note remains a separate action.
const vocabulary=[
  ['Dumbbells',['dumbbells','dbs']],['Kettlebells',['kettlebells','kbs']],
  ['Bench',['bench']],['Adjustable bench',['adjustable bench']],['Flat bench',['flat bench']],['Fixed incline bench',['fixed incline bench']],
  ['Smith machine',['smith machine']],['Barbell',['barbell','bb']],['Resistance band',['resistance band','band']],
  ['Seated cable-row station',['seated cable-row station','cable row station']],['Chest-pad row machine',['chest-pad row machine','chest supported row machine']],
];
export function equipmentCompletions(text,caret=text.length){
  if(typeof text!=='string'||text.length>4000)return [];
  const at=Math.max(0,Math.min(text.length,caret)),prefix=text.slice(0,at),tokens=[...prefix.matchAll(/[a-z-]+/gi)];
  const last=tokens.at(-1);if(!last||last.index+last[0].length!==at||last[0].length<2)return [];
  const end=at+(text.slice(at).match(/^[a-z-]*/i)?.[0].length??0),matches=[];
  for(const [label,aliases]of vocabulary){let best=null;
    for(const alias of aliases){const words=alias.split(' ');
      for(let size=1;size<=words.length&&size<=tokens.length;size++){
        const tail=tokens.slice(-size),fragment=prefix.slice(tail[0].index).toLowerCase();
        if(fragment.length>=2&&alias.startsWith(fragment)&&text.slice(tail[0].index,end).toLowerCase()!==label.toLowerCase()&&(!best||tail[0].index<best.start))best={label,start:tail[0].index,end};
      }
    }
    if(best)matches.push(best);
  }
  return matches.sort((a,b)=>a.start-b.start).slice(0,6);
}
export function insertEquipmentCompletion(text,choice){
  const valid=vocabulary.some(([label])=>label===choice.label);
  if(!valid||choice.start<0||choice.end<choice.start||choice.end>text.length)throw Error('Choose a supported equipment name.');
  const result=text.slice(0,choice.start)+choice.label+text.slice(choice.end);
  if(result.length>4000)throw Error('Use an equipment note of up to 4,000 characters.');
  return {text:result,caret:choice.start+choice.label.length};
}
