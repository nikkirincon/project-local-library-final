function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let result = [];
  const bookNotCheckedOut = books.filter((book) => 
  book.borrows[0].returned === false);
  result.push(bookNotCheckedOut);

  const bookCheckedOut = books.filter((book) =>
  book.borrows[0].returned === true);
  result.push(bookCheckedOut);
  return result;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    let account = accounts.find(acc => acc.id === borrow.id)
    return {...borrow, ...account}
  }).slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
