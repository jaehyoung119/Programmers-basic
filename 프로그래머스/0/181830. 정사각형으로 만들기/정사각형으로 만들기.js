function solution(arr) {
    const size = Math.max(arr.length, arr[0].length); 

    for (let row of arr) {
        while (row.length < size) {
            row.push(0);
        }
    }

    while (arr.length < size) {
        arr.push(Array(size).fill(0));  
    }

    return arr;
}
