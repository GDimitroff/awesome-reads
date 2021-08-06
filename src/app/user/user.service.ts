import { Injectable } from '@angular/core';

import { User } from './user.model';
import { Book } from '../books/book.model';
import { BookQuote } from '../books/book-details/book-quotes/book-quote.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private user!: User;

    constructor() { 
        this.user = { 
            username: 'Dido', 
            books: [], 
            quotes: []
        }
    }

    getUserData() {
        return this.user;
    }

    getUserQuotes() {
        return this.user.quotes;
    }

    addBook(book: Book): void {
        this.user.books.push(book);
    }

    addQuote(quote: BookQuote) {
        this.user.quotes.push(quote);
    }
}
