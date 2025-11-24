function solution(topping) {
    const left = new Set();
    const right = new Map();
    let result = 0;

    // 1. 전체 오른쪽 토핑 종류를 Map으로 세팅
    for (const t of topping) {
        right.set(t, (right.get(t) || 0) + 1);
    }

    // 2. 왼쪽으로 하나씩 이동
    for (const t of topping) {
        // 왼쪽에 추가
        left.add(t);

        // 오른쪽에서 제거
        right.set(t, right.get(t) - 1);
        if (right.get(t) === 0) right.delete(t);

        // 종류 수 비교
        if (left.size === right.size) {
            result++;
        }
    }

    return result;
}
