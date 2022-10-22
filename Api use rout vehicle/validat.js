///   model and Schema es me banega

const mongoose=require("mongoose");

 const vSchema=new mongoose.Schema({
//
  licensePlateNumber: String, 
  manufacturerName: String,
  model :String,
  fuelType:String,
  ownerName: String,
  rc_status :String,
  vehicle_Color:String, 
  registration_Date:Date,
  insurance_Upto: Date,
  fitness_Upto: Date,
  roadTax_Upto :Date
}, {collection:"list"});
   
  module.exports=mongoose.model("list",vSchema);
