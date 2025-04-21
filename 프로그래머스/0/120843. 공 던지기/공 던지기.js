function solution(numbers, k) {
    const idx = ((k - 1) * 2) % numbers.length;
    return numbers[idx];
}