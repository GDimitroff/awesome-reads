import { EventEmitter, Injectable } from "@angular/core";
import { Quote } from "./quote.model";

Injectable()
export class QuoteService {
    quotesChanged = new EventEmitter<Quote[]>();
    private quotes: Quote[] = [];

    getQuotes(): Quote[] {
        return this.quotes.slice();
    }

    addQuote(quote: Quote): void {
        this.quotes.push(quote);
        this.quotesChanged.emit(this.quotes.slice());
    }
}