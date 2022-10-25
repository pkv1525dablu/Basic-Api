const mongoose = require("mongoose");
const serv = require("../validate");

///// get all details

async function runnerFind(req, res) {
  let result = await serv.find({}).sort({"ranking":1});
  console.log(result);
  res.send(result);
}

////// find indivisul detail()

async function runnerFindbyId(req, res) {
  try {
          let result = await serv.findById({ _id: req.params.key });
         console.log(result);
    if (!result) {
          res.status(400).send();
    }
          res.status(201).send(result);
  } catch (error) {
         res.status(400).send(error.message);
  }
}

///// post  ()

async function runnerInsert(req, res) {
  try {
    let data = new serv(req.body);
    let result = await data.save();
    console.log(result);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

///////     put    ()

async function runnerUpdate(req, res) {
  try {
    let result = await serv.updateOne(
      { _id: req.params.key },
      { $set: req.body }
    );
    console.log(result);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

////// delet

async function runnerDelete(req, res) {
  try {
    let result = await serv.deleteOne({ _id: req.params.key });
    console.log(result);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = {
  runnerFind,
  runnerFindbyId,
  runnerInsert,
  runnerUpdate,
  runnerDelete,
};
