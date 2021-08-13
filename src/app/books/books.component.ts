import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css'],
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})
export class BooksComponent implements OnInit {
    
    constructor() { }

    ngOnInit(): void {
    }
}