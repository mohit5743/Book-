const express = require('express');
require("../src/mongoose/connect.js");
const app = express();
const port =process.env.port || 3000;



app.get('/', async (req,resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    resp.send(data)
});



app.listen(port,()=>{
    console.log(`connection is live at port no .${port}`);
})

