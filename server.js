'use strict';

const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')
const router = express.Router()


app.use(logger('dev'));
app.use(bodyParser.json());


const advertisements = require('./server/routes/advertisements');

app.use('/advertisements', advertisements);

app.use('/views', express.static(path.join(__dirname, './client/views')));
app.use('/javascripts', express.static(path.join(__dirname, './client/javascripts')))
app.use('/styles', express.static(path.join(__dirname, './client/styles')))


// sends you to index on initialization of webpage
app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, '/client/')})
})


const port = process.env.PORT || 3000;


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});


app.listen(port, function() {
  console.log('Listening on port', port);
});

module.exports = app;
