import { Component, OnInit } from '@angular/core';

import { Quote } from './quote.model';
import { QuoteService } from './quote.service';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.component.html',
    styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    quotes!: Quote[];

    constructor(private quoteService: QuoteService) { }

    ngOnInit(): void {
        this.quotes = this.quoteService.getQuotes();
    }

}
