import { Component, Input, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations';

import { Book } from '../../book.model';

@Component({
    selector: 'app-book-item',
    templateUrl: './book-item.component.html',
    styleUrls: ['./book-item.component.css'],
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})
export class BookItemComponent implements OnInit {
    @Input() book!: Book;

    constructor() { }

    ngOnInit(): void {

    }

}