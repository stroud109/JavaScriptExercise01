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
    //log("My bookshelf is called " + this.name + ".");

    this.listItemTemplate = function(text, id) {
        var template = '<li class="list-group-item">' + text +'<button id="' + id + '" class="btn btn-xs pull-right">mark as read</button></li>';
        return template;
    };

    this.listItemCompletedTemplate = function(text, id) {
        var template = '<li class="list-group-item">' + text +'<button id="' + id + '" class="btn btn-xs pull-right">mark as unread</button></li>';
        return template;
    };

    this.currentBookTemplate = function(book) {
        var template = '<h4>Currently Reading</h4><div class="col-xs-6"><div class="thumbnail"><img src="http://placekitten.com/200/300"></div></div><div class="caption col-xs-6"><h3>' + book.bookTitle + '</h3><p><a href="#" id="finished" class="btn btn-primary">finished book</a></p></div>';
        return template;
    };

    this.getCurrentBook = function() {
        for (var i = 0; i < this.bookShelf.length; i++) {
            if (this.bookShelf[i].read === false) {
                return this.bookShelf[i];
            }
        }
    };

    // this.renderUpcoming = function() {
    //     var upcomingList = document.getElementById("upcoming-list");
    //     upcomingList.innerHTML = "";
    //     for (var i=0; i<this.booksNotRead.length; i++) {
    //         upcomingList.innerHTML += this.listItemTemplate(this.booksNotRead[i].bookTitle);
    //     }
    // };

    // this.renderCompleted = function() {
    //     var completedList = document.getElementById("completed-list");
    //     completedList.innerHTML = "";
    //     for (var i=0; i<this.booksRead.length; i++) {
    //         completedList.innerHTML += this.listItemCompletedTemplate(this.booksRead[i].bookTitle);
    //     }
    // };

    this.addButtonClick = function(book, id) {
        var self = this;
        var onButtonClick = function(event) {
            console.log(book, id);
            if (book.read === true) {
                book.read = false;
            }
            else {
                book.read = true;
            }
            self.render();
        };
        var button = document.getElementById(id);
        console.log(id, button);
        button.addEventListener('click', onButtonClick, false);
    };

    this.render = function() {
        var upcomingList = document.getElementById("upcoming-list");
        var completedList = document.getElementById("completed-list");
        var currentBookElem = document.getElementById("currently-reading");
        var currentBook = this.getCurrentBook();
        completedList.innerHTML = "";
        upcomingList.innerHTML = "";
        if (currentBook) {
            currentBookElem.innerHTML = this.currentBookTemplate(currentBook);
            this.addButtonClick(currentBook, "finished");
        }
        else {
            currentBookElem.innerHTML = "You don't have any more books to read";
        }
        for (var i = 0; i < this.bookShelf.length; i++) {
            if (this.bookShelf[i].read) {
                completedList.innerHTML +=
                    this.listItemCompletedTemplate(this.bookShelf[i].bookTitle, i);
            }
            else {
                upcomingList.innerHTML +=
                    this.listItemTemplate(this.bookShelf[i].bookTitle, i);
            }
        }
        for (i = 0; i < this.bookShelf.length; i ++) {
            this.addButtonClick(this.bookShelf[i], i);
        }
    };

    this.addBook = function(book) {
        this.bookShelf.push(book);
        //log("You've added <strong>" + book.bookTitle + "</strong> to your your bookshelf.");

        // if (book.read === true) {
        //     this.booksRead.push(book);
        //     //log("You've added " + book.bookTitle + " to your list of completed books. You've read " + this.booksRead.length + " books.");
        // }
        // else {
        //     this.booksNotRead.push(book);
        //     //log("You've added " + book.bookTitle + " to your list of books to read. You have " + this.booksNotRead.length + " books to read.");
        // }
    };

    var submitNewBook = document.getElementById("submit");
    var bookTitle = document.getElementById("bookTitle");
    var author = document.getElementById("author");
    var genre = document.getElementById("genre");
    var imageURL = document.getElementById("imageURL");
    var isRead = document.getElementById("isRead");
    var self = this;
    submitNewBook.addEventListener('click', function(){
        var newBook = new Book(bookTitle.value, genre.value, author.value, isRead.checked);
        self.addBook(newBook);
        self.render();
    }, false);


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
stephList.addBook(penelopeDaughter);
stephList.addBook(pridePrejudice);
stephList.addBook(hobbit);
stephList.addBook(harryPotter);
stephList.addBook(cleopatra);


// stephList.renderUpcoming();
// stephList.renderCompleted();
stephList.render();

