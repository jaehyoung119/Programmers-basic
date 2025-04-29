function solution(array) {
    return array
    .toString()
    .split("")
    .filter((char) => Number(char) === 7) 
    .length
}