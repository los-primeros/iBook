const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    "name": String,
    "adress": String,
    "Description": String,
    "image": String,
    "rate": Number,
    "country": String
});
const Hotel = mongoose.model('Hotel', hotelSchema); 

module.exports = Hotel
