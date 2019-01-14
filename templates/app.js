const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('hemlet');
const morgan = require('morgan');
const mongoose = require('mongoose');

const middlewares = require('./middlewares');
const api = require('./api');
const config = require('./config.json');

const app = express();
const db = mongoose.connection(config.connectionString);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're connected");
});

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Read less code more 😉'
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
