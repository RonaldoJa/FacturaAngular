import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalComponent } from './components/modal/modal.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { FacturaComponent } from './page/factura/factura.component';



@NgModule({
  declarations: [
    ModalComponent,
    TablaComponent,
    FacturaComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [
    FacturaComponent
  ]
})
export class ProductoModule { }
