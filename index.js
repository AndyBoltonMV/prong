const express = require("express")
const app = express()

const path = require('path');

var htmlPath = path.join(__dirname, 'src');
app.use(express.static(htmlPath))

// app.get("/",(req,res)=> {
//     res.sendFile("index.html",{root: path.join(__dirname)})
// })

// app.get("/images",(req,res)=> {
//     console.log("lol")
//     res.sendFile("images",{root: path.join(__dirname)})
// })

app.listen(80, ()=> {
    console.log("listening on 80")
})