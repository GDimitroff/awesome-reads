import { Component, Input, OnInit } from '@angular/core';

import { ProfileService } from 'src/app/profile/profile.service';

import { Book } from '../../book.model';
import { BookQuote } from './book-quote.model';

@Component({
    selector: 'app-book-quotes',
    templateUrl: './book-quotes.component.html',
    styleUrls: ['./book-quotes.component.css']
})
export class BookQuotes implements OnInit {
    @Input() book!: Book;
    @Input() isAuth!: boolean;
    infoText!: string;

    constructor(private profileService: ProfileService) { }

    ngOnInit(): void {

    }

    onAddQuote(quote: string, author: string) {
        const newQuote = new BookQuote(quote, author);
        this.profileService.addQuote(newQuote);

        this.infoText = 'Quote added to your profile!';

        setTimeout(() => {
            this.infoText = undefined!;
        }, 2000);
    }
}