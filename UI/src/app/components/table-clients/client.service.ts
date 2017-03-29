import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

export class Client {
  constructor(public id : number, public costumer : string, public ship:string) {}
}

let CLIENTS = [
  new Client(114, 'CKD (NISSAN MEXICANA SA DE SV)', '00115-1'),
  new Client(115, 'NISSAN MEXICANA SA DE SV', 'DEFAULT'),
  new Client(116, 'NISSAN TRADING CO. AMERICAS', '00115-1'),
  new Client(117, 'CKD (NISSAN MEXICANA SA DE SV)', '00115-1'),
  new Client(118, 'NISSAN MEXICANA SA DE SV', 'DEFAULT'),
  new Client(119, 'NISSAN TRADING CO. AMERICAS', '00115-1'),
];

let clientsPromise = Promise.resolve(CLIENTS);


@Injectable()
export class ClientService {
  getClients() {
    return clientsPromise;
  }

  getClient(id: number | string){
    return clientsPromise
      .then(clients => clients.find(client => client.id === +id ));
  }
}
/*
	cliente;

    constructor(private http: Http) {
    	this.cliente="";
    }

    clientes(cliente : string){
    	return this.getClient(cliente).subscribe(
    		respuesta=> console.log(respuesta.json()),
    		error=> console.log(error))
    }

    getClient(client : string) : Observable <Response>{
       return this.http
      .get("http://127.0.0.1:8000/")
      .catch( ()=> Observable.throw("Algo salio mal") );
    }*/


