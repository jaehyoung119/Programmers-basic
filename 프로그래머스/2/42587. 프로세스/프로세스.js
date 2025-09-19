function solution(priorities, location) {
    const queue = priorities.map((p, i) => [i, p]);
    let count = 0;

    while (queue.length) {
        const [idx, priority] = queue.shift();

        if (queue.some(([_, p]) => p > priority)) {
            queue.push([idx, priority]);  // 다시 뒤로
        } else {
            count++;
            if (idx === location) {
                return count;
            }
        }
    }
}
