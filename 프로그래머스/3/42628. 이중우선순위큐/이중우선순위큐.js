function solution(operations) {
  const arr = [];

  for (const op of operations) {
    const [cmd, value] = op.split(" ");

    if (cmd === "I") {
      arr.push(Number(value));
      arr.sort((a, b) => a - b);
    } else if (cmd === "D" && arr.length) {
      if (value === "1") {
        // 최댓값 삭제
        arr.pop();
      } else if (value === "-1") {
        // 최솟값 삭제
        arr.shift();
      }
    }
  }

  if (arr.length === 0) return [0, 0];
  return [arr[arr.length - 1], arr[0]];
}
