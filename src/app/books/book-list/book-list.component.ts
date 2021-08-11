import { Component, OnDestroy, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { Book } from '../book.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, OnDestroy {
    books: Book[] = [] as Book[];
    private booksSub!: Subscription;

    constructor(private bookService: BookService) { }

    ngOnInit(): void {
        this.bookService.getBooks().subscribe(books => {
            this.books = books;
        });

        this.booksSub = this.bookService.booksChanged.subscribe(books => {
            this.books = books;
        });
    }

    ngOnDestroy() {
        this.booksSub.unsubscribe();
    }
}