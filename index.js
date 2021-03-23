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



var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};

app.set(allowCrossDomain);

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
    server.get('/user', controler.getUsers);
    server.get('/user/:id', controler.getUser);
    server.post('/user', controler.postUser);
    server.post('/login', controler.login);

    /*---- LISTENING ----*/
    server.listen(PORT, () => {
      console.log('api listening on 8080'); // 187.36.176.64/32
    });
  })
  .catch(console.error);

