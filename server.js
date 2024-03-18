const express = require('express')
const app =  express()
const cors = require('cors')
app.use(cors())
app.use(express.json());

app.get('/pico',(req,res)=>{
    console.log('hi')
    res.json({message:"hello from node server"})
})
app.post('/pico',(req,res)=>{
    console.log(req.body);
})

app.listen(3000,()=>{
    console.log('server running');
})