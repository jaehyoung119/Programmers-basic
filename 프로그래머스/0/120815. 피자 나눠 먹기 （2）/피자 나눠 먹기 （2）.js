function solution(n) {
    const gcd = (a,b) => b === 0? a : gcd(b,a%b);
    const lcm = (n * 6) / gcd(n, 6);
    return lcm/6;
}