import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MyappComponent } from './myapp/myapp.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ServicecomponentComponent } from './servicecomponent/servicecomponent.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { MysignupComponent } from './mysignup/mysignup.component';
import { MysigninComponent } from './mysignin/mysignin.component';
import { studentguardGuard } from './guards/studentguard.guard';

export const routes: Routes = [
    {path:'', component: LandingpageComponent},
    {path: 'home', redirectTo: '', pathMatch:'full'},
    {path:'service', component: ServicecomponentComponent},
    {path: 'signin', component: MysigninComponent},
    {path: 'mysignup', component: MysignupComponent},
    {path: 'sample', children:[
        {path: '', component: MyappComponent},
        {path: 'deposit', component: LandingpageComponent}
    ]},
    {path:'display/:index', component: MyappComponent},
    {path:'mydisplay/:myindex', component: LandingpageComponent},
    {path: 'dashboard', children:[
        {path: '', component: MydashboardComponent},
    ],canActivate:[studentguardGuard]},
    {path: '**', component: ErrorpageComponent},
];
