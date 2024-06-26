const mongoose = require('mongoose');
const URL = process.env.MONGO_URL || 'mongodb://0.0.0.0:27017/biblioteca';
const db = mongoose.connect(URL);
const con = mongoose.connection;

con.on('open', function () {
  console.log('Conectado ao MongoDB!');
});

con.on('error', function () {
  console.log('Erro na conexão com o MongoDB!');
});

con.on('close', function () {
  console.log('Desconetado do MongoDB!');
});

module.exports = db;
