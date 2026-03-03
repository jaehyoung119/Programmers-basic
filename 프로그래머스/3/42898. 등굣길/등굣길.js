function solution(m, n, puddles) {
  const MOD = 1000000007;

  // puddle[y][x] (1-based)
  const puddle = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));
  for (const [x, y] of puddles) puddle[y][x] = true;

  // dp[x] = 현재 행(y)에서 (x)까지 오는 경우의 수
  const dp = Array(m + 1).fill(0);
  dp[1] = puddle[1][1] ? 0 : 1;

  for (let y = 1; y <= n; y++) {
    for (let x = 1; x <= m; x++) {
      if (puddle[y][x]) {
        dp[x] = 0; // 웅덩이면 경로 끊기
      } else if (!(y === 1 && x === 1)) {
        // dp[x]는 위에서 내려온 값(이전 행의 dp[x])
        // dp[x-1]는 왼쪽에서 온 값(현재 행에서 갱신된 값)
        dp[x] = (dp[x] + dp[x - 1]) % MOD;
      }
    }
  }

  return dp[m];
}
