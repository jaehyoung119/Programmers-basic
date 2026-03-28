function solution(s) {
  let answer = 0;
  let same = 0;
  let diff = 0;
  let x = "";

  for (let i = 0; i < s.length; i++) {
    if (x === "") x = s[i];

    if (s[i] === x) same++;
    else diff++;

    if (same === diff) {
      answer++;
      x = "";
      same = 0;
      diff = 0;
    }
  }

  if (x !== "") answer++;

  return answer;
}
