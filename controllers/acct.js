const Todo = require('../models/Todo')
const Menu = require('../models/Menu')
const Order = require('../models/Order')
const User = require('../models/User')

module.exports = {

    getTax: async (req,res)=>{
        console.log(req.user)
        try{
             const taxRates = await User.find({userId:req.user.id})
            // const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            // res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user}) este es el ejemplo
            res.render('accounting.ejs', {taxes: req.user})
            console.log(taxRates)
        }catch(err){
            console.log(err)
        }
    },

    changeLocal: async (req, res)=>{
        console.log(req.params.id)
        try{

            // await Menu.create({
            //     userId: req.user.id, 
            //     name: req.body.name,
            //     category: req.body.category,
            //     price: req.body.price
                
            //     })
            // const taxRates = await User.find({userId:req.user.id})
            await User.findOneAndUpdate({
                userId: req.params._id
            }, {$set: {localTax: req.body.localTax}})
                        
            res.redirect('/accounting')
        }catch(err){
            console.log(err)
        }
    },

    changeState: async (req, res)=>{
        console.log(req.params.id)
        try{

            await User.findOneAndUpdate({
                userId: req.params._id
            }, {$set: {stateTax: req.body.stateTax}})
                        
            res.redirect('/accounting')
        }catch(err){
            console.log(err)
        }
    }




}