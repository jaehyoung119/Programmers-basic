function solution(n, k) {
  // 소수 판별 함수
  function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 1️⃣ k진수로 변환
  const converted = n.toString(k);

  // 2️⃣ 0을 기준으로 분리
  const candidates = converted.split("0");

  // 3️⃣ 소수 개수 세기
  let count = 0;
  for (const c of candidates) {
    if (c === "") continue;
    if (isPrime(Number(c))) {
      count++;
    }
  }

  return count;
}
