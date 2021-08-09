import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
    books: Book[] = [] as Book[];

    constructor(private bookService: BookService) { }

    ngOnInit(): void {
        this.bookService.getBooks().subscribe(books => {
            this.books = books;
        });
    }
}