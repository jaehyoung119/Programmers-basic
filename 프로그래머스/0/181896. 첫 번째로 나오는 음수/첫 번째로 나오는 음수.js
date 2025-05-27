function solution(num_list) {
    let result = []
    
    for(let num of num_list) {
        if(num < 0) {
            result.push(num_list.indexOf(num))
        }
    }
    
    if(result.length > 0) {
        return result[0]
    }
    return -1;
}