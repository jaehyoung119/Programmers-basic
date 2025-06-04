function solution(my_string) {
    let arr = my_string.split(" ");
    let result = [];
    
    for(let char of arr) {
        if(char) {
            result.push(char);
        }
    }
    
    return result;
}