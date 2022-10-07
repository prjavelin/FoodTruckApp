const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const methodOverride = require("method-override");
// const cors = require('cors')

const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todos')
// adding the constant for the new routes
// const orderRoutes = require('./routes/orders')
// const clockRoutes = require('./routes/clock')
const menuRoutes = require('./routes/menu')
const mainCourseRoutes = require('./routes/mainCourse')
const appetizerRoutes = require('./routes/appetizer')
const dessertRoutes = require('./routes/dessert')
const coffeeRoutes = require('./routes/coffee')
const drinkRoutes = require('./routes/drink')
const accountingRoutes = require('./routes/accounting')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
app.use(methodOverride("_method"));
// app.use(cors)
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  
app.use('/', mainRoutes)
app.use('/todos', todoRoutes)
// added routes for extra pages
// app.use('/orders', orderRoutes)
// app.use('/clock', clockRoutes)

// menu and POS routes
app.use('/menu', menuRoutes)
app.use('/mainCourse', mainCourseRoutes)
app.use('/appetizer', appetizerRoutes)
app.use('/dessert', dessertRoutes)
app.use('/coffee', coffeeRoutes)
app.use('/drink', drinkRoutes)
app.use('/accounting', accountingRoutes)

 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    