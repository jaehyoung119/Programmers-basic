function solution(n, m, section) {
    let answer = 0;
    let paintedUntil = 0;

    for (let i = 0; i < section.length; i++) {
        const point = section[i];

        // 이미 칠해진 범위라면 넘김
        if (point <= paintedUntil) continue;

        // 새로 칠하기
        answer++;
        paintedUntil = point + m - 1;  // 롤러로 m칸 칠함
    }

    return answer;
}
