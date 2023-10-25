import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Unidad } from 'src/app/interface/unidad';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {

  rutaApi="https://inventario.carlosflores.tech/api/unidades";
  private http= inject(HttpClient);

  constructor(){
  }

   // listar unidades
  getAllUnidades (){
    return this.http.get<Unidad[]>(this.rutaApi+'/read')
  }
}
