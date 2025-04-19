function solution(numbers, num1, num2) {
    return numbers.filter((_, i) => i >= num1 && i <= num2);
}