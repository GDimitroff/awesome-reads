import { Injectable } from '@angular/core';

import { Profile } from './profile.model';
import { Book } from '../books/book.model';
import { BookQuote } from '../books/book-details/book-quotes/book-quote.model';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private profile!: Profile;

    constructor() { 
        this.profile = { 
            username: 'Dido', 
            books: [], 
            quotes: []
        }
    }

    getUserData() {
        return this.profile;
    }

    getUserQuotes() {
        return this.profile.quotes;
    }

    addBook(book: Book): void {
        this.profile.books.push(book);
    }

    addQuote(quote: BookQuote) {
        this.profile.quotes.push(quote);
    }
}
