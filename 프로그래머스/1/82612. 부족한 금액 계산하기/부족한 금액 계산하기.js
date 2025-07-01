function solution(price, money, count) {
    let playMoney = 0;
    
    for(let i = 1; i <= count; i++) {
        playMoney += i*price
    }
    
    if(playMoney > money) return playMoney - money
    return 0;
}