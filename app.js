let User = require('./models/user');

module.exports = {

    getUsers: (req, res, next) => {

        User.find().then(users => {
            res.json(users);
            return next();
        })
    },


    getUser: (req, res, next) => {

        User.findById(req.params.id).then(user => {
            if (user) {
                res.json(user);
            } else {
                res.status(404);
                res.json({ message: 'not found' });
            }
            return next();
        })
    },

    postUser: (req, res, next) => {

        let user = new User(req.body);
        user.save().then(user => {
            res.json(user);
        }).catch(error => {
            res.status(400);
            res.json({ message: error.message });
        });
    },

    login: (req, res, next) => {

        const { email, senha } = req.body;
        console.log(req.body);
        console.log(email);
        console.log(senha);
        User.find({ email: email, senha: senha }).then(user => {
            res.status(200);
            if (user.permissao == 'cliente') {
                res.json({ message: 'cliente' });
            } else {
                res.json({ message: 'admin' });
            }

        }).catch(error => {
            res.status(404);
            res.json({ message: error.message });
        })
    }

}
