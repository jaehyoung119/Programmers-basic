function solution(cards1, cards2, goal) {
    let i = 0, j = 0; // cards1, cards2의 인덱스 포인터

    for (let word of goal) {
        if (cards1[i] === word) {
            i++;
        } else if (cards2[j] === word) {
            j++;
        } else {
            return "No"; // 둘 다 아니면 만들 수 없음
        }
    }

    return "Yes";
}
