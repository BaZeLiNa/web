const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'books.json');

class BookController {
  constructor() {
    this.books = JSON.parse(fs.readFileSync(dataFilePath));
  }

  getMaxId() {
    const maxId = this.books.reduce((max, book) => (book.id > max ? book.id : max), 0);
    return maxId;
  };

  createBook(req, res) {
    const { pages, author, price } = req.body;
    const id = this.getMaxId() + 1;
    const newBook = { id, pages, author, price };
    this.books.push(newBook);
    fs.writeFileSync(dataFilePath, JSON.stringify(this.books, null, 2));
    res.json(newBook);
  };

  getBooks(req, res) {
    res.json(this.books);
  };

  getOneBook(req, res) {
    const id = req.params.id;
    const book = this.books.find(book => book.id === parseInt(id));
    res.json(book);
  };

  updateBook(req, res) {
    const { pages, author, price } = req.body;
    const id = req.params.id;
    const index = this.books.findIndex(book => book.id === parseInt(id));

    if (index !== -1) {
      this.books[index] = { id: parseInt(id), pages, author, price };
      fs.writeFileSync(dataFilePath, JSON.stringify(this.books, null, 2));
      res.json(this.books[index]);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  };

  deleteBook(req, res) {
    const id = req.params.id;
    const index = this.books.findIndex(book => book.id === parseInt(id));

    if (index !== -1) {
      const deletedBook = this.books.splice(index, 1);
      fs.writeFileSync(dataFilePath, JSON.stringify(this.books, null, 2));
      res.json(deletedBook[0]);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  };
};

module.exports = BookController;
