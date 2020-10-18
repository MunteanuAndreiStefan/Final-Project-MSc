const express = require('express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');

app.use(awsServerlessExpressMiddleware.eventContext())
// app.use(bodyParser.json());
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

if (process.env.NODE_ENV === 'development') {
  const cors = require('cors');
  app.use(cors());
}

app.use('/questionnaires', require('./routes/questionnairesRouter'));
app.use('/posts', require('./routes/postsRouter'));
app.use('/users', require('./routes/usersRouter'));
app.use('/subscriptions', require('./routes/subscriptionsRouter'));
app.use('/notifications', require('./routes/notificationRouter'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
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
