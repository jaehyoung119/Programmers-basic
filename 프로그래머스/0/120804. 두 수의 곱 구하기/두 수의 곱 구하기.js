function solution(num1, num2) {
    const numRange = (n) => n >= 0 && n <= 100;
    if (numRange(num1) && numRange(num2)) {
        return num1 * num2;
    }
    return 0;
}