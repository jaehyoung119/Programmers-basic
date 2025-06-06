function solution(myStr) {
    const parts = myStr.split(/[abc]/).filter(str => str !== "");
    return parts.length === 0 ? ["EMPTY"] : parts;
}
