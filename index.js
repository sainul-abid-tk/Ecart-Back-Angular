require('dotenv').config()
const express=require('express')
const cors=require('cors')
require('./Connection/DB')
const ecartServer=express()
const router=require('./Routes/router')
ecartServer.use(cors())
ecartServer.use(express.json())
ecartServer.use(router)
const PORT=3000 || process.env.PORT

ecartServer.listen(PORT,()=>{
    console.log(`Ecart Server Started at PORT: ${PORT}`);
})

ecartServer.get('/',(req,res)=>{
    res.send("<h1>Ecart server started..........Waiting for client Request!!!!</h1>")
})