import { BookQuote } from "./book-details/book-quotes/book-quote.model";

export class Book {
    public title: string;
    public author: string;
    public pages: number;
    public description: string;
    public imageUrl: string;
    public quotes: BookQuote[];
    public id?: string;
    public ownerId: string;

    constructor(title: string, author: string, pages: number,
        description: string, imageUrl: string, quotes: BookQuote[], id: string, ownerId: string) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.description = description;
        this.imageUrl = imageUrl;
        this.quotes = quotes;
        this.id = id;
        this.ownerId = ownerId;
    }

}