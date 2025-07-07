function solution(d, budget) {
    d.sort((a,b) => a - b);
    let result = 0;
    let count = 0;
    
    for(let num of d) {
        result += num
        count ++
        if(result > budget) {
            return count - 1;
        }
    }
    
    return count;
}