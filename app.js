const cors = require('cors');
const express = require('express');
const timestampRouter = require('./controllers/timestamp');
const app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.use('/api/timestamp', timestampRouter);

module.exports = app;
