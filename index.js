const express = require('express') ; 
const app = express() ; 

const PORT = 4023 ; 

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/client/dist"));


app.get('/',(req,res)=>{
  res.render('index')
}) 

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
}) 
