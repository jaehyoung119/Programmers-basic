function solution(progresses, speeds) {
    const days = progresses.map((p, i) =>
        Math.ceil((100 - p) / speeds[i])
    );

    const result = [];
    let current = days[0];
    let count = 1;

    for (let i = 1; i < days.length; i++) {
        if (days[i] <= current) {
            count++;
        } else {
            result.push(count);
            current = days[i];
            count = 1;
        }
    }

    result.push(count); // 마지막 배포 수
    return result;
}
