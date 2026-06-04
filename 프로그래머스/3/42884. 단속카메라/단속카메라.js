function solution(routes) {
  // 진출 지점 기준 오름차순 정렬
  routes.sort((a, b) => a[1] - b[1]);

  let camera = -30001;
  let count = 0;

  for (const [start, end] of routes) {
    // 현재 카메라가 이 차량 구간에 없으면 새 카메라 설치
    if (camera < start) {
      camera = end;
      count++;
    }
  }

  return count;
}