function solution(sizes) {
    let w = 0;
    let h = 0;

    for (let [a, b] of sizes) {
        let width = Math.max(a, b);
        let height = Math.min(a, b);

        w = Math.max(w, width);
        h = Math.max(h, height);
    }

    return w * h;
}
