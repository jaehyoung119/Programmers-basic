function solution(str1, str2) {
    const makeMultiset = (str) => {
        str = str.toLowerCase();
        const multiset = [];

        for (let i = 0; i < str.length - 1; i++) {
            const pair = str[i] + str[i + 1];
            if (pair.match(/^[a-z]{2}$/)) {
                multiset.push(pair);
            }
        }

        return multiset;
    };

    const A = makeMultiset(str1);
    const B = makeMultiset(str2);

    const intersection = [];
    const copyB = [...B];

    for (let i = 0; i < A.length; i++) {
        const idx = copyB.indexOf(A[i]);
        if (idx !== -1) {
            intersection.push(A[i]);
            copyB.splice(idx, 1); // 하나만 제거 (다중 집합 고려)
        }
    }

    const union = A.length + B.length - intersection.length;

    if (union === 0) return 65536;

    return Math.floor((intersection.length / union) * 65536);
}
