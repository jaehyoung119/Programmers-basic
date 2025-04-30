function solution(polynomial) {
  const terms = polynomial.split(" ");
  let xSum = 0;
  let constSum = 0;

  for (let char of terms) {
    if (char === "x") {
      xSum += 1;
    } else if (char.includes("x")) {
      xSum += Number(char.split("x")[0]);
    } else if (!isNaN(Number(char))) {
      constSum += Number(char);
    }
  }

  if (xSum === 0) return `${constSum}`;
  if (constSum === 0) return xSum === 1 ? "x" : `${xSum}x`;
  return `${xSum === 1 ? "x" : `${xSum}x`} + ${constSum}`;
}
