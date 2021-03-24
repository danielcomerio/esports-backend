let Cadastro = require('./models/cadastro');
let PedidoEmAndamento = require('./models/pedidoEmAndamento');
let PedidoFinalizado = require('./models/pedidoFinalizado');
let PedidoPendente = require('./models/pedidoPendente');
let Produto = require('./models/produto');
let PedidoCliente = require('./models/pedidoCliente');

module.exports = {

    getCadastros: (req, res, next) => {

        Cadastro.find().then(cadastros => {
            res.json(cadastros);
            return next();
        })
    },


    getCadastro: (req, res, next) => {

        Cadastro.findById(req.params.id).then(cadastro => {
            if (cadastro) {
                res.json(cadastro);
            } else {
                res.status(404);
                res.json({ message: 'not found' });
            }
            return next();
        })
    },

    cadastro: (req, res, next) => {

        let cadastro = new Cadastro(req.body);
        cadastro.save().then(cadastro => {
            res.json(cadastro);
        }).catch(error => {
            res.status(400);
            res.json({ message: error.message });
        });
    },

    login: (req, res, next) => {

        const { email, senha } = req.body;
        Cadastro.findOne({ email: email, senha: senha }).then(cadastro => {
            switch (cadastro.perfil) {
                case 'cliente':
                    res.status(200);
                    res.json({ message: 'cliente' });

                    break;
                case 'admin':
                    res.status(200);
                    res.json({ message: 'admin' });

                    break;
                default:
                    res.status(404);
                    res.json({ message: 'none' });
            }

        }).catch(error => {
            res.status(404);
            res.json({ message: error.message });
        })
    },



    postProduto: (req, res, next) => {
        let produto = new Produto(req.body);
        produto.save().then(produto => {
            res.json(produto);
        }).catch(error => {
            res.status(400);
            res.json({ message: error.message });
        });
    },

    postPedidoPedente: (req, res, next) => {
        let pedidoPedente = new PedidoPedente(req.body);
        pedidoPedente.save().then(pedidoPedente => {
            res.json(pedidoPedente);
        }).catch(error => {
            res.status(400);
            res.json({ message: error.message });
        });
    },

    postPedidoEmAndamento: (req, res, next) => {
        let pedidoEmAndamento = new PedidoEmAndamento(req.body);
        pedidoEmAndamento.save().then(pedidoEmAndamento => {
            res.json(pedidoEmAndamento);
        }).catch(error => {
            res.status(400);
            res.json({ message: error.message });
        });
    },

    postPedidoFinalizado: (req, res, next) => {
        let pedidoFinalizado = new PedidoFinalizado(req.body);
        pedidoFinalizado.save().then(pedidoFinalizado => {
            res.json(pedidoFinalizado);
        }).catch(error => {
            res.status(400);
            res.json({ message: error.message });
        });
    },



    getProdutos: (req, res, next) => {

        Produto.find().then(produtos => {
            res.json(produtos);
            return next();
        })
    },

    getProduto: (req, res, next) => {

        Produto.findById(req.params.id).then(produto => {
            if (produto) {
                res.json(produto);
            } else {
                res.status(404);
                res.json({ message: 'not found' });
            }
            return next();
        })
    },


    getEquipamentos: (req, res, next) => {

        Produto.find({ categoria: 'equipamentos' }).then(produtos => {
            res.json(produtos);
            return next();
        })
    },

    getFeminino: (req, res, next) => {

        Produto.find({ categoria: 'feminino' }).then(produtos => {
            res.json(produtos);
            return next();
        })
    },

    getMasculino: (req, res, next) => {

        Produto.find({ categoria: 'masculino' }).then(produtos => {
            res.json(produtos);
            return next();
        })
    },

    getInfantil: (req, res, next) => {

        Produto.find({ categoria: 'infantil' }).then(produtos => {
            res.json(produtos);
            return next();
        })
    },

    getRoupas: (req, res, next) => {

        Produto.find({ categoria: 'roupas' }).then(produtos => {
            res.json(produtos);
            return next();
        })
    },

    getCalcados: (req, res, next) => {

        Produto.find({ categoria: 'calcados' }).then(produtos => {
            res.json(produtos);
            return next();
        })
    },



    getPedidosPedentes: (req, res, next) => {

        PedidoPendente.find().then(pedidos => {
            res.json(pedidos);
            return next();
        })
    },

    getPedidosEmAndamento: (req, res, next) => {

        PedidoEmAndamento.find().then(pedidos => {
            res.json(pedidos);
            return next();
        })
    },

    getPedidosFinalizados: (req, res, next) => {

        PedidoFinalizado.find().then(pedidos => {
            res.json(pedidos);
            return next();
        })
    },


    getPedidosCliente: (req, res, next) => {

        PedidoCliente.find().then(pedidos => {
            res.json(pedidos);
            return next();
        })
    },

    postPedidoCliente: (req, res, next) => {

        let pedidoCliente = new PedidoCliente(req.body);
        pedidoCliente.save().then(pedidoCliente => {
            res.json(pedidoCliente);
        }).catch(error => {
            res.status(400);
            res.json({ message: error.message });
        });
    },


    getFornecedores: (req, res, next) => {

        Produto.find().distinct('fornecedor').select('fornecedor').then(fornecedores => {
            res.json(fornecedores);
            return next();
        })
    },

    getFornecedorProdutos: (req, res, next) => {
        let { fornecedor } = req.body
        Produto.find({ 'fornecedor': fornecedor }).then(pedidos => {
            res.json(pedidos);
            return next();
        })
    },

}
