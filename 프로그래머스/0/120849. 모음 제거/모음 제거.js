function solution(my_string) {
    const 모음 = ["a","e","i","o","u"]
    return my_string.split("").filter(char => !모음.includes(char)).join("");
}