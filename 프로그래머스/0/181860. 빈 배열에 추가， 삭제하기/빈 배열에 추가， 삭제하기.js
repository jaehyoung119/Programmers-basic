function solution(arr, flag) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (flag[i]) {
            for (let j = 0; j < arr[i] * 2; j++) {
                result.push(arr[i]);
            }
        } else {
            for (let j = 0; j < arr[i]; j++) {
                result.pop();
            }
        }
    }

    return result;
}
