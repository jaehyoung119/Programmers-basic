function solution(dots) {
  const getSlope = (p1, p2) => {
    if (p2[0] - p1[0] === 0) return Infinity; 
    return (p2[1] - p1[1]) / (p2[0] - p1[0]);
  };

  const [a, b, c, d] = dots;

  const slopes = [
    getSlope(a, b) === getSlope(c, d),
    getSlope(a, c) === getSlope(b, d),
    getSlope(a, d) === getSlope(b, c),
  ];

  return slopes.includes(true) ? 1 : 0;
}
