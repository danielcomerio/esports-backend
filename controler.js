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
        User.findOne({ email: email, senha: senha }).then(user => {
            switch (user.permissao) {
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
    }

}
