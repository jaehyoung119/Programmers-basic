function solution(my_string) {
    let arr = [...my_string].map((char) => {
        return !isNaN(char) && char !== " " ? char : " ";
    }).join("");
        
       return arr.split(" ")
        .filter((char) => char !== "")
        .map(Number)
        .reduce((acc,cur) => acc+cur, 0)
}