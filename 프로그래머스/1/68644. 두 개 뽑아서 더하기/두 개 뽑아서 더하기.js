function solution(numbers) {
    let result = [];
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(i !== j) {
                let answer = numbers[i] + numbers[j];
                if(!result.includes(answer)) result.push(answer);
            }
        }
    }
    
    return result.sort((a,b) => a - b);
}