const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const result = Number(input[0]) + Number(input[1]);
    const a = input[0];
    const b = input[1];
    console.log(`${a} + ${b} = ${result}`)
});