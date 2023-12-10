const Router = require('express');
const router = new Router();
const BookController = require('../controler/book_controler');

router.post('/book', (req, res) => {
  const bookControllerInstance = new BookController();
  bookControllerInstance.createBook(req, res);
});

router.get('/book', (req, res) => {
  const bookControllerInstance = new BookController();
  bookControllerInstance.getBooks(req, res);
});

router.get('/book/:id', (req, res) => {
  const bookControllerInstance = new BookController();
  bookControllerInstance.getOneBook(req, res);
});

router.put('/book/:id', (req, res) => {
  const bookControllerInstance = new BookController();
  bookControllerInstance.updateBook(req, res);
});

router.delete('/book/:id', (req, res) => {
  const bookControllerInstance = new BookController();
  bookControllerInstance.deleteBook(req, res);
});

module.exports = router;
