function solution(numer1, denom1, numer2, denom2) {
     const num1 = denom1 * denom2; // 분모
     const num2 = denom1 * numer2 + denom2 * numer1; // 분자
     
     function gcd(a,b) {
         while(b !== 0) {
             [a,b] = [b,a % b];
         }
         return a;
     }
     const gcdNum = gcd(num1,num2);
     return [num2/gcdNum, num1/gcdNum];
}