//10
var net = require('net')
var server = net.createServer(function(socket) {
    var date = new Date()
    var formattedDate = date.getFullYear() + '-' +
            zeroFill(date.getMonth()+1) + '-' +
            zeroFill(date.getDate()) + ' ' +
            zeroFill(date.getHours()) + ':' +
            zeroFill(date.getMinutes()) + '\n';
    return socket.end(formattedDate)
})

function zeroFill(n) {
    return n<10 ? '0'+n : n
}

server.listen(process.argv[2])