function solution(arr, queries) {
  let result = [];

  for (let [s, e, k] of queries) {
    // arr[s]부터 arr[e]까지 슬라이스
    const sub = arr.slice(s, e + 1);
    
    // k보다 큰 값만 필터링
    const filtered = sub.filter(num => num > k);
    
    // 가장 작은 값 or -1
    result.push(filtered.length > 0 ? Math.min(...filtered) : -1);
  }

  return result;
}
