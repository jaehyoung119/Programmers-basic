function solution(numbers) {
  const result = Array(numbers.length).fill(-1);
  const stack = []; // 인덱스를 저장

  for (let i = 0; i < numbers.length; i++) {
    // 현재 값이 스택 top이 가리키는 값보다 크면
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      const idx = stack.pop();
      result[idx] = numbers[i];
    }
    stack.push(i);
  }

  return result;
}
