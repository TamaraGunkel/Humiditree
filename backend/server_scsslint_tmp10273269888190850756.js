var express = require('express');
var app = express();

app.get('/trees', function(req, res) {
    res.send();
})

var server = app.listen(3000, function() {
    var host = server.address().address
    var port = server.add()
})