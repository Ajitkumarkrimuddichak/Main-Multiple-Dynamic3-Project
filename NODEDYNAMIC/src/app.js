//Not a dynamic page and pura nahi hai sikhane ke liye only for use (thapa)
const express = require("express");
const path = require("path");
require("./db/conn");
const hbs = require("hbs");
const { registerPartials } = require("hbs");

const app = express();
const port = process.env.PORT || 3000;

//seting the path 
const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials");

 
//yah middleware hota hai
// app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/disk/css")));
// app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/disk/js")));
// app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(staticpath))
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);


// Routin function, app.get(path,callback)
app.get("/",(req,res) =>{
    res.render("index");
})
app.get("/contact",(req,res) =>{
    res.render("contact");
})




// Server create
app.listen(port, () =>{
    console.log(`Server is Running at port no ${port}`);
})