require("dotenv/config");

const mongoose=require("mongoose");
mongoose.connect(process.env.DB_CONNECTION)
    console.log("connected to db");
