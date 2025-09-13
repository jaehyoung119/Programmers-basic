function solution(n, words) {
    const used = new Set();
    used.add(words[0]);

    for (let i = 1; i < words.length; i++) {
        const prev = words[i - 1];
        const curr = words[i];

        const isNotConnected = prev[prev.length - 1] !== curr[0];
        const isRepeated = used.has(curr);

        if (isNotConnected || isRepeated) {
            const person = (i % n) + 1;
            const turn = Math.floor(i / n) + 1;
            return [person, turn];
        }

        used.add(curr);
    }

    return [0, 0];
}
