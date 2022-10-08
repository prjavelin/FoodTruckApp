const express = require('express');
const router = express.Router();
const acctController = require('../controllers/acct'); 
const { ensureAuth } = require('../middleware/auth');


router.get('/', ensureAuth, acctController.getTax);

// router.get('/getOrder', ensureAuth, todosController.getAll);

// router.post('/createOrder', todosController.createOrder);

router.put('/changeLocal/:id', acctController.changeLocal);

router.put('/changeState/:id', acctController.changeState);

// router.put('/sumItem/:id', todosController.sumItem);

// router.put('/deleteItem/:id', todosController.deleteItem)


module.exports = router;