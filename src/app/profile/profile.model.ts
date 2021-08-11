import { Book } from "../books/book.model";
import { BookQuote } from "../books/book-details/book-quote.model";

export class Profile {

    constructor(public id: string, public email: string, public books: Book[], public quotes: BookQuote[]) { }

}