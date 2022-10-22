const mongoose = require("mongoose");
const serv = require("../validate");

////   post()
async function insertPost(req, res) {
  let data = new serv(req.body);
  let result = await data.save();
  console.log(result);
  res.send(result);
}
////  find()
async function findGet(req, res) {
  let result = await serv.find();
  console.log(result);
  res.send(result);
}

///// delete()
async function deleteD(req, res) {
  let result = await serv.deleteOne({_id:req.params.key});
  console.log(result);
  res.send(result);
}
///// update
async function updatePut(req, res) {
  let result = await serv.updateOne(
    { _id: req.params.key },
    { $set: req.body } );
    console.log(result);
    res.send(result);
}
   module.exports={insertPost,findGet,deleteD,updatePut};
