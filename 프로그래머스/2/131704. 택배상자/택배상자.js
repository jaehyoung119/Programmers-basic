function solution(order) {
  const stack = [];
  let idx = 0;

  for (let box = 1; box <= order.length; box++) {
    // 일단 메인 컨테이너에서 box를 꺼내서 보조 컨테이너로 보냄(스택에 push)
    stack.push(box);

    // 보조 컨테이너 top이 원하는 순서면 계속 꺼내서 트럭에 실음
    while (stack.length && stack[stack.length - 1] === order[idx]) {
      stack.pop();
      idx++;
    }
  }

  return idx;
}
