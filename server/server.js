const express = require('express');
const app = express();
const port = 7777;
const bodyParser = require('body-parser');

app.use(express.static('server/public'));

app.listen(port, function() {
    console.log('Listening on port', port);
});

