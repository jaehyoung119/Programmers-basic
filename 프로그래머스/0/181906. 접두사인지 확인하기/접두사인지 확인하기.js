function solution(my_string, is_prefix) {
    let prefix = [];
    for(let i = 1; i <= my_string.length; i++) {
        prefix.push(my_string.slice(0, i))
    }
    if(prefix.includes(is_prefix)) {
        return 1;
    }
    return 0;
}