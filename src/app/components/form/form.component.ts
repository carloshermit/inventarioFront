import { Component, inject } from '@angular/core';
import { Producto } from 'src/app/interface/producto';
import { Categoria } from 'src/app/interface/categoria';
import { Unidad } from 'src/app/interface/unidad';
import { ProductosService } from 'src/app/service/productos.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { UnidadService } from 'src/app/service/unidad.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  private productoService= inject(ProductosService);
  private categoriaService= inject(CategoriaService);
  private unidadService= inject(UnidadService);
  private route= inject(Router);
  private activatedRoute= inject(ActivatedRoute);

  producto:Producto={
    description: '',
    price: 0,
    quantity: 0,
    category: {
      categoryId: 0,
      description: '',
      state: true
    },
    unit: {
      unitId: 0,
      description:'',
      state: true
    }
  }

  unidades: Unidad[]=[];
  categorias: Categoria[]=[];
  productos: Producto[]=[];
  id:any;
  editing:boolean=false;


  ngOnInit(){
    this.getCategorias();
    this.getUnidades();


    this.id=this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.editing=true;
      this.productoService.getAllProducts().subscribe((res: Producto[])=>{
        this.productos=res;
        const productoEncontrado = this.productos.find((m) => m.productId == this.id);
        if (productoEncontrado) {
          this.producto = productoEncontrado;
        } else {
          console.log('Ocurrio un error')
        }
      }, (error)=>{
        console.log(error);
      })
    }else {
      this.editing=false;
    }

  }

  getCategorias(){
    this.categoriaService.getAllCategorys().subscribe(res=>{
      this.categorias=res;
    }, (error)=>{
      alert(`Ocurrio un error ${error}`)
    })
  }
  getUnidades(){
    this.unidadService.getAllUnidades().subscribe(res=>{
      this.unidades=res;
    }, (error)=>{
      alert(`Ocurrio un error ${error}`)
    })
  }

  saveProducto(){
    if(this.editing){
      this.productoService.update(this.producto).subscribe((data)=>{
        this.route.navigateByUrl('');
        alert('producto actualizado');

      }, (error)=> {
        alert(`Error al actualizar ${error}`)
      });
    }else
    {
      this.productoService.save(this.producto).subscribe((data)=>{
      this.route.navigateByUrl('');
      alert('producto guardado');

    }, (error)=> {
      alert(`Error al guardar ${error}`)
    });

    }

  }
  cancelar(){
    this.route.navigateByUrl('');
  }


}
