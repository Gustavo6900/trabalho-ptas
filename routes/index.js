const express = require('express')
const router = express.Router()
const controller = require('../controllers/controllers')

const route  = router.get('/', controller.get)


module.exports = router 