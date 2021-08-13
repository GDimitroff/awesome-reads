import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Book } from './book.model';

@Injectable({
    providedIn: 'root'
})
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

                this.books = books.reverse();
                this.booksChanged.next(this.books.slice());
                return books;
            }));
    }

    getBook(id: string): Book {
        let book = this.books.find(book => book.id == id);

        if (book) {
            localStorage.setItem('books', JSON.stringify(this.books));
        } else {
            this.books = JSON.parse(localStorage.getItem('books')!);
            book = this.books.find(book => book.id == id);
        }

        return book!;
    }

    addBook(book: Book): Observable<Book> {
        return this.http.post<Book>('https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/books.json', book)
            .pipe(
                tap(res => {
                    const id = Object.values(res)[0];
                    book.id = id;
                    this.books.unshift(book);
                    this.booksChanged.next(this.books.slice());
                    return res;
                }));
    }

    updateBook(id: string, updatedBook: Book): Observable<Book> {
        return this.http.put<Book>('https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/books/' + id + '.json', updatedBook)
            .pipe(
                tap(res => {
                    const bookIndex = this.books.findIndex(book => book.id === id);
                    updatedBook.id = id;
                    this.books[bookIndex] = updatedBook;
                    this.booksChanged.next(this.books.slice());
                    return res;
                }));
    }

    deleteBook(id: string): void {
        this.http.delete('https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/books/' + id + '.json').subscribe();
        const index = this.books.findIndex(book => book.id === id);
        this.books.splice(index, 1);
        this.booksChanged.next(this.books.slice());
    }

    // addQuote(id: string, quote: BookQuote): void {
    //     const book = this.books.find(book => book.id === id);
    //     book!.quotes.push(quote);
    //     this.booksChanged.next(this.books.slice());

    //     this.http.put<Book>('https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/books/' + id + '.json', book).subscribe();
    // }
}