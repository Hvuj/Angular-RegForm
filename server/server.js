const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req, res) {
    res.send('hello from server');
})

app.post('/subscribe', function(req, res) {
    console.log(req.body);
    res.status(401).send({'message': 'data recieved'});
})

app.listen(PORT, function() {
    console.log('server running on localhost:' + PORT);
})