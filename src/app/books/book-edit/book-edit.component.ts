import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { BookService } from '../book.service';

@Component({
    selector: 'app-book-edit',
    templateUrl: './book-edit.component.html',
    styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
    editMode: boolean = false;
    id!: number;
    bookForm!: FormGroup;

    constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = Number(params['id']);
            this.editMode = params['id'] != null;
            this.initForm();
        });
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
            this.bookService.updateBook(this.id, this.bookForm.value);
            this.router.navigate(['../'], { relativeTo: this.route });
        } else {
            this.bookService.addBook(this.bookForm.value);

            const id = this.bookService.getBooks().length - 1;
            this.router.navigate(['../', id], { relativeTo: this.route });
        }
    }

    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    private initForm() {
        let bookTitle = '';
        let bookAuthor = '';
        let bookDesciption = '';
        let bookPages = 0;
        let bookImageUrl = '';
        let bookQuotes = new FormArray([]);

        if (this.editMode) {
            const book = this.bookService.getBook(this.id);
            bookTitle = book.title;
            bookAuthor = book.author;
            bookDesciption = book.description;
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
            'description': new FormControl(bookDesciption, Validators.required),
            'pages': new FormControl(bookPages, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
            'imageUrl': new FormControl(bookImageUrl, Validators.required),
            'quotes': bookQuotes
        });
    }

    get controls() {
        return (<FormArray>this.bookForm.get('quotes')).controls;
    }

}