const express = require('express');
const app = express(); 
const db = require("./db/index.js");
// const Hotel = require("/db/models/hotel.js");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const controllers = require("./controllers/index.js");


const PORT = 4023;

app.use(express.json())
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/client/dist"));

app.post("/signup", controllers.add)


// app.get('/', (req, res) => {
//   res.render('index')
// })

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
