import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../auth/auth.guard';

import { ProfileComponent } from './profile.component';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ProfileComponent,
                canActivate: [AuthGuard]
            }
        ]),
        SharedModule
    ]
})
export class ProfileModule { }