/* library module*/
var _ = require('lodash');
var Shelf = require('C:\\Users\\Kate\\documents\\coding\\CFAPP\\shelf.js');

function Library(name) {
  this.name = name;
  this.numShelves = 0;
  this.shelves = new Array();
}

Library.prototype.addShelf = function(shelf) { //adds a shelf to the library
  this.shelves[this.numShelves] = shelf;
  this.numShelves++;
};

Library.prototype.removeShelf = function(shelf) { //removes a shelf object from the library
  if (this.shelves.indexOf(shelf) >= 0) {
    this.shelves.splice(this.shelves.indexOf(shelf), 1);
    this.numShelves--;
  }
};

Library.prototype.printShelves = function() {
  var anArray;
  var stringArray;
  if (this.shelves.length === 0) {
    return ('NO SHELVES!');
  } else {
    //for each shelf, call printbooks on each book
    return this.name + ': \n' + (_.chain(this.shelves).map(function(sh) {
      return sh.name + ': ' + sh.printBooks();
    }).value());
  }
};

Library.prototype.listShelves = function() { //lists the shelves in the library in the order they were added or removed
  var i;
  if (this.shelves.length === 0) {
    console.log('NO SHELVES!');
  } else {
    for (i = 0; i < this.shelves.length; i++) {
      console.log(this.shelves[i].name);
    }
  }
};

module.exports = Library;

