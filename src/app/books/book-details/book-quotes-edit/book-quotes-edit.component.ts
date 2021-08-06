import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { Book } from '../../book.model';

import { BookService } from '../../book.service';
import { BookQuote } from '../book-quotes/book-quote.model';

@Component({
    selector: 'app-book-quotes-edit',
    templateUrl: './book-quotes-edit.component.html',
    styleUrls: ['./book-quotes-edit.component.css']
})
export class BookQuotesEditComponent implements OnInit {
    book!: Book;
    id!: number;

    constructor(private bookService: BookService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = Number(params['id']);
            this.book = this.bookService.getBookById(this.id);
        });
    }

    onSubmitQuote(form: NgForm) {
        const value = form.value;
        const newQuote = new BookQuote(value.quoteText, this.book.author);
        this.bookService.addQuote(this.id, newQuote);
        form.reset();
    }

}
