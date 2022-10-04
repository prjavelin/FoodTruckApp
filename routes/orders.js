const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth')

// router.get('/', ensureAuth, todosController.getTodos)

router.get('/', ensureAuth, todosController.getAll)

// router.get('/', ensureAuth, todosController.getOrder)

router.get('/getOrder', ensureAuth, todosController.getOrder)

router.post('/createOrder', todosController.createOrder)

router.put('/addItem/userId', todosController.addItem)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router