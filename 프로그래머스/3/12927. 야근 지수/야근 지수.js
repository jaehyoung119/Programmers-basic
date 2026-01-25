function solution(n, works) {
  // 모든 작업량 합이 n보다 작거나 같으면 야근 지수는 0
  const sum = works.reduce((a, b) => a + b, 0);
  if (sum <= n) return 0;

  // 최대 힙을 흉내 내기 위해 내림차순 정렬
  works.sort((a, b) => b - a);

  while (n > 0) {
    // 가장 큰 작업량 감소
    works[0]--;
    n--;

    // 다시 정렬 (가장 큰 값 유지)
    let i = 0;
    while (i + 1 < works.length && works[i] < works[i + 1]) {
      [works[i], works[i + 1]] = [works[i + 1], works[i]];
      i++;
    }
  }

  // 야근 지수 계산
  return works.reduce((sum, w) => sum + w * w, 0);
}
