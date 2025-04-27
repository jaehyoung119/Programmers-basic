function solution(array) {
    const copy = [...array];
    copy.sort((a,b) => a - b);
    const max = copy[copy.length - 1];
    const index = array.indexOf(max);
    return [max, index];
}