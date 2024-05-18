const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : String,
    phone: {
        type : String,
        unique : true,
        required : true
    },
    profilePic : String,
    role : String,
    address:String,
},{
    timestamps : true
})


const User =  mongoose.model("user",userSchema)

module.exports = User