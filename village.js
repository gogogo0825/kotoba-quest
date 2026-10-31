// ===== ことばのむら：定義と計算 =====
// app.js より先に読み込む。画面やlocalStorageには触れない。
// 建物を増やすときは BUILDING_DEFS に1行足す（key は state.village のキー）。

// --- コインの設定 ---
const COIN_PER_CORRECT = 5;     // 正解1回
const COIN_COMBO_BONUS = 10;    // 連続ボーナス
const COIN_COMBO_EVERY = 10;    // 何ことば連続ミスなしごとにボーナスか
const COIN_LEVELUP_BONUS = 20;  // レベルアップ

// --- 建物の定義（points は村ランクの計算に使う） ---
const BUILDING_DEFS = [
  { key: 'trees',   icon: '🌳', name: '木',   price: 20,  max: 10, points: 1,  action: '木を植える',   done: '木を植えた！' },
  { key: 'flowers', icon: '🌼', name: '花畑', price: 30,  max: 5,  points: 2,  action: '花畑をつくる', done: '花畑ができた！' },
  { key: 'houses',  icon: '🏠', name: '家',   price: 50,  max: 5,  points: 5,  action: '家を建てる',   done: 'おうちができた！' },
  { key: 'plaza',   icon: '⛲', name: '広場', price: 200, max: 1,  points: 10, action: '広場をつくる', done: '広場ができた！' },
  { key: 'school',  icon: '🏫', name: '学校', price: 300, max: 1,  points: 15, action: '学校を建てる', done: '学校ができた！' },
  { key: 'castle',  icon: '🏰', name: '城',   price: 500, max: 1,  points: 25, action: '城を建てる',   done: 'お城ができた！' },
];

function getBuildingDef(key) { return BUILDING_DEFS.find(b => b.key === key); }

// --- 村データ ---
function emptyVillage() {
  return Object.fromEntries(BUILDING_DEFS.map(b => [b.key, 0]));
}

// 保存データを安全な形に直す（true/false・不正な値・上限超えを補正）
function normalizeVillage(raw) {
  const src = raw && typeof raw === 'object' ? raw : {};
  const village = emptyVillage();
  BUILDING_DEFS.forEach(b => {
    const n = src[b.key] === true ? 1 : Math.floor(Number(src[b.key]) || 0);
    village[b.key] = Math.min(b.max, Math.max(0, n));
  });
  return village;
}

// --- 村ランク ---
const VILLAGE_RANKS = [ // min は発展ポイントの下限（全部建てると95ポイント）
  { rank: 'E', min: 0,  name: 'はじまりのむら' },
  { rank: 'D', min: 10, name: 'ちいさなむら' },
  { rank: 'C', min: 25, name: 'げんきなむら' },
  { rank: 'B', min: 45, name: 'にぎやかなまち' },
  { rank: 'A', min: 65, name: 'おおきなまち' },
  { rank: 'S', min: 90, name: 'でんせつのことばおうこく' },
];

function villageScore(village) {
  return BUILDING_DEFS.reduce((sum, b) => sum + village[b.key] * b.points, 0);
}

// 現在のランクと、つぎのランク（なければ null）を返す
function getVillageRank(village) {
  const score = villageScore(village);
  let index = 0;
  VILLAGE_RANKS.forEach((r, i) => { if (score >= r.min) index = i; });
  return { ...VILLAGE_RANKS[index], score, next: VILLAGE_RANKS[index + 1] || null };
}

// --- 住民 ---
const RESIDENT_DEFS = [
  { icon: '🐰', name: 'うさぎ', minHouses: 1 },
  { icon: '🐱', name: 'ねこ',   minHouses: 3 },
  { icon: '🐻', name: 'くま',   minHouses: 5 },
];
const RESIDENT_COMMENTS = ['ありがとう！', 'いいむらだね！', 'きょうも がんばってるね！'];
const RESIDENT_WISH = 'もっとおうちがほしいな！'; // 家を建てられる間だけ言う

function getResidents(village) {
  return RESIDENT_DEFS.filter(r => village.houses >= r.minHouses);
}

function pickResidentComment(village) {
  const pool = [...RESIDENT_COMMENTS];
  if (village.houses < getBuildingDef('houses').max) pool.push(RESIDENT_WISH);
  return pool[Math.floor(Math.random() * pool.length)];
}

// --- 建設 ---
// 成功したら s.coins と s.village を更新して {ok:true, def} を返す。失敗理由は message
function tryBuild(s, key) {
  const def = getBuildingDef(key);
  if (!def) return { ok: false, message: 'その たてものは ないよ' };
  if (s.village[key] >= def.max) return { ok: false, message: `${def.name}は これいじょう ふやせないよ` };
  if (s.coins < def.price) return { ok: false, message: `コインが あと ${def.price - s.coins} たりないよ` };
  s.coins -= def.price;
  s.village[key]++;
  return { ok: true, def };
}
