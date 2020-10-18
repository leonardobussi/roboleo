const express = require('express');
const bp = require('body-parser');
const cors = require('cors')
const connection = require('./src/connection');
const controller = require('./src/controllers')

const app = express();

app.use(cors())
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));

app.post('/', controller.subir);
app.get('/', controller.pegar);

module.exports = app;

var port = process.env.PORT || 3000

app.listen(port, (err) => {
    connection.connect();
    if(err) {
        console.log('==> [-]  falha na aplicação');
    } else {
        console.log('==> [+] aplicação funcionando [localhost:3000]');
    }
});