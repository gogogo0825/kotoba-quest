// ===== ボス戦の定義と判定 =====
// app.js より先に読み込む。画面やlocalStorageには触れず、データと計算だけを持つ。
// ボスを増やすときは BOSS_DEFS に1行足すだけ（level はそのボスが現れるレベル）。
const BOSS_DEFS = [
  { id: 'slimeKing', icon: '🐌', name: 'スライムキング', level: 5, hp: 50 },
  { id: 'wolfKing', icon: '🐺', name: 'オオカミだいまおう', level: 10, hp: 100 },
  { id: 'dragon', icon: '🐲', name: 'ドラゴン', level: 15, hp: 150 },
  { id: 'wordKing', icon: '👑', name: 'ことばのおう', level: 20, hp: 250 },
];
const BOSS_REWARD = { xp: 100, coins: 100 }; // 撃破報酬

function getBoss(id) { return BOSS_DEFS.find(b => b.id === id) || null; }

// ダメージ = 3 + ことばの文字数
function bossDamage(kana) { return 3 + Array.from(kana).length; }

// いま挑戦できるボス（レベルが足りていて、まだ倒していない最初の1体）
function findPendingBoss(level, defeated) {
  return BOSS_DEFS.find(b => level >= b.level && !defeated.includes(b.id)) || null;
}

// 残りHPを 0〜最大 に収め、割合(%)も返す
function bossHpInfo(boss, hp) {
  const now = Math.max(0, Math.min(boss.hp, Number(hp) || 0));
  return { now, max: boss.hp, percent: Math.round(now / boss.hp * 100) };
}

// 保存データの bossFight を検証する。壊れていたら null
function normalizeBossFight(fight, defeated) {
  if (!fight || typeof fight !== 'object') return null;
  const boss = getBoss(fight.id);
  if (!boss || defeated.includes(boss.id)) return null;
  const hp = Math.floor(Number(fight.hp));
  if (!Number.isFinite(hp) || hp <= 0) return { id: boss.id, hp: boss.hp };
  return { id: boss.id, hp: Math.min(boss.hp, hp) };
}
