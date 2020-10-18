const mongoose = require('mongoose');

const schema = mongoose.Schema;

const teste = new schema({
    posicao: {
        type: Number,
        required: true,
    },
    matricula: {
        type: Number,
        required: true,
    },
    nome: {
        type: String,
        required: true,
        trim: true
    },
    classificacao: {
        type: String,
        required: true,
    },
    turma: {
        type: Number,
        required: true,
    },
    dataAdm: {
        type: String,
        required: true,
    },
    
});

module.exports = mongoose.model('teste', teste);
