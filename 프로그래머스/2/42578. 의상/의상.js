function solution(clothes) {
    const map = {};

    // 1. 옷 종류별 개수 세기
    for (let [name, type] of clothes) {
        map[type] = (map[type] || 0) + 1;
    }

    // 2. 각 종류별 (입는 선택지 + 안 입는 선택지) 개수 곱하기
    let answer = 1;
    for (let type in map) {
        answer *= (map[type] + 1);
    }

    // 3. 아무것도 안 입은 경우 제외
    return answer - 1;
}
