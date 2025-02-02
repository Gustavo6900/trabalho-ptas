const express = require('express')
const app = express()
const index = require('./routes/index')
const rotas = require('./routes/rotas')
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/', index)
app.use('/produtos', rotas)





app.listen(3000, () => console.log('servidor rodando na porta 3000' ))