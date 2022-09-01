import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Models/Empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-create-empleado',
  templateUrl: './create-empleado.component.html',
  styleUrls: ['./create-empleado.component.css'],
})
export class CreateEmpleadoComponent implements OnInit {
 
  empleadoForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    correo: new FormControl(''),
  });
  constructor(private empleadoService: EmpleadoService, private ruta: Router) {}

  ngOnInit(): void {}

  guardarEmpleado() {
    console.log(this.empleadoForm.value);
    
    this.empleadoService
      .postEmpleado(this.empleadoForm.value)
      .subscribe((data) => {
        this.ruta.navigateByUrl('/empleado');
      });
  }

 
}
