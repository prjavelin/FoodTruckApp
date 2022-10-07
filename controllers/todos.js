const Todo = require('../models/Todo')
const Menu = require('../models/Menu')
const Order = require('../models/Order')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },

    // this get Main gets items from the database from the user that have the category of main 
    // getMains: async (req,res)=>{
    //     console.log(req.user)
    //     try{
    //         const todoItems = await Todo.find({userId:req.user.id})
    //         const itemsLeft = await Todo.countDocuments({userId:req.user.id,category:'main'})
    //         res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
    //     }catch(err){
    //         console.log(err)
    //     }
    // },

    getAll: async (req,res)=>{
            console.log(req.user)
            try{
                const mainItems = await Menu.find({userId:req.user.id              
                })
                const openOrders = await Order.findOne({paid: false})
                // const  openOrders= await Order.find({paid: false})
                res.render('todos.ejs', {allItems: mainItems, orders: openOrders})
                console.log(openOrders)
                
            }catch(err){
                console.log(err)
            }
        },

  

    createOrder: async (req, res)=>{
        try{
            await Order.create({paid: false, userId: req.user.id})
            console.log('Order has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },

    addItem: async (req, res)=>{
        console.log(req.params.id)
        try{
            // const mainItems = await Menu.find({userId:req.user.id}             
            
            // )

            await Order.findOneAndUpdate({
                paid: false
            }, {$push: {items: req.params.id}})
                        
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },

    deleteItem: async (req, res)=>{
        console.log('made it to controller')
        try{
           
            await Order.findOneAndUpdate({
                paid: false,
            }, {$pop: {items: 1}}
        )      
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    }

    

  




    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },


    // deleteTodo: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
    //         console.log('Deleted Todo')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}    