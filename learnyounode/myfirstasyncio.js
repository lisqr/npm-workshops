// 4
var fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function asyncio(err, fileContents) {
    if (!err)
        console.log(fileContents.split('\n').length-1)
})