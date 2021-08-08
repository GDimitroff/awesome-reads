import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    // ExhaustMap waits to first observable to complete and then the second observable replaces the entire chain
    // TODO: gettting the books only for auth users?
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authService.user.pipe(take(1), exhaustMap(user => {
            if (!user || req.url === 'https://awesome-reads-default-rtdb.europe-west1.firebasedatabase.app/books') {
                return next.handle(req);
            }

            const modifiedReq = req.clone({
                params: new HttpParams().set('auth', user.token!)
            });

            return next.handle(modifiedReq);
        }));
    }

}