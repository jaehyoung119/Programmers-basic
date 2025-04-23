function solution(my_string) {
    return my_string.trim()
    .split("")
    .filter(char => !isNaN(char))
    .map(Number)
    .reduce((acc, cur) => acc + cur);
}