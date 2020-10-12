import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { async, timer } from 'rxjs';
import { Cliente } from 'src/app/models/schemadb';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  clientes : Cliente[];
  
  constructor(
    private router:Router,
    private database: DbService
  ) 
  {}

  ngOnInit() {
    this.clientes = this.database.get_clientes();
    console.log('pasa ngOnInit clientes');
  }

 

}



