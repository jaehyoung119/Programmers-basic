function solution(order) {
    let count = 0;
    const gogo = [3,6,9];
    order
    .toString()
    .split("")
    .forEach((num) => {
       if(gogo.includes(Number(num))) {
          count += 1;
        }
    })
    return count;
}