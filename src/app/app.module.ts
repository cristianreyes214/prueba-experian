import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { EditarPerfilComponent } from './paginas/editar-perfil/editar-perfil.component';
import { InformacionGeneralComponent } from './componentes/informacion-general/informacion-general.component';
import { InformacionFinancieraComponent } from './componentes/informacion-financiera/informacion-financiera.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    EditarPerfilComponent,
    InformacionGeneralComponent,
    InformacionFinancieraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
