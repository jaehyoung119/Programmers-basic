function solution(k, score) {
    let honor = [];
    let result = [];

    for (let i = 0; i < score.length; i++) {
        honor.push(score[i]);

        // 상위 k명만 유지
        honor.sort((a, b) => b - a); // 내림차순 정렬
        if (honor.length > k) {
            honor.pop(); // 가장 낮은 점수 제거
        }

        // 명예의 전당에서 가장 낮은 점수 = 마지막 요소
        result.push(honor[honor.length - 1]);
    }

    return result;
}
