const express = require('express');
const cookie = require('cookie-parser');
const Connect = require('./config/database');
const { UserRouter } = require('./routes/user.route');
const ProRouter = require('./routes/product.route');
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookie());

app.set("view engine", "ejs");
app.set("views", __dirname+"/views");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:true}));

app.use("/User" ,UserRouter)
app.use("/product" , ProRouter)


Connect();
app.listen(process.env.PORT,()=>{
    console.log("server stadrt in 2002");
})