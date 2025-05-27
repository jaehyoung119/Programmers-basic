function solution(arr, intervals) {
    let result = [];
    
    for(let numarr of intervals) {
        for(let i = numarr[0]; i <= numarr[1]; i++) {
             result.push(arr[i])
        }
    }
    
    return result;
}