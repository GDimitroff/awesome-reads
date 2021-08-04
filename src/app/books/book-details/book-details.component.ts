import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
    book!: Book;
    id!: number;

    constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = Number(params['id']);
            this.book = this.bookService.getBookById(this.id);
        });
    }

}
