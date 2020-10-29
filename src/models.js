const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

const matri = new mongoose.Schema({
    matricula: {
        type: Number,
        required: true,
    },
});

matri.plugin(mongoosePaginate);

module.exports = mongoose.model('matri', matri);
