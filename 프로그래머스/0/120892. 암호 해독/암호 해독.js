function solution(cipher, code) {
    const answer = [];
    cipher
    .split("")
    .forEach((char, i) => {
        if((i+1) % code === 0) {
            answer.push(char);
        }
    })
    
    return answer.join("");
}