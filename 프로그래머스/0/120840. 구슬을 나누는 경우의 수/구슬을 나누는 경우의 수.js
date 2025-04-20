function solution(balls, share) {
  function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  const answer = factorial(balls) / (factorial(share) * factorial(balls - share));
  return Math.round(answer); 
}
