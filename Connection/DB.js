const mongoose=require('mongoose')

const connectionString=process.env.DB_Connection_String

mongoose.connect(connectionString).then((res)=>{
    console.log("Ecart Server Connected successfully with monogoDB!!");
}).catch((err)=>{
    console.log(err);
})