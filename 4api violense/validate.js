const mongoose= require("mongoose");
const xyzSchema=new mongoose.Schema({
    licensePlateNumber: String,
    violationType: String,
    status:String,
    date : Date,
    time: Date,
    location: String,
    videoUrl: String
},{collection:"data"});

  module.exports=     mongoose.model("data",xyzSchema);