function solution(s) {
    let count = 0; // 변환 횟수
    let removedZeros = 0; // 제거된 0의 개수

    while (s !== "1") {
        const zeros = s.match(/0/g)?.length || 0;
        removedZeros += zeros;

        s = s.replace(/0/g, ""); // 0 제거
        s = s.length.toString(2); // 길이 → 2진수 문자열

        count++;
    }

    return [count, removedZeros];
}
