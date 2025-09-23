function solution(k, tangerine) {
    const countMap = new Map();

    // 1. 귤 크기별 개수 세기
    for (let size of tangerine) {
        countMap.set(size, (countMap.get(size) || 0) + 1);
    }

    // 2. 개수 기준 내림차순 정렬
    const sorted = Array.from(countMap.values()).sort((a, b) => b - a);

    // 3. 누적 개수로 최소 종류 찾기
    let sum = 0;
    let kinds = 0;

    for (let count of sorted) {
        sum += count;
        kinds++;
        if (sum >= k) break;
    }

    return kinds;
}
