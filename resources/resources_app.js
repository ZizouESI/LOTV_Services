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


const Product = db.product;
const Fleur = db.fleur;

db.sequelize.sync({force: true}).then(() => {
  //console.log('Supp et syncro de la db');
  initialiserdb();
});

//routes

require('./routes/user.routes')(app);

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

app.listen(8002);

function initialiserdb() {

  Fleur.create({
    nom:"Anémone",
    image:"f1.jpg",
    prix:5
  });
  Fleur.create({
    nom:"Renoncule",
    image:"f2.jpg",
    prix:5
  });
  Fleur.create({
    nom:"Rose orangée",
    image:"f3.jpg",
    prix:5
  });
  Fleur.create({
    nom:"Rose",
    image:"f4.jpg",
    prix:5
  });
  Fleur.create({
    nom:"Amnésia",
    image:"f5.jpg",
    prix:5
  });
  Fleur.create({
    nom:"Renoncule jaune",
    image:"f6.jpg",
    prix:5
  });
  Fleur.create({
    nom:"Renoncule orange ",
    image:"f7.jpg",
    prix:5
  });
  Fleur.create({
    nom:"Rose ",
    image:"f8.jpg",
    prix:5
  });
  Fleur.create({
    nom:"Renoncule",
    image:"f9.jpg",
    prix:5
  });

  Product.create({
    nom: "Coral Pink",
    image: "img15.jpg",
    date: "21-03-2021",
    components: "Anémones, Roses, Renoncules",
    prix: 75,
    nomCollection : "Nouvelle Collection",
    type : 0
  }).then(p => p.setFleurs([1,2,4],{through: { qty: 5}}));
  Product.create({
    nom: "Sweet Orange",
    image: "img16.jpg",
    date: "21-03-2021",
    components: "Roses, Renoncules, Eucalyptus, Gloriosa",
    prix: 95,
    nomCollection : "Nouvelle Collection",
    type : 0
  }).then(p => p.setFleurs([2,4],{through: { qty: 5}}));
  Product.create({
    nom: "Water Petals",
    image: "img17.jpg",
    date: "21-03-2021",
    components: "Hortensias, Pommiers, Eucalyptus",
    prix: 75,
    nomCollection : "Nouvelle Collection",
    type : 0
  }).then(p => p.setFleurs([3,4],{through: { qty: 5}}));
  
  Product.create({
    nom: "White Pompadour",
    image: "img18.jpg",
    date: "21-03-2021",
    components: "Renoncules, Roses, Lisianthus",
    prix: 195,
    nomCollection : "Collection Pompadour",
    type : 0
  }).then(p => p.setFleurs([1,4],{through: { qty: 5}}));
  Product.create({
    nom: "Powdered Pompadour",
    image: "img19.jpg",
    date: "21-03-2021",
    components: "Roses, Hortensias",
    prix: 195,
    nomCollection : "Collection Pompadour",
    type : 0
  }).then(p => p.setFleurs([4],{through: { qty: 5}}));
  Product.create({
    nom: "Coloured Pompadour",
    image: "img22.jpg",
    date: "21-03-2021",
    components: "Tulipes, Hortensias, Roses, Iris",
    prix: 275,
    nomCollection : "Collection Pompadour",
    type : 0
  }).then(p => p.setFleurs([5,6,7],{through: { qty: 5}}));
  
  Product.create({
    nom: "Orchidée blanche",
    image: "img20.jpg",
    date: "21-03-2021",
    components: "Orchidée blanche, pot en céramique noir",
    prix: 55,
    nomCollection : "Collection Orchidées",
    type : 0
  }).then(p => p.setFleurs([7,8,9],{through: { qty: 5}}));
  Product.create({
    nom: "Orchidée fushia",
    image: "img21.jpg",
    date: "21-03-2021",
    components: "Orchidée fushia, pot en céramique noir",
    prix: 55,
    nomCollection : "Collection Orchidées",
    type : 0
  }).then(p => p.setFleurs([1,5,6],{through: { qty: 5}}));
  Product.create({
    nom: "Orchidée blanche",
    image: "img23.jpg",
    date: "21-03-2021",
    components: "Orchidée blanche, pot en céramique noir réalisé à la main",
    prix: 55,
    nomCollection : "Collection Orchidées",
    type : 0
  }).then(p => p.setFleurs([1,2,4],{through: { qty: 5}}));
 

}

module.exports = app;
