function solution(N, stages) {
  const result = [];
  let users = stages.length;

  for (let stage = 1; stage <= N; stage++) {
    const fail = stages.filter(s => s === stage).length;
    const failRate = users === 0 ? 0 : fail / users;

    result.push([stage, failRate]);
    users -= fail;
  }

  result.sort((a, b) => {
    if (b[1] === a[1]) return a[0] - b[0];
    return b[1] - a[1];
  });

  return result.map(v => v[0]);
}
