const mongoose = require("mongoose");

const db =async ()=>{
     mongoose.connect('mongodb+srv://mohit:Mchopra123@cluster0.36k0lak.mongodb.net/?retryWrites=true&w=majority', {
        useCreateIndex: "true",
        useNewUrlParser: "true",
        useUnifiedTopology: "true",
        useFindAndModify: "false"
    }).then(()=>{
            console.log("connection established");
    }).catch(()=>{
        console.log("connection not estblished");
    })
};