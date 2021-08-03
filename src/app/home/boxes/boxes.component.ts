import { Component, OnInit } from '@angular/core';

import { faBook, faListAlt, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-boxes',
    templateUrl: './boxes.component.html',
    styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {
    icons = {
        faBook,
        faListAlt,
        faQuoteRight
    };

    constructor() { }

    ngOnInit(): void {
    }

}