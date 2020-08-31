'use strict'

const express = require('../modules/node_modules/express');
const mongoose = require('../modules/node_modules/mongoose');
const bodyParser = require('../modules/node_modules/body-parser');
const port = 3000;
const cors = require('../modules/node_modules/cors');

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://EquipoFactoriaF5:gremlin@cluster0.9xlsu.mongodb.net/hiringday?retryWrites=true&w=majority', {useNewUrlParser: true});
const db = mongoose.connection;
const Schema = new mongoose.Schema({
 name: String,
 email: String,
 telefono: String, 
 
         });
const Users2 = mongoose.model('Users2', Schema);

app.get('/', (req, res) => {
    
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/enviarFormulario',function(request,response){
   console.log(request.body) //you will get your data in this as object.
 
   db.on('error', console.error.bind(console, 'console error:'));
   db.once('open', function() {
       console.log('we re connected!');
      
       const nuevoUsuario = new Users2(request.body);

       
       nuevoUsuario.save(function (err, nuevoUsuario){
           if (err) return console.error(err);
           console.log("lucas ha sido salvado");
       });
       Users2.find(function (err, user){
           if (err) return console.error(err);
           console.log(user);
       })
   }) 
})



