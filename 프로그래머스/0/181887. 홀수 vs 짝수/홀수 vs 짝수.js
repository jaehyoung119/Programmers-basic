function solution(num_list) {
    let sum1 = 0;
    let sum2 = 0;
    
    for(let i = 0; i < num_list.length; i+=2) {
        sum1 += num_list[i]
    }
    
    for(let i = 1; i < num_list.length; i+=2) {
        sum2 += num_list[i]
    }
    
    if(sum1 > sum2) {
        return sum1;
    }
    
    return sum2;
}