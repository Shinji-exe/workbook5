const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic", year: 1960 },
    { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949 },
    { title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian", year: 1932 },
    { title: "The Road", author: "Cormac McCarthy", genre: "Post-apocalyptic", year: 2006 }
  ];

  function getBooksByGenre(genre){
    return genre.genre === "Classic";
  }

  let findingBooks = books.filter(getBooksByGenre)
  console.log(findingBooks)
  console.log("----------------------------------")
  //OR use Arrow Function version

  function getBooksByGenreArrowVersion(genre){
    return books.filter((bookGenre) => bookGenre.genre === genre)
  }

  let classicBook = getBooksByGenreArrowVersion("Classic")
  console.log(classicBook)

  console.log("----------------------------------")
  //OR

  function getBooksByGenreAlternative(genre) {
    return books.filter(book => book.genre === genre);
  }
  

  let findingBooksAlt = getBooksByGenreAlternative("Classic");
  console.log(findingBooks);

  console.log("----------------------------------")
  //Find 

  function findBookByTitle(title){
    return title.year === 1960;
  }

  let findOneBook = books.find(findBookByTitle);
console.log(findOneBook)

console.log("----------------------------------")

function getABook(year){
return books.find(book => book.year === year)
}

let getSingleBook = getABook(1949);
console.log(getSingleBook)

console.log("----------------------------------")

function getSingleBookAlternative(year){
    return books.find(book => book.year === year)
}

let getSingleBookVersion = getSingleBookAlternative(2006);
console.log(getSingleBookVersion)