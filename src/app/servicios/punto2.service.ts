import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Punto2Service {

  constructor( private http: HttpClient ) { }

  obtenerPost(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  hacerPost(obj: any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', obj);
  }
}
