const mongoose = require("mongoose");
const url ='mongodb+srv://mohit:mchopra123@cluster0.36k0lak.mongodb.net/?retryWrites=true&w=majority';
const db =async ()=>{
    const conn = mongoose.connect(url, {
        useCreateIndex: "true",
        useNewUrlParser: "true",
        useUnifiedTopology: "true",
        useFindAndModify: "false"
    })
}

