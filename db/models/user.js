const mongoose = require('mongoose');

const userSignUp = new mongoose.Schema({
    "firstname": String,
    "lastname": String , 
    "email" : String ,
    "password" : String ,
    "password2" : String 
})
const User = mongoose.model("User" , userSignUp)

module.exports = User 