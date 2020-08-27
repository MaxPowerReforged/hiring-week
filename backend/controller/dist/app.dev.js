'use strict';

var express = require('../modules/node_modules/express');

var mongoose = require('../modules/node_modules/mongoose');

var port = 3000;
var app = express();
app.get('/', function (req, res) {});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});
mongoose.connect('mongodb+srv://EquipoFactoriaF5:gremlin@cluster0.9xlsu.mongodb.net/hiringday?retryWrites=true&w=majority', {
  useNewUrlParser: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'console error:'));
db.once('open', function () {
  console.log('we re connected!');
  var Schema = new mongoose.Schema({
    name: String
  });
  var Users = mongoose.model('Users', Schema);
  var lucas = new Users({
    name: 'Lucas'
  });
  console.log(lucas.name);
  lucas.save(function (err, lucas) {
    if (err) return console.error(err);
    console.log("lucas ha sido salvado");
  });
  Users.find(function (err, user) {
    if (err) return console.error(err);
    console.log(user);
  });
});