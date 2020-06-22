var express = require('express');
var path = require('path');

var app = express()
app.get('/', (req, resp) => (
    resp.sendFile(path.join(__dirname + '/index.html'))
))

app.listen(8000, () => {
    console.log("server running");
})