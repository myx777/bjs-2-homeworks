//ЗАДАЧА 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name; 
        this.releaseDate = releaseDate; 
        this.pagesCount = pagesCount; 
        this.state = state; 
        this.type = type;
    }

    fix() {
        return this.state *= 1.5;
    };
       
    set state(value) {
        if(value < 0){
            return this._state = 0;
        } else if(value >= 100){
            return this._state = 100;
        } else {
            return this._state = value;
        }
    }    

    get state() {
        return this._state;
    }
}

class Magazine extends  PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
        this.type = 'book';
    }    
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "novel";
    }     
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "fantastic";
    }     
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "detective";
    }     
}

//ЗАДАЧА 2
class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for(let book of this.books) {
            if(book[type] === value) {
                return book;
            }
        }

        return null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex((book) => book.name === bookName);
        if (index !== -1) {
            return this.books.splice(index, 1)[0];
        } else {
            return null;
        }
    }

}