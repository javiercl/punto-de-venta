import { Injectable } from '@angular/core';
import { Cliente } from '../models/schemadb';

@Injectable({
  providedIn: 'root'
})

export class DbService {

  
  constructor() {

   }

  get_clientes():Cliente[]{
    let retrievedObject = localStorage.getItem('database');
    console.log('get_clientes');
    console.log(retrievedObject);
    return JSON.parse(retrievedObject).clientes;
  }

  create_cliente(cliente){
    var retrievedObject = localStorage.getItem('database');
    var db =  JSON.parse(retrievedObject);
    db.clientes.push(cliente);
    localStorage.setItem('database', JSON.stringify(db));

  }  
}
