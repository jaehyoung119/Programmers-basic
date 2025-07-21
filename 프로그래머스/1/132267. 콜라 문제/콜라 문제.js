function solution(a, b, n) {
    let count = 0;
    
    while (n >= a) {
        const exchanged = Math.floor(n / a) * b;
        count += exchanged;
        n = Math.floor(n / a) * b + (n % a); // 남은 병 = 교환하고 생긴 병 + 나머지
    }
    
    return count;
}
