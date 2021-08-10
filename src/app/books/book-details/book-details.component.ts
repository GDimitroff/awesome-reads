import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BookService } from '../book.service';
import { ProfileService } from 'src/app/profile/profile.service';

import { Book } from '../book.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {
    private userSub!: Subscription;
    isAuthenticated: boolean = false;
    displayNewQuote: boolean = false;
    book: Book = {} as Book;

    userId!: string;
    ownerId!: string;

    id!: string;

    constructor(
        private bookService: BookService,
        private route: ActivatedRoute,
        private router: Router,
        private userService: ProfileService,
        private authService: AuthService,
    ) { }

    ngOnInit(): void {
        setTimeout(() => {
            this.route.params.subscribe((params: Params) => {
                this.id = params['id'];
    
                this.bookService.getBook(this.id).subscribe(book => {
                    this.book = book;
                    this.ownerId = book.ownerId;
                });
    
                this.displayNewQuote = false;
            });
    
            this.userSub = this.authService.user.subscribe(user => {
                this.isAuthenticated = !!user;
                this.userId = user.id;
            });
        }, 100)
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
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

    get isOwner(): boolean {
        return this.userId == this.ownerId;
    }

}