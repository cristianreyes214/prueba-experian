import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { EditarPerfilComponent } from './paginas/editar-perfil/editar-perfil.component';
import { InformacionGeneralComponent } from './componentes/informacion-general/informacion-general.component';
import { InformacionFinancieraComponent } from './componentes/informacion-financiera/informacion-financiera.component';
import { Punto2Component } from './paginas/punto2/punto2.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    EditarPerfilComponent,
    InformacionGeneralComponent,
    InformacionFinancieraComponent,
    Punto2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
