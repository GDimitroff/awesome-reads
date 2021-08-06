import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
    private subscription!: Subscription;
    books: Book[] = [];

    constructor(private bookService: BookService) { }

    ngOnInit(): void {
        this.books = this.bookService.getBooks();
        this.subscription = this.bookService.booksChanged.subscribe((books: Book[]) => {
            this.books = books;
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();    
    }

}