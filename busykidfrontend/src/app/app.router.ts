import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { LoginComponent } from './login/login.component';
import { HttpComponent } from './http/http.component';
import { RefundComponent} from './refund/refund.component'

export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: CustomerlistComponent },
  { path: 'detail/:id', component: CustomerdetailComponent },
  { path: 'test', component: HttpComponent},
  { path: 'refund/:id', component: RefundComponent},
  { path: 'app', component:AppComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
