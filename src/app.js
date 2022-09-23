const express = require('express');
require("../src/mongoose/connect");
const bookList =require("../src/models/author")
const books= express();
books.use(express.json());
const port =process.env.port || 5000;

books.post('/create',async (req,resp)=>{
    let data = new bookList(req.params);
    let result = await data.save();
    resp.send(result)
    }
);

books.get('/list', async (req,resp)=>{
    let data = await bookList.find();
    resp.send(data);
});

books.delete('/delete/:_id', async (req,resp)=>{
    let data = await bookList.deleteOne(req.params);
    resp.send(data);
});

books.put('/update/:_id', async (req,resp)=>{
    let data = await bookList.updateOne(
        req.params,{
            $set: req.body
        }
    );
    resp.send(data);
});


books.listen(port,()=>{
    console.log(`connection is live at port no:${port}`);
})

