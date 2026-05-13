function solution(lottos, win_nums) {
  let zeroCount = 0;
  let matchCount = 0;

  for (const num of lottos) {
    if (num === 0) {
      zeroCount++;
    } else if (win_nums.includes(num)) {
      matchCount++;
    }
  }

  const getRank = (count) => {
    return count >= 2 ? 7 - count : 6;
  };

  const maxRank = getRank(matchCount + zeroCount);
  const minRank = getRank(matchCount);

  return [maxRank, minRank];
}
