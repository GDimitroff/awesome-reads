import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from '../shared/shared.module';

import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookItemComponent } from './book-list/book-item/book-item.component';
import { BookStartComponent } from './book-start/book-start.component';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
    declarations: [
        BooksComponent,
        BookListComponent,
        BookDetailsComponent,
        BookItemComponent,
        BookStartComponent,
        BookEditComponent
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        BooksRoutingModule,
        SharedModule
    ]
})
export class BooksModule { }