const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

const teste = new mongoose.Schema({
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

teste.plugin(mongoosePaginate);

module.exports = mongoose.model('teste', teste);
