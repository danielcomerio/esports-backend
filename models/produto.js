let mongoose = require('mongoose');

let produtoSchema = mongoose.Schema({
    fornecedor: {
        type: String,
        required: true,
    },

    nome: {
        type: String,
        required: true,
        unique: true
    },

    img: {
        type: String,
        required: true
    },

    descricao: {
        type: String,
        required: true
    },

    categoria: {
        type: String,
        required: true
    },

    preco: {
        type: Number,
        required: true
    },

    qntdMax: {
        type: Number,
        required: true
    },

    qntdMin: {
        type: Number,
        required: true
    },

    dataInicial: {
        type: String,
        required: true
    },

    dataFinal: {
        type: String,
        required: true
    },

    dataDescont: {
        type: String,
        required: true
    },
});

let Produto = module.exports = mongoose.model('Produto', produtoSchema);
