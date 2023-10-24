import { Component, inject } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';
import { Producto } from 'src/app/interface/producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pageActual: number=1;

  productos: Producto[]=[];
  private productoService= inject(ProductosService);

  ngOnInit() {
    this.getProductos();
  }
  // Listar productos
  getProductos(){
    this.productoService.getAllProducts().subscribe(res=>{
      this.productos=res;
    }, (error)=>{
      alert(`Ocurrio un error ${error}`)
    })
  }

  eliminar(productId: number|undefined){
    if(confirm('Seguro que desea eliminar')){
      this.productoService.deleteProduct(productId).subscribe((data)=>{
        this.getProductos();
      }, (error)=>{
        console.log(error);
      })
    }
  }
}
