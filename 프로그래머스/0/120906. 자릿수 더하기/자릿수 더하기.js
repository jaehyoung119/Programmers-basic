function solution(n) {
    let answer = 0;
    let arr = n.toString().split("");
    for(let i=1; i<=arr.length; i++) {
        answer += Number(arr[i-1]);
    }
    return answer;
}