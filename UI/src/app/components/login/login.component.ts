import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Respuesta;
  Usuario = "";
  Pass="";
  service  : LoginService;
  //LOGO = "./../../app/img/logo.png";

  
  constructor(service : LoginService ,private router:Router) { 
    this.service= service;
  }

  ngOnInit() {
  }

  logInUser():void
  {

     this.Usuario= this.service.usuario;
     this.Pass= this.service.pass;
    let usuarios=  this.service.usuarios(this.Usuario,this.Pass);
    //this.Usuario = usuarios.Search["0"]["Title"];
    console.log(this.Usuario);
    console.log(this.Usuario);

    this.router.navigate(['/menu']);

  }


}

