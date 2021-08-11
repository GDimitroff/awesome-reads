import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css'],
    
    // make slide in/out animation available to this component
    animations: [fadeInAnimation],

    // attach the slide in/out animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }
})
export class BooksComponent implements OnInit {
    
    constructor() { }

    ngOnInit(): void {
    }
}