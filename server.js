let express = require('express');
let methodOverride = require('method-override');
let path = require('path');
//var favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let session = require('express-session');
let twilio = require('twilio');

// require environment variables
require('dotenv').config();

// Twilio setup
// const accountSid = process.env.TWILIO_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;

// // BUTTON
// // import Twilio object
// let client = new twilio(accountSid, authToken);
// client.messages.create({
//   body: 'Your Tushy is thinking about you!',
//   to: process.env.TO_SMS,  // Text this number
//   from: process.env.FROM_SMS // From a valid Twilio number
// })
// .then((message) => console.log(message.sid));

var index = require('./routes/index');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'ILoveMatthew!',
  resave: false,
  saveUninitialized: true
}));

app.use('/', index);

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
  res.render('error');
});

module.exports = app;