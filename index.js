const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const debug = require('debug')('app:debug');
const config = require('./config/config');
const morgan = require('morgan');

const app = express();


// connecting to database
mongoose.connect(config.DBLocalURL())
  .then(res => {
    debug('Connected to mongoDB database...');
  })
  .catch(err => {
    console.error(err);
  });


// using some services
app.use(express.json());
app.use(helmet())
app.use(morgan('tiny'));



// listening on port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  debug('Listening on port ' + PORT + '...');
});