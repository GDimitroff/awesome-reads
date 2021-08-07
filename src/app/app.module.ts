import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BookService } from './books/book.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { BoxesComponent } from './home/boxes/boxes.component';
import { SectionsComponent } from './home/sections/sections.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { BookStartComponent } from './books/book-start/book-start.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookQuotes } from './books/book-details/book-quotes/book-quotes.component';
import { BookQuotesEditComponent } from './books/book-details/book-quotes-edit/book-quotes-edit.component';
import { UserComponent } from './user/user.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ShowcaseComponent,
        BoxesComponent,
        SectionsComponent,
        BooksComponent,
        BookListComponent,
        BookDetailsComponent,
        BookItemComponent,
        BookStartComponent,
        BookEditComponent,
        BookQuotes,
        UserComponent,
        BookQuotesEditComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        AppRoutingModule
    ],
    providers: [
        BookService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }