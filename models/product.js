const mongoose = require('mongoose');

const Products  = new mongoose.Schema({
  name :{
      type  : String,
      required : true
  } ,
  price :{
    type  : String,
    required : true
} ,
})
module.exports = mongoose.model('products', Products)