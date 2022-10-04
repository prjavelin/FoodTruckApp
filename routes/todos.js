const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todos'); 
const { ensureAuth } = require('../middleware/auth');


router.get('/', ensureAuth, todosController.getAll);

router.get('/getOrder', ensureAuth, todosController.getAll);

router.post('/createOrder', todosController.createOrder);

router.put('/addItem/:id', todosController.addItem);

// http://localhost:9009/post/addItem/6334a98fdf08471e9c173010?_method=PUT
// eso es lo que esta saliendo de error que no se conecta


module.exports = router;