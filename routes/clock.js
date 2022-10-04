const express = require('express')
const router = express.Router()
const clockController = require('../controllers/clock') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, clockController.getTime)

// router.post('/createTodo', todosController.createTodo)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router