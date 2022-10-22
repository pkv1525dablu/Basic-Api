const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-commerce");
const xyzSchema = new mongoose.Schema(
  { name: String, age: Number, model: String },
  { collection: "video" }
);
////  insert ()
const InsertInDb = async () => {
  const datamodel = mongoose.model("video", xyzSchema);
  let data = new datamodel({
    name: "ravi",
    age: 26,
    model: "top",
    company: "bmw",
  });
  let result = await data.save();
  console.log(result);
};
//// update data
const updateInDb = async () => {
  const datamodel = mongoose.model("video", xyzSchema);
  let result = await datamodel.updateMany(
    {
      name: "joy",
    },
    { $set: { age:100 } }
  );
  console.log(result);
};
     //////   delete()

     const deleteInDb=async()=>{
        const datamodel=mongoose.model("video",xyzSchema)
        let result=await datamodel.deleteOne()
        console.log(result);
     }

        ////// read()
   const findInDb=async()=>{
       let datamodel=mongoose.model("video",xyzSchema);
         let result=await datamodel.find();
            console.log(result);
   }
   updateInDb();
