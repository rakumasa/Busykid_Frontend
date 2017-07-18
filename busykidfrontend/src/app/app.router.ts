import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';

export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: CustomerlistComponent },
  { path: 'detail/:id', component: CustomerdetailComponent },
  { path: 'services', component: ServicesComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
