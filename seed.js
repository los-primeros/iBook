const data = require('./data.json');
const Hotel = require('./db/models/Hotel')
const db = require("./db");

Hotel.insertMany(data, function (err, result) {
    if (err) throw err
    console.log('database')
})


