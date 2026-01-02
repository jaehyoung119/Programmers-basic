function solution(babbling) {
    const valid = ["aya", "ye", "woo", "ma"];
    let count = 0;

    for (let word of babbling) {
        let isValid = true;
        let prev = "";

        // 발음 가능한 단어들 반복 제거
        while (word.length > 0) {
            let matched = false;

            for (let sound of valid) {
                if (word.startsWith(sound) && sound !== prev) {
                    word = word.slice(sound.length); // 앞부분 제거
                    prev = sound;
                    matched = true;
                    break;
                }
            }

            if (!matched) {
                isValid = false;
                break;
            }
        }

        if (isValid) count++;
    }

    return count;
}
