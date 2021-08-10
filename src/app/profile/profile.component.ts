import { Component, OnInit } from '@angular/core';

import { ProfileService } from './profile.service';
import { Profile } from './profile.model';

@Component({
    selector: 'app-user',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user!: Profile;

    constructor(private userService: ProfileService) { }

    ngOnInit(): void {
        this.user = this.userService.getUserData();
    }

}
