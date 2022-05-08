require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const Volunteer = require('./models/Volunteer');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_SRV).then(()=>{
    console.log("connection succesfull ");
}).catch((err)=>console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res)=>{
     const data = await Volunteer.find()
     res.status(200).json(data);
});

app.post("/volunteer", async (req, res)=>{
    console.log(req.body)
    // const {Name, FoodType, Quantity, Phone, Time, Address, Note} = req.body
    const vol = new Volunteer(req.body)
    const response = await vol.save()
    res.status(200).json(response)
    
})
app.listen(port, ()=>{
    console.log(`server running on port : ${port}`);
})
