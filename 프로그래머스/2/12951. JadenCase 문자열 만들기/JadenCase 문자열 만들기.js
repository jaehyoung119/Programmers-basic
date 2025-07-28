function solution(s) {
    let answer = "";
    let makeUpper = true;
    
    for(let char of s) {
        if(char === " ") {
            answer += char
            makeUpper = true;
        } else {
            answer += makeUpper ? char.toUpperCase() : char.toLowerCase()
            makeUpper = false;
        }
    }
    
    return answer;
}