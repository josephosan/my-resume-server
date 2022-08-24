const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const debug = require('debug')('app:debug');
const config = require('./config/config');
const morgan = require('morgan');
const contact = require('./routes/contact');
const home = require('./routes/home');


const app = express();


// connecting to database
const userName = process.env.NAME+'';
const password = process.env.PASSWORD+'';
const dbURL = config.DBCloudURL(userName, password);
mongoose.connect(dbURL)
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


// useing routes
app.use('/contact', contact);
app.use('/', home);


// listening on port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  debug('Listening on port ' + PORT + '...');
});