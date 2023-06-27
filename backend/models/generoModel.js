const mongoose = require('mongoose');

const GeneroSchema = new mongoose.Schema({
  codigo:{
    type: Number,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  }
});

const Genero = mongoose.model('Genero', GeneroSchema);

module.exports = Genero;
