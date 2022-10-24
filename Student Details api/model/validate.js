  const mongoose=require("mongoose");
    const xyzSchema= new mongoose.Schema({
        name:String,
        age:Number,
        city:String}, {collection:"product"})
          // or
          // name:{
          //   type:String,
          //   required:true
          // },
          // age:{
          //   type:String,
          //   required:true
          // },
          // city:{
          //   type:String,
          //   required:true
          // }}, {collection:"product"})
         
         module.exports=mongoose.model("product",xyzSchema);