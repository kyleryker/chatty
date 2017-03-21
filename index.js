var express = require('express');
var bodyParser = require('body-parser');
var messages = [{}];
var username = '';

var app = express();
app.use(express.static('assets'));
app.use(bodyParser.json);

app.get('/messages', function(req, res, next){
  res.status(200).json({messages: messages});
});

app.post('/messages', function(req, res, next){
  messages.push({message: req.body.message, time: new Date()}, username: req.body.username);
  res.status(200).json({messages: messages});
});

app.listen(3000);
