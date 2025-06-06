function solution(arr, k) {
    const unique = [...new Set(arr)];

    while (unique.length < k) {
        unique.push(-1);
    }

    return unique.slice(0, k);
}
