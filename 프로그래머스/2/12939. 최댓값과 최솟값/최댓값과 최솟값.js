function solution(s) {
    const nums = s.split(' ').map(Number); // 문자열 → 숫자 배열
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    return `${min} ${max}`; // 문자열로 반환
}
