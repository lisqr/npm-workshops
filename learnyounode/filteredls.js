// 5
var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function asyncio(err, list) {
    if (!err) {
        for (var i = 0; i < list.length; i++) { // official soln uses forEach
            if (path.extname(list[i]) === '.'+process.argv[3].toString()) {
                console.log(list[i])
            }
        }
    }
})