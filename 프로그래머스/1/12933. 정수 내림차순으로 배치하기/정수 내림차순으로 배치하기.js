function solution(n) {
    let arr = String(n).split("");
    
    return Number(arr.sort((a,b) => b - a).join(""));
}