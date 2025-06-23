function solution(arr, divisor) {
    let result = [];
    
    for(let num of arr) {
        if(num % divisor === 0) {
            result.push(num);
        }
    }
    
    if(result.length > 0) return result.sort((a,b) =>a-b);
    return[-1];
}