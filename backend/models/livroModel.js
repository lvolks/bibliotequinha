const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
    codigo: Number,
    nome: {
        type: String,
        required: true,
      },
    descrição: {
        type: String,
        required: true,
      },
    imagem: {
        type: String,
        required: true,
      },
    genero: { type: mongoose.Schema.Types.String, ref: 'genero' }
});

const Livro = mongoose.model('Livro', LivroSchema);

module.exports = Livro;