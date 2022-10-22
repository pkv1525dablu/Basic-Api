const { createP, findG, delD, updateP } = require("./service/VehicleService");
const express = require("express");
const router = express.Router();
/////  post data()

router.post("/post", createP);

/////  get data()
router.get("/get", findG);

//////   delete ()
router.delete("/delete/:key", delD);

//// upadte daat()
router.put("/put/:key", updateP);

module.exports = router;
