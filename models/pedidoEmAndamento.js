let mongoose = require('mongoose');

let pedidoEmAndamentoSchema = mongoose.Schema({
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

    previsaoChegada: {
        type: String,
        required: true
    }
});

let PedidoEmAndamento = module.exports = mongoose.model('PedidoEmAndamento', pedidoEmAndamentoSchema);
