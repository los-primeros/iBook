const mongoose = require('mongoose');

const userLogin = new mongoose.Schema({
    "email" : String ,
    "password" : String 
})
const userlogin = mongoose.model("User" , userLogin)

module.exports = userlogin 