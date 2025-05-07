function solution(babbling) {
  let bab = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let word of babbling) {
    let temp = word;
    let prev = ''; // 이전 발음 저장

    while (temp.length > 0) {
      let matched = false;

      for (let sound of bab) {
        if (temp.startsWith(sound) && sound !== prev) {
          prev = sound;
          temp = temp.slice(sound.length);
          matched = true;
          break;
        }
      }

      if (!matched) break; 
    }

    if (temp === '') count++;
  }

  return count;
}
