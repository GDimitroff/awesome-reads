import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { BookQuote } from './book-details/book-quotes/book-quote.model';
import { Book } from './book.model';

@Injectable()
export class BookService {
    booksChanged = new Subject<Book[]>();
    private books: Book[] = [];

    constructor(private http: HttpClient) { }

    getBooks(): Book[] {
        this.http.get<Book[]>('https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/books.json')
            .subscribe(response => {
                this.books = Object.values(response);
                this.booksChanged.next(this.books.slice());
            });

        return this.books.slice();
    }

    getBook(index: number): Book {
        return this.books[index];
    }

    addBook(book: Book): Book {
        this.http.post<Book>('https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/books.json', book).subscribe(response => {
            const id = Object.values(response)[0];
            book['id'] = id;
        });

        this.books.push(book);
        this.booksChanged.next(this.books.slice());
        return book;
    }

    updateBook(index: number, updatedBook: Book): void {
        this.books[index] = updatedBook;
        this.booksChanged.next(this.books.slice());
    }

    deleteBook(index: number): void {
        this.books.splice(index, 1);
        this.booksChanged.next(this.books.slice());
    }

    addQuote(index: number, quote: BookQuote): void {
        this.books[index].quotes.push(quote);
        this.booksChanged.next(this.books.slice());
    }
}