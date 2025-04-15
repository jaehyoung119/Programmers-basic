function solution(array) {
    const count = {};

    for (let n of array) {
        count[n] = (count[n] || 0) + 1;
    }

    const max = Math.max(...Object.values(count));
    const candidates = Object.keys(count).filter(k => count[k] === max);

    return candidates.length === 1 ? Number(candidates[0]) : -1;
}
