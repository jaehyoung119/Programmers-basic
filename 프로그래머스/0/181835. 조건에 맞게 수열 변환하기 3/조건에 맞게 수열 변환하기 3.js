function solution(arr, k) {
    let result = []
    
    if(k % 2 !== 0) {
        for(let num of arr) {
            result.push(num * k)
        }
    } else {
        for(let num of arr) {
            result.push(num + k)
        }
    }
    
    return result
}