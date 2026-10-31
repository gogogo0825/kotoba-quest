// ===== きょうのぼうけん（毎日の目標）=====
// app.js より先に読み込む。画面には触れず、日付ごとの進み具合だけを計算する。
const DAILY_GOAL = 10; // 1日にうつことばの数
const DAILY_BONUS_COINS = 20; // クリアしたときのコイン

// 今日の達成数（日付が変わっていれば0）
function dailyCount(s, today) {
  return s.dailyDate === today ? Math.min(s.dailyCount, DAILY_GOAL) : 0;
}
function dailyDone(s, today) {
  return s.dailyDate === today && s.dailyDone;
}

// 1ことば正解したときに呼ぶ。今日はじめて目標に届いたら true（スタンプを1つ増やす）
function advanceDaily(s, today) {
  if (s.dailyDate !== today) { s.dailyDate = today; s.dailyCount = 0; s.dailyDone = false; }
  s.dailyCount++;
  if (!s.dailyDone && s.dailyCount >= DAILY_GOAL) {
    s.dailyDone = true;
    s.stampDays++;
    return true;
  }
  return false;
}
