const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

module.exports = app;
