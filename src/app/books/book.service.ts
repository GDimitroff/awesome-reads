import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { BookQuote } from "./book-details/book-quotes/book-quote.model";
import { Book } from "./book.model";

@Injectable()
export class BookService {
    booksChanged = new Subject<Book[]>();

    private books: Book[] = [
        new Book('Dune', 'Frank Herbert', 412, 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15ba25105957829.5f851d78e1c3a.jpg', [
            new BookQuote('The person who experiences greatness must have a feeling for the myth he is in... And he must have a strong sense of the sardonic... The sardonic is all that permits him to move within himself. Without this quality, even occasional greatness will destroy a man.', 'Frank Herbert'),
            new BookQuote('The person who experiences greatness must have a feeling for the myth he is in... And he must have a strong sense of the sardonic... The sardonic is all that permits him to move within himself. Without this quality, even occasional greatness will destroy a man.', 'Frank Herbert')
        ]),
        new Book('Lord of the Rings', 'J.R.R.Tolkien', 412, 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...', 'https://i2.wp.com/www.casualoptimist.com/wp-content/uploads/2020/09/fellowship-of-the-ring-illustration-johan-egerkrans-1000x1500.jpg', []),
        new Book('Dune', 'Frank Herbert', 412, 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...', '../../../assets/book.svg', []),
        new Book('Dune', 'Frank Herbert', 412, 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15ba25105957829.5f851d78e1c3a.jpg', []),
        new Book('Dune', 'Frank Herbert', 412, 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15ba25105957829.5f851d78e1c3a.jpg', [])
    ];

    getBooks(): Book[] {
        return this.books.slice();
    }

    getBook(index: number): Book {
        return this.books[index];
    }

    addBook(book: Book): void {
        this.books.push(book);
        this.booksChanged.next(this.books.slice());
    }

    updateBook(index: number, updatedBook: Book): void {
        this.books[index] = updatedBook;
        this.booksChanged.next(this.books.slice());
    }

    deleteBook(index: number): void {
        this.books.splice(index, 1);
        this.booksChanged.next(this.books.slice());
    }

    addQuote(index: number, quote: BookQuote): void {
        this.books[index].quotes.push(quote);
        this.booksChanged.next(this.books.slice());
    }
}