import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProfileService } from './profile.service';
import { Profile } from './profile.model';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
    private userSub!: Subscription;
    profile!: Profile;

    userId!: string;
    userEmail!: string;

    constructor(private profileService: ProfileService, private authService: AuthService) { }

    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe(user => {
            this.userId = user.id;
            this.userEmail = user.email;
        });

        const firebaseId = localStorage.getItem('firebaseUserId');
        this.profileService.getProfile(firebaseId!).subscribe(profile => {
            this.profile = profile;
        });
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

}