const app = require('./app.js');
const restify = require('restify');
const mongoose = require('mongoose');

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

        server.use(restify.plugins.acceptParser(server.acceptable));
        server.use(restify.plugins.queryParser());

        server.use(restify.plugins.bodyParser());

        /*---- SERVER ROUTES ----*/
        server.get('/user', app.getUsers);
        server.get('/user/:id', app.getUser);
        server.post('/user', app.postUser);
        server.post('/login', app.login);

        /*---- LISTENING ----*/
        server.listen(PORT, () => {
            console.log('api listening on 8080'); // 187.36.176.64/32
        });
    })
    .catch(console.error);

