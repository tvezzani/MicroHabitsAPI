var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

//var indexRouter = require('./routes/index');
var goalRouter = require('./routes/goals');
var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/goals', goalRouter);
app.use('/users', usersRouter);
app.use('/movie', moviesRouter);

//For connecting to mongoose
const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


module.exports = app;
