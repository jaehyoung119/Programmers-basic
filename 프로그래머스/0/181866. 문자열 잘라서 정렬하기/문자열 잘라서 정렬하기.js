function solution(myString) {
    let arr = myString.split("x");
    let clean = arr.filter((char) => char !== "");
    
    return clean.sort();
}