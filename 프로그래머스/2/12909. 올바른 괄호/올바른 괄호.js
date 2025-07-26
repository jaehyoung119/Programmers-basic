function solution(s) {
  let count = 0;
  for (let char of s) {
    if (char === '(') count++;
    else count--;

    if (count < 0) return false; // 닫는 괄호가 먼저 나왔다는 뜻
  }
  return count === 0;
}
