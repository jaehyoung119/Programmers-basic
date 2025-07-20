function solution(array, commands) {
    let result = [];
    
    for (let i = 0; i < commands.length; i++) {
        let [start, end, k] = commands[i];
        let sliced = array.slice(start - 1, end);
        let sorted = sliced.sort((a, b) => a - b);
        
        result.push(sorted[k - 1]); 
    }
    
    return result;
}
