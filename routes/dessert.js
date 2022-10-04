const express = require('express')
const router = express.Router()
const dessertController = require('../controllers/dessert') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, dessertController.getDesserts)

//  router.post('/createMenu', menuController.createMenu)

// router.put('/editMenu', menuController.changeMenu)


// router.delete('/deleteMenu', menuController.deleteMenu)

module.exports = router