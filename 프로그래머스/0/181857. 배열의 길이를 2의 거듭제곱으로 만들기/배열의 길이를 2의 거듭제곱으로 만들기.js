function solution(arr) {
    let a = 1;
    
    while(a < arr.length) {
        a *= 2
    }
    
    while(arr.length < a) {
        arr.push(0);
    }
    
    return arr;
}