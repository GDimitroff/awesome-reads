import { Component, OnDestroy, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { Book } from '../book.model';
import { Subscription } from 'rxjs';
import { fadeInAnimation } from 'src/app/animations';


@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})
export class BookListComponent implements OnInit, OnDestroy {
    books: Book[] = [] as Book[];
    private booksSub!: Subscription;
    isLoading = false;

    constructor(private bookService: BookService) { }

    ngOnInit(): void {
        this.isLoading = true;
        this.bookService.getBooks().subscribe(books => {
            this.books = books;
            this.isLoading = false;
        });

        this.booksSub = this.bookService.booksChanged.subscribe(books => {
            this.books = books;
        });
    }

    ngOnDestroy() {
        this.booksSub.unsubscribe();
    }
}