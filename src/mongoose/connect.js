const mongoose = require("mongoose");

const db = ()=>{
        mongoose.connect('mongodb+srv://mohit:Mchopra123@cluster0.36k0lak.mongodb.net/?retryWrites=true&w=majority', {
        useCreateIndex: "true",
        useNewUrlParser: "true",
        useUnifiedTopology: "true",
        useFindAndModify: "false"
    }).then(()=>{
            console.log("connection established");
    }).catch(err=>console.log(err.message));
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to db...');
      });
    
      mongoose.connection.on('error', err => {
        console.log(err.message);
      });
    
      mongoose.connection.on('disconnected', () => {
        console.log('Mongoose connection is disconnected...');
      });
    
      process.on('SIGINT', () => {
        mongoose.connection.close(() => {
          console.log(
            'Mongoose connection is disconnected due to app termination...'
          );
          process.exit(0);
        });
      });
};
module.exports=db;