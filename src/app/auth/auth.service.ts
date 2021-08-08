import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    signup(email: string, password: string) {
        return this.http
            .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDBJJ7FpC69jEyq8vC8SvMr_Z-KdiFr56A', {
                email,
                password,
                returnSecureToken: true
            })
            .pipe(catchError(errorResponse => {
                let errorMessage = 'An unknown error occured!';
                if (!errorResponse.error || !errorResponse.error.error) {
                    return throwError(errorMessage);
                }

                switch (errorResponse.error.error.message) {
                    case 'EMAIL_EXISTS': errorMessage = 'This email address already exist!';
                        break;
                    case 'TOO_MANY_ATTEMPTS_TRY_LATER': errorMessage = 'Too many attempts! Try again later!';
                        break;
                }

                return throwError(errorMessage);
            }));
    }

    login(email: string, password: string) {
        return this.http
            .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDBJJ7FpC69jEyq8vC8SvMr_Z-KdiFr56A', {
                email,
                password,
                returnSecureToken: true
            });
    }
}