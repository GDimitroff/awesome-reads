import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewsletterComponent } from './home/newsletter/newsletter.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { BoxesComponent } from './home/boxes/boxes.component';
import { SectionsComponent } from './home/sections/sections.component';
import { FaqComponent } from './home/faq/faq.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { ReadingListEditComponent } from './reading-list/reading-list-edit/reading-list-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        NewsletterComponent,
        ShowcaseComponent,
        BoxesComponent,
        SectionsComponent,
        FaqComponent,
        BooksComponent,
        BookListComponent,
        BookDetailsComponent,
        BookItemComponent,
        ReadingListComponent,
        ReadingListEditComponent
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }