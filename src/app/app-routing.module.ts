import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPerfilComponent } from './paginas/editar-perfil/editar-perfil.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { Punto2Component } from './paginas/punto2/punto2.component';

const routes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: 'editarPerfil', component: EditarPerfilComponent },
  { path: 'punto2', component: Punto2Component},
  { path: '**', pathMatch: 'full', redirectTo: 'perfil' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
