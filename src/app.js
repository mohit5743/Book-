const express = require('express');
require("../src/mongoose/connect");
const bookList =require("../src/models/author")
const books= express();
const port =process.env.port || 5000;
books.get('/', async (req,resp)=>{
    resp.send(bookList);
});
books.post('/',async (req,resp)=>{
    try{
        const addingBookRecords= new bookList({
            "book": harrypotter ,
            "Author": J.K.Rowling
        })
        addingBookRecords.save();
    }catch(e){
        resp.send(e);
    }
})

books.listen(port,()=>{
    console.log(`connection is live at port no:${port}`);
})

