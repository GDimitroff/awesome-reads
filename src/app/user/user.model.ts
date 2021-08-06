import { Book } from "../books/book.model";
import { BookQuote } from "../books/book-details/book-quotes/book-quote.model";

export class User {

    constructor(public username: string, public books: Book[], public quotes: BookQuote[]) { }

}