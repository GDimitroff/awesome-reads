import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BookService } from '../book.service';
import { ProfileService } from 'src/app/profile/profile.service';

import { Book } from '../book.model';
import { AuthService } from 'src/app/auth/auth.service';
import { BookQuote } from './book-quote.model';

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
    infoText!: string;

    userId!: string;
    ownerId!: string;

    id!: string;

    constructor(
        private bookService: BookService,
        private route: ActivatedRoute,
        private router: Router,
        private profileService: ProfileService,
        private authService: AuthService,
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = params['id'];

            this.book = this.bookService.getBook(this.id);
            this.ownerId = this.book.ownerId;
            this.displayNewQuote = false;
        });

        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
            if (!user) {
                return;
            }

            this.userId = user.id;
        });
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
        localStorage.removeItem('book');
    }

    onAddBook() {
        this.profileService.addBook(this.book, this.id);
        this.infoText = 'Book added to your profile!';

        setTimeout(() => {
            this.infoText = undefined!;
        }, 2000);
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

    onAddQuote(quote: string, author: string) {
        const newQuote = new BookQuote(quote, author);
        this.profileService.addQuote(newQuote);

        this.infoText = 'Quote added to your profile!';

        setTimeout(() => {
            this.infoText = undefined!;
        }, 2000);
    }

    get isOwner(): boolean {
        return this.userId == this.ownerId;
    }

}