'use strict'

const express = require('../modules/node_modules/express');
const mongoose = require('../modules/node_modules/mongoose');
const bodyParser = require('../modules/node_modules/body-parser');
const path = require('path');
const cors = require('../modules/node_modules/cors');
const port = 8887;

//configuracion de la app express------------------------------------------------------------
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));//TODO comprobar path
})
         
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
         
app.use(bodyParser.urlencoded({ extended: true }));
         
app.post('/sendGoogleId', function(request, response){
  console.log("post request /sendGoogleId recibida");
  checkIfGoogleIdAlreadyExists(request, response)
});

//conexión a mongodb-------------------------------------------------------------------
mongoose.connect('mongodb+srv://EquipoFactoriaF5:gremlin@cluster0.9xlsu.mongodb.net/hiringday?retryWrites=true&w=majority', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'console error:'));
console.log('connection to mongodb is established!');

//definición de esquema/modelo------------------------------------------------------------
const Schema = new mongoose.Schema({
    googleId: String,
    name: String,
    surname: String,
    profilePic: String,
    extract: String,
    links: Array,
    contact: String,
    speciality: String,
    languages:  Array,
    softSkills: Array,
    mail: String,
    techSkills: Array,
    workflow: Array,
    software: Array,
    cv: String,
 });

const Users2 = mongoose.model('Users2', Schema);

const checkIfGoogleIdAlreadyExists = function(request, response){
  console.log("checkIfGoogleExists ha sido ejecutada");
  const receivedGoogleId = request.body.IdGoogle;
  Users2.find({googleId:receivedGoogleId}, function (err, userList){
    if (err) return console.error(err);
    if (userList.length === 0) createNewUser(receivedGoogleId);
    //funciones cuando ya estamos logueados
    })
}

const createNewUser = function(receivedGoogleId){
  console.log("createNewUser ejecutada");
  const nuevoUsuario = new Users2();
  nuevoUsuario.googleId = receivedGoogleId ;
  nuevoUsuario.name = " ";
  nuevoUsuario.surname = " ";
  nuevoUsuario.profilePic = " ";
  nuevoUsuario.extract = " ";
  nuevoUsuario.contact = " ";
  nuevoUsuario.speciality = " ";
  nuevoUsuario.mail = " ";
  nuevoUsuario.cv = " ";
  
  //console.log("nuevoUsuario es: ", nuevoUsuario);
  
  //guarda nuevo usuario en base de datos
  nuevoUsuario.save(function (err, nuevoUsuario){
    if (err) return console.error(err);
      console.log("createNewUser has succesfully saved a new user in the database");
    });
}
