var Book = function(titleBook, genre, author, read, readDate) {
    this.titleBook = titleBook;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.readDate = readDate;
    };

var BookList = function() {
    this.booksRead = [];
    this.booksNotRead = [];
    this.numRead = booksRead.length; // use len on a list
    this.numNotRead = booksNotRead.length;
    this.nextBook = booksNotRead[0];
    this.lastBook = booksRead[booksRead.length-1];
    this.bookShelf = [];

    this.addBook = function(book) {
        this.bookShelf.push(book);
        console.log("This book has been successfully added.");
        console.log("There are now " + bookShelf.length + "books on your bookshelf.");

        if (book.read === true) {
            this.booksRead.push(book);
        }
        else
            this.booksNotRead.push(book);
    };

    this.finishCurrentBook = function() {

    };

};


var harryPotter = new Book("Sorcerer's Stone", "fantasy", "J.K. Rowling", true, "10/16/2013");

var cleopatra = new Book("Cleopatra: A Life", "biography", "Stacy Schiff", true, "10/1/2012");

var pridePrejudice = new Book("Pride and Prejudice", "classics", "Jane Austin", false, null);

var penelopeDaughter = new Book("Penelope's Daughter", "historical fiction", "Laurel Corona", true, "12/5/2009");

var hobbit = new Book("The Hobbit", "fantasy", "J.R.R. Tolkien", false, null);

var stephList = new BookList();
// var jeeList = new BookList(numRead, numNotRead, nextBook, currentBook, lastBook, bookShelf);

// var mylist = new BookList();
stephList.addBook(hobbit);
console.log(BookList);