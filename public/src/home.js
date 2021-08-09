const { forEach } = require("../../test/fixtures/authors.fixture");

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let count = 0;
  books.forEach(book => {
    if(book.borrows[0].returned === false)
    count++;})
    return count;
}

function getMostCommonGenres(books) {
  let mostCommonGenres = {};
  books.forEach(book => { 
    const bookGenre = book.genre;
    if (mostCommonGenres[bookGenre]) {
      mostCommonGenres[bookGenre] += 1;
    } else {
      mostCommonGenres[bookGenre] = 1;
    }
  })
  const topFive = [];
  for(let genreName in mostCommonGenres) {
     topFive.push({name: genreName, count: mostCommonGenres[genreName]});
  }
  topFive.sort((a,b) => (b.count - a.count))
  return topFive.slice(0, 5);
  
}


function getMostPopularBooks(books) {
  const mostPopularBooks = [];
  for(let i = 0; i < books.length; i++) {
   const mostPopularObject = {
     name : books[i].title,
     count : books[i].borrows.length
   }
   mostPopularBooks.push(mostPopularObject);
  }
  mostPopularBooks.sort((a,b) => b.count - a.count);
  return mostPopularBooks.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  let mostPopularAuthor = [];
  for(let i = 0; i < authors.length; i++) {
    for (let j = 0; j < books.length; j++) {
      if(authors[i].id === books[j].authorId) {
        const mostPopularObject = {
          name: authors[i].name.first + " " + authors[i].name.last,
          count: books[j].borrows.length
        }
        mostPopularAuthor.push(mostPopularObject);
      }
    }
  }
      mostPopularAuthor.sort((a,b) => b.count - a.count);
      return mostPopularAuthor.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
