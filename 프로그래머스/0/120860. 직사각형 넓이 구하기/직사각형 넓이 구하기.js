function solution(dots) {
    const xArr = dots.map(([x, _]) => x);
    const yArr = dots.map(([_, y]) => y);
    
    const width = Math.max(...xArr) - Math.min(...xArr);
    const height = Math.max(...yArr) - Math.min(...yArr);
    
    return width * height;
}