const express = require('express')
const router = express.Router()
const coffeeController = require('../controllers/coffee') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, coffeeController.getCoffee)

//  router.post('/createMenu', menuController.createMenu)

// router.put('/editMenu', menuController.changeMenu)


// router.delete('/deleteMenu', menuController.deleteMenu)

module.exports = router