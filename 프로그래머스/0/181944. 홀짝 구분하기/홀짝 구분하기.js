const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    line % 2 === 0 ? console.log(`${line} is even`) : console.log(`${line} is odd`)
    rl.close()
})