function solution(hp) {
    let count = 0;
    let powers = [5, 3, 1];
    for (let power of powers) {
        count += Math.floor(hp/power);
        hp %= power;
    }
    return count;
}