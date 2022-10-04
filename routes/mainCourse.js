const express = require('express')
const router = express.Router()
const mainCourseController = require('../controllers/mainCourse') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, mainCourseController.getMains)

//  router.post('/createMenu', menuController.createMenu)

// router.put('/editMenu', menuController.changeMenu)


// router.delete('/deleteMenu', menuController.deleteMenu)

module.exports = router