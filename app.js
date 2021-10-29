const os = require('os')
const path = require('path')
const myPC = {
    osType: os.type(),
    osName: os.release(),
    freeMem: os.freemem()/1024/1024/1024,
    totalMem: os.totalmem(),
}

console.log(myPC)

const {readFile, writeFile, access} = require('fs')
const { F_OK } = require('constants')

const myFile = path.basename('./content/first.text')
console.log(myFile)
const readCliText = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

access(myFile, F_OK, (err)=> {
    if (err) {
        console.log('Some error')
        console.log('Please introduce the correct fileName: ')
        const newFile = readCliText.question(`Please introduce the file name: `, name => {
            console.log(`The file name is ${name}`)
            readCliText.close()
            return name

        })
    }})
