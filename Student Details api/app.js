const express=require("express");
const app=express();
require ("./connectwithdb");
  app.use(express.json());
const router=require("./route/rout")
   // const bodyparser=require("body-parser")
    app.use(express.json())
     ///
  app.get("/post",(req,res)=>{
    res.send("i am post out")
  })
  app.get("/post",(req,res)=>{
    res.send(req.body)
  })
//        //  connect to db
//       const mongoose=require("mongoose");
//   mongoose.connect(process.env.DB_CONNECTION,()=>{
//       console.log("connected to db");
//   })
    
   app.listen(3000);