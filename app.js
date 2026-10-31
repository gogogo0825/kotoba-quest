const words = [
  ['ねこ','neko','どうぶつ'],['いぬ','inu','どうぶつ'],['くま','kuma','どうぶつ'],['とり','tori','どうぶつ'],['さかな','sakana','どうぶつ'],['うさぎ','usagi','どうぶつ'],
  ['すし','sushi','たべもの'],['りんご','ringo','たべもの'],['ぱん','pan','たべもの'],['みかん','mikan','たべもの'],['おにぎり','onigiri','たべもの'],['けーき','keeki','たべもの'],
  ['ほん','hon','みぢかなもの'],['くつ','kutsu','みぢかなもの'],['そら','sora','みぢかなもの'],['くるま','kuruma','みぢかなもの'],['ぼうし','boushi','みぢかなもの'],['えんぴつ','enpitsu','みぢかなもの'],
].map(([kana,romaji,category])=>({kana,romaji,category}));
const creatures=[
  {name:'もこもこウルフ',color:'#78ac84',light:'#b2d8a4',accent:'#e5b969',stage:'みどりの草原'},
  {name:'ほのおのコロ',color:'#e98262',light:'#ffc28d',accent:'#ffe28c',stage:'ひだまり火山'},
  {name:'みずたまペン',color:'#69a9bf',light:'#b3e4e7',accent:'#edcf76',stage:'きらきら川'},
  {name:'はっぱドラ',color:'#91ac56',light:'#cde28c',accent:'#ed9b73',stage:'ふしぎな森'},
  {name:'ほしのモグ',color:'#8b83b9',light:'#c8c0eb',accent:'#f1d584',stage:'ほしふる丘'},
];
const storageKey='kotoba-quest-save-v1';
const initial={level:1,xp:0,wordsTyped:0,correct:0,recruited:[],wordIndex:0,monsterIndex:0,monsterHp:3};
const el=(id)=>document.getElementById(id);
const input=el('typing-input');
let state=load();
let current=words[state.wordIndex%words.length];
let timer=null,secondsLeft=0,timedOut=false,toastTimer=null;

function load(){
  try{
    const saved=JSON.parse(localStorage.getItem(storageKey));
    if(!saved||typeof saved!=='object')return {...initial,recruited:[]};
    return {...initial,...saved,level:Math.max(1,Number(saved.level)||1),xp:Math.max(0,Number(saved.xp)||0),recruited:Array.isArray(saved.recruited)?saved.recruited:[]};
  }catch{return {...initial,recruited:[]};}
}
function save(wordIndex=state.wordIndex){
  try{localStorage.setItem(storageKey,JSON.stringify({...state,wordIndex}));document.querySelector('.save-state').innerHTML='<span class="save-dot"></span>ぼうけんを保存中';}
  catch{document.querySelector('.save-state').innerHTML='<span class="save-dot"></span>このブラウザでは保存できません';}
}
function creatureAt(index=state.monsterIndex){return creatures[index%creatures.length];}
function monsterSvg(creature){return `<svg viewBox="0 0 120 120" role="img" aria-label="${creature.name}"><path d="M25 42 17 20 39 31M81 31 103 20 95 46" fill="${creature.accent}" stroke="#344d40" stroke-width="4" stroke-linejoin="round"/><path d="M20 59c0-23 16-38 40-38s40 15 40 38v19c0 17-17 25-40 25S20 95 20 78Z" fill="${creature.color}" stroke="#344d40" stroke-width="4"/><path d="M28 52c8-11 19-16 32-16s24 5 32 16c-8-4-15-6-22-6H50c-7 0-14 2-22 6Z" fill="${creature.light}" opacity=".8"/><ellipse cx="43" cy="66" rx="5" ry="7" fill="#253d34"/><ellipse cx="77" cy="66" rx="5" ry="7" fill="#253d34"/><circle cx="44" cy="64" r="1.7" fill="#fff"/><circle cx="78" cy="64" r="1.7" fill="#fff"/><path d="M54 78q6 6 12 0" fill="none" stroke="#344d40" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="76" r="5" fill="#f49a82"/><circle cx="88" cy="76" r="5" fill="#f49a82"/><path d="M34 94q-9 10-15 2m67-2q9 10 15 2" fill="none" stroke="#344d40" stroke-width="4" stroke-linecap="round"/><path d="M55 22 60 12l6 10" fill="${creature.light}" stroke="#344d40" stroke-width="3" stroke-linejoin="round"/></svg>`;}
function toast(message){const node=el('toast');node.textContent=message;node.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove('show'),2600);}
function romanHint(){
  const target=current.romaji;
  const visible=state.level===1?target.length:state.level===2?Math.ceil(target.length*.65):state.level===3?Math.max(1,Math.ceil(target.length*.3)):0;
  el('word-roman').innerHTML=visible?[...target].map((letter,i)=>i<visible?`<span>${letter}</span>`:'<span class="hidden-letter">_</span>').join(''):'';
}
function renderKeyboard(){
  const guide=el('keyboard-guide');
  if(state.level!==1){guide.innerHTML='';guide.hidden=true;return;}
  guide.hidden=false;
  const next=current.romaji[input.value.length]||'';
  guide.innerHTML=['qwertyuiop','asdfghjkl','zxcvbnm'].map(row=>`<div class="keyboard-row">${[...row].map(key=>`<span class="keycap${key===next?' active':''}">${key}</span>`).join('')}</div>`).join('');
}
function timerLimit(){return state.level<3?0:Math.max(12,32-(state.level-3)*2);}
function stopTimer(){clearInterval(timer);timer=null;}
function startTimer(){
  stopTimer();const limit=timerLimit();
  if(!limit||timedOut){el('timer-pill').hidden=true;return;}
  secondsLeft=limit;el('timer-pill').hidden=false;el('timer-pill').classList.remove('urgent');el('timer-label').textContent=secondsLeft;
  timer=setInterval(()=>{secondsLeft--;el('timer-label').textContent=secondsLeft;el('timer-pill').classList.toggle('urgent',secondsLeft<=5);if(secondsLeft<=0){stopTimer();timedOut=true;el('timer-pill').hidden=true;hint(true);}},1000);
}
function hint(time=false){
  const key=current.romaji[input.value.length]||current.romaji[0];
  el('typing-feedback').textContent=time?`ゆっくりで だいじょうぶ！ つぎは「${key}」だよ`:`つぎは「${key}」キーだよ！ もういちど`;
  el('typing-feedback').classList.add('error');el('battle-message').textContent=time?'じかんだよ！ ヒントをみてつづけよう':`ヒント！ 「${key}」キーをおしてね`;
  el('input-row').classList.remove('has-error');void el('input-row').offsetWidth;el('input-row').classList.add('has-error');
  if(time)toast('じかんは おしまい！ あとは ゆっくり うってみよう');
}
function renderMonster(){
  const c=creatureAt();el('enemy-name').textContent=c.name;el('enemy-level').textContent=`Lv. ${state.level}`;el('stage-label').textContent=c.stage;
  el('monster-art').innerHTML=monsterSvg(c);el('monster-art').setAttribute('aria-label',c.name);el('enemy-health').style.width=`${Math.max(0,state.monsterHp/3*100)}%`;
}
function renderCollection(){
  el('collection-list').innerHTML=state.recruited.slice(-5).reverse().map(item=>{const c=creatures[item.creatureIndex%creatures.length];return `<div class="collected-monster"><span class="collection-art">${monsterSvg(c)}</span><span class="collection-name">${c.name}</span><span class="collection-level">Lv.${item.level}</span></div>`;}).join('');
  el('empty-note').hidden=state.recruited.length>0;el('collection-count').textContent=state.recruited.length;el('record-monsters').textContent=state.recruited.length;
}
function render(){
  el('level-label').textContent=`レベル ${state.level}`;el('hero-level').textContent=`Lv. ${state.level}`;el('words-typed').textContent=state.wordsTyped;el('correct-count').textContent=state.correct;
  const xp=state.xp%100;el('xp-label').textContent=`${xp} / 100 XP`;el('xp-bar').style.width=`${xp}%`;
  el('word-number').textContent=state.wordIndex%3+1;el('category-label').textContent=current.category;el('word-kana').textContent=current.kana;
  romanHint();renderKeyboard();renderMonster();renderCollection();
  if(state.level>=3&&!timedOut)startTimer();else el('timer-pill').hidden=true;
}
function nextWord(){
  state.wordIndex++;current=words[state.wordIndex%words.length];input.value='';timedOut=false;
  el('typing-feedback').textContent=timerLimit()?'じかん内に うってみよう':'Enterキーでも こうげき！';el('typing-feedback').classList.remove('error');el('battle-message').textContent='ことばを うって こうげきしよう！';
  render();startTimer();input.focus();
}
function gainXp(){
  const before=state.level;state.xp+=20;state.level=Math.floor(state.xp/100)+1;
  if(state.level>before){el('battle-message').textContent=`レベルアップ！ レベル ${state.level} になったよ！`;toast(`やったね！ レベル ${state.level} にアップ！`);return true;}
  return false;
}
function recruit(){
  const c=creatureAt();state.recruited.push({creatureIndex:state.monsterIndex%creatures.length,level:state.level});state.monsterIndex++;state.monsterHp=3;
  renderMonster();renderCollection();el('battle-message').textContent=`${c.name}が なかまに なった！`;toast(`${c.name}が なかまに なったよ！`);
}
function submit(){
  if(input.value!==current.romaji)return;stopTimer();state.wordsTyped++;state.correct++;state.monsterHp--;
  const leveled=gainXp();el('enemy-health').style.width=`${Math.max(0,state.monsterHp/3*100)}%`;
  el('monster-wrap').classList.remove('hit');void el('monster-wrap').offsetWidth;el('monster-wrap').classList.add('hit');
  el('battle-effects').textContent='こうげき！';el('battle-effects').classList.remove('show');void el('battle-effects').offsetWidth;el('battle-effects').classList.add('show');
  el('typing-feedback').textContent='せいかい！ こうげき！';el('typing-feedback').classList.remove('error');el('battle-message').textContent=state.monsterHp<=0?'やった！ モンスターを たおした！':'いいね！ モンスターに あたったよ！';
  const recruited=state.monsterHp<=0;if(recruited)recruit();save(state.wordIndex+1);render();input.value='';setTimeout(nextWord,leveled||recruited?1300:580);
}
input.addEventListener('input',()=>{
  const typed=input.value.toLowerCase();
  if(!current.romaji.startsWith(typed)){
    let matched=0;
    while(matched<typed.length&&typed[matched]===current.romaji[matched])matched++;
    input.value=current.romaji.slice(0,matched);
    hint();
  }
  else{input.value=typed;el('typing-feedback').textContent=timerLimit()&&!timedOut?'じかん内に うってみよう':'Enterキーでも こうげき！';el('typing-feedback').classList.remove('error');el('battle-message').textContent='そのちょうし！';if(typed.length===current.romaji.length)submit();}
  renderKeyboard();
});
input.addEventListener('keydown',event=>{if(event.key==='Enter'&&input.value===current.romaji)submit();});
el('reset-button').addEventListener('click',()=>{
  if(!confirm('レベルやなかまを さいしょからに もどしますか？'))return;
  stopTimer();state={...initial,recruited:[]};current=words[0];input.value='';timedOut=false;save();render();toast('ぼうけんを さいしょから はじめよう！');input.focus();
});
render();startTimer();input.focus();