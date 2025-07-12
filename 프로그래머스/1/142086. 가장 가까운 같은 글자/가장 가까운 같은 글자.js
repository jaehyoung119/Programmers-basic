function solution(s) {
    let result = [];
    let lastIndex = {};  // 문자의 마지막 등장 인덱스를 저장할 객체

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (lastIndex[char] === undefined) {
            result.push(-1);
        } else {
            result.push(i - lastIndex[char]);
        }

        lastIndex[char] = i;  // 현재 문자의 인덱스를 저장
    }

    return result;
}
