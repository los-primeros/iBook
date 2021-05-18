const express = require('express');
const app = express(); 
const db = require("./db/index.js");
// const Hotel = require("/db/models/hotel.js");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const controllers = require("./controllers/index.js");
const controller = require("./controllers/login.js");

const router= require("./routes/hotels.routes");

// app.use('/user', routes)


const PORT = 4023;

// bcrypt
var bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(express.json())
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/client/dist"));

app.get("/api/signup", controllers.getAll)
app.post("/api/signup", controllers.add)


app.post("/api/login", controller.add)
app.get("/api/login", controller.getAll)

// app.get('/', (req, res) => {
//   res.render('index')
// })

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,"client/dist" , "index.html"))
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
