import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

  usuario;
  pass;


  constructor(private http: Http) { 
    this.usuario="";
    this.pass="";
  }

  usuarios(usuario : string , password : string)
  {

  return  this.getUser(usuario,password).subscribe(
      respuesta=> console.log(respuesta.json()),
      error=> console.log(error))
  }

  getUser(usuario :string , pass: string) : Observable <Response>
  {
      return this.http
      .get("http://127.0.0.1:8000/user/rafa")
      .catch( ()=> Observable.throw("Algo salio mal") );

  }
  /*parseResponse(response : Response) : response
  {
    if(!response.json() || response.json().Search)
    {
      return [];
    }else{
      return response.json().Search.map(
          this.usuario = response.json["nombre"];
          this.pass = response.json["Pass"];
        )
    }
  }*/

}