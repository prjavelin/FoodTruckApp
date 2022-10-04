const express = require('express')
const router = express.Router()
const drinkController = require('../controllers/drink') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, drinkController.getDrink)

//  router.post('/createMenu', menuController.createMenu)

// router.put('/editMenu', menuController.changeMenu)


// router.delete('/deleteMenu', menuController.deleteMenu)

module.exports = router