

var BookList = function(numRead, numNotRead, nextBook, currentBook, lastBook, bookShelf) {
    this.numRead = numRead;
    this.numNotRead = numNotRead;
    this.nextBook = nextBook;
    this.currentBook = currentBook;
    this.lastBook = lastBook;
    this.bookShelf = [numRead, numNotRead, nextBook, currentBook, lastBook];

    this.add(book) = function() {
        this.bookShelf.push(book);
    }

    this.finishCurrentBook = function() {

    }

};

var Book = function(titleBook, genre, author, read, readDate) {
    this.titleBook = titleBook;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.readDate = readDate;
    }

 
};

var HarryPotter = new Book("Sorcerer's Stone", "fantasy", "J.K. Rowling", true, "10/16/2013");

        