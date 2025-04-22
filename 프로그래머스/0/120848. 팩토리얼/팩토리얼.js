function solution(n) {
  let factorial = 1;
  let i = 1;

  while (true) {
    factorial *= i;
    if (factorial > n) break;
    i++;
  }

  return i - 1;
}
