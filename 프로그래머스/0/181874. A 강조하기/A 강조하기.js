function solution(myString) {
    let result = ""
    
    for(let char of myString) {
        if(char === "a") {
            result += char.toUpperCase()
        } else if(char.charCodeAt() > 65 && char.charCodeAt() <= 90) {
            result += char.toLowerCase()
        } else {
            result += char
        }
    }
    
    return result;
}