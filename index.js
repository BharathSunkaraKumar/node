// console.log('nodejs bharath kumar')
// console.log('nodejs bharath sunkara')
// // process.exit(1)
// // process.exitCode = 1

// const {kohli, rohit, vaibhavSuryavanshi} = require('./players');
// console.log(JSON.stringify(kohli, null, 3))
// console.log(JSON.stringify(rohit, null, 3))
// console.log(JSON.stringify(vaibhavSuryavanshi, null, 3))

//files and path

const path = require('path');

const filePath = './files/simple.txt'

// console.log(path.dirname(filePath))
// console.log(path.basename(filePath))
// console.log(path.extname(filePath))

const fs = require('fs');
// console.log(fs)
// fs.readFile(filePath, 'utf-8', (err, data) => {
//     if(err) throw new Error('somting went wrong!');
//     console.log(data)
// })

// try{
//     const data = fs.readFileSync(path.join(__dirname, 'files', 'simple.txt'))
//     console.log(data.toString())
// }catch(err) {
//     console.log(err)
// }

const onefile = path.join(__dirname, "files", "one.txt")
const content = 'i am the one'
// console.log(onefile)
// fs.writeFile(onefile, content, (err) => {
//     if(err) throw new Error('somthing went wrong');
//     console.log('successfully writen')
// })
const fsPromis = require('fs').promises
const writeFile = async () => {
    try{
        await fsPromis.writeFile(onefile, '\n this is not cool', {
            flag: "a+"
        })
        // await fsPromis.appendFile(onefile, '\n this is appended')
        await fs.promises.rename(onefile, path.join(__dirname, 'files', 'TheOne.txt'))
        const data = await fsPromis.readFile(path.join(__dirname, 'files', 'TheOne.txt'))
        console.log(data.toString())
    }catch(err) {
        console.log(err)
    }
}
writeFile()