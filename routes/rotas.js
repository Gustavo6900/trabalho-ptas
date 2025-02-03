const express = require('express')
const router = express.Router()
const controller = require('../controllers/controllers')

router.post('/add', controller.post)
router.put('/:id', controller.put)
router.delete('/:id', controller.delete)
router.get('/:id', controller.busca)



module.exports = router