function solution(num, k) {
  const arr = num.toString().split(""); 
  const index = arr.indexOf(k.toString()); 

  return index === -1 ? -1 : index + 1; 
}
