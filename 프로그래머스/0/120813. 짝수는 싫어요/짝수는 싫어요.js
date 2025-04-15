function solution(n) {
   let result = [];
    
    for(i = 1; 2 * i - 1 <= n; i++) {
        result.push(2*i-1);
    }
    
    return result;
}