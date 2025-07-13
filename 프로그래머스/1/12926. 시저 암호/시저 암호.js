function solution(s, n) {
    let result = '';

    for (let char of s) {
        if (char === ' ') {
            result += ' ';
        } else {
            const code = char.charCodeAt(0);
            const base = char >= 'a' ? 97 : 65;
            result += String.fromCharCode((code - base + n) % 26 + base);
        }
    }

    return result;
}
