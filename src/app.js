const express = require('express');
require("../src/mongoose/connect");
const bookList =require("../src/models/author");
const bookRouter = require("..//src/routers/bookRouter");
const books= express();
books.use(express.json());
books.use(bookRouter);
const port =process.env.port || 5000;
books.listen(port,()=>{
    console.log(`connection is live at port no:${port}`);
})

