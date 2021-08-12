import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books.component';
import { BookStartComponent } from './book-start/book-start.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
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
                component: BookEditComponent,
                canActivate: [AuthGuard]
            },
            {
                path: ':id',
                component: BookDetailsComponent
            },
            {
                path: ':id/edit',
                component: BookEditComponent,
                canActivate: [AuthGuard]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class BooksRoutingModule { }