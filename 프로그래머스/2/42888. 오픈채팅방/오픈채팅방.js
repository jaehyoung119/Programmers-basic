function solution(record) {
  const nicknameMap = new Map();

  // 최종 닉네임 저장
  for (const r of record) {
    const [cmd, uid, nickname] = r.split(" ");

    if (cmd === "Enter" || cmd === "Change") {
      nicknameMap.set(uid, nickname);
    }
  }

  const answer = [];

  // 메시지 생성
  for (const r of record) {
    const [cmd, uid] = r.split(" ");

    if (cmd === "Enter") {
      answer.push(`${nicknameMap.get(uid)}님이 들어왔습니다.`);
    } else if (cmd === "Leave") {
      answer.push(`${nicknameMap.get(uid)}님이 나갔습니다.`);
    }
  }

  return answer;
}