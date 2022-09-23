const {express} =require("express");
const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    Book:{
        type:String,
        required:true,
        trim:true
    },
    author:{
        type:String,
        required:true,
        trim:true
    },

})

const Booklist = new mongoose.model("Booklist",bookSchema);

module.exports=Booklist;