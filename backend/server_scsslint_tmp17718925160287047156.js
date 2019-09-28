var express = require('express');
var app = express();

app.get('/trees', function (req, res) {
    res.json({
        "trees": [
            {
                "id": 0,
                "lat": 51.950429,
                "lon": 7.638429,
                "species": "Kirschbaum",
                "dryness": 0
            },
            {
                "id": 1,
                "lat": 51.950429,
                "lon": 7.637429,
                "species": "Apfelbaum",
                "dryness": 1
            },
            {
                "id": 2,
                "lat": 51.950429,
                "lon": 7.636429,
                "species": "Kastanie",
                "dryness": 0
            },
            {
                "id": 3,
                "lat": 51.950429,
                "lon": 7.635429,
                "species": "Eiche",
                "dryness": 1
            },
            {
                "id": 4,
                "lat": 51.951429,
                "lon": 7.638429,
                "species": "Kirschbaum",
                "dryness": 0
            },
            {
                "id": 5,
                "lat": 51.952429,
                "lon": 7.637429,
                "species": "Apfelbaum",
                "dryness": 1
            },
            {
                "id": 6,
                "lat": 51.953429,
                "lon": 7.636429,
                "species": "Kastanie",
                "dryness": 0
            },
            {
                "id": 7,
                "lat": 51.954429,
                "lon": 7.635429,
                "species": "Eiche",
                "dryness": 1
            }
        ]
    })
})

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Humiditree server listening at http://%s:%s", host, port)
})