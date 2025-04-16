function solution(money) {
    const cofNum = Math.floor(money / 5500);
    const leftMoney = money % 5500;
    return [cofNum,leftMoney];
}