const mongoose = require('mongoose');

const Book= require('../models/author.js');

module.exports = {
  getAllBook: async (req, res, next) => {
    try {
      const results = await Book.find({}, { __v: 0 });
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },
createNewBook: async (req, res, next) => {
    try {
      const Book = new Book(req.body);
      const result = await Book.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
},
findBookById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const Book = await Book.findById(id);
      // const Book = await Book.findOne({ _id: id });
      if (!Book) {
        throw createError(404, 'Book does not exist.');
      }
      res.send(Book);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Book id'));
        return;
      }
      next(error);
    }
},
updateABook: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Book.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Book does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Product Id'));
      }

      next(error);
    }
},
deleteABook: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Book.findByIdAndDelete(id);
      // console.log(result);
      if (!result) {
        throw createError(404, 'Book does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Book id'));
        return;
      }
      next(error);
    }
  }
};