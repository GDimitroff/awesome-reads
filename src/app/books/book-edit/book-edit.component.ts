import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { BookService } from '../book.service';
import { AuthService } from 'src/app/auth/auth.service';
import { fadeInAnimation } from 'src/app/animations';

@Component({
    selector: 'app-book-edit',
    templateUrl: './book-edit.component.html',
    styleUrls: ['./book-edit.component.css'],
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})
export class BookEditComponent implements OnInit, OnDestroy {
    private userSub!: Subscription;
    userId!: string;
    editMode: boolean = false;
    id!: string;
    bookForm: FormGroup = {} as FormGroup;

    constructor(private route: ActivatedRoute, private bookService: BookService,
        private router: Router, private authService: AuthService) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = params['id'];
            this.editMode = params['id'] != null;
            this.initForm();
        });

        this.userSub = this.authService.user.subscribe(user => {
            this.userId = user.id;
        });
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }

    onAddQuote() {
        (<FormArray>this.bookForm.get('quotes')).push(
            new FormGroup({
                'quote': new FormControl(null, Validators.required)
            })
        );
    }

    onDeleteQuote(index: number) {
        (<FormArray>this.bookForm.get('quotes')).removeAt(index);
    }

    onSubmit() {
        if (this.editMode) {
            const updatedBook = {
                title: this.bookForm.value.title,
                author: this.bookForm.value.author,
                pages: this.bookForm.value.pages,
                description: this.bookForm.value.description,
                imageUrl: this.bookForm.value.imageUrl,
                quotes: this.bookForm.value.quotes,
                ownerId: this.userId
            };

            this.bookService.updateBook(this.id, updatedBook).subscribe(res => {
                this.router.navigate(['/books', this.id], { relativeTo: this.route });
            });
        } else {
            const newBook = {
                title: this.bookForm.value.title,
                author: this.bookForm.value.author,
                pages: this.bookForm.value.pages,
                description: this.bookForm.value.description,
                imageUrl: this.bookForm.value.imageUrl,
                quotes: this.bookForm.value.quotes,
                ownerId: this.userId
            };

            this.bookService.addBook(newBook).subscribe(res => {
                const id = Object.values(res)[0];
                this.router.navigate(['../', id], { relativeTo: this.route });
            });
        }
    }

    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    private initForm() {
        let bookTitle = '';
        let bookAuthor = '';
        let bookDescription = '';
        let bookPages = 0;
        let bookImageUrl = '';
        let bookQuotes = new FormArray([]);

        if (this.editMode) {
            const book = this.bookService.getBook(this.id);
            bookTitle = book.title;
            bookAuthor = book.author;
            bookDescription = book.description;
            bookPages = book.pages;
            bookImageUrl = book.imageUrl;
            if (book['quotes']) {
                for (let quote of book.quotes) {
                    bookQuotes.push(
                        new FormGroup({
                            'quote': new FormControl(quote.quote, Validators.required)
                        })
                    );
                }
            }
        }

        this.bookForm = new FormGroup({
            'title': new FormControl(bookTitle, Validators.required),
            'author': new FormControl(bookAuthor, Validators.required),
            'description': new FormControl(bookDescription, Validators.required),
            'pages': new FormControl(bookPages, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
            'imageUrl': new FormControl(bookImageUrl, [Validators.required, Validators.pattern(/(http(s?):)([/|.|\w|+|\s|-])*\.(?:jpg|gif|png)/)]),
            'quotes': bookQuotes
        });
    }

    get controls() {
        return (<FormArray>this.bookForm.get('quotes')).controls;
    }

}