const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todos'); 
const { ensureAuth } = require('../middleware/auth');


router.get('/', ensureAuth, todosController.getAll);

router.get('/getOrder', ensureAuth, todosController.getAll);

router.post('/createOrder', todosController.createOrder);

router.put('/addItem/:id', todosController.addItem);

router.delete('/deleteItem/:id', todosController.deleteItem)

module.exports = router;