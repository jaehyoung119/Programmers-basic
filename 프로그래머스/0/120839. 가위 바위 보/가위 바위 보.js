function solution(rsp) {
  const winMap = { "2": "0", "0": "5", "5": "2" };
  return rsp.split("").map(v => winMap[v]).join("");
}
