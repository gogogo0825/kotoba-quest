// ===== ローマ字の別綴り（si/shi など）を許容する入力判定 =====
// app.js より先に読み込む。画面や保存には触れない。
// word.romaji は「表示・ヒント用の基本の綴り」。ここから別綴りも作って、どれで打っても正解にする。
const ROMAJI_BASE = {
  あ: ['a'], い: ['i'], う: ['u'], え: ['e'], お: ['o'],
  か: ['ka'], き: ['ki'], く: ['ku'], け: ['ke'], こ: ['ko'],
  さ: ['sa'], し: ['shi', 'si'], す: ['su'], せ: ['se'], そ: ['so'],
  た: ['ta'], ち: ['chi', 'ti'], つ: ['tsu', 'tu'], て: ['te'], と: ['to'],
  な: ['na'], に: ['ni'], ぬ: ['nu'], ね: ['ne'], の: ['no'],
  は: ['ha'], ひ: ['hi'], ふ: ['fu', 'hu'], へ: ['he'], ほ: ['ho'],
  ま: ['ma'], み: ['mi'], む: ['mu'], め: ['me'], も: ['mo'],
  や: ['ya'], ゆ: ['yu'], よ: ['yo'],
  ら: ['ra'], り: ['ri'], る: ['ru'], れ: ['re'], ろ: ['ro'],
  わ: ['wa'], を: ['wo'],
  が: ['ga'], ぎ: ['gi'], ぐ: ['gu'], げ: ['ge'], ご: ['go'],
  ざ: ['za'], じ: ['ji', 'zi'], ず: ['zu'], ぜ: ['ze'], ぞ: ['zo'],
  だ: ['da'], ぢ: ['di'], づ: ['du'], で: ['de'], ど: ['do'],
  ば: ['ba'], び: ['bi'], ぶ: ['bu'], べ: ['be'], ぼ: ['bo'],
  ぱ: ['pa'], ぴ: ['pi'], ぷ: ['pu'], ぺ: ['pe'], ぽ: ['po'],
};
// 「き＋ゃ」のような小さい文字の前につく子音（し・ち・じ は別綴りあり）
const ROMAJI_YOON_HEAD = {
  き: ['ky'], ぎ: ['gy'], し: ['sh', 'sy'], じ: ['j', 'zy', 'jy'], ち: ['ch', 'ty', 'cy'],
  に: ['ny'], ひ: ['hy'], び: ['by'], ぴ: ['py'], み: ['my'], り: ['ry'],
};
const ROMAJI_SMALL = { ゃ: 'a', ゅ: 'u', ょ: 'o' };
const ROMAJI_MAX_VARIANTS = 24; // 組み合わせが増えすぎないようにする上限
const romajiVariantCache = new Map();

// かなを「音の単位」に分ける。分けられない文字があれば null
function parseKana(kana) {
  const chars = Array.from(kana), tokens = [];
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i], next = chars[i + 1];
    if (c === 'っ') tokens.push({ type: 'sokuon' });
    else if (c === 'ん') tokens.push({ type: 'n' });
    else if (c === 'ー') tokens.push({ type: 'long' });
    else if (ROMAJI_YOON_HEAD[c] && ROMAJI_SMALL[next]) {
      tokens.push({ type: 'syll', opts: ROMAJI_YOON_HEAD[c].map(h => h + ROMAJI_SMALL[next]) });
      i++;
    } else if (ROMAJI_BASE[c]) tokens.push({ type: 'syll', opts: ROMAJI_BASE[c] });
    else return null;
  }
  return tokens;
}

// かなから、受け付ける綴りをすべて作る
function expandRomaji(kana) {
  const tokens = parseKana(kana);
  if (!tokens) return [];
  let results = [''], double = false;
  tokens.forEach((token, i) => {
    let options;
    if (token.type === 'sokuon') { double = true; return; }
    if (token.type === 'n') {
      const next = tokens[i + 1];
      const needsDouble = next && (next.type === 'syll' ? /^[aiueoyn]/.test(next.opts[0]) : false);
      options = needsDouble ? ['nn'] : ['n', 'nn'];
    } else if (token.type === 'long') {
      results = results.map(r => r + r.slice(-1)); // のばす音は直前の母音をくり返す
      return;
    } else {
      options = token.opts;
      if (double) options = options.map(o => (o.startsWith('ch') ? 't' : o[0]) + o);
    }
    double = false;
    results = results.flatMap(r => options.map(o => r + o)).slice(0, ROMAJI_MAX_VARIANTS);
  });
  return results;
}

// word の受け付ける綴り一覧（基本の綴りが先頭）
function romajiVariants(word) {
  if (!romajiVariantCache.has(word.kana)) {
    const rest = expandRomaji(word.kana).filter(v => v !== word.romaji);
    romajiVariantCache.set(word.kana, [word.romaji, ...rest]);
  }
  return romajiVariantCache.get(word.kana);
}

// 入力途中の文字列に合う綴り（なければ null）。ヒントの次のキーもここから決める
function matchRomaji(word, typed) {
  return romajiVariants(word).find(v => v.startsWith(typed)) || null;
}
// どの綴りでも先頭から合っている長さの最大値（ミスしたキーを取り除くため）
function matchedLength(word, typed) {
  return Math.max(...romajiVariants(word).map(v => {
    let n = 0;
    while (n < typed.length && typed[n] === v[n]) n++;
    return n;
  }));
}
// どれかの綴りを打ちきったか
function isRomajiComplete(word, typed) {
  return romajiVariants(word).includes(typed);
}
