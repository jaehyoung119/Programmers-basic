function solution(x, n) {
    return Array(n).fill(0).map((_, i) => x * (i + 1));
}
