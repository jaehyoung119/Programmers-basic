function solution(my_string, m, c) {
    let arr = [];
    let result = [];
    
    for(let i = 0; i <= my_string.length; i+=m) {
        arr.push(my_string.slice(i, i+m));
    }
    
    for(let char of arr) {
        let split = char.split("");
        result.push(split[c-1]);
    }
    
    return result.join("");
}