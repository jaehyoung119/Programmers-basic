function solution(n) {
  return Array.from({ length: n }, (_, i) => i + 1)
              .filter(num => num % 2 === 0)
              .reduce((acc, cur) => acc + cur, 0);
}
