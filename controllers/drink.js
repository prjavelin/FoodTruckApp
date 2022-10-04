const Todo = require('../models/Todo')
const Menu = require('../models/Menu')

module.exports = {


getDrink: async (req,res)=>{
    console.log(req.user)
    try{
        const mainItems = await Menu.find({
            userId:req.user.id,
            category: 'drink'
            
        })
        // const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
        // res.render('menu.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        res.render('drink.ejs', {
          drink: mainItems  
        })
    }catch(err){
        console.log(err)
    }
}
}