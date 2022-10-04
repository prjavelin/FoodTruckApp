const mongoose = require('mongoose')

const MenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
    price: {
    type: Number,
    required: true,
  },
  // notes: {
  //   type: String,
  //   required: false,
  // },

  // transactionId: {
  //   type: String,
  //   required: true,
  // },
  // itemId: {
  //   type: String,
  //   required: true
  // },

  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Menu', MenuSchema)