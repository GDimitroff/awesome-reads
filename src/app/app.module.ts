import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from './auth/auth.component';
import { Loading } from 'src/app/shared/loading/loading.component';
import { AlertComponent } from './shared/alert/alert.component';

import { AuthInterceptorService } from './auth/auth-interceptor.service';

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
        ProfileComponent,
        AuthComponent,
        Loading,
        AlertComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        FontAwesomeModule,
        AppRoutingModule
    ],
    providers: [
        BookService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }