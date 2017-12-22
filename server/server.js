const express = require('express');
const app = express();
const port = 7777;
const bodyParser = require('body-parser')
const Compare = require('./modules/compare');

app.use(express.static('server/public'));

let ourCompare = new Compare(10);
console.log(ourCompare);


app.listen(port, function() {
    console.log('Listening on port', port);
});
