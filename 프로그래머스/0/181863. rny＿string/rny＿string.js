function solution(rny_string) {
    let string = rny_string.split("")
                .map((char) => char === "m" ? "rn" : char)
                .join("")
    
    return string;
}