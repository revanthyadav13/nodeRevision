const express=require('express');

const router=express.Router();


app.use('/',(req, res, next)=>{
    res.send('<h1>Welcome to express</h1>')
});

module.exports=router;