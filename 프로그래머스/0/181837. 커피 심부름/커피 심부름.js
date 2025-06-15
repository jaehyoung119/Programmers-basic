function solution(order) {
    let result = 0;
    
    for(let char of order) {
        if(char.includes("americano")) {
            result += 4500
        } else if(char.includes("latte")) {
            result += 5000
        } else {
            result += 4500
        }
    }
    
    return result;
}