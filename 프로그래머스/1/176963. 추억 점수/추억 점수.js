function solution(name, yearning, photo) {
    const scoreMap = {};

    // 1. 이름 → 점수 매핑
    for (let i = 0; i < name.length; i++) {
        scoreMap[name[i]] = yearning[i];
    }

    // 2. 사진마다 점수 계산
    const result = photo.map(persons => {
        let sum = 0;
        for (let person of persons) {
            sum += scoreMap[person] || 0; // 없으면 0점
        }
        return sum;
    });

    return result;
}
