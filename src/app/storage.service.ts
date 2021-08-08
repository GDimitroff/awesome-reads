import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BookService } from "./books/book.service";

import { Book } from "./books/book.model";
import { BookQuote } from "./books/book-details/book-quotes/book-quote.model";

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(private http: HttpClient, private bookService: BookService) { }

    storeBooks() {
        const books = this.bookService.getBooks();
        this.http.put('https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/books.json', books).subscribe(response => {
            console.log(response);
        });
    }

    getBooks() {
        
    }

    addBook() {
        const book = new Book('Dune', 'Frank Herbert', 412, 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15ba25105957829.5f851d78e1c3a.jpg', [
            new BookQuote('The person who experiences greatness must have a feeling for the myth he is in... And he must have a strong sense of the sardonic... The sardonic is all that permits him to move within himself. Without this quality, even occasional greatness will destroy a man.', 'Frank Herbert'),
            new BookQuote('The person who experiences greatness must have a feeling for the myth he is in... And he must have a strong sense of the sardonic... The sardonic is all that permits him to move within himself. Without this quality, even occasional greatness will destroy a man.', 'Frank Herbert')
        ]);

        this.http.post<Book>('https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/books.json', book).subscribe(response => {
            console.log(response);
        });
    }
}