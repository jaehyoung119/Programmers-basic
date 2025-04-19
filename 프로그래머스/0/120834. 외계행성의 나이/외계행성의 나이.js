function solution(age) {
   return String(age).split('').map(n => String.fromCharCode(Number(n)+97)).join(''); 
}