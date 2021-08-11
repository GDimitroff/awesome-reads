import { Component, OnInit } from '@angular/core';

import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-sections',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
    faChevronCircleRight = faChevronCircleRight;

    constructor() { }

    ngOnInit(): void {
    }

}
