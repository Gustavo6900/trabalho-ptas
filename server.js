const express = require('express')
const app = express()

const controller = require('./controllers/controllers')
const router = express.Router()

const route  = router.get('/', controller.get)
const create = router.post('/', controller.post)

app.use('/', route)
app.use('/produto', create)



app.listen(3000, () => console.log('servidor rodando na porta 3000' ))