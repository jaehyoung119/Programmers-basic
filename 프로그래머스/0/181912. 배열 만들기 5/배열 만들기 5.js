function solution(intStrs, k, s, l) {
    let result = []
    for(let char of intStrs) {
        let sliceStr = char.slice(s,s+l)
        if(Number(sliceStr > k)) {
            result.push(Number(sliceStr));
        }
    }
    return result;
}