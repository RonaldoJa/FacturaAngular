import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<ModalComponent>) {
    // Inicializa el formulario con los campos necesarios y las validaciones
    this.formulario = this.formBuilder.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(1)]],
      precio: ['', [Validators.required, Validators.min(0.01)]],
    });
  }

  ngOnInit(): void {
  }

  cerrarModal() {
    this.dialogRef.close(null);
  }

  guardarDatos() {
    if (this.formulario.valid) {
      // Los datos del formulario son válidos, puedes hacer algo con ellos
      const datosGuardados = this.formulario.value;
      this.dialogRef.close(datosGuardados);
    } else {
      // El formulario no es válido, puedes mostrar un mensaje de error si deseas
      // Por ejemplo:
      console.error('El formulario no es válido. Por favor, complete todos los campos correctamente.');
    }
  }

}
