import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from 'src/app/interface/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  rutaApi="http://mi-api-inventario-env.eba-nbtmd8uk.us-east-2.elasticbeanstalk.com/api/categorias";
  private http= inject(HttpClient);

  constructor(){
  }

   // listar categorias
  getAllCategorys (){
    return this.http.get<Categoria[]>(this.rutaApi+'/read')
  }
}
