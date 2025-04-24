function solution(my_string) {
    var answer = [];
    
    for (let char of my_string) {
        if(!answer.includes(char)) {
            answer.push(char);
        }
    }
    
    return answer.join('');
}