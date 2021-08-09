import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { BookQuote } from './book-details/book-quotes/book-quote.model';
import { Book } from './book.model';
import { map } from 'rxjs/operators';

@Injectable()
export class BookService {
    booksChanged = new Subject<Book[]>();
    private books: Book[] = [] as Book[];

    constructor(private http: HttpClient) { }

    getBooks() {
        return this.http.get<Book[]>('https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/books.json')
            .pipe(map(response => {
                const books: Book[] = [];
                for (const key in response) {
                    if (response.hasOwnProperty(key)) {
                        books.push({ ...response[key], id: key });
                    }
                }

                this.books = books;
                this.booksChanged.next(this.books.slice());
                return books;
            }));
    }

    getBook(id: string) {
        return this.http.get<Book>('https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/books/' + id + '.json');
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

    updateBook(id: string, updatedBook: Book): void {
        this.http.put<Book>('https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/books/' + id + '.json', updatedBook).subscribe();

        const bookIndex = this.books.findIndex(book => book.id === id);
        updatedBook.id = id;
        this.books[bookIndex] = updatedBook;
        this.booksChanged.next(this.books.slice());
    }

    deleteBook(id: string): void {
        const index = this.books.findIndex(book => book.id === id);
        this.books.splice(index, 1);
        this.booksChanged.next(this.books.slice());
    }

    addQuote(id: string, quote: BookQuote): void {
        const book = this.books.find(book => book.id === id);
        book!.quotes.push(quote);
        this.booksChanged.next(this.books.slice());
    }
}