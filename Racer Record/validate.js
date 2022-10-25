   const mongoose=require("mongoose");
   const  runnerSchema=new  mongoose.Schema({
    // name:String,
    // ranking:Number,
    //   name:String,
    //  dob:Date,
    //  score:Number
    event:{
      type:String,
      required:true,
      default:"100m"            //////   sab me 100m likha hua automatic aa jayeaga  aa jayega
},
    ranking:{
               type:Number,
               required:true,
               unique:true
    },
 name:String,
 dob:Date,
 country:{
                  type:String,
                  required:true,
                  trim:true
 },
    score:{
                    type:Number,
                    required:true,
    },
  
   },{collection:"runnerList"});
     module.exports=mongoose.model("runnerList",runnerSchema);
