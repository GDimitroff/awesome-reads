import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './home.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { BoxesComponent } from './boxes/boxes.component';
import { SectionsComponent } from './sections/sections.component';

@NgModule({
    declarations: [
        HomeComponent,
        ShowcaseComponent,
        BoxesComponent,
        SectionsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'home',
                component: HomeComponent
            }
        ]),
        FontAwesomeModule,
        BrowserAnimationsModule
    ]
})
export class HomeModule { }