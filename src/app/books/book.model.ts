export class Book {
    public title: string;
    public author: string;
    public pages: number;
    public description: string;
    public imageUrl: string;
    public quotes: string[];

    constructor(title: string, author: string, pages: number, description: string, imageUrl: string, quotes: string[]) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.description = description;
        this.imageUrl = imageUrl;
        this.quotes = quotes;
    }

}