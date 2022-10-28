require("./config")
const routes=require("./routes");

const express=require("express");

const app=express();
app.use(express.json());
app.use("/api/p1",routes);

app.listen(4500);