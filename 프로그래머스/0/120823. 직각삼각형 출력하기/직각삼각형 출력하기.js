const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line;
    rl.close(); // 👈 엔터 치면 종료하도록 처리
}).on('close', function () {
    const n = Number(input); // 숫자로 변환
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }
});
