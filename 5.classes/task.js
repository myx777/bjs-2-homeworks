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
        const book = this.books.find((book) => book[type] === value);
        return (book) ? book : null;  
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex((book) => book.name === bookName);
        return (index !== -1) ? this.books.splice(index, 1)[0] : null;
    }

}

//ЗАДАЧА 3
class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark >= 2 && mark <= 5) {
        if (!(subject in this.marks)) {
            /* 
            используй [] для доступа к значению свойства, если this.mark.subject,
            Используя точечную нотацию (this.marks.subject), 
            JavaScript будет искать свойство с именем "subject" 
            в объекте this.marks, но не найдет его
             */
          this.marks[subject] = [];
        }

        this.marks[subject].push(mark);
      }
    }

    getAverageBySubject(subject) {
        return (this.marks[subject]) ?
           this.marks[subject].reduce((acc, value) =>
           (acc + value), 0) / this.marks[subject] .length : 0;
    }

    getAverage() {
        let sumSubj = 0;
        let sumAllSubject = 0;
        for(let subject of Object.keys(this.marks)) {
            sumSubj += this.getAverageBySubject(subject);
            sumAllSubject = sumSubj / Object.keys(this.marks).length
        }
        return sumAllSubject;
    }
   

  }
  
