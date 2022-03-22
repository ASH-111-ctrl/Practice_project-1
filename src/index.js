const express=require('express')
const app = express();
const env = require('dotenv')


env.config();

app.get('/',(req,res)=>{
    res.send("Sevrer is Ok")
})

app.listen(process.env.PORT,()=>{
    console.log(`server is Running on Port ${process.env.PORT}`)
})
