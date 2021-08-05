import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Book } from '../book.model';
import { Quote } from 'src/app/quotes/quote.model';
import { BookService } from '../book.service';
import { QuoteService } from 'src/app/quotes/quote.service';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
    book!: Book;
    id!: number;

    constructor(private bookService: BookService, private quoteService: QuoteService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = Number(params['id']);
            this.book = this.bookService.getBookById(this.id);
        });
    }

    onAddToMyQuotes(quote: string, author: string) {
        const newQuote = new Quote(quote, author);
        this.quoteService.addQuote(newQuote);
    }

    onAddQuoteToBook(quote: string, author: string) {
        const newQuote = new Quote(quote, author);
        this.bookService.addQuoteToBook(this.id, newQuote);
    }

    onEditBook() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }

    onDeleteBook() {
        //TODO: Implement this! 
    }

}
