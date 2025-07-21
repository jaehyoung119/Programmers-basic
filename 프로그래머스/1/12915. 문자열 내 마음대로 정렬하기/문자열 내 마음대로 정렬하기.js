function solution(strings, n) {
    let compare = [];

    for (let i = 0; i < strings.length; i++) {
        compare.push([i, strings[i][n]]);
    }

    // n번째 글자 기준으로 정렬, 같으면 사전순 비교
    compare.sort((a, b) => {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        // n번째 문자가 같으면 원래 문자열 사전순으로 비교
        return strings[a[0]].localeCompare(strings[b[0]]);
    });

    // 인덱스를 통해 원래 문자열 배열에서 꺼내기
    return compare.map(([i]) => strings[i]);
}
