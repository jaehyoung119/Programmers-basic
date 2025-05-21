function solution(my_string, index_list) {
    let result = []
    for(let num of index_list) {
        result.push(my_string[num])
    }
    return result.join("")
}