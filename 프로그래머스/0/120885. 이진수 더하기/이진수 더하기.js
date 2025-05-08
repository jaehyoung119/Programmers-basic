function solution(bin1, bin2) {
    let new1 = parseInt(bin1,2);
    let new2 = parseInt(bin2,2);
    
    let sum = new1 + new2;
    
    return sum.toString(2);
}