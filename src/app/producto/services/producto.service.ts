import { Injectable } from '@angular/core';
import { Producto } from '../interface/producto.interface';
import { ModalComponent } from '../components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public datosParaModal!: Producto[];
  productos: Producto[] = []


  constructor(public dialog: MatDialog) { }

  openModale(){
    const dialogRef = this.dialog.open(ModalComponent, {
      // Configuraciones del modal aquí, si es necesario
    });
  
    dialogRef.afterClosed().subscribe((result: Producto) => {
      if (result) {
        // result contiene los valores del formulario
        console.log('Modal cerrado con resultado:', result);
        this.productos.push(result);
        // Realiza las acciones necesarias con los datos aquí
      } else {
        console.log('Modal cerrado sin resultado.');
      }
    }, (error: any) => {
      console.error('Error al cerrar el modal:', error);
    });
  }
}
