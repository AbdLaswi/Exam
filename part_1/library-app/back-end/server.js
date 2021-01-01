const express = require("express");
const { addBook, deleteBook, getBooks, getBook } = require("./db");

const app = express();
app.use
app.get("/books", getBooks);
app.get("books/:book_id",getBook)
app.post("/books",addBook)
app.delete("books/:book_id",deleteBook);
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});