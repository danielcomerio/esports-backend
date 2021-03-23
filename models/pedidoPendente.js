let mongoose = require('mongoose');

let pedidoPendenteSchema = mongoose.Schema({
    fornecedor: {
        type: String,
        required: true
    },

    nomePedido: {
        type: String,
        required: true
    },

    valor: {
        type: Number,
        required: true
    },

    dataCriacao: {
        type: String,
        required: true
    }
});

let PedidoPendente = module.exports = mongoose.model('PedidoPendente', pedidoPendenteSchema);
