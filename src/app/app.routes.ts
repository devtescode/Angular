import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MyappComponent } from './myapp/myapp.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

export const routes: Routes = [
    {path:'', component: LandingpageComponent},
    {path: 'home', redirectTo: '', pathMatch:'full'},
    {path: 'dashboard', children:[
        {path: '', component: MyappComponent},
        {path: 'deposit', component: LandingpageComponent}
    ]},
    {path:'display/:index', component: MyappComponent},
    {path:'mydisplay/:myindex', component: LandingpageComponent},
    {path: '**', component: ErrorpageComponent}
];
