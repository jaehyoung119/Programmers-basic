function solution(n, a, b) {
    let round = 1;

    while (true) {
        // 두 사람이 붙는 조건: Math.abs(a - b) === 1 && Math.max(a, b) % 2 === 0
        if (Math.ceil(a / 2) === Math.ceil(b / 2)) {
            return round;
        }

        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        round++;
    }
}
