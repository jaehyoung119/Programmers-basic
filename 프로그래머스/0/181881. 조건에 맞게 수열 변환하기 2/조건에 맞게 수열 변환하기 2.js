function solution(arr) {
    let count = 0;

    while (true) {
        const prev = [...arr];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 50 && arr[i] % 2 === 0) {
                arr[i] /= 2;
            } else if (arr[i] < 50 && arr[i] % 2 !== 0) {
                arr[i] = arr[i] * 2 + 1;
            }
        }

        const isSame = arr.every((v, i) => v === prev[i]);
        if (isSame) break;

        count++;
    }

    return count;
}
