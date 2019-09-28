const express = require('express');
const cors = require('cors');
const app = express();

app.get('/trees', cors(), (req, res) =>  {
    res.json({
        "trees": [
            {
                "id": 0,
                "lat": 51.950579,
                "lon": 7.637487,
                "species": "Kirschbaum",
                "dryness": 0
            },
            {
                "id": 1,
                "lat": 51.950534,
                "lon":  7.637547,
                "species": "Apfelbaum",
                "dryness": 1
            },
            {
                "id": 2,
                "lat": 51.950470,
                "lon": 7.637631,
                "species": "Kastanie",
                "dryness": 0
            },
            {
                "id": 3,
                "lat": 51.950389,
                "lon": 7.637740,
                "species": "Eiche",
                "dryness": 1
            },
            {
                "id": 4,
                "lat": 51.950300,
                "lon": 7.637866,
                "species": "Kirschbaum",
                "dryness": 0
            },
            {
                "id": 5,
                "lat": 51.950215,
                "lon": 7.637978,
                "species": "Apfelbaum",
                "dryness": 1
            },
            {
                "id": 6,
                "lat": 51.950100,
                "lon": 7.638123,
                "species": "Kastanie",
                "dryness": 0
            },
            {
                "id": 7,
                "lat": 51.949976,
                "lon": 7.638295,
                "species": "Eiche",
                "dryness": 1
            },
            {
                "id": 8,
                "lat": 51.951025,
                "lon": 7.637284,
                "species": "Eiche",
                "dryness": 0
            },
            {
                "id": 9,
                "lat": 51.951408,
                "lon": 7.637998,
                "species": "Eiche",
                "dryness": 1
            },
            {
                "id": 10,
                "lat": 51.951022,
                "lon": 7.637907,
                "species": "Eiche",
                "dryness": 0,
            },
        ]
    })
})

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Humiditree server listening at http://%s:%s", host, port)
})
