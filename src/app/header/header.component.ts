import { Component, OnInit } from '@angular/core';

import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    faBookOpen = faBookOpen;

    constructor() { }

    ngOnInit(): void {
    }

}
