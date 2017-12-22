const express = require('express');
const app = express();
const port = 7777;
const bodyParser = require('body-parser')
const Compare = require('./modules/compare');


const Random = require('./modules/random');
const random = new Random(10);
const randomIn = random.generator();

app.use(express.static('server/public'));


app.get('/guess', function(req, res) {
    let ourCompare = new Compare(5, randomIn);
    console.log(randomIn, ourCompare.comparator());
    ourCompare.comparator();
});

app.listen(port, function() {
    console.log('Listening on port', port);
});
