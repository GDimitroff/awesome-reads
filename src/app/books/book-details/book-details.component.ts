import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BookService } from '../book.service';
import { UserService } from 'src/app/user/user.service';

import { Book } from '../book.model';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
    displayNewQuote: boolean = false;
    book!: Book;
    id!: number;

    constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router, private userService: UserService) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = Number(params['id']);
            this.book = this.bookService.getBook(this.id);
            this.displayNewQuote = false;
        });
        
    }

    onAddBook() {
        this.userService.addBook(this.book);
    }

    onEditBook() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }

    onDeleteBook() {
        this.bookService.deleteBook(this.id);
        this.router.navigate(['/books']);
    }

    onNewQuote(): void {
        this.displayNewQuote = true;
    }

}