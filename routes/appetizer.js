const express = require('express')
const router = express.Router()
const appetizerController = require('../controllers/appetizer') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, appetizerController.getApps)

//  router.post('/createMenu', menuController.createMenu)

// router.put('/editMenu', menuController.changeMenu)


// router.delete('/deleteMenu', menuController.deleteMenu)

module.exports = router