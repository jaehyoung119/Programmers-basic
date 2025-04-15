function solution(array) {
    array.sort((a,b) => a - b);
    const midNum = Math.floor(array.length / 2);
    return array[midNum];
}