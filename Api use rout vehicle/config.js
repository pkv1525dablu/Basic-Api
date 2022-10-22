   
const dotenv=require("dotenv");
 dotenv.config();                                     ///'The `uri` parameter to `openUri() == ( error  likhega)   
 const mongoose=require("mongoose");
mongoose.connect(process.env.DB_CONNECT);




