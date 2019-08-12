// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
import { Schema, model } from 'mongoose';

var tareaSchema = new Schema({
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  }
});
//nombre del modelo y su esquema
var Tarea = model('Tarea', tareaSchema);

module.exports = Tarea;
