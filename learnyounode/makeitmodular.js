//6
var module = require('./module.js')

module(process.argv[2], process.argv[3], function callback(err, list) {
    if (err)
        return console.log("Error: " + err) // console.error('There was an error:', err)
    list.forEach(function printList(element) {
        console.log(element);
    })
})