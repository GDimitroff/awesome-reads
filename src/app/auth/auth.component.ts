import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { ProfileService } from '../profile/profile.service';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.html']
})
export class AuthComponent implements OnInit {
    private userSub!: Subscription;
    isAuthenticated: boolean = false;
    isLoginMode: boolean = true;
    isLoading: boolean = false;
    error!: string;

    constructor(private authService: AuthService, private router: Router, private profileService: ProfileService) { }

    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
            if (user) {
                this.router.navigate(['/books']);
            } 
        });
    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }

        const email = form.value.email;
        const password = form.value.password;
        const repeatPassword = form.value.repeatPassword || undefined;

        if (password !== repeatPassword && !this.isLoginMode) {
            this.error = 'Passwords don\'t match!';
            form.reset();

            setTimeout(() => {
                this.error = null!;
            }, 2000);

            return;
        }

        let authObservable: Observable<AuthResponseData>;

        this.isLoading = true;
        if (this.isLoginMode) {
            authObservable = this.authService.login(email, password);
        } else {
            authObservable = this.authService.signup(email, password);
        }

        authObservable.subscribe(response => {
            if (!this.isLoginMode) {
                this.profileService.createFirebaseUserProfile(response.localId, response.email);
            } else {
                this.profileService.getFirebaseUserProfile(response.localId);
            }

            this.isLoading = false;
            this.router.navigate(['/books']);
        }, errorMessage => {
            this.error = errorMessage;
            this.isLoading = false;

            setTimeout(() => {
                this.error = null!;
            }, 2000);
        });

        form.reset();
    }
}