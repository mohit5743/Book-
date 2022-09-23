const mongoose =require('mongoose');
const mongodb= require('mongodb');
mongoose.connect('mongodb+srv://mohitchopra5743:Mchopra123@cluster0.2wyzgln.mongodb.net/test',
{
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify :true,
    useUnifiedTopology:true}).then(()=>{
        console.log("connection successfull");
}).catch(()=>{
        console.log("no connection");
});


