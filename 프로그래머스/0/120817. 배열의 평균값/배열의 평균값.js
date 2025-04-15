function solution(numbers) {
  return numbers.reduce((result, acc) => result + acc, 0) / numbers.length;
}
