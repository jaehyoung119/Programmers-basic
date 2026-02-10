function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const visited = Array(words.length).fill(false);
  const queue = [[begin, 0]]; // [현재 단어, 변환 횟수]

  // 한 글자만 다른지 체크
  function canConvert(a, b) {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) diff++;
      if (diff > 1) return false;
    }
    return diff === 1;
  }

  while (queue.length) {
    const [current, count] = queue.shift();

    if (current === target) return count;

    for (let i = 0; i < words.length; i++) {
      if (!visited[i] && canConvert(current, words[i])) {
        visited[i] = true;
        queue.push([words[i], count + 1]);
      }
    }
  }

  return 0;
}
