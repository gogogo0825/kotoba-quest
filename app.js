const words = [
  ['ねこ','neko','どうぶつ'],['いぬ','inu','どうぶつ'],['くま','kuma','どうぶつ'],['とり','tori','どうぶつ'],['さかな','sakana','どうぶつ'],['うさぎ','usagi','どうぶつ'],
  ['ぞう','zou','どうぶつ'],['きりん','kirin','どうぶつ'],['ぱんだ','panda','どうぶつ'],['さる','saru','どうぶつ'],['きつね','kitsune','どうぶつ'],['たぬき','tanuki','どうぶつ'],['しか','shika','どうぶつ'],['かめ','kame','どうぶつ'],['かえる','kaeru','どうぶつ'],['いるか','iruka','どうぶつ'],['くじら','kujira','どうぶつ'],['ぺんぎん','pengin','どうぶつ'],['ふくろう','fukurou','どうぶつ'],['らいおん','raion','どうぶつ'],
  ['すし','sushi','たべもの'],['りんご','ringo','たべもの'],['ぱん','pan','たべもの'],['みかん','mikan','たべもの'],['おにぎり','onigiri','たべもの'],['けーき','keeki','たべもの'],
  ['ばなな','banana','たべもの'],['ぶどう','budou','たべもの'],['いちご','ichigo','たべもの'],['もも','momo','たべもの'],['れもん','remon','たべもの'],['めろん','meron','たべもの'],['とまと','tomato','たべもの'],['にんじん','ninjin','たべもの'],['たまご','tamago','たべもの'],['らーめん','raamen','たべもの'],['うどん','udon','たべもの'],['かれー','karee','たべもの'],['おもち','omochi','たべもの'],['ぷりん','purin','たべもの'],['あいす','aisu','たべもの'],['ほっとけーき','hottokeeki','たべもの'],
  ['ほん','hon','みぢかなもの'],['くつ','kutsu','みぢかなもの'],['そら','sora','みぢかなもの'],['くるま','kuruma','みぢかなもの'],['ぼうし','boushi','みぢかなもの'],['えんぴつ','enpitsu','みぢかなもの'],
  ['つくえ','tsukue','みぢかなもの'],['いす','isu','みぢかなもの'],['かばん','kaban','みぢかなもの'],['めがね','megane','みぢかなもの'],['とけい','tokei','みぢかなもの'],['でんしゃ','densha','みぢかなもの'],['じてんしゃ','jitensha','みぢかなもの'],['でんわ','denwa','みぢかなもの'],['かさ','kasa','みぢかなもの'],['まくら','makura','みぢかなもの'],['おさら','osara','みぢかなもの'],['はさみ','hasami','みぢかなもの'],['けしごむ','keshigomu','みぢかなもの'],['てがみ','tegami','みぢかなもの'],['おもちゃ','omocha','みぢかなもの'],
  ['やま','yama','しぜん'],['かわ','kawa','しぜん'],['うみ','umi','しぜん'],['はな','hana','しぜん'],['き','ki','しぜん'],['もり','mori','しぜん'],['ゆき','yuki','しぜん'],['あめ','ame','しぜん'],['ほし','hoshi','しぜん'],['つき','tsuki','しぜん'],['くも','kumo','しぜん'],['にじ','niji','しぜん'],
  ['あさ','asa','ことば'],['ひる','hiru','ことば'],['よる','yoru','ことば'],['みず','mizu','ことば'],['ひ','hi','ことば'],['ゆめ','yume','ことば'],['えがお','egao','ことば'],['こころ','kokoro','ことば'],['なかま','nakama','ことば'],['ちから','chikara','ことば'],
  ['こうもり','koumori','どうぶつ'],['くわがた','kuwagata','どうぶつ'],['かたつむり','katatsumuri','どうぶつ'],['かぶとむし','kabutomushi','どうぶつ'],['ちょうちょ','choucho','どうぶつ'],
  ['ちょこれーと','chokoreeto','たべもの'],['ぱいなっぷる','painappuru','たべもの'],['はんばーぐ','hanbaagu','たべもの'],['おむらいす','omuraisu','たべもの'],['とうもろこし','toumorokoshi','たべもの'],
  ['ひこうき','hikouki','みぢかなもの'],['ぎゅうにゅう','gyuunyuu','みぢかなもの'],['れいぞうこ','reizouko','みぢかなもの'],['ろけっと','roketto','みぢかなもの'],['しんかんせん','shinkansen','みぢかなもの'],['がっこう','gakkou','みぢかなもの'],
  ['たいよう','taiyou','しぜん'],['かみなり','kaminari','しぜん'],['たんぽぽ','tanpopo','しぜん'],['ひまわり','himawari','しぜん'],['ながれぼし','nagareboshi','しぜん'],
].map(([kana,romaji,category])=>({kana,romaji,category}));
const creatures=[
  {name:'もこもこウルフ',form:'wolf',color:'#78ac84',light:'#b2d8a4',accent:'#e5b969',stage:'みどりの草原'},
  {name:'ほのおのコロ',form:'flame',color:'#e98262',light:'#ffc28d',accent:'#ffe28c',stage:'ひだまり火山'},
  {name:'みずたまペン',form:'penguin',color:'#69a9bf',light:'#b3e4e7',accent:'#edcf76',stage:'きらきら川'},
  {name:'はっぱドラ',form:'dragon',color:'#91ac56',light:'#cde28c',accent:'#ed9b73',stage:'ふしぎな森'},
  {name:'ほしのモグ',form:'mole',color:'#8b83b9',light:'#c8c0eb',accent:'#f1d584',stage:'ほしふる丘'},
  {name:'おひるねニャー',form:'cat',color:'#d99a72',light:'#f4c99c',accent:'#f6e18e',stage:'こもれびの森'},
  {name:'そらとびピヨ',form:'bird',color:'#e4b94f',light:'#ffe5a0',accent:'#e98d68',stage:'ふわふわ雲'},
  {name:'すいすいフィン',form:'fish',color:'#5eabc0',light:'#a9e1df',accent:'#ef987a',stage:'さんごの海'},
  {name:'ゆうやけゴースト',form:'ghost',color:'#9b8bc7',light:'#d7c9f0',accent:'#ffe28c',stage:'ゆうやけ墓地'},
  {name:'はなさきフラワー',form:'flower',color:'#80ad70',light:'#c3dc91',accent:'#ef9ca4',stage:'おはなの丘'},
  {name:'かめのこシェル',form:'turtle',color:'#6eaa82',light:'#b4d99a',accent:'#e8bd6e',stage:'みずべの岩場'},
  {name:'きつねびフォックス',form:'fox',color:'#cb7651',light:'#efb17b',accent:'#f1d29a',stage:'あかね色の森'},
  {name:'よふかしフクロウ',form:'owl',color:'#8a6858',light:'#d5b887',accent:'#e9c66e',stage:'月あかりの森'},
  {name:'こうてつカブト',form:'beetle',color:'#547c6e',light:'#a2c2a4',accent:'#d7b76c',stage:'深い森の奥'},
  {name:'いわかげヘビ',form:'serpent',color:'#6b9b61',light:'#c0d984',accent:'#e7bd72',stage:'苔むす洞くつ'},
  {name:'しおかぜクラブ',form:'crab',color:'#d66e59',light:'#f3b28b',accent:'#f6d47f',stage:'しおだまり'},
  {name:'よるもりコウモリ',form:'bat',color:'#665d83',light:'#b4a9cf',accent:'#e6c879',stage:'月影の洞くつ'},
  {name:'ごろごろゴーレム',form:'golem',color:'#818b83',light:'#c0c6ae',accent:'#edc76e',stage:'古代の石庭'},
  {name:'あまがさキノコ',form:'mushroom',color:'#bd6253',light:'#efd5a1',accent:'#fff1d2',stage:'雨ふりの森'},
  {name:'うみほたるゼリー',form:'jellyfish',color:'#6c9ac0',light:'#b2d8e6',accent:'#f4d987',stage:'深海の入り江'},
  {name:'たてがみライオン',form:'lion',color:'#bc8145',light:'#edc17a',accent:'#f2dc9b',stage:'ひだまりの平原'},
];
// ===== レベル設定 =====
const XP_PER_CORRECT=10; // 正解1回で得るXP
const LEVEL_XP_TABLE=[0,100,250,500,800,1200]; // 添字+1がレベル。値はそのレベルに必要な総XP
const XP_STEP_AFTER_TABLE=500; // 表の後は1レベルごとに必要XPを+500

// そのレベルに到達するために必要な総XP
function xpForLevel(level){
  if(level<=1)return 0;
  const last=LEVEL_XP_TABLE.length;
  if(level<=last)return LEVEL_XP_TABLE[level-1];
  return LEVEL_XP_TABLE[last-1]+(level-last)*XP_STEP_AFTER_TABLE;
}
// 総XPからレベルを計算
function levelFromXp(xp){
  let level=1;
  while(xp>=xpForLevel(level+1))level++;
  return level;
}
// 現在レベル内の進み具合（バー表示用）
function xpProgress(xp,level){
  const base=xpForLevel(level),needed=xpForLevel(level+1)-base,current=xp-base;
  return {current,needed,percent:Math.floor(current/needed*100)};
}
const storageKey='kotoba-quest-save-v1';
const initial={level:1,xp:0,wordsTyped:0,correct:0,recruited:[],wordIndex:0,monsterIndex:0,monsterHp:3,badges:[],combo:0,noMiss:0,dailyStreak:0,lastPlayDate:'',coins:0,bossesDefeated:[],bossFight:null,dailyDate:'',dailyCount:0,dailyDone:false,stampDays:0,wordStats:{},areaId:'forest',areaProgress:{}};
// 配列を共有しない新しいセーブデータ。keep に渡した項目は引き継ぐ
function newState(keep={}){
  const s={...initial,recruited:[],badges:[],bossesDefeated:[],wordStats:{},village:emptyVillage(),...keep};
  return {...s,...normalizeAreaState(s.areaId,s.areaProgress,s.bossesDefeated)};
}
const el=(id)=>document.getElementById(id);
const input=el('typing-input');
let state=load();
// いまのエリアで出すことばから選ぶ
function pickWord(prevKana){return pickNextWord(areaWords(words,getArea(state.areaId)),state.wordStats,state.level,prevKana);}
let current=pickWord('');
let timer=null,secondsLeft=0,timedOut=false,toastTimer=null;
let wordHadMiss=false; // いま打っていることばでミスをしたか（ミスなし連続の判定用）
let soundEnabled=true,audioContext=null;

function playTone(frequency,duration,delay=0){
  if(!soundEnabled)return;
  const AudioContextConstructor=window.AudioContext||window.webkitAudioContext;
  if(!AudioContextConstructor)return;
  audioContext=audioContext||new AudioContextConstructor();
  if(audioContext.state==='suspended')audioContext.resume().catch(error=>console.error('効果音を再生できませんでした',error));
  const startAt=audioContext.currentTime+delay;
  const oscillator=audioContext.createOscillator(),gain=audioContext.createGain();
  oscillator.type='sine';oscillator.frequency.setValueAtTime(frequency,startAt);
  gain.gain.setValueAtTime(.0001,startAt);gain.gain.exponentialRampToValueAtTime(.12,startAt+.01);gain.gain.exponentialRampToValueAtTime(.0001,startAt+duration);
  oscillator.connect(gain);gain.connect(audioContext.destination);oscillator.start(startAt);oscillator.stop(startAt+duration);
}
function playSound(type){
  if(type==='key')playTone(560,.045);
  if(type==='attack'){playTone(300,.09);playTone(720,.13,.08);}
  if(type==='recruit'){playTone(523,.12);playTone(659,.12,.12);playTone(784,.2,.24);}
  if(type==='badge'){playTone(784,.1);playTone(988,.1,.1);playTone(1319,.22,.2);}
}
function updateSoundButton(){
  const button=el('sound-button');
  button.textContent=soundEnabled?'♪ おと：ON':'🔇 おと：OFF';button.setAttribute('aria-pressed',String(soundEnabled));
  button.setAttribute('aria-label',`効果音を${soundEnabled?'オフ':'オン'}にする`);
  button.title=`効果音を${soundEnabled?'オフ':'オン'}にする`;
}

function load(){
  try{
    const saved=JSON.parse(localStorage.getItem(storageKey));
    if(!saved||typeof saved!=='object')return newState();
    const savedXp=Math.max(0,Number(saved.xp)||0);
    const count=value=>Math.max(0,Math.floor(Number(value)||0));
    // 未知のバッジIDや重複は取り除く
    const knownIds=BADGE_DEFS.map(b=>b.id);
    const badges=[...new Set(Array.isArray(saved.badges)?saved.badges:[])].filter(id=>knownIds.includes(id));
    const bossesDefeated=[...new Set(Array.isArray(saved.bossesDefeated)?saved.bossesDefeated:[])].filter(id=>getBoss(id));
    return {...initial,...saved,bossesDefeated,bossFight:normalizeBossFight(saved.bossFight,bossesDefeated),level:levelFromXp(savedXp),xp:savedXp,recruited:Array.isArray(saved.recruited)?saved.recruited:[],heroHp:undefined,gameOver:undefined,badges,combo:count(saved.combo),noMiss:count(saved.noMiss),dailyStreak:count(saved.dailyStreak),lastPlayDate:typeof saved.lastPlayDate==='string'?saved.lastPlayDate:'',dailyDate:typeof saved.dailyDate==='string'?saved.dailyDate:'',dailyCount:count(saved.dailyCount),dailyDone:saved.dailyDone===true,stampDays:count(saved.stampDays),wordStats:normalizeWordStats(saved.wordStats,words),coins:count(saved.coins),village:normalizeVillage(saved.village),...normalizeAreaState(saved.areaId,saved.areaProgress,bossesDefeated)};
  }catch{return newState();}
}
function save(wordIndex=state.wordIndex){
  const status=document.querySelector('.save-state');
  try{localStorage.setItem(storageKey,JSON.stringify({...state,wordIndex}));status.innerHTML='<span class="save-dot"></span>ぼうけんを保存中';return true;}
  catch{status.innerHTML='<span class="save-dot"></span>このブラウザでは保存できません';return false;}
}
function creatureAt(index=state.monsterIndex){return creatures[index%creatures.length];}
function monsterSvg(creature){
  const features={
    wolf:'<path d="M25 42 17 20 39 31M81 31 103 20 95 46" fill="#e5b969" stroke="#344d40" stroke-width="3" stroke-linejoin="round"/>',
    flame:'<path d="M39 32Q26 18 38 7q1 12 9 10Q51 4 61 5q-5 12 4 15 7-5 11-13 12 14-1 27Z" fill="#ffe28c"/>',
    penguin:'<path d="M25 61Q7 49 12 76q3 12 16 13m57-28q18-12 13 15-3 12-16 13" fill="#43869a"/>',
    dragon:'<path d="M26 48Q3 30 9 67l14 7m71-26q23-19 17 19l-14 7M36 31 33 14l17 11m20 6 17-17-1 24" fill="#ed9b73" stroke="#344d40" stroke-width="3" stroke-linejoin="round"/>',
    mole:'<path d="M40 27Q60 8 80 27l-5 7H45Z" fill="#f1d584" stroke="#344d40" stroke-width="3"/><path d="m51 28 9-13 9 13" fill="#fffefa" stroke="#344d40" stroke-width="2"/>',
    cat:'<path d="M27 43 23 17l23 16m25 0 23-16-4 26" fill="#f4c99c" stroke="#344d40" stroke-width="4" stroke-linejoin="round"/><path d="m26 77-15-4m15 10-14 3m82-9 15-4m-15 14 14 3" fill="none" stroke="#344d40" stroke-width="2" stroke-linecap="round"/>',
    bird:'<path d="M25 57Q8 47 12 77l15 7m58-27q18-10 14 20l-15 7" fill="#d79e3d" stroke="#344d40" stroke-width="3"/>',
    fish:'<path d="M23 60 5 43v37l18-13m74-6 18-17v37L97 64M33 87l-8 12 22-8m40-4 8 12-22-8" fill="#ef987a" stroke="#344d40" stroke-width="3" stroke-linejoin="round"/>',
    ghost:'<path d="M24 80V57c0-22 15-36 36-36s36 14 36 36v39l-15-9-11 11-12-10-13 10-10-11-11 8Z" fill="#9b8bc7" stroke="#344d40" stroke-width="4" stroke-linejoin="round"/>',
    flower:'<g fill="#ef9ca4" stroke="#344d40" stroke-width="2"><circle cx="60" cy="22" r="11"/><circle cx="76" cy="32" r="11"/><circle cx="76" cy="49" r="11"/><circle cx="44" cy="49" r="11"/><circle cx="44" cy="32" r="11"/></g><circle cx="60" cy="36" r="11" fill="#f6e18e" stroke="#344d40" stroke-width="2"/>',
    turtle:'<path d="M38 94q-9 8-15 2m59-2q9 8 15 2" fill="none" stroke="#344d40" stroke-width="4" stroke-linecap="round"/>',
    fox:'<path d="M32 46 23 12 49 32m39 14 9-34-26 20" fill="#cb7651" stroke="#344d40" stroke-width="3.5" stroke-linejoin="round"/><path d="m30 30 4 10 8-5m43-1 8 5 4-10" fill="#f1d29a"/>',
    owl:'<path d="m30 42-9-20 23 12m46 8 9-20-23 12" fill="#8a6858" stroke="#344d40" stroke-width="3" stroke-linejoin="round"/><path d="M28 66q-10 10-5 26l17-8m52-18q10 10 5 26l-17-8" fill="#6c5146" stroke="#344d40" stroke-width="3"/>',
    beetle:'<path d="M30 50 21 41m9 31-11 5m71-27 9-9m-9 31 11 5M48 94l-7 9m31-9 7 9" fill="none" stroke="#344d40" stroke-width="4" stroke-linecap="round"/><path d="M60 40V91" fill="none" stroke="#d7b76c" stroke-width="2"/>',
    serpent:'<path d="M83 83c23-2 24-30 6-34-15-4-22 11-12 19 7 6 17 0 13-7M38 83c-12-3-18 7-12 15 5 7 17 4 17-4" fill="none" stroke="#344d40" stroke-width="12" stroke-linecap="round"/><path d="M83 83c23-2 24-30 6-34-15-4-22 11-12 19 7 6 17 0 13-7M38 83c-12-3-18 7-12 15 5 7 17 4 17-4" fill="none" stroke="#6b9b61" stroke-width="8" stroke-linecap="round"/>',
    crab:'<path d="M31 70 17 62 8 67m81 3 14-8 9 5M30 79 17 82l-5 9m78-12 13 3 5 9" fill="none" stroke="#344d40" stroke-width="5" stroke-linecap="round"/><path d="M20 61Q7 56 13 45q9-8 15 3l8 13m69 0 8-13q6-11 15-3 6 11-7 16" fill="#f3b28b" stroke="#344d40" stroke-width="3"/>',
    bat:'<path d="M25 64Q8 37 8 57q-2-12-5-8 0 19 10 34l18 11m61-30q17-27 17-7 2-12 5-8 0 19-10 34l-18 11" fill="#665d83" stroke="#344d40" stroke-width="3" stroke-linejoin="round"/>',
    golem:'<path d="m29 42 8-12 18 4 5-10 17 12 14 5-3 45-12 12-34 2-16-14Z" fill="#818b83" stroke="#344d40" stroke-width="4" stroke-linejoin="round"/><path d="m41 51 9-3m20 0 9 3M43 83l8 4 8-4 8 4 9-4" fill="none" stroke="#626e66" stroke-width="3" stroke-linecap="round"/>',
    mushroom:'<path d="M37 67q-5 14-3 34l8 8h36l8-8q2-20-3-34Z" fill="#efd5a1" stroke="#344d40" stroke-width="3.5"/><path d="M17 59Q18 20 60 19t43 40q-4 10-17 9H34q-13 1-17-9Z" fill="#bd6253" stroke="#344d40" stroke-width="4"/><g fill="#fff1d2"><ellipse cx="42" cy="42" rx="6" ry="4"/><ellipse cx="70" cy="33" rx="7" ry="5"/><ellipse cx="81" cy="54" rx="5" ry="3"/><ellipse cx="31" cy="57" rx="4" ry="3"/></g>',
    jellyfish:'<path d="M31 66q-8 12-2 28t-2 17m18-43q-7 14 1 25t-1 20m28-47q8 12 1 26t4 18m10-44q8 13 0 25t3 20" fill="none" stroke="#b2d8e6" stroke-width="4" stroke-linecap="round"/>',
    lion:'<circle cx="60" cy="60" r="43" fill="#bc8145" stroke="#344d40" stroke-width="4"/><path d="M36 37 30 23l19 8m35 6 6-14-19 8" fill="#edc17a" stroke="#344d40" stroke-width="3" stroke-linejoin="round"/>',
  }[creature.form]||'';
  const body={
    ghost:'',
    beetle:`<ellipse cx="60" cy="67" rx="32" ry="31" fill="${creature.color}" stroke="#344d40" stroke-width="4"/>`,
    serpent:`<path d="M60 25c-19 0-31 13-31 29 0 10 7 16 17 16h20c13 0 19 8 19 17 0 9-8 15-19 15H36" fill="none" stroke="#344d40" stroke-width="28" stroke-linecap="round"/><path d="M60 25c-19 0-31 13-31 29 0 10 7 16 17 16h20c13 0 19 8 19 17 0 9-8 15-19 15H36" fill="none" stroke="${creature.color}" stroke-width="21" stroke-linecap="round"/>`,
    crab:`<path d="M26 67q0-24 34-24t34 24q0 32-34 32T26 67Z" fill="${creature.color}" stroke="#344d40" stroke-width="4"/>`,
    golem:'<path d="m34 35 17-9 14 7 18-3 8 17-5 38-15 14H43L29 85l-3-31Z" fill="#818b83" stroke="#344d40" stroke-width="4" stroke-linejoin="round"/>',
    mushroom:'',
    jellyfish:'<path d="M22 62q0-40 38-40t38 40q-12 13-24 4-14 12-28 0-12 9-24-4Z" fill="#6c9ac0" fill-opacity=".92" stroke="#344d40" stroke-width="4"/>',
    lion:`<ellipse cx="60" cy="66" rx="27" ry="31" fill="${creature.color}" stroke="#344d40" stroke-width="4"/>`,
  }[creature.form]??'<path d="M20 59c0-23 16-38 40-38s40 15 40 38v19c0 17-17 25-40 25S20 95 20 78Z" fill="'+creature.color+'" stroke="#344d40" stroke-width="4"/>';
  const overlay={
    wolf:'<path d="M37 53q8-5 15-2m16 0q8-3 15 2M29 79q5 3 10 1m42 0q5 2 10-1" fill="none" stroke="#578368" stroke-width="2.5" stroke-linecap="round" opacity=".8"/>',
    flame:'<path d="M48 40q-6-10 2-17 1 8 7 9 2-8 9-11-3 10 4 15" fill="none" stroke="#fff1b0" stroke-width="3" stroke-linecap="round"/>',
    dragon:'<path d="m43 52 5 5m9-7 5 5m9-5 5 5M41 62l5 5m28-5 5 5m-32 4 5 5m17-5 5 5" fill="none" stroke="#6c8846" stroke-width="2.5" stroke-linecap="round"/>',
    mole:'<ellipse cx="60" cy="89" rx="19" ry="9" fill="#c8c0eb" opacity=".9"/>',
    cat:'<path d="m39 49 5 8m-8 1 5 7m40-16-5 8m8 1-5 7" fill="none" stroke="#b9785b" stroke-width="3" stroke-linecap="round"/>',
    penguin:'<path d="M39 56q-10 9-9 25 2 20 30 21 29-1 31-21-1-16-10-25-17-8-42 0Z" fill="#e9f1e8"/><path d="m51 69 9 7 9-7-9-5Z" fill="#edcf76"/>',
    bird:'<path d="M29 66q13 13 27 3-5 18-25 16Zm62 0Q78 79 64 69q5 18 25 16Z" fill="#d79e3d" opacity=".8"/><path d="m50 74 10 14 10-14-10-6Z" fill="#e98d68" stroke="#344d40" stroke-width="2"/><path d="m38 52 7 5m30-5-7 5m-25 5 5 3m22-3-5 3" fill="none" stroke="#d79e3d" stroke-width="2.5" stroke-linecap="round"/>',
    fish:'<path d="M29 70q12-19 25-3t28-4" fill="none" stroke="#d6f1e7" stroke-width="3" opacity=".9"/><path d="M34 83q11-10 22 0t22-1" fill="none" stroke="#43869a" stroke-width="2" opacity=".7"/><circle cx="60" cy="48" r="4" fill="#fff" opacity=".8"/>',
    turtle:'<path d="M28 54Q60 31 92 54v25Q60 99 28 79ZM29 66H91M60 39v50M31 53l29 13 29-13" fill="#93c27c" stroke="#344d40" stroke-width="3"/>',
    fox:'<path d="M43 61q17 13 34 0l-3 23q-14 17-28 0Z" fill="#f1d29a"/><path d="M53 80q7 6 14 0" fill="none" stroke="#9e5948" stroke-width="2.5" stroke-linecap="round"/>',
    owl:'<ellipse cx="43" cy="66" rx="15" ry="18" fill="#d5b887"/><ellipse cx="77" cy="66" rx="15" ry="18" fill="#d5b887"/><path d="m53 79 7 8 7-8-7-4Z" fill="#e9c66e" stroke="#344d40" stroke-width="2"/>',
    beetle:'<ellipse cx="60" cy="65" rx="25" ry="27" fill="#a2c2a4" stroke="#344d40" stroke-width="3"/><path d="M60 40v51m-17-42 13 12m24-12L67 51m-24 14 14 8m24-8L67 73" fill="none" stroke="#547c6e" stroke-width="2.5" opacity=".8"/>',
    crab:'<path d="M43 82q17 7 34 0" fill="none" stroke="#a94f48" stroke-width="3" stroke-linecap="round"/><circle cx="46" cy="54" r="8" fill="#f3b28b" stroke="#344d40" stroke-width="2"/><circle cx="74" cy="54" r="8" fill="#f3b28b" stroke="#344d40" stroke-width="2"/>',
    bat:'<path d="M34 47q11-9 26-9t26 9l-3 28q-8 14-23 14T37 75Z" fill="#b4a9cf" opacity=".85"/><path d="m49 29 11 13 11-13" fill="#665d83" stroke="#344d40" stroke-width="2"/>',
    golem:'<path d="m45 54 7-3m16 0 7 3m-29 24 6 2 7-3 8 3 7-2" fill="none" stroke="#52605a" stroke-width="3" stroke-linecap="round"/>',
    mushroom:'<path d="M48 72q12 7 24 0v19q-12 6-24 0Z" fill="#d5b783"/>',
    jellyfish:'<path d="M35 54q8-11 16-4m18 0q8-7 16 4" fill="none" stroke="#e9f5ed" stroke-width="2.5" opacity=".8"/><circle cx="46" cy="63" r="4" fill="#344d40"/><circle cx="74" cy="63" r="4" fill="#344d40"/>',
    lion:'<ellipse cx="60" cy="68" rx="18" ry="21" fill="#edc17a" stroke="#344d40" stroke-width="3"/><path d="M50 58q10 6 20 0" fill="none" stroke="#f8dfa7" stroke-width="3" opacity=".8"/>',
  }[creature.form]||'';
  const uniqueEyes=['ghost','owl','crab','serpent','jellyfish'].includes(creature.form);
  const eyes=creature.form==='ghost'?'<ellipse cx="43" cy="59" rx="5" ry="7" fill="#253d34"/><ellipse cx="77" cy="59" rx="5" ry="7" fill="#253d34"/>':creature.form==='crab'?'<ellipse cx="46" cy="53" rx="3" ry="5" fill="#253d34"/><ellipse cx="74" cy="53" rx="3" ry="5" fill="#253d34"/>':creature.form==='serpent'?'<ellipse cx="48" cy="40" rx="3" ry="5" fill="#253d34"/><ellipse cx="72" cy="40" rx="3" ry="5" fill="#253d34"/>':creature.form==='jellyfish'?'':'<ellipse cx="43" cy="66" rx="5" ry="7" fill="#253d34"/><ellipse cx="77" cy="66" rx="5" ry="7" fill="#253d34"/>';
  const face=creature.form==='serpent'?'<path d="M53 51q7 4 14 0" fill="none" stroke="#344d40" stroke-width="2.5" stroke-linecap="round"/>':uniqueEyes?'':`<circle cx="44" cy="64" r="1.7" fill="#fff"/><circle cx="78" cy="64" r="1.7" fill="#fff"/><path d="M54 78q6 6 12 0" fill="none" stroke="#344d40" stroke-width="3" stroke-linecap="round"/>`;
  const cheeks=['serpent','beetle','golem','mushroom','jellyfish'].includes(creature.form)?'':'<circle cx="32" cy="76" r="5" fill="#f49a82" opacity=".8"/><circle cx="88" cy="76" r="5" fill="#f49a82" opacity=".8"/>';
  const shine=['ghost','serpent','golem','mushroom'].includes(creature.form)?'':`<path d="M32 53q8-15 23-17" fill="none" stroke="${creature.light}" stroke-width="4" stroke-linecap="round" opacity=".8"/><circle cx="50" cy="48" r="2" fill="#fffefa" opacity=".8"/>`;
  const paws=['ghost','flower','fish','bird','jellyfish','mushroom','serpent','beetle','crab','bat','golem'].includes(creature.form)?'':'<path d="M34 94q-9 10-15 2m67-2q9 10 15 2" fill="none" stroke="#344d40" stroke-width="4" stroke-linecap="round"/>';
  return `<svg viewBox="0 0 120 120" role="img" aria-label="${creature.name}">${features}${body}${creature.form==='ghost'?'':shine}${overlay}${eyes}${face}${cheeks}${paws}</svg>`;
}
function toast(message){const node=el('toast');node.textContent=message;node.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove('show'),2600);}
function romanHint(){
  const target=current.romaji;
  const visible=state.level===1?target.length:state.level===2?Math.ceil(target.length*.65):state.level===3?Math.max(1,Math.ceil(target.length*.3)):0;
  el('word-roman').innerHTML=visible?[...target].map((letter,i)=>i<visible?`<span>${letter}</span>`:'<span class="hidden-letter">_</span>').join(''):'';
}
function renderKeyboard(){
  const guide=el('keyboard-guide');
  guide.hidden=false;
  const next=(matchRomaji(current,input.value)||current.romaji)[input.value.length]||'';
  const fingers={
    q:'left-pinky',a:'left-pinky',z:'left-pinky',
    w:'left-ring',s:'left-ring',x:'left-ring',
    e:'left-middle',d:'left-middle',c:'left-middle',
    r:'left-index',f:'left-index',v:'left-index',t:'left-index',g:'left-index',b:'left-index',
    y:'right-index',h:'right-index',n:'right-index',u:'right-index',j:'right-index',m:'right-index',
    i:'right-middle',k:'right-middle',o:'right-ring',l:'right-ring',p:'right-pinky',
  };
  const fingerNames={
    'left-pinky':'左手の小指','left-ring':'左手の薬指','left-middle':'左手の中指','left-index':'左手の人さし指',
    'right-index':'右手の人さし指','right-middle':'右手の中指','right-ring':'右手の薬指','right-pinky':'右手の小指',
  };
  const nextFinger=fingers[next];
  const fingerTips={
    left:{pinky:[10,29],ring:[28,11],middle:[45,6],index:[65,13],thumb:[84,54]},
    right:{thumb:[19,54],index:[37,13],middle:[58,6],ring:[73,11],pinky:[91,29]},
  };
  const rows=['qwertyuiop','asdfghjkl','zxcvbnm'].map(row=>`<div class="keyboard-row">${[...row].map(key=>`<span class="keycap finger-${fingers[key]}${key===next?' active':''}" title="${fingerNames[fingers[key]]}" aria-label="${key}、${fingerNames[fingers[key]]}">${key}</span>`).join('')}</div>`).join('');
  const handImage=(side)=>{
    const finger=nextFinger&&nextFinger.startsWith(`${side}-`)?nextFinger.slice(side.length+1):null;
    const activeTip=finger?fingerTips[side][finger]:null;
    return `<div class="hand-illustration ${side}-hand" role="img" aria-label="${side==='left'?'左手':'右手'}">
      <img class="hand-image" src="assets/hand-guide.png" alt="">
      ${activeTip?`<span class="hand-active-dot" style="left:${activeTip[0]}%;top:${activeTip[1]}%"></span>`:''}
    </div>`;
  };
  guide.innerHTML=`<p class="keyboard-title">キーボードを見ながら うってみよう</p><div class="keyboard-rows">${rows}</div><p class="finger-tip">${next?`つぎの「<kbd>${next}</kbd>」を、赤い●がついた指でうつよ`:'ことばをうちおわったよ！'}</p><div class="finger-guide"><p class="finger-guide-title">赤い●がついた指でキーをうつよ</p><div class="hand-guide"><div class="hand-unit">${handImage('left')}<span>左手</span></div><div class="hand-unit">${handImage('right')}<span>右手</span></div></div></div><div class="keyboard-bottom"><span class="space-key">スペースキー</span><span class="finger-guide-title">親指でうつよ</span></div>`;
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
  const word=matchRomaji(current,input.value)||current.romaji,key=word[input.value.length]||word[0];
  el('typing-feedback').textContent=time?`ゆっくりで だいじょうぶ！ つぎは「${key}」だよ`:`つぎは「${key}」キーだよ！ もういちど`;
  el('typing-feedback').classList.add('error');el('battle-message').textContent=time?'じかんだよ！ ヒントをみてつづけよう':`ヒント！ 「${key}」キーをおしてね`;
  el('input-row').classList.remove('has-error');void el('input-row').offsetWidth;el('input-row').classList.add('has-error');
  if(time)toast('じかんは おしまい！ あとは ゆっくり うってみよう');
}
function renderMonster(){
  const c=creatureAt();el('enemy-name').textContent=c.name;el('enemy-level').textContent=`Lv. ${state.level}`;el('stage-label').textContent=c.stage;
  const times=['day','evening','night','morning'];
  const timeLabels={day:'昼',evening:'夕方',night:'夜',morning:'朝'};
  const time=times[state.monsterIndex%times.length];
  const scene=document.querySelector('.battle-scene');
  scene.classList.remove(...times.map(name=>`time-${name}`));scene.classList.add(`time-${time}`);
  const habitat=['fish','penguin','turtle','crab','jellyfish'].includes(c.form)?'water':['ghost','bat','serpent','mole','golem','beetle'].includes(c.form)?'cave':'wild';
  const habitatGlow={water:'rgba(82,164,203,.2)',cave:'rgba(68,66,103,.2)',wild:'rgba(117,145,78,.16)'}[habitat];
  scene.dataset.habitat=habitat;scene.style.boxShadow=`inset 0 0 58px ${habitatGlow}, var(--shadow)`;
  scene.setAttribute('aria-label',`バトル：${timeLabels[time]}`);
  el('monster-wrap').classList.remove('defeated');el('slash-effect').classList.remove('show');
  el('monster-wrap').dataset.form=c.form;
  el('magic-effect').classList.remove('show','strong','legendary');
  el('monster-art').innerHTML=monsterSvg(c);el('monster-art').setAttribute('aria-label',c.name);el('enemy-health').style.width=`${Math.max(0,state.monsterHp/3*100)}%`;
}
function renderCollection(){
  el('collection-list').innerHTML=state.recruited.slice(-5).reverse().map(item=>{const c=creatures[item.creatureIndex%creatures.length];return `<div class="collected-monster"><span class="collection-art">${monsterSvg(c)}</span><span class="collection-name">${c.name}</span><span class="collection-level">Lv.${item.level}</span></div>`;}).join('');
  el('empty-note').hidden=state.recruited.length>0;el('collection-count').textContent=state.recruited.length;el('record-monsters').textContent=state.recruited.length;
}
function render(){
  el('level-label').textContent=`レベル ${state.level}`;el('hero-level').textContent=`Lv. ${state.level}`;el('words-typed').textContent=state.wordsTyped;el('correct-count').textContent=state.correct;
  input.disabled=false;
  renderXp();renderCoins();renderDaily();renderAreaBar();
  el('word-number').textContent=state.wordIndex%3+1;el('category-label').textContent=current.category;el('word-kana').textContent=current.kana;el('word-stars').textContent=starText((state.wordStats[current.kana]||{best:0}).best);
  romanHint();renderKeyboard();renderMonster();renderCollection();
  if(state.level>=3&&!timedOut&&el('boss-screen').hidden)startTimer();else{stopTimer();el('timer-pill').hidden=true;}
}
function nextWord(){
  state.wordIndex++;current=pickWord(current.kana);input.value='';timedOut=false;
  el('typing-feedback').textContent=timerLimit()?'じかん内に うってみよう':'Enterキーでも こうげき！';el('typing-feedback').classList.remove('error');el('battle-message').textContent='ことばを うって こうげきしよう！';
  render();startTimer();input.focus();
}
// 正解時のXP加算。レベルアップしたら true を返す
function gainXp(){
  const before=state.level;state.xp+=XP_PER_CORRECT;state.level=levelFromXp(state.xp);
  if(state.level>before){showLevelUp(state.level);return true;}
  return false;
}
// レベルアップ演出（再生のたびにアニメーションをやり直す）
function showLevelUp(level){
  el('levelup-text').textContent=`Lv.${level} になった！`;
  const banner=el('levelup-banner');
  banner.classList.remove('show');void banner.offsetWidth;banner.classList.add('show');
  el('battle-message').textContent=`レベルアップ！ Lv.${level} になったよ！`;
}
// 総XP表示と、現在レベル内の進み具合を示すバー
function renderXp(){
  const {needed,percent}=xpProgress(state.xp,state.level);
  el('xp-label').textContent=`XP ${state.xp} / ${xpForLevel(state.level)+needed}`;
  el('xp-percent').textContent=`${percent}%`;
  el('xp-bar').style.width=`${percent}%`;
}
// ===== バッジ（定義と判定は badges.js） =====
const badgeQueue=[]; // 取得演出の順番待ち（同時に取れても1つずつ見せる）
let badgePopupBusy=false;

// そのキーまで正しく打てた：連続コンボを加算
function recordKey(){state.combo++;checkBadges();}
// ミス：コンボとミスなし連続をリセット
function recordMiss(){state.combo=0;state.noMiss=0;wordHadMiss=true;}
// ことばを正解：ミスなし連続と連続プレイ日数を更新
function recordCorrectWord(word=current){
  const result=recordWordResult(state.wordStats,word.kana,wordHadMiss);
  if(result.after>result.before)toast(`⭐ 「${word.kana}」が ${starText(result.after)} になったよ！`);
  if(!wordHadMiss)state.noMiss++;
  wordHadMiss=false;
  const today=todayKey();
  state.dailyStreak=nextDailyStreak(state.lastPlayDate,state.dailyStreak,today);
  state.lastPlayDate=today;
  if(advanceDaily(state,today)){state.coins+=DAILY_BONUS_COINS;showDailyClear();}
  renderDaily();
}
// きょうのぼうけん：10この丸と、できたかずを描画
function renderDaily(){
  const today=todayKey(),count=dailyCount(state,today),done=dailyDone(state,today);
  el('daily-count').textContent=`${count} / ${DAILY_GOAL}`;
  el('daily-dots').innerHTML=Array.from({length:DAILY_GOAL},(_,i)=>`<i class="${i<count?'on':''}"></i>`).join('');
  el('daily-note').textContent=done?`✅ クリア！ スタンプ ${state.stampDays}こ`:`あと ${DAILY_GOAL-count}ことば！`;
  el('daily-card').classList.toggle('done',done);
}
function showDailyClear(){
  el('daily-popup-text').textContent=`🪙 +${DAILY_BONUS_COINS}　スタンプ ${state.stampDays}こ`;
  const popup=el('daily-popup');popup.classList.remove('show');void popup.offsetWidth;popup.classList.add('show');
  renderCoins();playSound('badge');
}
// 条件を満たした新しいバッジを付与して保存し、演出を出す
function checkBadges(){
  const earned=findNewBadges(state);
  if(!earned.length)return;
  earned.forEach(badge=>state.badges.push(badge.id));
  save();renderBadgeCollection();
  badgeQueue.push(...earned);showNextBadgePopup();
}
function showNextBadgePopup(){
  if(badgePopupBusy||!badgeQueue.length)return;
  badgePopupBusy=true;
  const badge=badgeQueue.shift(),popup=el('badge-popup');
  el('badge-popup-icon').textContent=badge.icon;
  el('badge-popup-text').textContent=`${badge.name}を獲得した！`;
  popup.classList.remove('show');void popup.offsetWidth;popup.classList.add('show');
  playSound('badge');
  setTimeout(()=>{badgePopupBusy=false;showNextBadgePopup();},2600);
}
// バッジコレクション画面と、ボタン上の取得数を描画
function renderBadgeCollection(){
  const total=BADGE_DEFS.length,owned=state.badges.length,percent=Math.floor(owned/total*100);
  el('badge-rate').textContent=`${owned} / ${total}　たっせいりつ ${percent}%`;
  el('badge-rate-bar').style.width=`${percent}%`;
  el('badge-grid').innerHTML=BADGE_DEFS.map(badge=>{
    const has=state.badges.includes(badge.id);
    return `<li class="badge-item ${has?'earned':'locked'}"><span class="badge-icon" aria-hidden="true">${has?badge.icon:'🔒'}</span><div><strong>${badge.name}</strong><p>${badge.desc}</p><span class="badge-status">${has?'ゲットずみ':'まだだよ'}</span></div></li>`;
  }).join('');
}
function openBadges(){renderBadgeCollection();el('badge-dialog').hidden=false;el('badge-close').focus();}
function closeBadges(){el('badge-dialog').hidden=true;if(!input.disabled)input.focus();}
el('badge-button').addEventListener('click',openBadges);
el('badge-close').addEventListener('click',closeBadges);
el('badge-dialog').addEventListener('click',event=>{if(event.target===el('badge-dialog'))closeBadges();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!el('badge-dialog').hidden)closeBadges();});

// ===== ことばのむら（定義と計算は village.js） =====
const VILLAGE_SCENE_ORDER=['castle','school','plaza','houses','flowers','trees']; // 奥から手前へ
let lastBuiltKey=null; // 直前に建てた建物（出現アニメーション用）

// 正解時のコイン獲得。連続ミスなしボーナスとレベルアップボーナスを加える
function rewardCoins(leveled){
  let gain=COIN_PER_CORRECT;const notes=[];
  if(state.noMiss>0&&state.noMiss%COIN_COMBO_EVERY===0){gain+=COIN_COMBO_BONUS;notes.push(`${state.noMiss}れんぞく +${COIN_COMBO_BONUS}`);}
  if(leveled){gain+=COIN_LEVELUP_BONUS;notes.push(`レベルアップ +${COIN_LEVELUP_BONUS}`);}
  state.coins+=gain;
  if(notes.length)toast(`🪙 ボーナス！ ${notes.join(' ／ ')}`);
}
function renderCoins(){
  el('village-button').textContent=`🏡 むら 🪙${state.coins}`;
  el('village-coins').textContent=state.coins;
}
function renderVillage(){
  const rank=getVillageRank(state.village);
  el('village-rank').textContent=rank.rank;
  el('village-rank-name').textContent=rank.name;
  el('village-rank-next').textContent=rank.next?`つぎの「${rank.next.name}」まで あと ${rank.next.min-rank.score}ポイント`:'いちばん おおきな むらに なったよ！';
  renderCoins();renderVillageScene();renderVillageShop();renderResidents();
}
// 建てたものを絵文字で並べる
function renderVillageScene(){
  const pieces=VILLAGE_SCENE_ORDER.map(key=>{
    const def=getBuildingDef(key),count=state.village[key];
    return Array.from({length:count},(_,i)=>`<span class="village-piece${key===lastBuiltKey&&i===count-1?' pop':''}" title="${def.name}">${def.icon}</span>`).join('');
  }).join('');
  el('village-scene').innerHTML=pieces||'<span class="village-empty">まだ なにもないよ。コインで たてものを つくろう！</span>';
}
// 建設ボタン一覧（足りない・上限のときは押せない）
function renderVillageShop(){
  el('village-shop').innerHTML=BUILDING_DEFS.map(def=>{
    const count=state.village[def.key],maxed=count>=def.max,short=def.price-state.coins;
    const note=maxed?'これいじょう ふやせないよ':short>0?`🪙 ${def.price}　あと ${short}コイン`:`🪙 ${def.price}`;
    return `<li class="shop-item"><span class="shop-icon" aria-hidden="true">${def.icon}</span><div><strong>${def.name} ×${count} / ${def.max}</strong><p>${note}</p></div><button type="button" class="shop-button" data-key="${def.key}"${maxed||short>0?' disabled':''}>${maxed?'ぜんぶ たてたよ':def.action}</button></li>`;
  }).join('');
}
// 住民とランダムコメント（クリックで言葉が変わる）
function renderResidents(){
  const residents=getResidents(state.village);
  el('village-residents').innerHTML=residents.length
    ?residents.map(r=>`<li><button type="button" class="resident-item"><span class="resident-icon" aria-hidden="true">${r.icon}</span><span><span class="resident-name">${r.name}</span><span class="resident-comment">「${pickResidentComment(state.village)}」</span></span></button></li>`).join('')
    :'<li class="resident-empty">おうちを たてると なかまが きてくれるよ！</li>';
}
// 建設：village.js の tryBuild で処理し、保存と演出を行う
function buildAt(key){
  const before=getResidents(state.village).length;
  const result=tryBuild(state,key);
  if(!result.ok){toast(result.message);return;}
  const newcomers=getResidents(state.village).slice(before);
  lastBuiltKey=key;save();renderVillage();lastBuiltKey=null;
  playSound('recruit');showBuildPopup(result.def,newcomers);
}
function showBuildPopup(def,newcomers){
  el('build-popup-icon').textContent=def.icon;
  el('build-popup-text').textContent=def.done;
  el('build-popup-extra').textContent=newcomers.map(r=>`${r.icon} ${r.name}が すみはじめたよ！`).join(' ');
  const popup=el('build-popup');
  popup.classList.remove('show');void popup.offsetWidth;popup.classList.add('show');
}
function openVillage(){renderVillage();el('village-dialog').hidden=false;el('village-close').focus();}
function closeVillage(){el('village-dialog').hidden=true;if(!input.disabled)input.focus();}
el('village-button').addEventListener('click',openVillage);
el('village-close').addEventListener('click',closeVillage);
el('village-dialog').addEventListener('click',event=>{if(event.target===el('village-dialog'))closeVillage();});
el('village-shop').addEventListener('click',event=>{const button=event.target.closest('[data-key]');if(button&&!button.disabled)buildAt(button.dataset.key);});
el('village-residents').addEventListener('click',event=>{if(event.target.closest('.resident-item'))renderResidents();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!el('village-dialog').hidden)closeVillage();});

// ===== ボス戦（定義と計算は bosses.js） =====
let bossWord=null;
let bossLaterThisSession=false; // 「あとでたたかう」を選んだら、再読み込みまで出さない

// 挑戦待ちのボスがいれば専用画面を開く（レベルアップ後・読み込み後に呼ぶ）
function maybeStartBoss(){
  if(!el('boss-screen').hidden||bossLaterThisSession)return;
  const boss=state.bossFight?getBoss(state.bossFight.id):areaBossReady(state)?getBoss(getArea(state.areaId).bossId):null;
  if(!boss)return;
  if(!state.bossFight)state.bossFight={id:boss.id,hp:boss.hp};
  stopTimer();el('timer-pill').hidden=true;save();openBossScreen(boss);
}
function openBossScreen(boss){
  el('boss-art').textContent=boss.icon;el('boss-name').textContent=`${boss.icon} ${boss.name}`;
  el('boss-player-level').textContent=`Lv.${state.level}`;
  el('boss-victory').hidden=true;el('boss-hit').textContent='';el('boss-screen').hidden=false;
  playSound('recruit');nextBossWord();
}
function nextBossWord(){
  bossWord=pickWord(bossWord&&bossWord.kana);
  el('boss-kana').textContent=bossWord.kana;el('boss-romaji').textContent=bossWord.romaji;
  el('boss-input').value='';renderBossHp();el('boss-input').focus();
}
// HPバーと「残り / 最大」を描画
function renderBossHp(){
  const info=bossHpInfo(getBoss(state.bossFight.id),state.bossFight.hp);
  el('boss-hp-bar').style.width=`${info.percent}%`;el('boss-hp-text').textContent=`${info.now} / ${info.max}`;
}
// ミスはダメージなし。HPもコンボも減らさず、違うキーは入力欄に残さない
el('boss-input').addEventListener('input',event=>{
  if(!bossWord||!state.bossFight)return;
  const field=el('boss-input'),typed=field.value.toLowerCase();
  if(!matchRomaji(bossWord,typed)){field.value=typed.slice(0,matchedLength(bossWord,typed));return;}
  field.value=typed;
  if(isRomajiComplete(bossWord,typed))attackBoss();
});
el('boss-input').addEventListener('keydown',event=>{if(event.key.length===1&&!event.ctrlKey&&!event.metaKey&&!event.altKey)playSound('key');});
// 正解：文字数に応じたダメージ。通常の正解と同じXP・コインも入る
function attackBoss(){
  const boss=getBoss(state.bossFight.id),dmg=bossDamage(bossWord.kana);
  el('boss-input').disabled=true;
  state.bossFight.hp=Math.max(0,state.bossFight.hp-dmg);
  state.wordsTyped++;state.correct++;
  const leveled=gainXp();recordCorrectWord(bossWord);rewardCoins(leveled);checkBadges();
  const hit=el('boss-hit');hit.textContent=`💥 ${dmg}ダメージ！`;hit.classList.remove('show');void hit.offsetWidth;hit.classList.add('show');
  const art=el('boss-art');art.classList.remove('shake');void art.offsetWidth;art.classList.add('shake');
  playSound('attack');renderBossHp();save();
  if(state.bossFight.hp<=0)setTimeout(()=>defeatBoss(boss),500);
  else setTimeout(()=>{el('boss-input').disabled=false;nextBossWord();},450);
}
// 撃破：XP・コイン・専用バッジを1回だけ付与
function defeatBoss(boss){
  if(!state.bossesDefeated.includes(boss.id))state.bossesDefeated.push(boss.id);
  state.bossFight=null;
  const cleared=getArea(state.areaId),next=cleared&&nextArea(cleared);
  if(next&&cleared.bossId===boss.id){state.areaId=next.id;toast(`${next.icon} ${next.name}が ひらいたよ！`);}
  const before=state.level;state.xp+=BOSS_REWARD.xp;state.level=levelFromXp(state.xp);
  state.coins+=BOSS_REWARD.coins+(state.level>before?COIN_LEVELUP_BONUS:0);
  checkBadges();save();render();renderCoins();
  el('boss-victory-text').textContent=`${boss.icon} ${boss.name}を たおした！`;
  el('boss-victory-reward').textContent=`XP +${BOSS_REWARD.xp}　🪙 +${BOSS_REWARD.coins}`;
  el('boss-victory').hidden=false;el('boss-victory-close').focus();playSound('badge');
}
// 撃破画面を閉じて通常モードへ（次に挑戦できるボスがいれば続けて出す）
function closeBossScreen(){
  el('boss-victory').hidden=true;el('boss-screen').hidden=true;el('boss-input').disabled=false;
  maybeStartBoss();
  if(el('boss-screen').hidden){render();nextWord();}
}
el('boss-victory-close').addEventListener('click',closeBossScreen);
el('boss-later').addEventListener('click',()=>{
  bossLaterThisSession=true;el('boss-screen').hidden=true;render();input.focus();
});
// ===== ワールドマップ（定義と判定は areas.js） =====
// 画面上の「いまのエリア」バー：名前・ボスまでのゲージ
function renderAreaBar(){
  const area=getArea(state.areaId),cleared=state.bossesDefeated.includes(area.bossId),n=state.areaProgress[area.id];
  el('area-bar-name').textContent=`${area.icon} ${area.name}`;
  el('area-bar-fill').style.width=`${n/AREA_GAUGE*100}%`;
  el('area-bar-count').textContent=cleared?'クリア✅':n>=AREA_GAUGE?'ボス！':`${n}/${AREA_GAUGE}`;
  el('area-bar').classList.toggle('ready',areaBossReady(state));
}
function renderMap(){
  el('map-list').innerHTML=AREA_DEFS.map(a=>{
    const open=areaUnlocked(a,state.bossesDefeated),boss=getBoss(a.bossId),beaten=state.bossesDefeated.includes(a.bossId),here=a.id===state.areaId;
    if(!open)return `<li class="map-item locked">🔒 ？？？<small>まえのエリアの ボスを たおすと ひらくよ</small></li>`;
    const gauge=beaten?'ボス たおした ✅':`ボスまで ${state.areaProgress[a.id]} / ${AREA_GAUGE}`;
    const action=here?(areaBossReady(state)&&!beaten?`<button class="fight" data-act="boss" type="button">${boss.icon} ボスに ちょうせん！</button>`:'<small>📍 いま ここにいるよ</small>'):`<button data-act="go" data-id="${a.id}" type="button">ここへ いく</button>`;
    return `<li class="map-item ${here?'here':''}"><span>${a.icon} ${a.name}</span><small>${boss.icon} ${boss.name}　${gauge}</small>${action}</li>`;
  }).join('');
}
function openMap(){renderMap();el('map-dialog').hidden=false;el('map-close').focus();}
function closeMap(){el('map-dialog').hidden=true;if(!input.disabled)input.focus();}
el('area-bar').addEventListener('click',openMap);
el('map-close').addEventListener('click',closeMap);
el('map-dialog').addEventListener('click',event=>{
  if(event.target===el('map-dialog')){closeMap();return;}
  const button=event.target.closest('button[data-act]');if(!button)return;
  if(button.dataset.act==='go'){
    const area=getArea(button.dataset.id);
    if(!area||!areaUnlocked(area,state.bossesDefeated))return;
    state.areaId=area.id;current=pickWord('');input.value='';save();closeMap();render();toast(`${area.icon} ${area.name}に きたよ！`);
  }else{closeMap();bossLaterThisSession=false;maybeStartBoss();}
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!el('map-dialog').hidden)closeMap();});

// ボスずかん
function renderBossDex(){
  el('boss-dex-list').innerHTML=BOSS_DEFS.map(b=>{
    const done=state.bossesDefeated.includes(b.id);
    return `<li class="${done?'':'locked'}">${done?'✅':'🔒'} ${done?`${b.icon} ${b.name}`:'？？？'}<small>　${(AREA_DEFS.find(a=>a.bossId===b.id)||{name:''}).name}</small></li>`;
  }).join('');
}
function openBossDex(){renderBossDex();renderWordDex();showDexTab('word');el('boss-dex-dialog').hidden=false;el('boss-dex-close').focus();}
// ことばずかん：集めたことばと★を、しゅるいごとに表示
function renderWordDex(){
  const seen=words.filter(w=>state.wordStats[w.kana]).length;
  el('word-dex-summary').textContent=`あつめたことば ${seen} / ${words.length}　★3: ${masteredCount(state.wordStats)}こ`;
  const categories=[...new Set(words.map(w=>w.category))];
  el('word-dex-list').innerHTML=categories.map(cat=>`<h3 class="word-dex-cat">${cat}</h3><div class="word-chips">${words.filter(w=>w.category===cat).map(w=>{
    const stat=state.wordStats[w.kana];
    return stat?`<span class="word-chip s${stat.best}">${w.kana}<b>${starText(stat.best)}</b></span>`:'<span class="word-chip locked">？？？</span>';
  }).join('')}</div>`).join('');
}
function showDexTab(name){
  const word=name==='word';
  el('dex-panel-word').hidden=!word;el('boss-dex-list').hidden=word;
  el('dex-tab-word').classList.toggle('active',word);el('dex-tab-boss').classList.toggle('active',!word);
  el('dex-tab-word').setAttribute('aria-selected',String(word));el('dex-tab-boss').setAttribute('aria-selected',String(!word));
}
el('dex-tab-word').addEventListener('click',()=>showDexTab('word'));
el('dex-tab-boss').addEventListener('click',()=>showDexTab('boss'));
function closeBossDex(){el('boss-dex-dialog').hidden=true;if(!input.disabled)input.focus();}
el('boss-dex-button').addEventListener('click',openBossDex);
el('boss-dex-close').addEventListener('click',closeBossDex);
el('boss-dex-dialog').addEventListener('click',event=>{if(event.target===el('boss-dex-dialog'))closeBossDex();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!el('boss-dex-dialog').hidden)closeBossDex();});

function recruit(){
  const c=creatureAt();state.recruited.push({creatureIndex:state.monsterIndex%creatures.length,level:state.level});state.monsterIndex++;state.monsterHp=3;
  playSound('recruit');
  renderMonster();renderCollection();el('battle-message').textContent=`${c.name}が なかまに なった！`;toast(`${c.name}が なかまに なったよ！`);
}
function submit(){
  if(!isRomajiComplete(current,input.value))return;stopTimer();state.wordsTyped++;state.correct++;state.monsterHp--;
  playSound('attack');
  const leveled=gainXp();const bossReady=addAreaProgress(state);recordCorrectWord();rewardCoins(leveled);checkBadges();el('enemy-health').style.width=`${Math.max(0,state.monsterHp/3*100)}%`;
  el('monster-wrap').classList.remove('hit');void el('monster-wrap').offsetWidth;el('monster-wrap').classList.add('hit');
  el('battle-effects').textContent=state.monsterHp<=0?'たおした！':state.level>=3?'まほう こうげき！':'こうげき！';el('battle-effects').classList.remove('show');void el('battle-effects').offsetWidth;el('battle-effects').classList.add('show');
  el('typing-feedback').textContent='せいかい！ こうげき！';el('typing-feedback').classList.remove('error');el('battle-message').textContent=state.monsterHp<=0?'やった！ モンスターを たおした！':'いいね！ モンスターに あたったよ！';
  const recruited=state.monsterHp<=0;save(state.wordIndex+1);render();input.value='';
  el('slash-effect').classList.remove('show');void el('slash-effect').offsetWidth;el('slash-effect').classList.add('show');
  if(state.level>=3){
    const magic=el('magic-effect');
    magic.classList.toggle('strong',state.level>=6&&state.level<10);magic.classList.toggle('legendary',state.level>=10);
    void magic.offsetWidth;magic.classList.add('show');
  }
  if(recruited){el('monster-wrap').classList.add('defeated');setTimeout(recruit,750);}
  setTimeout(nextWord,leveled||recruited?1300:580);
  if(bossReady){bossLaterThisSession=false;toast('ボスが あらわれた！');setTimeout(maybeStartBoss,leveled||recruited?1400:700);} // エリアのゲージが満タンになったらボス出現
}
input.addEventListener('input',event=>{
  const typed=input.value.toLowerCase();
  if(!matchRomaji(current,typed)){
    // 違うキーは入力欄に残さず、ヒントを出すだけ（HPは減らない）
    input.value=typed.slice(0,matchedLength(current,typed));
    hint();
    recordMiss();
  }
  else{input.value=typed;if(event.inputType&&event.inputType.startsWith('insert'))recordKey();el('typing-feedback').textContent=timerLimit()&&!timedOut?'じかん内に うってみよう':'Enterキーでも こうげき！';el('typing-feedback').classList.remove('error');el('battle-message').textContent='そのちょうし！';if(isRomajiComplete(current,typed))submit();}
  renderKeyboard();
});
input.addEventListener('keydown',event=>{if(event.key==='Enter'&&isRomajiComplete(current,input.value))submit();});
input.addEventListener('keydown',event=>{if(event.key.length===1&&!event.ctrlKey&&!event.metaKey&&!event.altKey)playSound('key');});
el('sound-button').addEventListener('click',()=>{soundEnabled=!soundEnabled;updateSoundButton();});
el('reset-button').addEventListener('click',()=>{
  if(!confirm('レベルやなかまを さいしょからに もどしますか？'))return;
  closeSettings();
  // バッジ・連続プレイ日数・コイン・村・ボスずかん・きょうのぼうけんは、冒険をやり直しても残す
  stopTimer();state=newState({badges:state.badges,bossesDefeated:state.bossesDefeated,dailyStreak:state.dailyStreak,lastPlayDate:state.lastPlayDate,coins:state.coins,village:state.village,dailyDate:state.dailyDate,dailyCount:state.dailyCount,dailyDone:state.dailyDone,stampDays:state.stampDays,wordStats:state.wordStats,areaId:state.areaId,areaProgress:state.areaProgress});current=pickWord('');wordHadMiss=false;input.value='';timedOut=false;save();render();toast('ぼうけんを さいしょから はじめよう！');input.focus();
});
// せってい画面（あそびかた・おと・リセット）
function openSettings(){el('settings-dialog').hidden=false;el('settings-close').focus();}
function closeSettings(){el('settings-dialog').hidden=true;if(!input.disabled)input.focus();}
el('settings-button').addEventListener('click',openSettings);
el('settings-close').addEventListener('click',closeSettings);
el('settings-dialog').addEventListener('click',event=>{if(event.target===el('settings-dialog'))closeSettings();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!el('settings-dialog').hidden)closeSettings();});
const helpKey='kotoba-quest-help-seen';
function openHelp(){el('settings-dialog').hidden=true;el('help-dialog').hidden=false;el('help-close').focus();}
function closeHelp(){
  el('help-dialog').hidden=true;
  try{localStorage.setItem(helpKey,'1');}catch{}
  if(!input.disabled)input.focus();
}
el('help-button').addEventListener('click',openHelp);
el('help-close').addEventListener('click',closeHelp);
el('help-start').addEventListener('click',closeHelp);
el('help-dialog').addEventListener('click',event=>{if(event.target===el('help-dialog'))closeHelp();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!el('help-dialog').hidden)closeHelp();});
updateSoundButton();render();startTimer();renderBadgeCollection();checkBadges(); // 既存プレイヤーの条件達成済みバッジも付与
maybeStartBoss(); // 挑戦待ち・戦闘中のボスがいれば再開
let helpSeen=false;
try{helpSeen=localStorage.getItem(helpKey)==='1';}catch{}
if(helpSeen)input.focus();else openHelp();