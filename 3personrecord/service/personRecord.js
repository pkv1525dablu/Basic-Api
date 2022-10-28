const serv = require("../validate");
const bcrypt = require("bcrypt");
const Joi = require("joi");

////// encrypt
async function convertPasswordToHash(password) {
  const saltRounds = 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hash = await bcrypt.hashSync(password, salt);
  return hash;
}
//////////////  joi

const userValidationSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),

  password: Joi.string().alphanum().min(3).max(30).required(),
});

////post
async function postData(req, res) {

  try {
    const { error, value } = await userValidationSchema.validate(req.body);
    if (error) {
      res.status(404).send({
        message: error.message
      });
    }

    let data = new serv(value);
    data.password = await convertPasswordToHash(value.password);

    console.log(data.password);
//////
    let result = await data.save();
    console.log(result);
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
//////// get all data
async function getData(req, res) {
  let result = await serv.find({});
  console.log(result);
  res.send(result);
}

//////    get  Byid

async function getDataById(req, res) {
  try {
    let result = await serv.findById({ _id: req.params.key });
    console.log(result);
    if (!result) {
      return res.status(404).send();
    }
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
}

////// put

async function putData(req, res) {
  try {
    let result = await serv.updateOne(
      { _id: req.params.key },
      { $set: req.body }
    );
    console.log(result);
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
}

////// delete data

async function deleteData(req, res) {
  try {
    let result = await serv.deleteOne({ _id: req.params.key });
    console.log(result);
    if (!result) {
      return res.status(404).send();
    }
    res.status(210).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = { postData, getData, getDataById, putData, deleteData };
