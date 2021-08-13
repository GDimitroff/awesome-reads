import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { NotFound } from './notFound/not-found.component';

import { AuthInterceptorService } from './auth/auth-interceptor.service';


@NgModule({
    declarations: [
        AppComponent,
        NotFound
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CoreModule,
        HomeModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }