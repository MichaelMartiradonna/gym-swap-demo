import {WORKOUT_KEY,validateWorkout,unsavedMessage} from './workout.mjs?v=2.8.0';

export const WORKOUT_LIBRARY_KEY='gym-swap.workouts.v1';
export const MAX_WORKOUTS=20;
const empty=()=>({version:1,activeId:null,workouts:[]});
export function validateWorkoutLibrary(value){
  if(!value||value.version!==1||!Array.isArray(value.workouts)||value.workouts.length>MAX_WORKOUTS)throw Error('invalid_workout_library');
  const workouts=value.workouts.map(validateWorkout),ids=new Set(workouts.map(w=>w.id));
  if(ids.size!==workouts.length||!(value.activeId===null&&!workouts.length||ids.has(value.activeId)))throw Error('invalid_active_workout');
  return {version:1,activeId:value.activeId,workouts};
}
// One atomic collection write; retain the legacy single-workout bytes as a
// migration backup. Once the new key exists, an empty collection stays empty.
export function workoutLibraryStore(getStorage){
  let locked=false,library=empty(),expectedRaw=null,expectedLegacy=null,initialized=false;
  const active=()=>library.workouts.find(w=>w.id===library.activeId)??null;
  function load(){
    try{
      const storage=getStorage(),raw=storage.getItem(WORKOUT_LIBRARY_KEY);
      const legacy=raw===null?storage.getItem(WORKOUT_KEY):null;
      const next=raw!==null?validateWorkoutLibrary(JSON.parse(raw)):legacy!==null?(()=>{const workout=validateWorkout(JSON.parse(legacy));return {version:1,activeId:workout.id,workouts:[workout]};})():empty();
      library=next;expectedRaw=raw;expectedLegacy=legacy;initialized=true;locked=false;
      return {workout:structuredClone(active()),workouts:structuredClone(library.workouts),message:'',locked:false};
    }catch{locked=true;return {workout:null,workouts:[],locked:true,message:`Saved workouts could not be read. ${unsavedMessage} Existing stored data has been left untouched.`};}
  }
  function write(next,{discard=false}={}){
    if((locked&&!discard)||!initialized&&!discard)return {saved:false,message:`${unsavedMessage} Retry reading or explicitly discard protected saved data.`};
    try{
      const storage=getStorage();
      if(!discard&&(storage.getItem(WORKOUT_LIBRARY_KEY)!==expectedRaw||expectedRaw===null&&storage.getItem(WORKOUT_KEY)!==expectedLegacy)){locked=true;return {saved:false,message:`Saved workouts changed in another tab. ${unsavedMessage} Retry reading before switching workouts.`};}
      const checked=validateWorkoutLibrary(next),raw=JSON.stringify(checked);
      storage.setItem(WORKOUT_LIBRARY_KEY,raw);library=checked;expectedRaw=raw;initialized=true;locked=false;
      return {saved:true,message:''};
    }catch{return {saved:false,message:unsavedMessage};}
  }
  return {
    load,protect(){locked=true;},get locked(){return locked;},list(){return structuredClone(library.workouts);},
    save(workout,{replaceId=null}={}){
      try{
        const checked=validateWorkout(workout);
        if(replaceId&&!library.workouts.some(w=>w.id===replaceId))throw Error('The workout to replace is no longer saved.');
        const others=library.workouts.filter(w=>w.id!==checked.id&&w.id!==replaceId);
        if(others.length>=MAX_WORKOUTS)return {saved:false,message:'This browser has 20 saved workouts. Delete one before saving another; your current workout is still open.'};
        return write({version:1,activeId:checked.id,workouts:[checked,...others]});
      }catch(error){return {saved:false,message:error.message==='invalid_workout'?unsavedMessage:error.message};}
    },
    select(id){
      const workout=library.workouts.find(w=>w.id===id);
      if(!workout)return {saved:false,message:'Saved workout not found.'};
      const result=write({...library,activeId:id});return {...result,workout:result.saved?structuredClone(workout):null};
    },
    remove(id=library.activeId){
      if(locked)return {removed:false,message:'Saved data is protected. Retry reading before deleting a workout.'};
      if(!library.workouts.some(w=>w.id===id))return {removed:true,workout:structuredClone(active()),message:''};
      const workouts=library.workouts.filter(w=>w.id!==id),next={version:1,activeId:workouts[0]?.id??null,workouts};
      const result=write(next);return {...result,removed:result.saved,workout:result.saved?structuredClone(active()):null};
    },
    discard(){const result=write(empty(),{discard:true});return {...result,removed:result.saved};},
  };
}
