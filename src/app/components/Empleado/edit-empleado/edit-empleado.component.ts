import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/Models/Empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css'],
})
export class EditEmpleadoComponent implements OnInit {
  idEmpleado: any;
  formularioEmpleado: FormGroup;

  constructor(
    private empleadoService: EmpleadoService,
    private idparam: ActivatedRoute,
    private formulario: FormBuilder,
    private ruta: Router
  ) {
    this.idEmpleado = this.idparam.snapshot.paramMap.get('id');
    console.log(this.idEmpleado);
    this.empleadoService.getEmpleado(this.idEmpleado).subscribe((respuesta) => {
 
      console.log(respuesta);
      
      this.formularioEmpleado.setValue({
        nombre: respuesta.nombre,
        apellidos: respuesta.apellidos,
        correo: respuesta.correo
      });
    });

    this.formularioEmpleado = this.formulario.group({
      nombre: [''],
      apellidos: [''],
      correo: ['']
    });
  }
  ngOnInit(): void {}

  editarForm() {
    console.log(this.idEmpleado);
    console.log(this.formularioEmpleado.value);

    this.empleadoService
      .updateEmpleado(this.idEmpleado , this.formularioEmpleado.value)
      .subscribe(() => {
        this.ruta.navigateByUrl('/empleado');
      });
  }
}
