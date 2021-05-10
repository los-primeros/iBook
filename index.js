const express = require('express') ; 
const app = express() ; 

const PORT = 4023 ; 

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(__dirname + "/client/dist/bundle.js"));
// app.use('/',express.static(__dirname));


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
}) 
