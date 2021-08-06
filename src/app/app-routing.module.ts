import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookStartComponent } from './books/book-start/book-start.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'books',
        component: BooksComponent,
        children: [
            {
                path: '',
                component: BookStartComponent
            },
            {
                path: 'new',
                component: BookEditComponent
            },
            {
                path: ':id',
                component: BookDetailsComponent
            },
            {
                path: ':id/edit',
                component: BookEditComponent
            }
        ]
    },
    {
        path: 'profile',
        component: UserComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }