function solution(n, t, m, p) {
  let sequence = "";
  let num = 0;

  // 필요한 길이만큼 n진수 문자열 생성
  while (sequence.length < t * m) {
    sequence += num.toString(n).toUpperCase();
    num++;
  }

  // 튜브(p)가 말해야 할 문자만 추출
  let answer = "";
  for (let i = 0; i < t; i++) {
    answer += sequence[i * m + (p - 1)];
  }

  return answer;
}
