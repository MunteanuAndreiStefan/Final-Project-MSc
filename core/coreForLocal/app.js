const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const app = express();

app.use(awsServerlessExpressMiddleware.eventContext())

app.use('/questionnaires', require('./routes/questionnairesRouter'));
app.use('/posts', require('./routes/postsRouter'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status = 404;
  res.end('Not found');
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
});

module.exports = app;
