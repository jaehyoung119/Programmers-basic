function solution(n) {
    let battery = 0;

    while (n > 0) {
        if (n % 2 === 0) {
            n = n / 2; // 순간이동 (무료)
        } else {
            n -= 1;    // 점프 (건전지 +1)
            battery++;
        }
    }

    return battery;
}
