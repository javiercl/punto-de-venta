import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'clientes', loadChildren: () => import('./pages/clientes/clientes.module').then(m => m.ClientesModule) },
  { path:'**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
