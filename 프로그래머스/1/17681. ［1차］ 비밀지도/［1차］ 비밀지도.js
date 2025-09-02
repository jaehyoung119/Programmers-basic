function solution(n, arr1, arr2) {
    const answer = [];

    for (let i = 0; i < n; i++) {
        const merged = arr1[i] | arr2[i]; // OR 연산
        let binary = merged.toString(2).padStart(n, '0'); // 이진수 변환 + 자리수 맞추기
        let line = binary.replace(/1/g, '#').replace(/0/g, ' '); // 변환

        answer.push(line);
    }

    return answer;
}
