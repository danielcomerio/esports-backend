let mongoose = require('mongoose');

let cadastroSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    sobreNome: {
        type: String,
        required: true
    },

    cpf: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    endereco1: {
        type: String,
        required: true
    },

    endereco2: {
        type: String
    },

    pais: {
        type: String,
        required: true
    },

    estado: {
        type: String,
        required: true
    },

    cep: {
        type: String,
        required: true
    },

    senha: {
        type: String,
        required: true
    },

    perfil: {
        type: String,
        required: true,
        default: 'cliente'
    }
});

let Cadastro = module.exports = mongoose.model('Cadastro', cadastroSchema);
