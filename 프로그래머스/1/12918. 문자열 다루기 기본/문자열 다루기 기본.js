function solution(s) {
    if (s.length !== 4 && s.length !== 6) return false;

    for (let c of s) {
        if (isNaN(Number(c))) return false;
    }

    return true;
}
