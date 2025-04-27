function solution(s1, s2) {
    let result = 0;
    s1.forEach((char) => {
        if(s2.includes(char)) {
            result += 1
        }
    })
    return result;
}