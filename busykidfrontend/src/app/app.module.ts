import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { LoginComponent } from './login/login.component';
import { SearchPipe } from './filter/filter.component';
import { RefundComponent } from './refund/refund.component';
import { DataService } from './data.service'


@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    CustomerdetailComponent,
    LoginComponent,
    SearchPipe,
    RefundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [DataService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
