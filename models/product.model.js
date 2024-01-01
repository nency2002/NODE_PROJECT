const mongoose = require('mongoose');

const ProductShcema = new mongoose.Schema({
    title:String,
    desc:String,
    price:Number,
    category:String,
    image:String,
    userID:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
});

const Product = mongoose.model("Product", ProductShcema);

module.exports=Product;