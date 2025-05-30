function solution(arr) {
    let result = [];
    
    for(let num of arr) {
        if(num >= 50 && num % 2 === 0) {
            result.push(num/2);
        } else if(num < 50 && num % 2 !== 0) {
            result.push(num*2);
        } else {
            result.push(num);
        }
    }
    
    return result;
}