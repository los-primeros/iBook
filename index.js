const express = require('express');
const app = express(); 
const db = require("./db/index.js");
// const Hotel = require("/db/models/hotel.js");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");

// todo: fix this
var controllers = require("./controllers/usersignup");
// var controllers = require("./controllers/userlogin");
const controllers = require("./controllers/index.js");
const controller = require("./controllers/login.js");


const PORT = 4023;

app.use(express.json())
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/client/dist"));
// app.use((req,res , next) => {
//   console.log("hello")
//   next()
// })
app.get("/api/signup", controllers.getAll)
app.post("/api/signup", controllers.add)


app.post("/api/login", controller.add)

// app.get('/', (req, res) => {
//   res.render('index')
// })

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,"client/dist" , "index.html"))
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
