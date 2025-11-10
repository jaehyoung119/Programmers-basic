function solution(s) {
    // 1. 문자열 처리
    const arr = s
        .slice(2, -2) // 맨 앞 "{{" 와 맨 뒤 "}}" 제거
        .split("},{") // 각 집합 나누기
        .map(str => str.split(',').map(Number)); // 숫자 배열로 변환

    // 2. 길이 기준 정렬 (원소 적은 것부터)
    arr.sort((a, b) => a.length - b.length);

    const answer = [];
    const seen = new Set();

    // 3. 순서대로 돌면서 새로운 숫자만 추가
    for (let group of arr) {
        for (let num of group) {
            if (!seen.has(num)) {
                seen.add(num);
                answer.push(num);
            }
        }
    }

    return answer;
}
