var Book = require('C:\\Users\\Kate\\documents\\coding\\CFAPP\\books.js');
var Shelf = require('C:\\Users\\Kate\\documents\\coding\\CFAPP\\shelf.js');
var Library = require('C:\\Users\\Kate\\documents\\coding\\CFAPP\\library.js');
var swapShelves =
  require('C:\\Users\\Kate\\documents\\coding\\CFAPP\\shelf.js');
var _ = require('lodash');

firstBook = new Book('Mindset', 'Carol S. Dweck');
console.log (firstBook.title);
console.log(firstBook.author);
firstBook.printBook();
firstBook.ripOffCover();
console.log (firstBook.title);
console.log(firstBook.author);
console.log(firstBook.printBook());

secondBook = new Book('A Tale of Two Cities', 'Charles Dickens');
console.log (secondBook.title);
console.log(secondBook.author);

sciFi = new Shelf('sci-fi');
console.log(sciFi.name);
console.log(sciFi.numBooks);
sciFi.listBooks();
sciFi.printBooks();
sciFi.addBook(firstBook);
console.log(sciFi.numBooks);
sciFi.listBooks();
console.log(sciFi.printBooks());
sciFi.addBook(secondBook);
console.log(sciFi.numBooks);
sciFi.listBooks();
sciFi.removeBook(firstBook);
sciFi.listBooks();
console.log(sciFi.printBooks());
console.log(sciFi.numBooks);
sciFi.removeBook(firstBook);
sciFi.listBooks();
console.log(sciFi.printBooks());
console.log(sciFi.numBooks);
sciFi.removeBook(secondBook);
sciFi.listBooks();
console.log(sciFi.printBooks());
console.log(sciFi.numBooks);
fiction = new Shelf('fiction');
thirdBook = new Book('Bring It', 'Tony Horton');
fourthBook = new Book('A Book', 'Jane Doe');
fiction.addBook(thirdBook);
fiction.addBook(fourthBook);
swapShelves(sciFi, fiction);
sciFi.listBooks();
console.log(sciFi.printBooks());
console.log(sciFi.numBooks);
fiction.listBooks();
console.log(fiction.printBooks());
console.log(fiction.numBooks);
greenlake = new Library('Greenlake');
console.log(greenlake.name);
console.log(greenlake.numShelves);
greenlake.listShelves();
console.log(greenlake.printShelves());
greenlake.addShelf(sciFi);
greenlake.addShelf(fiction);
console.log(greenlake.numShelves);
greenlake.listShelves();
console.log(greenlake.printShelves());


//DO THIS:
//use prototypes when adding a function to a constructor (best practice) DONE
//keep everything in separate files DONE
//modify test file to require everything in test file DONE
//require lodash and use it to create a function that will display everything in the library DONE
//call the print function on book, library so the library will print shelves, books DONE
//brook@codefellows.com via github

//what does print mean - print where??
//how can i find this person on github
//how do I test my server


