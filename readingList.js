var Book = function(bookTitle, genre, author, read, readDate) {
    this.bookTitle = bookTitle;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.readDate = readDate;
};

var log = function(text) {
    var bgh = document.getElementById("booksGoHere");
        bgh.innerHTML += "<p>" + text + "</p>";
};

var BookList = function(name) {
    this.name = name;
    this.booksRead = [];
    this.booksNotRead = [];
    this.bookShelf = [];
    this.nextBook = null;
    log("My bookself is called " + this.name + ".");

    this.listItemTemplate = function(text) {
        var template = '<li class="list-group-item">' + text +'<button type="submit" class="btn btn-xs pull-right">mark as read</button></li>';
        return template;
    };

    this.listItemCompletedTemplate = function(text) {
        var template = '<li class="list-group-item">' + text +'<button type="submit" class="btn btn-xs pull-right">mark as unread</button></li>';
        return template;
    };

    this.renderUpcoming = function() {
        var upcomingList = document.getElementById("upcoming-list");
        upcomingList.innerHTML = "";
        for (var i=0; i<this.booksNotRead.length; i++) {
            upcomingList.innerHTML += this.listItemTemplate(this.booksNotRead[i].bookTitle);
        }
    };

     this.renderCompleted = function() {
        var completedList = document.getElementById("completed-list");
        completedList.innerHTML = "";
        for (var i=0; i<this.booksRead.length; i++) {
            completedList.innerHTML += this.listItemCompletedTemplate(this.booksRead[i].bookTitle);
        }
    };

    this.addBook = function(book) {
        this.bookShelf.push(book);
        log("You've added <strong>" + book.bookTitle + "</strong> to your your bookshelf.");
        console.log(book);

        if (book.read === true) {
            this.booksRead.push(book);
            log("You've added " + book.bookTitle + " to your list of completed books. You've read " + this.booksRead.length + " books.");
        }
        else {
            this.booksNotRead.push(book);
            log("You've added " + book.bookTitle + " to your list of books to read. You have " + this.booksNotRead.length + " books to read.");
        }
    };

    /*this.finishCurrentBook = function() {
        var currentBook = this.booksNotRead.pop();
        this.booksRead.push(currentBook);
        this.nextBook = this.booksNotRead[this.booksNotRead.length-1];
        log("You just finished reading" + currentBook.bookTitle + ". Your next book will be " + this.nextBook.bookTitle + ".");
    };*/

};

var harryPotter = new Book("Sorcerer's Stone", "fantasy", "J.K. Rowling", true, "10/16/2013");

var cleopatra = new Book("Cleopatra: A Life", "biography", "Stacy Schiff", true, "10/1/2012");

var pridePrejudice = new Book("Pride and Prejudice", "classics", "Jane Austin", false, null);

var penelopeDaughter = new Book("Penelope's Daughter", "historical fiction", "Laurel Corona", true, "12/5/2009");

var hobbit = new Book("The Hobbit", "fantasy", "J.R.R. Tolkien", false, null);

var stephList = new BookList("Steph's List");

// var jeeList = new BookList(numRead, numNotRead, nextBook, currentBook, lastBook, bookShelf);

// var mylist = new BookList();
stephList.addBook(harryPotter);
stephList.addBook(cleopatra);
stephList.addBook(pridePrejudice);
stephList.addBook(penelopeDaughter);
stephList.addBook(hobbit);
stephList.renderUpcoming();
stephList.renderCompleted();

