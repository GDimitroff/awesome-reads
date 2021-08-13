import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    declarations: [
        AlertComponent,
        LoadingComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        AlertComponent,
        LoadingComponent
    ]
})
export class SharedModule { }