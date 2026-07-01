const mongoose = require('mongoose'); // importa biblioteca

const Usuario = mongoose.model('Usuario', {
    nome: { type: String, require: true, unique: true},
    senha: {typ: String, require: true}
});

module.exports = Usuario;
