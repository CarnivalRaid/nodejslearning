const {readFile, writeFile} = require('fs')

readFile('1-intro.js', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('nonexistant.txt', 'utf8', (err, result) => {
        if (err) {
            if (err.code === 'ENOENT') {
                writeFile('nonexistant.txt', first, (err, result) => {
                    if (err) {
                    console.log(err) 
                    return}
                    console.log(first)
                })
            }
            }
        console.log(result)
    })

})