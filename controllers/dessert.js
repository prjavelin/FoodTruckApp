const Todo = require('../models/Todo')
const Menu = require('../models/Menu')

module.exports = {


getDesserts: async (req,res)=>{
    console.log(req.user)
    try{
        const mainItems = await Menu.find({
            userId:req.user.id,
            category: 'dessert'
            
        })
        // const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
        // res.render('menu.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        res.render('dessert.ejs', {
          dessert: mainItems  
        })
    }catch(err){
        console.log(err)
    }
}
}