function solution(arr) {
    let answer = [];
    let prev = null;

    for (let num of arr) {
        if (num !== prev) {
            answer.push(num);
            prev = num;
        }
    }

    return answer;
}
