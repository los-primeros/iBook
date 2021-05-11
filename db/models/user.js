const mongoose = require('mongoose');

const userSignUp = new mongoose.Schema({
    "firstname": String,
    "lastname": String , 
    "age" : Number,
    "email" : String ,
    "password" : String 
})
const User = mongoose.model("User" , userSignUp)

module.exports = User 