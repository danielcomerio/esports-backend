let mongoose = require('mongoose');

let pedidoFinalizadoSchema = mongoose.Schema({
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

    dataPedido: {
        type: String,
        required: true
    },

    dataEntrega: {
        type: String,
        required: true
    }
});

let PedidoFinalizado = module.exports = mongoose.model('PedidoFinalizado', pedidoFinalizadoSchema);
