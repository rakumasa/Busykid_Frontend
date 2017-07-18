import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { LoginComponent } from './login/login.component';
import { SearchPipe } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    CustomerlistComponent,
    CustomerdetailComponent,
    LoginComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
