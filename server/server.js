const express = require('express');
const app = express();
const port = 7777;
const bodyParser = require('body-parser')
const Compare = require('./modules/compare');


const Random = require('./modules/random');
let random;
let randomIn;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

let storedGuesses = [];

app.get('/guess', function(req, res) {
    let result = storedGuesses[0].comparator();
    console.log('test', storedGuesses[0].answer);
    res.send(result);
});

app.post('/start', function(req, res) {
    random = new Random(req.body.maxNumber);
    console.log(random, req.body.maxNumber);
    randomIn = random.generator();
    res.sendStatus(200);
});

app.post('/guess', function(req, res) {
    console.log(req.body.guessValue);
    console.log(randomIn);
    let ourCompare = new Compare(parseInt(req.body.guessValue), randomIn);
    storedGuesses.unshift(ourCompare);
    res.sendStatus(200);
});

app.listen(port, function() {
    console.log('Listening on port', port);
});
