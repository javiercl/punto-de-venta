import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { DbService } from '../../services/db.service';


@NgModule({
  declarations: [ClientesComponent, RegisterComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ]

})
export class ClientesModule { }
