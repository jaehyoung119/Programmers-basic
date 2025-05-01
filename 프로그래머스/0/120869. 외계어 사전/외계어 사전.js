function solution(spell, dic) {
  const sortedSpell = spell.sort().join('');

  for (let word of dic) {
    const sortedWord = [...word].sort().join('');
    if (sortedSpell === sortedWord) return 1;
  }

  return 2;
}
