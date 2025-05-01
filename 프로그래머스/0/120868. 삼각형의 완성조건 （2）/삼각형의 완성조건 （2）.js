function solution(sides) {
    sides.sort((a,b) => a - b);
    let arr = [];  

    for(let i = 1; i <= sides[1]; i++) {
        if(sides[1] < i + sides[0]) {
            arr.push(i);
        }
    }
    for(let i = sides[1]+1; i < sides[0] + sides[1]; i++) {
        arr.push(i);
    }
    return arr.length;
}