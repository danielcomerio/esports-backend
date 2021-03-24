let mongoose = require('mongoose');

let pedidoClienteSchema = mongoose.Schema({
    email: {
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
});

let PedidoCliente = module.exports = mongoose.model('PedidoCliente', pedidoClienteSchema);
