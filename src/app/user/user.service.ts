import { Injectable } from '@angular/core';

import { User } from './user.model';
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

    addQuote(quote: BookQuote) {
        this.user.quotes.push(quote);
    }
}
