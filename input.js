const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('what is your name ? ', (name) => {
    console.log(`hi ${name}`);
    rl.close()
})