require('dotenv').config()
const express=require("express");
const app=express();

const port=3000;

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.get("/login",(req,res)=>{
    res.send("Login page");
})

app.get("/twitter",(req,res)=>{
    res.send("<h1>Twitter</h1>");
})

app.listen(process.env.port,()=>{
    console.log(`port is running on ${port}`);
});