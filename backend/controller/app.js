'use strict'

const express = require('../modules/node_modules/express');
const mongoose = require('../modules/node_modules/mongoose');
const bodyParser = require('../modules/node_modules/body-parser');
const path = require('path');
const cors = require('../modules/node_modules/cors');
const port = 8887;

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://EquipoFactoriaF5:gremlin@cluster0.9xlsu.mongodb.net/hiringday?retryWrites=true&w=majority', {useNewUrlParser: true});
const db = mongoose.connection;

const Schema = new mongoose.Schema({
    googleId: String,
    name: String,
    surname: String,
    profilePic: String,
    extract: String,
    links: Array,
    contacto: String,
    speciality: String,
    languages:  Array,
    softSkills: Array,
    mail: String,
    techSkills: Array,
    workflow: String,
    software: String,
    cv: String,
 });

const Users2 = mongoose.model('Users2', Schema);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));//TODO comprobar path
})
         
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
         
app.use(bodyParser.urlencoded({ extended: true }));
         
app.post('/enviarFormulario',function(request,response){
console.log("el request.body es: ", request.body) //you will get your data in this as object.
          
db.on('error', console.error.bind(console, 'console error:'));
console.log('we re connected!');
               
const nuevoUsuario = new Users2();
nuevoUsuario.googleId = request.body.IdGoogle;

console.log("nuevoUsuario es: ", nuevoUsuario);

//guarda nuevo usuario en base de datos
nuevoUsuario.save(function (err, nuevoUsuario){
  if (err) return console.error(err);
    console.log("lucas ha sido salvado");
  });

  //función de búsqueda de usuarios
Users2.find(function (err, user){
  if (err) return console.error(err);
  console.log(user);
  })
})
         
