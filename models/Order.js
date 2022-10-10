const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

createdAt: {
  type: Date,
  default: Date.now,
},

paid:{
type: Boolean,
required:true,
default: false
},

localTax:{
    type: Number,
    required:true,
    default: 0
},
stateTax:{
    type: Number,
    required:true,
    default: 0
},

subTotal :{
    type: Number, 
    required: true,
    default: 0
},

total:{
  type: Array,
  required: true,
  default: []

},
  items:{
    type: Array,
    required:true,
    default: []
  },
    total: {
    type: Number,
    required: true,
    default: 0
  },
  notes: {
    type: String,
    required: false,
  },
 
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Order', OrderSchema)
// module.exports = mongoose.model('mainCourse', OrderSchema)
// module.exports = mongoose.model('appetizer', OrderSchema)
// module.exports = mongoose.model('dessert', OrderSchema)
// module.exports = mongoose.model('coffee', OrderSchema)
// module.exports = mongoose.model('drink', OrderSchema)
