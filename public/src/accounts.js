function findAccountById(accounts, id) {
 return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2) => 
    (account1.name.last > account2.name.last ? 1 : -1));
  }

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
  books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if(account.id === borrow.id) {
      totalBorrows ++;
      }
    }
  );});
    return totalBorrows;
  }


function getBooksPossessedByAccount(account, books, authors) { 
   let booksFiltered = books.filter((book) => { 
     const recentBooks = book.borrows[0]; 
      return !recentBooks.returned && recentBooks.id === account.id; 
  }) 
  let booksWithAuthor = booksFiltered.map((book) => { 
     const author = authors.find((author) => author.id === book.authorId); 
      return { ...book, author}; 
      
    }); 
    return booksWithAuthor;
  }

    

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
