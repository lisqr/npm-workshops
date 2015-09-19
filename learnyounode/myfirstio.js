// 3
var fs = require('fs')
var toRead = fs.readFileSync(process.argv[2]).toString()

console.log(toRead.split('\n').length-1)