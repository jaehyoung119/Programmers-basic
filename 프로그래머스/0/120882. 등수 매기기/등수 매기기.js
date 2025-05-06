function solution(score) {
  // 1. 총점 배열 만들기
  const totalScores = score.map(([a, b]) => a + b);

  // 2. 총점을 내림차순 정렬한 배열 복사
  const sorted = [...totalScores].sort((a, b) => b - a);

  // 3. 원래 totalScores에서 등수를 매기기
  return totalScores.map(s => sorted.indexOf(s) + 1);
}
