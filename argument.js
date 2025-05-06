const minimist = require('minimist')
// process.argv.forEach((e, i) => {
//     console.log(`${i}: ${e}`)
// })

const arugNew = minimist(process.argv.slice(2));
console.log(arugNew.name);