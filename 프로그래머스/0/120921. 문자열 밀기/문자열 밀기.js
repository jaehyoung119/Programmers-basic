function solution(A, B) {
  let arrayA = A.split("");

  for (let i = 0; i < A.length; i++) {
    if (arrayA.join("") === B) return i;

    const last = arrayA.pop();
    arrayA.unshift(last);
  }

  return -1; 
}
