function solution(number, limit, power) {
    let total = 0;

    for (let i = 1; i <= number; i++) {
        let count = 0;

        // 약수 개수 구하기 (효율적 방식)
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                count += (j * j === i) ? 1 : 2;
            }
        }

        total += (count > limit) ? power : count;
    }

    return total;
}
