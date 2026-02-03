function solution(msg) {
  const dict = new Map();
  let dictIndex = 1;

  // 1️⃣ 사전 초기화 (A~Z)
  for (let i = 65; i <= 90; i++) {
    dict.set(String.fromCharCode(i), dictIndex++);
  }

  const result = [];
  let i = 0;

  while (i < msg.length) {
    let w = msg[i];
    let j = i + 1;

    // 2️⃣ 사전에 있는 가장 긴 문자열 찾기
    while (j <= msg.length && dict.has(msg.slice(i, j))) {
      w = msg.slice(i, j);
      j++;
    }

    // 3️⃣ 출력
    result.push(dict.get(w));

    // 4️⃣ 사전에 새 문자열 추가 (범위 체크 중요)
    if (j <= msg.length) {
      dict.set(msg.slice(i, j), dictIndex++);
    }

    // 5️⃣ 포인터 이동
    i += w.length;
  }

  return result;
}
