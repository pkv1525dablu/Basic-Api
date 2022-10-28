// const serv = require("../validate");

// ////post
// async function postData(req, res) {
//   try {
//     let data = new serv(req.body);
//     let result = await data.save();
//     console.log(result);
//     res.status(201).send(result);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// }


// //////// get all data
// async function getData(req, res) {
//   let result = await serv.find({});
//   console.log(result);
//   res.send(result);
// }

// //////    get  Byid
// async function getDataById(req, res) {
//     try {
//       let result = await serv.findById({ _id: req.params.key });
//       console.log(result);
//       if (!result) {
//         return res.status(404).send();
//       }
//       res.status(201).send(result);
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   }
  



// ////// delete data

// async function deleteData(req, res) {
//     try {
//       let result = await serv.deleteOne({ _id: req.params.key });
//       console.log(result);
//       if (!req.params.key) {
//         return res.status(404).send();   //  not found
//       }
//       res.status(201).send(result);
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   }
//   ////// put

// async function putData(req, res) {
//     try {
//       let result = await serv.updateOne(
//         { _id: req.params.key },
//         { $set: req.body },
//       );
//      console.log(result);
//       res.status(201).send(result);
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   }

// module.exports = { postData, getData, getDataById, putData, deleteData };
