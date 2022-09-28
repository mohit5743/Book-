const express =require('express');

const router =new express.Router();

const bookController= require('../controllers/Book.controller');

//Get a list of all books
router.get('/', bookController.getAllProducts);

//Create a new book
router.post('/', bookController.createNewProduct);

//Get a book by id
router.get('/:id', bookController.findProductById);

//Update a book by id
router.patch('/:id', bookController.updateAProduct);

//Delete a book by id
router.delete('/:id', bookController.deleteAProduct);
module.exports= router;