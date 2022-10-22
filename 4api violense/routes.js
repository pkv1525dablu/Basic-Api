const {insertPost,findGet,deleteD,updatePut}=require("./service/serviceViolence");
  const express=require("express");
  const routes=express.Router();

  ////post
  routes.post("/post",insertPost);

  ////   get
     routes.get("/get",findGet);

     ////  delete
     routes.delete("/delete/:key",deleteD);

     ////// update
routes.put("/put/:key",updatePut);

module.exports=routes;

