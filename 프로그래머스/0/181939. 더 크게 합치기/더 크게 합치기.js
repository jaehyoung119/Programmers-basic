function solution(a, b) {
    let ab = String(a) + String(b);
    let ba = String(b) + String(a);
    
    return Number(ab) > Number(ba) ? Number(ab) : Number(ba)
}