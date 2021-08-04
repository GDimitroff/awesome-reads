import { Injectable } from "@angular/core";
import { Quote } from "./quote.model";

Injectable()
export class QuoteService {
    private quotes: Quote[] = [];

    getQuotes(): Quote[] {
        return this.quotes.slice();
    }

    addQuote(quote: string, author: string): void {
        this.quotes.push(new Quote(quote, author));
    }
}