const mongoose=require("./config");
const validator=require("validator");

const xSchema=new mongoose.Schema({
 name:{
           type:String,
           required:true
        },
 email:{
            type:String,
            required:true,
            minlength:4,
            maxlength:20,
            unique:true,
            validate(value){
               if(! validator. isEmail(value)){
                  throw new error("email is not valid")
               }
            }
 },
 password:{
                  type:String,
                  required:true,
                  minlength:4,
                  maxlength:256
 },
},{collection:"record"});

 module.exports=mongoose.model("record",xSchema);
///

