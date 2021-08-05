import { Quote } from "../quotes/quote.model";

export class Book {
    public title: string;
    public author: string;
    public pages: number;
    public description: string;
    public imageUrl: string;
    public quotes: Quote[];

    constructor(title: string, author: string, pages: number, description: string, imageUrl: string, quotes: Quote[]) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.description = description;
        this.imageUrl = imageUrl;
        this.quotes = quotes;
    }

}