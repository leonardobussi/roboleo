const mongoose = require('mongoose');
//const mongoosePaginate = require('mongoose-paginate')

const funcionaro = new mongoose.Schema({
    matricula: {
        type: Number,
        required: true,
    },
    nome: {
        type: String,
        required: true,
        trim: true
    },
    id_turma: {
        type: Number,
        required: true,
    },
    data_admissao: {
        type: String,
        required: false,
        trim: true,
    },
    ROW_NUM: {
        type: Number,
        required: false
    }
});

//matri.plugin(mongoosePaginate);

module.exports = mongoose.model('funcionarios', funcionaro);
