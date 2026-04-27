function solution(dartResult) {
  const scores1 = [];
  let num = "";

  for (let i = 0; i < dartResult.length; i++) {
    const ch = dartResult[i];

    if (!isNaN(ch)) {
      num += ch; // 숫자 누적 (10 처리)
    } else {
      const score = Number(num);
      num = "";

      if (ch === "S") {
        scores1.push(score);
      } else if (ch === "D") {
        scores1.push(score ** 2);
      } else if (ch === "T") {
        scores1.push(score ** 3);
      } else if (ch === "*") {
        const last = scores1.length - 1;
        scores1[last] *= 2;
        if (last > 0) scores1[last - 1] *= 2;
      } else if (ch === "#") {
        scores1[scores1.length - 1] *= -1;
      }
    }
  }

  return scores1.reduce((a, b) => a + b, 0);
}
