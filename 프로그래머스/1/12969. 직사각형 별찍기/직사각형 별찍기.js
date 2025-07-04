process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const [a, b] = data.split(' ').map(Number);

  const row = '*'.repeat(a); // a개의 별
  const result = Array(b).fill(row).join('\n'); // b행 출력
  console.log(result);
});
