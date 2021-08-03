import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { ReadingListComponent } from './reading-list/reading-list.component';

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
        component: BooksComponent
    },
    {
        path: 'reading-lists',
        component: ReadingListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }