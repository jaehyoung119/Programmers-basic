function solution(my_string, is_suffix) {
    let jubmi = [];
    
    for(let i = 0; i < my_string.length; i++) {
        jubmi.push(my_string.slice(i, my_string.length+1))
    }
    
    if(jubmi.includes(is_suffix)) {
        return 1
    }
    return 0
}