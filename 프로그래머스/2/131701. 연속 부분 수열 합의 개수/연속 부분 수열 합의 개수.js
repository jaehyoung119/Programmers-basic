function solution(elements) {
    const n = elements.length;
    const arr = elements.concat(elements); // 원형 수열 흉내
    const sums = new Set();

    for (let length = 1; length <= n; length++) {
        for (let start = 0; start < n; start++) {
            const slice = arr.slice(start, start + length);
            const sum = slice.reduce((a, b) => a + b, 0);
            sums.add(sum);
        }
    }

    return sums.size;
}
