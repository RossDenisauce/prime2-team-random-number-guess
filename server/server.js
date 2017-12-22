const express = require('express');
const app = express();
const port = 7777;
const bodyParser = require('body-parser')
const Compare = require('./modules/compare');


const Random = require('./modules/random');
const random = new Random(10);
const randomIn = random.generator();

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

let storedGuesses = [];

app.get('/guess', function(req, res) {
    let result = storedGuesses[0].comparator();
    console.log(storedGuesses[0].answer);
    res.send(result);
});

app.post('/guess', function(req, res) {
    let ourCompare = new Compare(parseInt(req.body.guessValue), randomIn);
    storedGuesses.unshift(ourCompare);
    res.sendStatus(200);
});

app.listen(port, function() {
    console.log('Listening on port', port);
});
