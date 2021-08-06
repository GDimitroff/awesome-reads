import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../../book.model';

import { BookService } from '../../book.service';
import { BookQuote } from '../book-quotes/book-quote.model';

@Component({
    selector: 'app-book-quotes-edit',
    templateUrl: './book-quotes-edit.component.html',
    styleUrls: ['./book-quotes-edit.component.css']
})
export class BookQuotesEditComponent implements OnInit {
    editMode = false;
    
    @Input() book!: Book;
    @Input() id!: number;

    constructor(private bookService: BookService) { }

    ngOnInit(): void {
    }

    onSubmitQuote(form: NgForm) {
        if (this.editMode) {
            const value = form.value;
            const newQuote = new BookQuote(value.quoteText, this.book.author);
            this.bookService.addQuoteToBook(this.id, newQuote);
        }

    }

}
