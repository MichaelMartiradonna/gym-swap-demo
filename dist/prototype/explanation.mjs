const fallback='The explanation is unavailable. You can still use the written card.';
const escape=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// One active request. Invalidating context prevents a late answer from reappearing.
export function questionController(send,onChange) {
  let sequence=0,controller=null;
  return {
    cancel(){sequence++;controller?.abort();controller=null;},
    async ask(question){
      const version=++sequence;controller?.abort();controller=new AbortController();
      const currentController=controller;
      onChange({status:'loading'});
      const timer=setTimeout(()=>currentController.abort(),25000);
      try {
        const result=await send(question,currentController.signal);
        if(version===sequence) onChange(result);
      } catch {
        if(version===sequence) onChange({status:'unavailable',answer:fallback,citations:[]});
      } finally {clearTimeout(timer);}
    },
  };
}

export function mountExplanation(root) {
  let context=null, card=null;
  root.innerHTML=`<details class="ask-detail"><summary>Ask about this swap</summary>
    <p class="help explanation-card"></p>
    <form class="ask-form"><label class="field-label" for="swap-question">What would you like explained?</label>
      <div class="question-starters"><button type="button" data-question="What changes about torso support?">Torso support</button><button type="button" data-question="What should I focus on during the row?">Setup cues</button></div>
      <textarea id="swap-question" rows="3" maxlength="600" required placeholder="Ask about the setup or tradeoff"></textarea>
      <button class="button primary ask-submit" type="submit">Ask</button>
    </form><div class="explanation-answer" role="status" aria-live="polite" aria-atomic="true"></div></details>`;
  const form=root.querySelector('form'),input=root.querySelector('textarea'),answer=root.querySelector('.explanation-answer');
  const controls=[...form.querySelectorAll('button')];
  const display=result=>{
    const loading=result.status==='loading';
    for(const button of controls) button.disabled=loading;
    answer.setAttribute('aria-busy',String(loading));
    if(loading){answer.textContent='Checking the reviewed notes…';return;}
    const heading=result.status==='answered'?'AI explanation from reviewed notes':'Reviewed notes';
    answer.innerHTML=`<p class="answer-label">${heading}</p><p>${escape(result.answer??fallback)}</p>`;
    if(result.status==='answered' && Array.isArray(result.citations)) {
      for(const citation of result.citations) {
        const detail=document.createElement('details'); detail.className='answer-source';
        detail.innerHTML=`<summary>${escape(citation.title)}</summary><blockquote>${escape(citation.text)}</blockquote><p class="help">${escape(citation.source)}</p>`;
        answer.append(detail);
      }
    }
  };
  const controller=questionController(async(question,signal)=>{
    if(!card) throw new Error('missing_card');
    const response=await fetch('/api/explain',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({originalId:card.originalId,cardId:card.id,question}),signal});
    const result=await response.json();
    if(!['answered','insufficient','unavailable','limited','invalid'].includes(result.status) || typeof result.answer!=='string') throw new Error('invalid_response');
    return result;
  },display);
  form.addEventListener('submit',event=>{event.preventDefault();if(!controls.some(x=>x.disabled) && input.value.trim()) controller.ask(input.value.trim());});
  root.querySelector('.question-starters').addEventListener('click',event=>{
    const button=event.target.closest('[data-question]');
    if(button){input.value=button.dataset.question;input.focus();}
  });
  return {
    setContext(key,visible,currentCard){
      root.hidden=!visible;
      card=currentCard;
      root.querySelector('.explanation-card').textContent=card ? `About: ${card.name}` : '';
      const starter=root.querySelector('[data-question]');
      starter.dataset.question=card?.id === 'incline_db_row' ? 'What changes about torso support?' : card?.id === 'db_floor_press' ? 'What changes about the range?' : `What changes compared with the ${card?.originalName ?? 'original exercise'}?`;
      starter.textContent=card?.id === 'incline_db_row' ? 'Torso support' : card?.id === 'db_floor_press' ? 'Range difference' : 'What changes';
      root.querySelectorAll('[data-question]')[1].dataset.question='What should I focus on during this exercise?';
      if(key!==context){
        context=key;controller.cancel();input.value='';answer.replaceChildren();answer.setAttribute('aria-busy','false');
        for(const button of controls)button.disabled=false;
        root.querySelector('details').open=false;
      }
    },
  };
}
