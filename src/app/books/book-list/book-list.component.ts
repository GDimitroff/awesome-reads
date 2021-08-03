import { Component, OnInit } from '@angular/core';

import { Book } from '../book.model';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
    books: Book[] = [
        new Book('Dune', 'Frank Herbert', 412, 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15ba25105957829.5f851d78e1c3a.jpg'),
        new Book('Lord of the Rings', 'J.R.R.Tolkien', 412, 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15ba25105957829.5f851d78e1c3a.jpg'),
        new Book('Dune', 'Frank Herbert', 412, 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15ba25105957829.5f851d78e1c3a.jpg'),
        new Book('Dune', 'Frank Herbert', 412, 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15ba25105957829.5f851d78e1c3a.jpg'),
        new Book('Dune', 'Frank Herbert', 412, 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15ba25105957829.5f851d78e1c3a.jpg')
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
