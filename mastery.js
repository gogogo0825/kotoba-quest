// ===== ことばの習熟度（★）と、出すことばの選び方 =====
// app.js より先に読み込む。画面やlocalStorageには触れず、計算だけを持つ。
// stats は { [かな]: { n: 正解回数, clean: ミスなしの連続回数, best: 最高の★(0〜3), weak: 直近でミスしたか } }
const STAR_RULES = [ // 上から順に判定。★の数 → 必要なミスなし連続回数
  { stars: 3, clean: 4 },
  { stars: 2, clean: 2 },
];

// ことばの難しさ：文字数＋（ゃゅょっー）の数
function wordScore(word) {
  const chars = Array.from(word.kana);
  return chars.length + chars.filter(c => 'ゃゅょっー'.includes(c)).length;
}
// 1:みじかい(〜2) 2:ふつう(〜3) 3:ながい
function wordTier(word) {
  const score = wordScore(word);
  return score <= 2 ? 1 : score <= 3 ? 2 : 3;
}
// そのレベルで出してよい最大のむずかしさ
function maxTierForLevel(level) {
  return level < 3 ? 1 : level < 6 ? 2 : 3;
}

function starsOf(stat) {
  if (!stat || stat.n < 1) return 0;
  const rule = STAR_RULES.find(r => stat.clean >= r.clean);
  return rule ? rule.stars : 1;
}
// 表示用 例：★★☆
function starText(count) {
  return '★'.repeat(count) + '☆'.repeat(3 - count);
}

// 正解したときに記録を更新する。{ before, after }（これまでの最高★と今の最高★）を返す
function recordWordResult(stats, kana, hadMiss) {
  const stat = stats[kana] || { n: 0, clean: 0, best: 0, weak: false };
  const before = stat.best;
  stat.n++;
  if (hadMiss) { stat.clean = 0; stat.weak = true; }
  else { stat.clean++; stat.weak = false; }
  stat.best = Math.max(stat.best, starsOf(stat));
  stats[kana] = stat;
  return { before, after: stat.best };
}

// 保存データの検証。知らないことばや壊れた値は取り除く
function normalizeWordStats(raw, words) {
  const result = {};
  if (!raw || typeof raw !== 'object') return result;
  const known = new Set(words.map(w => w.kana));
  const num = v => Math.max(0, Math.floor(Number(v)) || 0);
  Object.keys(raw).forEach(kana => {
    const s = raw[kana];
    if (!known.has(kana) || !s || typeof s !== 'object') return;
    const stat = { n: num(s.n), clean: num(s.clean), best: Math.min(3, num(s.best)), weak: s.weak === true };
    if (stat.n > 0) result[kana] = stat;
  });
  return result;
}

// ★3のことばの数
function masteredCount(stats) {
  return Object.values(stats || {}).filter(s => s.best >= 3).length;
}

// つぎに出すことばを選ぶ。にがてなことば・まだ★の少ないことばを出やすくする
function pickNextWord(words, stats, level, prevKana, rand = Math.random) {
  const tier = maxTierForLevel(level);
  let pool = words.filter(w => wordTier(w) <= tier && w.kana !== prevKana);
  if (!pool.length) pool = words;
  const weight = w => {
    const s = stats[w.kana];
    if (!s) return 3; // まだ出会っていない
    if (s.weak) return 4; // さっきミスした
    return s.best >= 3 ? 1 : 2;
  };
  const total = pool.reduce((sum, w) => sum + weight(w), 0);
  let r = rand() * total;
  for (const w of pool) {
    r -= weight(w);
    if (r < 0) return w;
  }
  return pool[pool.length - 1];
}
