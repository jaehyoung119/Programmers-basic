function solution(my_string) {
    const result = new Array(52).fill(0);

    for (let char of my_string) {
        const code = char.charCodeAt();

        if (code >= 65 && code <= 90) {
            // 대문자 A~Z: 0~25
            result[code - 65]++;
        } else if (code >= 97 && code <= 122) {
            // 소문자 a~z: 26~51
            result[code - 97 + 26]++;
        }
    }

    return result;
}
