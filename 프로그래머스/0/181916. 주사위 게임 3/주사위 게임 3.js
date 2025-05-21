function solution(a, b, c, d) {
  const arr = [a, b, c, d];
  const count = {};

  // 1. 각 숫자의 등장 횟수를 센다
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  const values = Object.keys(count).map(Number);
  const counts = Object.values(count);

  if (counts.length === 1) {
    // 4개 모두 같음
    return 1111 * values[0];
  } else if (counts.includes(3)) {
    // 3개 + 1개
    const p = values.find(v => count[v] === 3);
    const q = values.find(v => count[v] === 1);
    return (10 * p + q) ** 2;
  } else if (counts.length === 2 && counts[0] === 2 && counts[1] === 2) {
    // 2쌍
    return (values[0] + values[1]) * Math.abs(values[0] - values[1]);
  } else if (counts.includes(2)) {
    // 2개만 같음
    const other = values.filter(v => count[v] === 1);
    return other[0] * other[1];
  } else {
    // 전부 다름
    return Math.min(...arr);
  }
}
