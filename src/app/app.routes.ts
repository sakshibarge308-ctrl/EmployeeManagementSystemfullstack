import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddempComponent } from './addemp/addemp.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { UpempComponent } from './upemp/upemp.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'addemp', component: AddempComponent },
    { path: 'viewemp', component: ViewempComponent },
    { path: 'upemp/:id', component: UpempComponent },
    { path: '**', component: HomeComponent }
];
