function solution(nums) {
    const maxPick = nums.length / 2;
    const uniqueKinds = new Set(nums).size;
    return Math.min(uniqueKinds, maxPick);
}
