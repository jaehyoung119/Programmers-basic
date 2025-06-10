function solution(num_str) {
    let arr = num_str.split("");
    let result = 0;
    
    for(let char of arr) {
        result += Number(char)
    }
    
    return result;
}