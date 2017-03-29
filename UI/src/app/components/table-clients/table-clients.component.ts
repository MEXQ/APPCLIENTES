import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Client, ClientService } from  './client.service';


@Component({
  selector: 'app-table-clients',
  templateUrl: './table-clients.component.html',
  styleUrls: ['./table-clients.component.css']
})

export class TableClientsComponent implements OnInit {
  clients : Observable<Client[]>;

  private selectedId : number;

  constructor(
    private service : ClientService,
    private route : ActivatedRoute,
    private router : Router
  ) {}
 
ngOnInit() {
  this.clients = this.route.params
    .switchMap((params : Params) => {
      this.selectedId = +params['id'];
      return this.service.getClients();
    });
  }

  isSelected(client : Client) { 
    return client.id === this.selectedId; 
  }

  onSelect(client : Client) {
    this.router.navigate(['/allservices',client.id]);
  }

  
 /* constructor(service : ClientService ,private router:Router) { 
    this.service= service;
  }

  
  clientSearch():void
  {

    this.Cliente = this.service.cliente;
    let clientes=  this.service.clientes(this.Cliente);
    //this.Usuario = usuarios.Search["0"]["Title"];
    console.log(this.Cliente);

  }
*/
}
