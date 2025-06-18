function solution(n)
{
    var answer = 0;

    for(let char of String(n)) {
        answer += Number(char)
    }
    console.log('Hello Javascript')

    return answer;
}