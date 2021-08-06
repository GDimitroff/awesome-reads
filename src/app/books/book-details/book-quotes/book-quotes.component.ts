import { Component, Input, OnInit } from '@angular/core';

import { UserService } from 'src/app/user/user.service';
import { BookQuote } from './book-quote.model';

@Component({
    selector: 'app-book-quotes',
    templateUrl: './book-quotes.component.html',
    styleUrls: ['./book-quotes.component.css']
})
export class BookQuotes implements OnInit {
    @Input() quotes!: BookQuote[];

    constructor(private userService: UserService) { }

    ngOnInit(): void {

    }

    onAddToUserQuotes(quote: string, author: string) {
        const newQuote = new BookQuote(quote, author);
        this.userService.addQuote(newQuote);
    }

    onEditQuote(index: number) {
        console.log(index);
    }
}