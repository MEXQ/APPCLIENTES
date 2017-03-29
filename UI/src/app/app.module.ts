import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TableClientsComponent } from './components/table-clients/table-clients.component';
import { TableServicesSCComponent } from './components/table-services-sc/table-services-sc.component';
import { TableServicesSCDetailsComponent } from './components/table-services-scdetails/table-services-scdetails.component';
import { TableAllServicesComponent } from './components/table-all-services/table-all-services.component';
import { TableActiveServicesComponent } from './components/table-active-services/table-active-services.component';
import { TableActiveServicesInformationComponent } from './components/table-active-services-information/table-active-services-information.component';
import { TableActiveServicesDetailsComponent } from './components/table-active-services-details/table-active-services-details.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';

import { LoginService } from './components/login/login.service';
import { ClientService } from './components/table-clients/client.service' 

import { AppRoutingModule} from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    MenuComponent,
    TableClientsComponent,
    TableServicesSCComponent,
    TableServicesSCDetailsComponent,
    TableAllServicesComponent,
    TableActiveServicesComponent,
    TableActiveServicesInformationComponent,
    TableActiveServicesDetailsComponent,
    FooterComponent,
    LoaderComponent,
    LoginComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
  LoginService,
  ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }