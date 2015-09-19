//6
module.exports = function (dir, filter, callback) {
    var fs = require('fs')
    var path = require('path')
    var flist = []
    
    fs.readdir(dir, function asyncio(err, list) {
        if (err)
            return callback(err)
        // can also use filter()
        for (var i = 0; i < list.length; i++) { //can also use forEach
            if (path.extname(list[i]) === '.'+filter) {
                flist.push(list[i])
            }
        }
        callback(null, flist)
    })
}