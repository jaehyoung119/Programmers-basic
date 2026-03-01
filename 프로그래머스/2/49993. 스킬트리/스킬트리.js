function solution(skill, skill_trees) {
  let count = 0;

  for (const tree of skill_trees) {
    let idx = 0; // skill에서 현재 배워야 하는 위치

    for (const ch of tree) {
      const pos = skill.indexOf(ch);
      if (pos === -1) continue;          // 상관없는 스킬이면 무시
      if (pos !== idx) {                 // 순서가 어긋나면 실패
        idx = -1;
        break;
      }
      idx++;                             // 올바른 순서로 배움
    }

    if (idx !== -1) count++;
  }

  return count;
}
