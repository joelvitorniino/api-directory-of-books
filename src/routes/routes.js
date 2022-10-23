const express = require("express");
const routes = express.Router();

const BooksController = require('../controllers/BooksController');

routes.get('/books', BooksController.index);
routes.post('/books', BooksController.store);
routes.get('/books/:bookId', BooksController.findById)
routes.post('/books/:bookId', BooksController.update)
routes.delete('/books/:bookId', BooksController.delete);

module.exports = routes;