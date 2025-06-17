function solution(n) {
    const answer = Array.from({ length: n }, () => Array(n).fill(0));

    let dx = [0, 1, 0, -1];  // 오른, 아래, 왼, 위
    let dy = [1, 0, -1, 0];

    let x = 0, y = 0, dir = 0;

    for (let i = 1; i <= n * n; i++) {
        answer[x][y] = i;

        // 다음 위치 미리 계산
        let nx = x + dx[dir];
        let ny = y + dy[dir];

        // 경계 벗어나거나 이미 채워져 있다면 방향 전환
        if (nx < 0 || nx >= n || ny < 0 || ny >= n || answer[nx][ny] !== 0) {
            dir = (dir + 1) % 4;  // 방향 전환
            nx = x + dx[dir];
            ny = y + dy[dir];
        }

        x = nx;
        y = ny;
    }

    return answer;
}
