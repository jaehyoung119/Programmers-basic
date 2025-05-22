function solution(my_string) {
    let result = [];
    
    for(let i = 0; i < my_string.length; i++) {
        let sliced = my_string.slice(i, my_string.length+1)
        result.push(sliced)
    }
    
    return result.sort();
}