function solution(s, skip, index) {
  const skipSet = new Set(skip);
  let answer = "";

  for (const ch of s) {
    let count = 0;
    let code = ch.charCodeAt(0);

    while (count < index) {
      code++;
      if (code > 122) code = 97; // z 다음은 a

      const nextChar = String.fromCharCode(code);
      if (!skipSet.has(nextChar)) {
        count++;
      }
    }

    answer += String.fromCharCode(code);
  }

  return answer;
}
