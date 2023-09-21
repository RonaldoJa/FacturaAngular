import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Producto } from '../../interface/producto.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  productos: Producto[] = [
    { codigo: '001', descripcion: 'Producto 1', cantidad: 5, precio: 10.00 },
    { codigo: '002', descripcion: 'Producto 2', cantidad: 3, precio: 15.00 },
    { codigo: '003', descripcion: 'Producto 3', cantidad: 2, precio: 20.00 }
];

  constructor(public dialog: MatDialog, private productoService: ProductoService) {}

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      // Configuraciones del modal aquí, si es necesario
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // result contiene los valores del formulario
        console.log('Modal cerrado con resultado:', result);
        this.productos.push(result);
        // Realiza las acciones necesarias con los datos aquí
      } else {
        console.log('Modal cerrado sin resultado.');
      }
    }, error => {
      console.error('Error al cerrar el modal:', error);
    });
  }

  agregarProducto() {
    console.log(this.productos);
  }

  eliminarProducto(producto: any) {
    const index = this.productos.indexOf(producto);
    if (index !== -1) {
      this.productos.splice(index, 1); // Elimina el producto de la matriz
    }
  }

  calcularTotal(): number {
    return this.productos.reduce((total, producto) => {
      return total + producto.cantidad * producto.precio;
    }, 0);
  }
}
