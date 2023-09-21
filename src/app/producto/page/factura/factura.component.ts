import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {
  
  constructor(private productoService: ProductoService) {}

  enviarDatosAlModal() {
    this.productoService.datosParaModal
  }
}
