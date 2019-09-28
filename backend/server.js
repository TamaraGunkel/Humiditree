const express = require('express');
const cors = require('cors');
const app = express();

var trees = {
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
            "lat": 51.950300,
            "lon": 7.637866,
            "species": "Apfelbaum",
            "dryness": 0
        },
        {
            "id": 2,
            "lat": 51.949976,
            "lon": 7.638295,
            "species": "Eiche",
            "dryness": 1
        },
        {
            "id": 3,
            "lat": 51.951025,
            "lon": 7.637284,
            "species": "Kastanie",
            "dryness": 0
        },
        {
            "id": 4,
            "lat": 51.951408,
            "lon": 7.637998,
            "species": "Buche",
            "dryness": 1
        },
        {
            "id": 5,
            "lat": 51.951022,
            "lon": 7.637907,
            "species": "Eiche",
            "dryness": 0,
        },
    ]
};

app.get('/trees', cors(), (req, res) =>  {
    res.json(trees);
})

app.get('/trees/water/:id', cors(), (req, res) => {
    trees.trees[req.params.id].dryness = 0;
    res.json(trees)
})

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Humiditree server listening at http://%s:%s", host, port)
})
