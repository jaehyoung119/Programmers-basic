function solution(num) {
    let result = 0;
    
    while(num !== 1) {
        if(num % 2 === 0) {
            num = num / 2;
            result++
        } else {
            num = num * 3 + 1
            result++
        }
    }
    
    if(result >= 500) return -1
    return result;
}