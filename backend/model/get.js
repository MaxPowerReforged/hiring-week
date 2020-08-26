'use strict'

const mongoose = require('../modules/node_modules/mongoose');
const bodyParser = require('../modules/node_modules/body-parser');

const Schema = mongoose().Schema;

var UsuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    email: String,
    usuario: String,
    password: String
 });