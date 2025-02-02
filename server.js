const express = require('express')
const app = express()
const index = require('./rotas/index')
const create = require('./rotas/create')

app.use('/', index)
app.use('/produtos',  create)



app.listen(3000, () => console.log('servidor rodando na porta 3000' ))