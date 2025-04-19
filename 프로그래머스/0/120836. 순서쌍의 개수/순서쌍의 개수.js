function solution(n) {
    return Array.from({ length : n }, (v, i) => i + 1).filter( x => n % x === 0).length;
}