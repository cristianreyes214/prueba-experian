import { Component, OnInit } from '@angular/core';
import { Punto2Service } from '../../servicios/punto2.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  mensaje = {
    title: '',
    body: '',
    userId: 1
  }
  respuesta: any;
  post_list: any[] = [];

  constructor( private servicio: Punto2Service) { }

  ngOnInit(): void {
    this.servicio.obtenerPost().subscribe((res: any)=> {
      this.post_list = res;
    })
  }

  enviar_post(){
    this.servicio.hacerPost(this.mensaje).subscribe((res: any) => {
      this.respuesta = res;
    })
  }

}
