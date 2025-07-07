function solution(n) {
    const ternary = n.toString(3);      
    const reversed = ternary.split('').reverse().join(''); 
    return parseInt(reversed, 3);        
}
