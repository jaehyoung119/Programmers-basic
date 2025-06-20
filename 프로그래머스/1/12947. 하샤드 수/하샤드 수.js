function solution(x) {
    let sum = 0;

    for (let digit of String(x)) {
        sum += Number(digit);
    }

    return x % sum === 0;
}
