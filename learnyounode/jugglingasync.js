//9
var http = require('http');
var bl = require('bl');

function chainAsync(i) {
    if (i > 4)
        return

    http.get(process.argv[i], function(response) {
        response.pipe(bl(function(err, data) {
            if (err)
                return console.error(err)
           console.log(data.toString())
           chainAsync(i+1)
        }))
    })
}

chainAsync(2)