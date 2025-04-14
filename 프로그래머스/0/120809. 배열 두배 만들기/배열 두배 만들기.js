function solution(numbers) {
    const isValid =
        Array.isArray(numbers) &&
        numbers.length >= 1 && numbers.length <= 1000 &&
        numbers.every((n) => n >= -10000 && n <= 10000);

    if (!isValid) {
        return [];
    }

    return numbers.map(n => n * 2);
}
