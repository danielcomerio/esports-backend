let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true

    },

    senha: {
        type: String,
        required: true
    },

    permissao: {
        type: String,
        required: true,
        default: 'cliente'
    }
});

let User = module.exports = mongoose.model('User', userSchema);
