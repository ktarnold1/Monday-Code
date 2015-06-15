/*book module*/

var _ = require('lodash');

function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.ripOffCover = function() {  //sets the title and author to "unknown"
    this.title = 'Unknown';
    this.author = 'Unknown';
  };

Book.prototype.printBook = function() {
  return ('\"' + this.title + '\" by ' + this.author);
};

module.exports = Book;