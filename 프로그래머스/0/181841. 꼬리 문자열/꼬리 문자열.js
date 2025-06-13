function solution(str_list, ex) {
    let result = ""
    
    for(let char of str_list) {
        if(!char.includes(ex)) {
            result += char
        }
    }
    
    return result;
}