function solution(i, j, k) {
    let array = Array.from({ length: j-i+1 }, (_, idx) => idx + i);
    let sArray = array.map(String);
    let newSArray = sArray.join("").split("");
    let answer = 0;
    for(let word of newSArray) {
        if(word === k.toString()) answer++;
    };
    return answer;
}