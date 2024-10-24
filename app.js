var express = require('express');
var app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.text());
var userRouter = require('./api/user');

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World 5555555')
})

app.use("/user", userRouter);

module.exports = app;