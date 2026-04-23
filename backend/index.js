import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

//connect to mongodb
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req,res)=>{
    res.send("welcome to goa pulse backend ");
})

app.listen(process.env.PORT, () =>{
    console.log('server is running on port:' , process.env.PORT);
})
