function solution(arr) {
    let twoArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            twoArr.push(i);
        }
    }
    
    switch(twoArr.length) {
        case 0 :
            return [-1];
        case 1 :
            return [2];
        default :
            return arr.slice(twoArr[0], twoArr[twoArr.length-1]+1);
    }
}