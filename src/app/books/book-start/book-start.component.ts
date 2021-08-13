import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations';

@Component({
    selector: 'app-book-start',
    templateUrl: './book-start.component.html',
    styleUrls: ['./book-start.component.css'],
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})
export class BookStartComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}