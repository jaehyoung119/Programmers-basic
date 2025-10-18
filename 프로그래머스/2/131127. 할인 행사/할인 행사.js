function solution(want, number, discount) {
    let count = 0;
    
    // 원하는 품목과 수량을 Map에 저장
    const wantMap = new Map();
    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }

    // 슬라이딩 윈도우로 10일씩 검사
    for (let i = 0; i <= discount.length - 10; i++) {
        const window = discount.slice(i, i + 10);
        const windowMap = new Map();

        // 현재 구간의 품목 수 세기
        for (let item of window) {
            windowMap.set(item, (windowMap.get(item) || 0) + 1);
        }

        // 수량 일치 여부 검사
        let matched = true;
        for (let [item, qty] of wantMap.entries()) {
            if (windowMap.get(item) !== qty) {
                matched = false;
                break;
            }
        }

        if (matched) count++;
    }

    return count;
}
