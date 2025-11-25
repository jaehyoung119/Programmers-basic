function solution(k, m, score) {
    let result = 0;

    // 점수 높은 순으로 정렬
    score.sort((a, b) => b - a);

    // m개씩 상자를 만들 수 있을 때까지만 반복
    for (let i = 0; i + m <= score.length; i += m) {
        const box = score.slice(i, i + m);
        const min = box[box.length - 1]; // 가장 낮은 점수
        result += min * m;
    }

    return result;
}
