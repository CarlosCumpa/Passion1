import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreaeditaComponent } from './page/cliente/cliente-creaedita/cliente-creaedita.component';
import { ClienteComponent } from './page/cliente/cliente.component';
const routes: Routes = [{

  path: 'clientes', component: ClienteComponent, children:[
    { path: 'nuevo', component: ClienteCreaeditaComponent},
    { path: 'edicion/:id', component: ClienteCreaeditaComponent}

]


}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
