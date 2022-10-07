const Todo = require('../models/Todo')
const Menu = require('../models/Menu')
const Order = require('../models/Order')

module.exports = {

    getTax: async (req,res)=>{
        console.log(req.user)
        try{
            const taxRates = await Order.find({userId:req.user.id})
            // const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('accounting.ejs', {taxRates: localTax})
        }catch(err){
            console.log(err)
        }
    }




}