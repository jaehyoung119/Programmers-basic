function solution(number) {
    let narr = number.split("")
    let sum = 0;
    for(let char of narr) {
        sum += Number(char)
    }
    return sum % 9
}