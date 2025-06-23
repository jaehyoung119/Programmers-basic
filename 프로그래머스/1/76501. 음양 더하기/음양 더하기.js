function solution(absolutes, signs) {
    let falseIndex = [];
    let result = 0;
    
    for(let i = 0; i < signs.length; i++) {
        if(!signs[i]) {
            falseIndex.push(i);
        }
    }
    
    for(let num of falseIndex) {
        absolutes[num] = -absolutes[num]
    }
    
    for(let num of absolutes) {
        result += num
    }
    
    return result;
}