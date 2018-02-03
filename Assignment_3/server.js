const express = require('express');
const app  = express();
const users = require('./users.json');

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/users', function(req, res) {
  res.send(users);
});

app.post('/users', function (req, res) {
  // Assignment #3 code goes here
});

app.get('/users/:id', function(req, res) {
  const userId = req.params.id;
  res.send(users[userId - 1]);
});

app.listen(3000, function() {
  console.log("[OK] = HTTP Server listening on: http://localhost:3000");
});