function solution(myString) {
    let result = ""
    
    for(let char of myString) {
        if(char < "l") {
            result += "l"
        } else {
            result += char
        }
    }
    
    return result
}