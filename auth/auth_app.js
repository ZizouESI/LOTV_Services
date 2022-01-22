var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
const db = require('./models');
var bcrypt = require("bcryptjs");
var app = express();




app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


const Role = db.role;
const User = db.user;


db.sequelize.sync({force: true}).then(() => {
  //console.log('Supp et syncro de la db');
  initialiserdb();
});

//routes
require('./routes/auth.routes')(app);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({'error':err});
});

app.listen(8001);

function initialiserdb() {

  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });

  User.create({
    username : "zizou",
    email : "hz_fodil@esi.dz",
    password: bcrypt.hashSync("123", 8)

  }).then(user => user.setRoles([1]));

  User.create({
    username : "employe",
    email : "employe@lotv.fr",
    password: bcrypt.hashSync("123", 8)

  }).then(user => user.setRoles([1,2]));

}

module.exports = app;
