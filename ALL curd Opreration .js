      ///  database create kar liye
      const mongoose=require("mongoose");
      var validator = require('validator');
      mongoose.connect("mongodb://localhost:27017/list",{useNewUrlParser: true,useUnifiedTopology: true})
      .then(()=>console.log("connecterd ......."))
      .catch((error)=>console.log("error"));


          //validation    /////    structure define kar liye yani  data ka typee
 // mongoose=require("mongoose");
//  const xyzSchema=new mongoose.Schema({
//             name:String,
//             city:String,
//             city:String,
//             video:String,
//             email:String },{collection:"product"});
//  /// collection create kar liye 
//     const xproduct= new mongoose.model("product",xyzSchema)

            /////  ||  or  ||

  const xyzSchema=new mongoose.Schema({
           name:String,
           age:Number,
           city:{
                   type:String,
                   required:true,
                   enum:["kota","pune","ara"]
               },
           date: {
                  type:Date,
                  default:Date.now
               },
           video:{
                  type:Number,
                  validate(value){
                         if(value<0){
                         throw new error("not valid")
                    }
                }
            },
           email:{
                 type: String,
                 required:true,
                 validate(value){
                    if(! validator.isEmail(value)){
                        throw new error("email id not valid ")
                    }
                 } 
           }   
  },{collection:"product"});
           
  /// collection create kar liye 
     const xproduct= new mongoose.model("product",xyzSchema);


     ////  Multi doc creat    post()

//        const create= async()=>{
//    try{
//       const data= new xproduct ({
//         name:'kitu',
//         city:"pune",
//         video:8,
//         email:"kituvr055@gmail.com"
        
//     })
//            const data2= new xproduct ({
//          name:'ravi',
//         city:"kota",
//         video:8,
//         email:"ravivr055@gmail.com",
        
       
//                })
              /////   ||  or  ||    Single r doc create
             
       const create= async()=>{
  try{
         const data= new xproduct ({
         name:'rahul',
         city:"ara",
         video:1,
         email:"rohitvr055@gmail.com",
         });

      let result= await  xproduct.insertMany([data]);
      console.log(result);
    } catch(error){
          console.log(error);
       }
   }
       //////   read data   
 const read=async()=>{
const result= await xproduct.find()
                                .find({age:28})
                             // .find({age:{$lte:25}})  //// less than equal to
                            // .find({age:{$in:[24]}})   //// 
                            // .find({age:{$gt:25}})  //// gt greateher than >  25 se age jiska bada hoga uska valu dega
                             .select({name:1})   ///  data me se only name  dega
                             .limit(3); //////  only one person ka detail dega
          console.log(result);                    ///  if (2) = two person ka data
         }
        

      //////  logical operator   || or||  || and ||

      const logical=async()=>{
        const result= await xproduct.find//({$or:[{name:"neha"},{age:24}]})
                                          ({$and:[{name:"neha"},{age:22}]});
                  console.log(result);                   
                 }
            

                 //////   sorting  
         const sort=async()=>{
         const result= await xproduct.find().sort({name:1}) ///ascending order
                                            .select({name:1})
                                          //.sort({name:-1});  ///decending order
             console.log(result);                   
                             
            }
            
            //////   updaet document

            const updatedoc= async(_id)=>{
        try{
                    let result=await  xproduct.updateOne({_id},{
                        $set: {name:'ravi'}
                    })
                    console.log(result);

         } catch(error){
        console.log(error)
         }
            }
           // updatedoc("635151295a54cabbf172f3f2");

            /////  delete
             
             const delDoc=async(key)=>{   /////   ya per kuchh bhi likh sakte hai
                let result=await  xproduct.deleteOne({name:key})
                  console.log(result);
             }
             create();
              