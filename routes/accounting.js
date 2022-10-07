const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todos'); 
const { ensureAuth } = require('../middleware/auth');


router.get('/', ensureAuth, acctController.getTax);

// router.get('/getOrder', ensureAuth, todosController.getAll);

// router.post('/createOrder', todosController.createOrder);

// router.put('/addItem/:id', todosController.addItem);

// router.put('/sumItem/:id', todosController.sumItem);

// router.put('/deleteItem/:id', todosController.deleteItem)


module.exports = router;