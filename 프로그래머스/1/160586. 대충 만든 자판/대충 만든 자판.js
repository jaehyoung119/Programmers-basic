function solution(keymap, targets) {
  const map = new Map();

  // 각 알파벳의 최소 누름 횟수 저장
  for (const key of keymap) {
    for (let i = 0; i < key.length; i++) {
      const ch = key[i];
      if (!map.has(ch) || map.get(ch) > i + 1) {
        map.set(ch, i + 1);
      }
    }
  }

  const result = [];

  for (const target of targets) {
    let sum = 0;
    let possible = true;

    for (const ch of target) {
      if (!map.has(ch)) {
        possible = false;
        break;
      }
      sum += map.get(ch);
    }

    result.push(possible ? sum : -1);
  }

  return result;
}
