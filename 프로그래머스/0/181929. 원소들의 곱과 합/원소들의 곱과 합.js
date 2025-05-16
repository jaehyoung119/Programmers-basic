function solution(num_list) {
    let sum = num_list.reduce((a,b) => a+b,0);
    let multi = 1;
    for(let i=0; i < num_list.length; i++) {
        multi = num_list[i] * multi
    }
    if(sum*sum > multi) return 1;
    return 0;
}