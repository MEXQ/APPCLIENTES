import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {MenuComponent} from './components/menu/menu.component';
import {LoginComponent} from './components/login/login.component';

@NgModule({
imports:[ RouterModule.forRoot([
    {
      path:"menu",
     component : MenuComponent
    },
     {
      path:"",
     component : LoginComponent
    }
  ])
],
exports:[RouterModule]
})
export class AppRoutingModule{}
