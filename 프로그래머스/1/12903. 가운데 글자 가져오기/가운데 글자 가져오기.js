function solution(s) {
    let result = "";
    
    if(s.length % 2 === 0) {
        result += s[s.length/2-1]
        result += s[s.length/2]
    } else {
        result = s[s.length/2-0.5]
    }
    
    return result;
}