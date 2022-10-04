const express = require('express')
const router = express.Router()
const menuController = require('../controllers/menu') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, menuController.getMenu)

 router.post('/createMenu', menuController.createMenu)

// router.put('/editMenu', menuController.changeMenu)


// router.delete('/deleteMenu', menuController.deleteMenu)

module.exports = router