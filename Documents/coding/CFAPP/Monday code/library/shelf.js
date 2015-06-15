/*shelf module*/

var _ = require('lodash');

function Shelf(name) {
  this.name = name; //name of shelf
  this.numBooks = 0; //number of books in shelf
  this.books = new Array(); // array of Book Objects on the Shelf
}

Shelf.prototype.printBooks = function() {
  if (this.books.length === 0) {
    return ('NO BOOKS!');
  } else {
    //return(_.flatten(this.books));
    return (_.chain(this.books).map(function(bk) {
      return bk.title + ' by ' + bk.author;
    }).value());
  }
};

Shelf.prototype.listBooks = function() {
  var i; //lists the books on the shelf in the order they were added or removed
  if (this.books.length === 0) {console.log('NO BOOKS!');
  } else {
    for (i = 0; i < this.books.length; i++) {
      console.log(this.books[i].author + ' by ' + this.books[i].title);
    }
  }
};

Shelf.prototype.addBook = function(book) {//adds a book object to the end of the shelf
    this.books[this.numBooks] = book;
    this.numBooks++;
  };

Shelf.prototype.removeBook = function(book) { //removes a book object from the shelf
  if (this.books.indexOf(book) >= 0) {
    this.books.splice(this.books.indexOf(book), 1);
    this.numBooks--;
  }
};

//takes two shelf objects and switches their books
var swapShelves = function(shelfOne, shelfTwo) {
  var tempshelf;
  // make a temp shelf and put shelf one on it.
  tempShelf = new Shelf('temp');
  tempShelf.name = shelfOne.name;
  tempShelf.numBooks = shelfOne.numBooks;
  tempShelf.books = shelfOne.books;
  //put shelf two on shelf one
  shelfOne.name = shelfTwo.name;
  shelfOne.numBooks = shelfTwo.numBooks;
  shelfOne.books = shelfTwo.books;
  //put temp shelf on shelf two
  shelfTwo.name = tempShelf.name;
  shelfTwo.numBooks = tempShelf.numBooks;
  shelfTwo.books = tempShelf.books;
};

module.exports = Shelf;
exports.swapShelves = swapShelves;
