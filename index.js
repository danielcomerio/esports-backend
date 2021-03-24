const express = require('express')
const app = express()
const controler = require('./controler.js');
const restify = require('restify');
const mongoose = require('mongoose');
const corsMiddleware = require('restify-cors-middleware');

const cors = corsMiddleware({
  origins: ["*"],
  allowHeaders: ["Authorization"],
  exposeHeaders: ["Authorization"]
});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


const mongoConnectionString = 'mongodb+srv://user:123@cluster0.rtjfm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8080;

mongoose.connect(mongoConnectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(_ => {
    /*---- INITIALIZE THE SERVER ONE ----*/
    const server = restify.createServer({
      name: 'E-Sports',
      version: '1.0.0'  //??
    });

    server.pre(cors.preflight);
    server.use(cors.actual);

    server.use(restify.plugins.acceptParser(server.acceptable));
    server.use(restify.plugins.queryParser());

    server.use(restify.plugins.bodyParser());


    /*---- SERVER ROUTES ----*/
    server.get('/cadastros', controler.getCadastros);
    server.get('/cadastro/:id', controler.getCadastro);
    server.post('/cadastro', controler.cadastro);
    server.post('/login', controler.login);

    server.post('/produto', controler.postProduto);
    server.post('/pedidoPedente', controler.postPedidoPedente);
    server.post('/PedidoEmAndamento', controler.postPedidoEmAndamento);
    server.post('/PedidoFinalizado', controler.postPedidoFinalizado);

    server.get('/produtos', controler.getProdutos);
    server.get('/produto/:id', controler.getProduto);

    server.get('/equipamentos', controler.getEquipamentos);
    server.get('/feminino', controler.getFeminino);
    server.get('/masculino', controler.getMasculino);
    server.get('/infantil', controler.getInfantil);
    server.get('/roupas', controler.getRoupas);
    server.get('/calcados', controler.getCalcados);

    //server.get('/estoque', controler.getEstoque);
    server.get('/pedidosPedentes', controler.getPedidosPedentes);
    server.get('/PedidosEmAndamento', controler.getPedidosEmAndamento);
    server.get('/PedidosFinalizados', controler.getPedidosFinalizados);

    server.get('/pedidosCliente', controler.getPedidosCliente);
    server.post('/pedidoCliente', controler.postPedidoCliente);

    server.get('/fornecedores', controler.getFornecedores);
    server.get('/fornecedorProdutos/:fornecedor', controler.getFornecedorProdutos);
    /*---- SERVER ROUTES ----*/


    /*---- LISTENING ----*/
    server.listen(PORT, () => {
      console.log('api listening on 8080'); // 187.36.176.64/32
    });
  })
  .catch(console.error);

