function solution(my_string, indices) {
    let arr = my_string.split("");
    
    indices.sort((a, b) => b - a);
    
    for(let num of indices) {
        arr.splice(num, 1)
    }
    
    return arr.join("");
}