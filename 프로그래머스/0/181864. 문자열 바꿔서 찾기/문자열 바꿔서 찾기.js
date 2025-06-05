function solution(myString, pat) {
    let string = "";
    
    for(let char of myString) {
        if(char === "A") {
            string += "B"
        } else {
            string += "A"
        }
    }
    
    if(string.includes(pat)) return 1;
    
    return 0;
}