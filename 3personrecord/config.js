const dotenv=require("dotenv");
dotenv.config();

const mongoose=require("mongoose");
mongoose.connect(process.env.DB_CONNECT);
  
       ///// check coonnection with db
  mongoose.connection.on("error",error=>{
      console.log("connection fail");
   })
  mongoose.connection.on("connected",connected=>{
      console.log("connect with db");
  })
  module.exports=mongoose; 