const express = require('express')
const app = express()
const index = require('./rotas/index')

app.use('/', index)



app.listen(3000, () => console.log('servidor rodando na porta 3000' ))