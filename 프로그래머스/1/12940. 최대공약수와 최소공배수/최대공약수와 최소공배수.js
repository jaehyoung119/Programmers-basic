function solution(n, m) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    const maxN = gcd(n, m);
    const minN = (n * m) / maxN;

    return [maxN, minN];
}
