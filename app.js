require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');

let constr = 'mongodb://localhost/pull-req';
// if (process.env.NODE_ENV === 'production') {
  constr = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.2pv18.mongodb.net/pull-req?retryWrites=true&w=majority`;
// }

mongoose
  .connect(constr, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));
}
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// session configuration
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 * 1000
    })
  })
);

const passport = require('passport');
require('./configs/passport');

app.use(passport.initialize());
app.use(passport.session());

// default value for title local
app.locals.title = 'Pull-Req';

const index = require('./routes/index');
app.use('/', index);

const auth = require('./routes/auth');
app.use('/api/auth/', auth);

const chat = require('./routes/chat');
app.use('/api/chat/', chat);

if (process.env.NODE_ENV === 'production') {
  app.use((req, res) => {
    res.sendFile(__dirname + "/client/build/index.html");
  });
}

module.exports = app;