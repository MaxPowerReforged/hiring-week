'use strict'

const express = require('../modules/node_modules/express');
const mongoose = require('../modules/node_modules/mongoose');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


mongoose.connect('mongodb+srv://EquipoFactoriaF5:gremlin@cluster0.9xlsu.mongodb.net/hiringday?retryWrites=true&w=majority', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'console error:'));
db.once('open', function() {
    console.log('we re connected!');
    const Schema = new mongoose.Schema({
        name: String
    });
    const Users = mongoose.model('Users', Schema);
    const lucas = new Users({ name: 'Lucas'});
    console.log(lucas.name);
    
    lucas.save(function (err, lucas){
        if (err) return console.error(err);
        console.log("lucas ha sido salvado");
    });
    Users.find(function (err, user){
        if (err) return console.error(err);
        console.log(user);
    })
});
