function solution(array, n) {
    let mindiff = Math.abs(array[0] - n);
    let closest = array[0];
    array.forEach((numbers) => {
        let diff = Math.abs(numbers - n);
        
        if(diff < mindiff || 
           diff === mindiff && numbers < closest) {
            mindiff = diff;
            closest = numbers;
        } 
    })
    
    return closest;
}