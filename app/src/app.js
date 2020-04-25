require('dotenv').config();
const cors = require('cors'); 
const express = require('express');
const path    = require('path');
const favicon = require('static-favicon');
const logger  = require('morgan');
const cookieParser  = require('cookie-parser');
const bodyParser    = require('body-parser');
const wagner        = require('wagner-core');
const session       = require("express-session");
const passport      = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const config = require('config');

var app = express();
// Set PORT variable
const PORT = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'ejs');
app.set('port', PORT);
app.set('etag', 'strong');

// add sequelize ORM to wagner dependency manager
const sequelize = require('./server/utils/db')(wagner);
const dependencies = require('./server/utils/dependencies')(wagner);
const middleware = require('./server/utils/controller')(wagner);

// include the models, managers or any other utils here
require('./server/models')(sequelize, wagner);
require('./server/managers')(wagner, passport);
const UserModel = wagner.get("User");
const BankModel = wagner.get("Bank");
console.log(UserModel);
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  { usernameField: "email" },
  (email, password, done) => {
    console.log(email, password);

    // When a user tries to sign in this code runs
    UserModel.findOne({ where: { email: email }, include:[{ model: BankModel, as: "bank", required: false }] })
    .then(function(dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, { message: "Incorrect email." });
      } else if (!dbUser.validPassword(password)) {  // If there is a user with the given email, but the password the user gives us is incorrect
        return done(null, false, { message: "Incorrect password." });
      } else {
        return done(null, true, { user: dbUser } ); // If none of the above, return the user
      }
    }).catch((e)=>{
      console.log(e);
      return done(e, false, { message: e.message });
    });
  }
));
passport.serializeUser(function(user, cb) {
  cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.use(cors());
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// include the routes path here
require('./server/routes')(app,wagner,passport);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'dev') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        console.log(err.message);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'Nodejs - Internal Error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log(err);
    res.render('error.message', {
        message: err.message,
        error: {},
        title: 'Nodejs - Internal Error'
    });
});


// Set the PORT and start listening
app.set('port', process.env.PORT || PORT);
app.listen(app.get('port'));
console.log('Running on http://localhost:' + PORT);

// export the app instance
module.exports = app
