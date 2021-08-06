import { Component, Input, OnInit } from '@angular/core';

import { UserService } from 'src/app/user/user.service';

import { Book } from '../../book.model';
import { BookQuote } from './book-quote.model';

@Component({
    selector: 'app-book-quotes',
    templateUrl: './book-quotes.component.html',
    styleUrls: ['./book-quotes.component.css']
})
export class BookQuotes implements OnInit {
    @Input() book!: Book;

    constructor(private userService: UserService) { }

    ngOnInit(): void {

    }

    onAddQuote(quote: string, author: string) {
        const newQuote = new BookQuote(quote, author);
        this.userService.addQuote(newQuote);
    }
}