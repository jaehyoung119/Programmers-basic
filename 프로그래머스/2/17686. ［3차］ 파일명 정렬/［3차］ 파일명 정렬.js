function solution(files) {
  return files.sort((a, b) => {
    const parse = (file) => {
      const match = file.match(/^([^0-9]+)([0-9]{1,5})/);
      return [
        match[1].toLowerCase(), // HEAD
        Number(match[2])        // NUMBER
      ];
    };

    const [headA, numA] = parse(a);
    const [headB, numB] = parse(b);

    if (headA < headB) return -1;
    if (headA > headB) return 1;

    return numA - numB;
  });
}
