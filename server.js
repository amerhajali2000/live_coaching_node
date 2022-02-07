const express = require('express');
const app=express();
const morgan= require('morgan');
const cors= require('cors');
const connectdb= require('./config/db');
const user=require('./routers/user')
const category=require('./routers/category')
const data=require("./routers/data")

connectdb();

//the cors library for front end know and accept any request from api in node.js
app.use(cors());
app.options('*', cors);
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(morgan('tiny'));

app.use(user);
app.use(express.static('upload'), category);
app.use(express.static('upload'), data)

app.get("/" ,function(req,res){
    res.send("API is Running ")
});

const PORT= process.env.PORT ||3000;
app.listen(PORT,()=>console.log(`Server started in port ${PORT}`) );
module.exports = app;