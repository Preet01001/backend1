const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sharmapunit1455:nitrogen123@cluster.rttkeuh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster");
const pr = new mongoose.Schema({
    name:String
})
const mod = mongoose.model("coll",pr);

const app = express();
app.use(cors());


app.get("/",async(req,resp)=>{
    let data = await mod.find();
    console.log(data)
  resp.send(data)
})


app.listen(4000,()=>{
    console.log("server started")
})