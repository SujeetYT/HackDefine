const mongoose = require('mongoose');

const volunteerschema = new mongoose.Schema({
    Name : String,
    FoodType : String,
    Quantity : Number,
    Time : String,
    Address : String,
    Note : String
});

module.exports = mongoose.model("Volunteer", volunteerschema);