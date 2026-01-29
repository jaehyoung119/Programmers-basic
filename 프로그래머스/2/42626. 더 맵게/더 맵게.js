function solution(scoville, K) {
  // 최소 힙 구현
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    size() {
      return this.heap.length;
    }

    peek() {
      return this.heap[0];
    }

    push(value) {
      this.heap.push(value);
      this.bubbleUp();
    }

    pop() {
      if (this.size() === 1) return this.heap.pop();
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      return min;
    }

    bubbleUp() {
      let idx = this.size() - 1;
      while (idx > 0) {
        const parent = Math.floor((idx - 1) / 2);
        if (this.heap[parent] <= this.heap[idx]) break;
        [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
        idx = parent;
      }
    }

    bubbleDown() {
      let idx = 0;
      const length = this.size();
      while (true) {
        let left = idx * 2 + 1;
        let right = idx * 2 + 2;
        let smallest = idx;

        if (left < length && this.heap[left] < this.heap[smallest]) {
          smallest = left;
        }
        if (right < length && this.heap[right] < this.heap[smallest]) {
          smallest = right;
        }
        if (smallest === idx) break;

        [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
        idx = smallest;
      }
    }
  }

  const heap = new MinHeap();

  // 초기 힙 구성
  for (const s of scoville) {
    heap.push(s);
  }

  let count = 0;

  while (heap.size() >= 2 && heap.peek() < K) {
    const first = heap.pop();
    const second = heap.pop();
    const mixed = first + second * 2;
    heap.push(mixed);
    count++;
  }

  return heap.peek() >= K ? count : -1;
}
