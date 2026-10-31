const words = [
  ['ねこ','neko','どうぶつ'],['いぬ','inu','どうぶつ'],['くま','kuma','どうぶつ'],['とり','tori','どうぶつ'],['さかな','sakana','どうぶつ'],['うさぎ','usagi','どうぶつ'],
  ['ぞう','zou','どうぶつ'],['きりん','kirin','どうぶつ'],['ぱんだ','panda','どうぶつ'],['さる','saru','どうぶつ'],['きつね','kitsune','どうぶつ'],['たぬき','tanuki','どうぶつ'],['しか','shika','どうぶつ'],['かめ','kame','どうぶつ'],['かえる','kaeru','どうぶつ'],['いるか','iruka','どうぶつ'],['くじら','kujira','どうぶつ'],['ぺんぎん','pengin','どうぶつ'],['ふくろう','fukurou','どうぶつ'],['らいおん','raion','どうぶつ'],
  ['すし','sushi','たべもの'],['りんご','ringo','たべもの'],['ぱん','pan','たべもの'],['みかん','mikan','たべもの'],['おにぎり','onigiri','たべもの'],['けーき','keeki','たべもの'],
  ['ばなな','banana','たべもの'],['ぶどう','budou','たべもの'],['いちご','ichigo','たべもの'],['もも','momo','たべもの'],['れもん','remon','たべもの'],['めろん','meron','たべもの'],['とまと','tomato','たべもの'],['にんじん','ninjin','たべもの'],['たまご','tamago','たべもの'],['らーめん','raamen','たべもの'],['うどん','udon','たべもの'],['かれー','karee','たべもの'],['おもち','omochi','たべもの'],['ぷりん','purin','たべもの'],['あいす','aisu','たべもの'],['ほっとけーき','hottokeeki','たべもの'],
  ['ほん','hon','みぢかなもの'],['くつ','kutsu','みぢかなもの'],['そら','sora','みぢかなもの'],['くるま','kuruma','みぢかなもの'],['ぼうし','boushi','みぢかなもの'],['えんぴつ','enpitsu','みぢかなもの'],
  ['つくえ','tsukue','みぢかなもの'],['いす','isu','みぢかなもの'],['かばん','kaban','みぢかなもの'],['めがね','megane','みぢかなもの'],['とけい','tokei','みぢかなもの'],['でんしゃ','densha','みぢかなもの'],['じてんしゃ','jitensha','みぢかなもの'],['でんわ','denwa','みぢかなもの'],['かさ','kasa','みぢかなもの'],['まくら','makura','みぢかなもの'],['おさら','osara','みぢかなもの'],['はさみ','hasami','みぢかなもの'],['けしごむ','keshigomu','みぢかなもの'],['てがみ','tegami','みぢかなもの'],['おもちゃ','omocha','みぢかなもの'],
  ['やま','yama','しぜん'],['かわ','kawa','しぜん'],['うみ','umi','しぜん'],['はな','hana','しぜん'],['き','ki','しぜん'],['もり','mori','しぜん'],['ゆき','yuki','しぜん'],['あめ','ame','しぜん'],['ほし','hoshi','しぜん'],['つき','tsuki','しぜん'],['くも','kumo','しぜん'],['にじ','niji','しぜん'],
  ['あさ','asa','ことば'],['ひる','hiru','ことば'],['よる','yoru','ことば'],['みず','mizu','ことば'],['ひ','hi','ことば'],['ゆめ','yume','ことば'],['えがお','egao','ことば'],['こころ','kokoro','ことば'],['なかま','nakama','ことば'],['ちから','chikara','ことば'],
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
const storageKey='kotoba-quest-save-v1';
const initial={level:1,xp:0,wordsTyped:0,correct:0,recruited:[],wordIndex:0,monsterIndex:0,monsterHp:3,heroHp:3,gameOver:false};
const maxHeroHp=3;
const el=(id)=>document.getElementById(id);
const input=el('typing-input');
let state=load();
let current=words[state.wordIndex%words.length];
let timer=null,secondsLeft=0,timedOut=false,toastTimer=null;
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
}
function updateSoundButton(){
  const button=el('sound-button');
  button.textContent=soundEnabled?'♪':'×';button.setAttribute('aria-pressed',String(soundEnabled));
  button.setAttribute('aria-label',`効果音を${soundEnabled?'オフ':'オン'}`);
  button.title=`効果音を${soundEnabled?'オフ':'オン'}`;
}

function load(){
  try{
    const saved=JSON.parse(localStorage.getItem(storageKey));
    if(!saved||typeof saved!=='object')return {...initial,recruited:[]};
    const savedHeroHp=Number(saved.heroHp??maxHeroHp);
    return {...initial,...saved,level:Math.max(1,Number(saved.level)||1),xp:Math.max(0,Number(saved.xp)||0),recruited:Array.isArray(saved.recruited)?saved.recruited:[],heroHp:Number.isFinite(savedHeroHp)?Math.max(0,Math.min(maxHeroHp,savedHeroHp)):maxHeroHp,gameOver:saved.gameOver===true};
  }catch{return {...initial,recruited:[]};}
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
  const next=current.romaji[input.value.length]||'';
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
  if(!limit||timedOut||state.gameOver){el('timer-pill').hidden=true;return;}
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
function takeDamage(){
  if(state.gameOver)return;
  state.heroHp=Math.max(0,state.heroHp-1);
  el('hero-health').style.width=`${state.heroHp/maxHeroHp*100}%`;
  el('hero-hp-label').textContent=`${state.heroHp} / ${maxHeroHp}`;
  el('hero-side').classList.remove('hurt');void el('hero-side').offsetWidth;el('hero-side').classList.add('hurt');
  el('battle-effects').textContent='ダメージ！';el('battle-effects').classList.remove('show');void el('battle-effects').offsetWidth;el('battle-effects').classList.add('show');
  if(state.heroHp===0){
    state.gameOver=true;stopTimer();input.disabled=true;
    el('game-over').hidden=false;el('battle-message').textContent='ゲームオーバー！ もういちど たたかおう';
    el('retry-button').focus();
  }else{
    el('battle-message').textContent=`こうげきを うけた！ のこりHP ${state.heroHp}`;
  }
  save();
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
  el('hero-health').style.width=`${state.heroHp/maxHeroHp*100}%`;el('hero-hp-label').textContent=`${state.heroHp} / ${maxHeroHp}`;
  input.disabled=state.gameOver;el('game-over').hidden=!state.gameOver;
  const xp=state.xp%100;el('xp-label').textContent=`${xp} / 100 XP`;el('xp-bar').style.width=`${xp}%`;
  el('word-number').textContent=state.wordIndex%3+1;el('category-label').textContent=current.category;el('word-kana').textContent=current.kana;
  romanHint();renderKeyboard();renderMonster();renderCollection();
  if(state.level>=3&&!timedOut&&!state.gameOver)startTimer();else{stopTimer();el('timer-pill').hidden=true;}
}
function nextWord(){
  if(state.gameOver)return;
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
  playSound('recruit');
  renderMonster();renderCollection();el('battle-message').textContent=`${c.name}が なかまに なった！`;toast(`${c.name}が なかまに なったよ！`);
}
function submit(){
  if(state.gameOver)return;
  if(input.value!==current.romaji)return;stopTimer();state.wordsTyped++;state.correct++;state.monsterHp--;
  playSound('attack');
  const leveled=gainXp();el('enemy-health').style.width=`${Math.max(0,state.monsterHp/3*100)}%`;
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
}
input.addEventListener('input',()=>{
  if(state.gameOver)return;
  const typed=input.value.toLowerCase();
  if(!current.romaji.startsWith(typed)){
    let matched=0;
    while(matched<typed.length&&typed[matched]===current.romaji[matched])matched++;
    input.value=current.romaji.slice(0,matched);
    hint();
    takeDamage();
  }
  else{input.value=typed;el('typing-feedback').textContent=timerLimit()&&!timedOut?'じかん内に うってみよう':'Enterキーでも こうげき！';el('typing-feedback').classList.remove('error');el('battle-message').textContent='そのちょうし！';if(typed.length===current.romaji.length)submit();}
  renderKeyboard();
});
input.addEventListener('keydown',event=>{if(event.key==='Enter'&&input.value===current.romaji)submit();});
input.addEventListener('keydown',event=>{if(event.key.length===1&&!event.ctrlKey&&!event.metaKey&&!event.altKey)playSound('key');});
el('sound-button').addEventListener('click',()=>{soundEnabled=!soundEnabled;updateSoundButton();});
el('save-button').addEventListener('click',()=>{
  if(save())toast('ぼうけんをセーブしたよ！');
  else toast('セーブできませんでした。ブラウザの保存設定を確認してね');
});
el('retry-button').addEventListener('click',()=>{
  state.gameOver=false;state.heroHp=maxHeroHp;state.monsterHp=3;input.value='';timedOut=false;
  el('hero-side').classList.remove('hurt');el('game-over').hidden=true;
  el('battle-message').textContent='もういちど ことばを うって こうげきしよう！';
  save();render();input.focus();
});
el('reset-button').addEventListener('click',()=>{
  if(!confirm('レベルやなかまを さいしょからに もどしますか？'))return;
  stopTimer();state={...initial,recruited:[]};current=words[0];input.value='';timedOut=false;save();render();toast('ぼうけんを さいしょから はじめよう！');input.focus();
});
const helpKey='kotoba-quest-help-seen';
function openHelp(){el('help-dialog').hidden=false;el('help-close').focus();}
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
updateSoundButton();render();startTimer();
let helpSeen=false;
try{helpSeen=localStorage.getItem(helpKey)==='1';}catch{}
if(helpSeen)input.focus();else openHelp();