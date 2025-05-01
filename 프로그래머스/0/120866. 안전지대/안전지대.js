function solution(board) {
  const n = board.length;
  const danger = Array.from({ length: n }, () => Array(n).fill(0));

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (board[y][x] === 1) {
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const ny = y + dy;
            const nx = x + dx;
            if (ny >= 0 && ny < n && nx >= 0 && nx < n) {
              danger[ny][nx] = 1;
            }
          }
        }
      }
    }
  }

  let count = 0;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (danger[y][x] === 0) count++;
    }
  }

  return count;
}
