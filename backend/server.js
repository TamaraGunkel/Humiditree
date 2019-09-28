const express = require('express');
const cors = require('cors');
const app = express();

var trees = {
    "trees": [
        {
            "id": 0,
            "lat": 51.950579,
            "lon": 7.637487,
            "species": "Linde",
            "age": "< 10 Jahre",
            "last_watered": "26.09.2019",
            "dryness": 1
        },
        {
            "id": 1,
            "lat": 51.950300,
            "lon": 7.637866,
            "species": "Apfelbaum",
            "age": "< 5 Jahre",
            "last_watered": "21.09.2019",
            "dryness": 0
        },
        {
            "id": 2,
            "lat": 51.949976,
            "lon": 7.638295,
            "species": "Eiche",
            "age": "> 25 Jahre",
            "last_watered": "24.09.2019",
            "dryness": 1
        },
        {
            "id": 3,
            "lat": 51.951025,
            "lon": 7.637284,
            "species": "Kirschbaum",
            "age": "> 25 Jahre",
            "last_watered": "23.09.2019",
            "dryness": 1
        },
        {
            "id": 4,
            "lat": 51.951408,
            "lon": 7.637998,
            "species": "Buche",
            "age": "> 25 Jahre",
            "last_watered": "21.09.2019",
            "dryness": 1
        },
        {
            "id": 5,
            "lat": 51.951022,
            "lon": 7.637907,
            "species": "Eiche",
            "age": "< 5 Jahre",
            "last_watered": "22.09.2019",
            "dryness": 0,
        },
    ]
};

app.get('/trees', cors(), (req, res) =>  {
    res.json(trees);
})

app.get('/trees/water/:id', cors(), (req, res) => {
    trees.trees[req.params.id].dryness = 0;
    trees.trees[req.params.id].last_watered = "28.09.2019";
    res.json(trees)
})

var server = app.listen(3000, '172.16.2.43', function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Humiditree server listening at http://%s:%s", host, port)
})
