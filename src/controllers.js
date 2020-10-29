require('./models');
const mongoose = require('mongoose');
const modelo =  mongoose.model('matri');


exports.pegarTodos =  async (req, res, next) => {
    try {  
        const dados = await modelo.find();
        return res.json(dados)

    } catch (err) {
        next(err);
    }
}
exports.pegarPorPage =  async (req, res, next) => {
    try {  
        const { page = 1 } = req.query
        const dados = await modelo.paginate({}, { page, limit: 10 })
        const dadosDocs = dados.docs
        //console.log(dadosDocs)
        return res.json(dados)

    } catch (err) {
        next(err);
    }
}



exports.subir =  async (req, res, next) => {
    try {
        let {nome} = req.body;
        let resultado = await modelo.findOne({nome});

       if(!resultado){
           let teste = await new  modelo(req.body).save();
           console.log(teste)
           return res.send('registrado com sucesso')
       } else {
        console.log('ja existe');
        return res.send('ja registrado')
       }
    } catch (err) {
        next(err);
    }
}