import { Injectable } from "@angular/core";

import { Book } from "./book.model";

Injectable()
export class BookService {
    private books: Book[] = [
        new Book('Dune', 'Frank Herbert', 412, 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15ba25105957829.5f851d78e1c3a.jpg', [
            'Fear is the mindkiller!',
            'Fucking quote'
        ]),
        new Book('Lord of the Rings', 'J.R.R.Tolkien', 412, 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...', 'https://i2.wp.com/www.casualoptimist.com/wp-content/uploads/2020/09/fellowship-of-the-ring-illustration-johan-egerkrans-1000x1500.jpg', []),
        new Book('Dune', 'Frank Herbert', 412, 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...', '../../../assets/book.svg', []),
        new Book('Dune', 'Frank Herbert', 412, 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15ba25105957829.5f851d78e1c3a.jpg', []),
        new Book('Dune', 'Frank Herbert', 412, 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15ba25105957829.5f851d78e1c3a.jpg', [])
    ];

    getBooks(): Book[] {
        return this.books.slice();
    }

    getBookById(id: number): Book {
        return this.books[id];
    }
}