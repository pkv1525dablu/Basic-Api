const veSchema = require("./../validat");
const mongoose = require("mongoose");

/////  post result()
async function createP(req, resp) {
  let data = new veSchema(req.body);
  let result = await data.save();
  console.log(result);
  resp.send(result);
}

/////  get ()
async function findG(req, resp) {
  let result = await veSchema.find();
  console.log(result);
  resp.send(result);
}
/// delete result()
async function delD(req, resp) {
  // console.log(req.)
  let result = await veSchema.deleteOne({ _id: req.params.key});
  console.log(result);
  resp.send(result);
}
//// upadte daat()
async function updateP(req, resp) {
  try {
    let result = await veSchema.updateMany(
      { _id: req.params.key },
      { $set: req.body }
    );
  console.log(result);
    resp.send(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { createP, findG, delD, updateP };
