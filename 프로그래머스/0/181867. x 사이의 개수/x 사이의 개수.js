function solution(myString) {
    let arr = myString.split("x");
    let result = [];
    
    for(let char of arr) {
        result.push(char.length);
    }
    
    return result;
}