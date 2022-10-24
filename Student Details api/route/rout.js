const express=require("express")
const router=express.Router();
const model=require("../model/validate")
 
router.get("/",(req,res)=>{
    res.send("hello piyush")
  })
  
router.get("/post",(req,res)=>{
    console.log(req.body)
  })
      
        module.exports=router;