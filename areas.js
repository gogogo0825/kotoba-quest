// ===== ワールドマップ（エリア）の定義と判定 =====
// bosses.js の後・app.js より先に読み込む。画面やlocalStorageには触れず、データと計算だけを持つ。
// エリアを増やすときは AREA_DEFS に1行足す（categories が null なら全部のことばが出る）。
const AREA_DEFS = [
  { id: 'forest', icon: '🌳', name: 'ひらがなのもり', categories: ['どうぶつ'], bossId: 'slimeKing' },
  { id: 'river', icon: '🌊', name: 'ことばのかわ', categories: ['しぜん'], bossId: 'wolfKing' },
  { id: 'mountain', icon: '⛰', name: 'ドラゴンやま', categories: ['たべもの', 'みぢかなもの'], bossId: 'dragon' },
  { id: 'castle', icon: '🏰', name: 'ことばじょう', categories: null, bossId: 'wordKing' },
];
const AREA_GAUGE = 15; // ボスが出るまでに必要な正解数

function getArea(id) { return AREA_DEFS.find(a => a.id === id) || null; }

// 前のエリアのボスを倒していれば入れる（最初のエリアは最初から）
function areaUnlocked(area, defeated) {
  const index = AREA_DEFS.indexOf(area);
  return index === 0 || defeated.includes(AREA_DEFS[index - 1].bossId);
}

// そのエリアで出すことば（該当が無ければ全部）
function areaWords(words, area) {
  if (!area || !area.categories) return words;
  const list = words.filter(w => area.categories.includes(w.category));
  return list.length ? list : words;
}

// 保存データの areaId / areaProgress を検証する。ボス撃破済みのエリアはゲージ満タン扱い
function normalizeAreaState(savedId, savedProgress, defeated) {
  const progress = {};
  AREA_DEFS.forEach(a => {
    const n = Math.floor(Number(savedProgress && savedProgress[a.id]));
    progress[a.id] = defeated.includes(a.bossId) ? AREA_GAUGE : Math.max(0, Math.min(AREA_GAUGE, Number.isFinite(n) ? n : 0));
  });
  let area = getArea(savedId);
  if (!area || !areaUnlocked(area, defeated)) {
    area = AREA_DEFS.find(a => !defeated.includes(a.bossId)) || AREA_DEFS[AREA_DEFS.length - 1];
  }
  return { areaId: area.id, areaProgress: progress };
}

// 正解を1つ加える。ボスを倒していないエリアでだけ増える。ゲージが満タンになった瞬間に true
function addAreaProgress(state) {
  const area = getArea(state.areaId);
  if (!area || state.bossesDefeated.includes(area.bossId)) return false;
  if (state.areaProgress[area.id] >= AREA_GAUGE) return false;
  state.areaProgress[area.id]++;
  return state.areaProgress[area.id] >= AREA_GAUGE;
}

// ゲージが満タンで、まだボスを倒していない
function areaBossReady(state) {
  const area = getArea(state.areaId);
  return !!area && !state.bossesDefeated.includes(area.bossId) && state.areaProgress[area.id] >= AREA_GAUGE;
}

// ボスを倒した後に進むエリア（最後のエリアなら null）
function nextArea(area) {
  return AREA_DEFS[AREA_DEFS.indexOf(area) + 1] || null;
}
