const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    email : String,
    role : {
        type:String,
        enum : [ "user", "admin" ],
        default : "user",
    }
})

const User = mongoose.model("user", UserSchema);

module.exports=User