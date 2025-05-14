function solution(a, b) {
    let ab = String(a) + String(b);
    return Number(ab) >= 2 * a * b ? Number(ab) : 2 * a * b; 
}