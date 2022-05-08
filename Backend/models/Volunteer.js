const mongoose = require('mongoose');

const volunteerschema = new mongoose.Schema({
    Name : String,
    FoodType : String,
    Quantity : Number,
    Phone : String,
    Time : {type : Date},
    Address : String,
    Note : String
});

module.exports = mongoose.model("Volunteer", volunteerschema);