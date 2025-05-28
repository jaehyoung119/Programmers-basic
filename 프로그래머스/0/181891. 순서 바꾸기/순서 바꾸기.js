function solution(num_list, n) {
    let result = [];
    
    for(let i = n; i < num_list.length; i++) {
        result.push(num_list[i])
    }
    
    for(let i = 0; i < n; i++) {
        result.push(num_list[i])
    }
    
    return result;
}