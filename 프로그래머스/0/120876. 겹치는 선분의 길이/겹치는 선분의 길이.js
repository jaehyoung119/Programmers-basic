function solution(lines) {
  const [a, b, c] = lines;

  const toRange = ([start, end]) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  const merged = [...toRange(a), ...toRange(b), ...toRange(c)];

  const countMap = {};
  for (let n of merged) {
    countMap[n] = (countMap[n] || 0) + 1;
  }

  return Object.values(countMap).filter(count => count >= 2).length;
}
