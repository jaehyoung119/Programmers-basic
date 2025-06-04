function solution(strArr) {
    let result = [];
    for(let char of strArr) {
        if(!char.includes("ad")) {
            result.push(char);
        }
    }
    
    return result;
}