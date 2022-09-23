const express = require('express');
const router = new express.Router();
router.get('/list', async (req,resp)=>{
    let data = await bookList.find();
    resp.send(data);
});
router.post('/create',async (req,resp)=>{
    let data = new bookList(req.params);
    let result = await data.save();
    resp.send(result)
    }
);

router.delete('/delete/:_id', async (req,resp)=>{
    let data = await bookList.deleteOne(req.params);
    resp.send(data);
});
        
        
router.put('/update/:_id', async (req,resp)=>{
    let data = await bookList.updateOne(
        req.params,{
            $set: req.body
        }
    );
    resp.send(data);
});
module.exports = router;