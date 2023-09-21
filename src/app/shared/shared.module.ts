import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabceraComponent } from './cabcera/cabcera.component';
import { DetallesComponent } from './detalles/detalles.component';



@NgModule({
  declarations: [
    CabceraComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    CabceraComponent,
    DetallesComponent
  ]
})
export class SharedModule { }
