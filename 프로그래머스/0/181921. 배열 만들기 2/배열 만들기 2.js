function solution(l, r) {
  let result = [];

  for (let i = l; i <= r; i++) {
    const istring = i.toString();
    if ([...istring].every(char => char === '0' || char === '5')) {
      result.push(i);
    }
  }

  return result.length ? result : [-1];
}
