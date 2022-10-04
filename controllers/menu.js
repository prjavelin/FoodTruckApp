const Menu = require('../models/Menu')

module.exports = {
    // getTodos: async (req,res)=>{
    //     console.log(req.user)
    //     try{
    //         const todoItems = await Todo.find({userId:req.user.id})
    //         const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
    //         res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
    //     }catch(err){
    //         console.log(err)
    //     }
    // },

    // this get Main gets items from the database from the user that have the category of main 
    getMenu: async (req,res)=>{
        console.log(req.user)
        try{
            const menuItems = await Menu.find({userId:req.user.id})
            // const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            // res.render('menu.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
            res.render('menu.ejs', {
              menus: menuItems  
            })
        }catch(err){
            console.log(err)
        }
    },

    // getMenu: async (req,res)=>{
    //     console.log(req.user)
    //     try{
    //         const menuItems = await Menu.find({
    //             userId:req.user.id
               
    //         })
    //         // const itemsLeft = await Todo.countDocuments({userId:req.user.id,category:'main'})
    //         res.render('menu.ejs', {
    //             user: req.user, 
    //             name: req.body.name,
    //             category: req.body.category,
    //             price: req.body.price}),
    //         console.log({ user: req.user, 
    //             name: req.body.name,
    //             category: req.body.category,
    //             price: req.body.price})    
    //     }catch(err){
    //         console.log(err)
    //     }
    // },

    createMenu: async (req, res)=>{
        try{
            await Menu.create({
                userId: req.user.id, 
                name: req.body.name,
                category: req.body.category,
                price: req.body.price
                
                })
            console.log('Menu Item has been added!')
            res.redirect('/menu')
        }catch(err){
            console.log(err)
        }
    },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
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
    deleteMenu: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}  