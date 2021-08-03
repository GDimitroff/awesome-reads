import { Component, OnInit } from '@angular/core';

import { Book } from '../book.model';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
    book = new Book('Matrix', 'Washovski', 500, 'Enter the matrix!', 'https://upload.wikimedia.org/wikipedia/commons/9/9b/The.Matrix.glmatrix.2.png');
    id!: number;

    constructor() { }

    ngOnInit(): void {
    }

}
