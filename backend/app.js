require('./database/mongodb');
require('express-async-errors');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

var cors = require('cors');

var indexRouter = require('./routes/indexRouter');
var reservaRouter = require('./routes/reservaRouter');
var usuarioRouter = require('./routes/usuarioRouter');
var loginRouter = require('./routes/loginRouter');
var generoRouter = require('./routes/generoRouter');
var livroRouter = require('./routes/livroRouter');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/auth', loginRouter);
app.use('/usuarios', usuarioRouter);
app.use('/reservas', reservaRouter);
app.use('/generos', generoRouter);
app.use('/livros', livroRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

