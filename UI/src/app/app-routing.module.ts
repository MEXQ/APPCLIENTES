import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { TableActiveServicesInformationComponent } from './components/table-active-services-information/table-active-services-information.component';
import { TableActiveServicesDetailsComponent } from './components/table-active-services-details/table-active-services-details.component';
import { TableServicesSCDetailsComponent } from './components/table-services-scdetails/table-services-scdetails.component';
import { TableActiveServicesComponent } from './components/table-active-services/table-active-services.component';
import { TableAllServicesComponent } from './components/table-all-services/table-all-services.component';
import { TableServicesSCComponent } from './components/table-services-sc/table-services-sc.component';
import { TableClientsComponent } from './components/table-clients/table-clients.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';


@NgModule({
imports:[ RouterModule.forRoot([
    {
      path:"",
     component : LoginComponent
    },
     {
      path:"index",
     component : HeaderComponent
    },
    {
      path:"clients",
     component : TableClientsComponent
    },
    {
      path:"allServices",
     component : TableAllServicesComponent
    },
    {
      path:"activeServices",
     component : TableActiveServicesComponent
    },
     {
      path:"activeServices/info/:id",
     component : TableActiveServicesInformationComponent
    },
    {
      path:"activeServices/info/details/:id",
     component : TableActiveServicesDetailsComponent
    },
     {
      path:"SCServices",
     component : TableServicesSCComponent
    },
    {
    path:"SCServices/details/:id",
     component : TableServicesSCDetailsComponent 
    },
    { 
      path: '**', 
      component : Error404Component  
    }
  ])
],
exports:[RouterModule]
})
export class AppRoutingModule{}