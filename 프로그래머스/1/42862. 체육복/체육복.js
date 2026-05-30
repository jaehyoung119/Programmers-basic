function solution(n, lost, reserve) {
  const students = Array(n + 1).fill(1);

  lost.forEach(i => students[i]--);
  reserve.forEach(i => students[i]++);

  for (let i = 1; i <= n; i++) {
    if (students[i] === 0) {
      if (students[i - 1] === 2) {
        students[i - 1]--;
        students[i]++;
      } else if (students[i + 1] === 2) {
        students[i + 1]--;
        students[i]++;
      }
    }
  }

  return students.filter(v => v >= 1).length - 1;
}