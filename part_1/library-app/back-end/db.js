const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "bookstore",
  password:"El Psy Congroo1"
});
const addBook = (req, res) => {
  const book = req.body;
  const data = [
    book.title,
    book.author,
    book.pages,
    book.publisher,
    book.published_at,
    null,
  ];
  const query = `INSERT INTO Book WHERE (title , author, pages, publisher, published_at) VALUES (?,?,?,?,?)`;
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json("theBook has been added successfully");
  });
};
const deleteBook = (req, res) => {
  const { book_id } = req.params;
  const query = `DELETE FROM Book WHERE book_id =?`;
  connection.query(query, book_id, (err, result) => {
    if (err) throw err;
    if (result) res.json("the Book has been deleted successfully");
  });
};
const getBooks = (req, res) => {
  const query = `SELECT * FROM Book`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
const getBook = (req, res) => {
  const { book_id } = req.params;
  const query = `SELECT * FROM Book WHERE book_id=?`;
  connection.query(query, book_id, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
module.exports = {
  addBook,
  deleteBook,
  getBooks,
  getBook,
};

