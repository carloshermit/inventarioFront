import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/interface/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  rutaApi="http://mi-api-inventario-env.eba-nbtmd8uk.us-east-2.elasticbeanstalk.com/api/products";
  private http= inject(HttpClient);

  constructor(){
  }
   // listar productos
  getAllProducts (){
    return this.http.get<Producto[]>(this.rutaApi+'/read')
  }
  // crear producto
  save(producto:Producto){
    return this.http.post<Producto>(this.rutaApi+'/save', producto)
  }
  // Editar producto
  update(producto:Producto){
    return this.http.put<Producto>(this.rutaApi+'/update', producto)
  }

  deleteProduct(productId:number|undefined){
    return this.http.delete<Producto>(this.rutaApi+'/delete/'+productId);
  }
}

