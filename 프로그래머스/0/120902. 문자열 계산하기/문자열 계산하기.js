function solution(my_string) {
    const arr = my_string.split(" ");
    let result = Number(arr[0]);
    
    for(i=1; i <= arr.length; i += 2) {
        let operator = arr[i];
        let nextNum = Number(arr[i+1]);
        if(operator === "+") {
            result += nextNum;
        } else if(operator === "-") {
            result -= nextNum;
        }
    }
     return result
}