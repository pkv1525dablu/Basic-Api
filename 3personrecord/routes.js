  const {postData,getData,getDataById,putData,deleteData}=require ("./service/personRecord");

     const express=require("express");
     const routes=express.Router();

     /////post

     routes.post("/post", postData);

     ////// get 
     routes.get("/get",getData);

     /////  get byid
       routes.get("/get/:key",getDataById)

       ///////    put   update by id

       routes.put("/put/:key",putData);

       /////  delete by id

       routes.delete("/delete/:key",deleteData);


       module.exports=routes;


