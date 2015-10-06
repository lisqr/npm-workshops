var path = require('path') // forgot to require path, which didn't impact verification since the first condition evaluated to true
var express = require('express')
var app = express()

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
app.listen(process.argv[2])