function solution(numbers) {
    numbers.sort((a,b) => a-b);
    let minMax = numbers[0] * numbers[1];
    let maxMax = numbers[numbers.length-1] * numbers[numbers.length-2];
    if(minMax > maxMax) {
        return minMax;
    } else {
        return maxMax;
    }
}