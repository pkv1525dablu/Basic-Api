const {runnerFind,runnerFindbyId,runnerInsert,runnerUpdate,runnerDelete}=require ("./service/runnerService");

const express=require("express");
const routes=express.Router();
   

//// find 
routes.get("/get",runnerFind);
///// find by id
routes.get("/get/:key",runnerFindbyId);

 /////  post
routes.post("/post",runnerInsert);
/////  update
routes.put("/put/:key",runnerUpdate);
////// delete
routes.delete("/delete/:key",runnerDelete);

module.exports=routes;