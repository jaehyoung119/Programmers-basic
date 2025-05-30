function solution(myString, pat) {
    let str1 = myString.toUpperCase();
    let str2 = pat.toUpperCase();
    
    return str1.includes(str2) ? 1 : 0
}