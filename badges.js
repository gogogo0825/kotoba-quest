// ===== バッジ（実績）の定義と判定 =====
// app.js より先に読み込む。画面やlocalStorageには触れず、データと判定だけを持つ。
// バッジを増やすときは BADGE_DEFS に1行足すだけでよい（check は保存データ s を受け取る）。
//   s.correct     : 総正解数            s.level       : 現在のレベル
//   s.combo       : 連続で正しく打ったキー数（ミスで0に戻る）
//   s.noMiss      : ミスなしで打てた連続ことば数（ミスで0に戻る）
//   s.dailyStreak : 連続プレイ日数
const BADGE_DEFS = [
  { id: 'firstAdventure', icon: '🌱', name: 'はじめてのぼうけん', desc: '1もん せいかいする', check: s => s.correct >= 1 },
  { id: 'clear10', icon: '⭐', name: 'ことばみならい', desc: '10もん せいかいする', check: s => s.correct >= 10 },
  { id: 'clear50', icon: '🌟', name: 'ことばのたびびと', desc: '50もん せいかいする', check: s => s.correct >= 50 },
  { id: 'clear100', icon: '👑', name: 'ことばのゆうしゃ', desc: '100もん せいかいする', check: s => s.correct >= 100 },
  { id: 'level3', icon: '🥉', name: 'わかゆうしゃ', desc: 'レベル3に なる', check: s => s.level >= 3 },
  { id: 'level5', icon: '🥈', name: 'いちにんまえ', desc: 'レベル5に なる', check: s => s.level >= 5 },
  { id: 'level8', icon: '🥇', name: 'ベテランゆうしゃ', desc: 'レベル8に なる', check: s => s.level >= 8 },
  { id: 'combo5', icon: '🔥', name: 'コンボみならい', desc: 'キーを 5かい れんぞくで ただしく うつ', check: s => s.combo >= 5 },
  { id: 'combo10', icon: '⚡', name: 'コンボめいじん', desc: 'キーを 10かい れんぞくで ただしく うつ', check: s => s.combo >= 10 },
  { id: 'combo20', icon: '🌈', name: 'コンボのたつじん', desc: 'キーを 20かい れんぞくで ただしく うつ', check: s => s.combo >= 20 },
  { id: 'nomiss10', icon: '🎯', name: 'ノーミスのたび', desc: '10ことば れんぞくで ミスなしで うつ', check: s => s.noMiss >= 10 },
  { id: 'nomiss30', icon: '🏆', name: 'ノーミスのたつじん', desc: '30ことば れんぞくで ミスなしで うつ', check: s => s.noMiss >= 30 },
  { id: 'daily3', icon: '📅', name: '3にちつづいた！', desc: '3にち れんぞくで あそぶ', check: s => s.dailyStreak >= 3 },
  { id: 'daily7', icon: '🗓️', name: 'いっしゅうかんのぼうけん', desc: '7にち れんぞくで あそぶ', check: s => s.dailyStreak >= 7 },
  { id: 'daily30', icon: '🌙', name: 'ひとつきのゆうしゃ', desc: '30にち れんぞくで あそぶ', check: s => s.dailyStreak >= 30 },
  // s.bossesDefeated : 倒したボスIDの配列
  { id: 'boss_slimeKing', icon: '🐌', name: 'スライムキングたおした！', desc: 'スライムキングを たおす', check: s => s.bossesDefeated.includes('slimeKing') },
  { id: 'boss_wolfKing', icon: '🐺', name: 'オオカミだいまおうたおした！', desc: 'オオカミだいまおうを たおす', check: s => s.bossesDefeated.includes('wolfKing') },
  { id: 'boss_dragon', icon: '🐲', name: 'ドラゴンたおした！', desc: 'ドラゴンを たおす', check: s => s.bossesDefeated.includes('dragon') },
  { id: 'boss_wordKing', icon: '👑', name: 'ことばのおうたおした！', desc: 'ことばのおうを たおす', check: s => s.bossesDefeated.includes('wordKing') },
];

// 端末のローカル日付を 'YYYY-MM-DD' で返す
function todayKey(date = new Date()) {
  const pad = n => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

// 'YYYY-MM-DD' を通し日数に変換（日付の差を数えるため）
function dayNumber(key) {
  const [y, m, d] = String(key).split('-').map(Number);
  return Math.round(Date.UTC(y, m - 1, d) / 86400000);
}

// 最後に遊んだ日と今日から、新しい連続プレイ日数を返す
function nextDailyStreak(lastKey, streak, today) {
  if (!lastKey) return 1;
  const diff = dayNumber(today) - dayNumber(lastKey);
  if (!Number.isFinite(diff)) return 1; // 日付が壊れているときは数え直す
  if (diff <= 0) return Math.max(1, streak); // 同じ日（時計が戻った場合も維持）
  if (diff === 1) return streak + 1;
  return 1;
}

// まだ持っていなくて、条件を満たしたバッジを返す（重複取得を防ぐ）
function findNewBadges(s) {
  return BADGE_DEFS.filter(b => !s.badges.includes(b.id) && b.check(s));
}
