const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
var Tarea = mongoose.model('Tarea', tareaSchema);

module.exports = Tarea;
