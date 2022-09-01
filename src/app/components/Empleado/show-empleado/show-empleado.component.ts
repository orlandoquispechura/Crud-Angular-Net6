import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/Models/Empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-show-empleado',
  templateUrl: './show-empleado.component.html',
  styleUrls: ['./show-empleado.component.css'],
})
export class ShowEmpleadoComponent implements OnInit {
  empleados: Empleado | any;
  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.empleadoService.getAll().subscribe((respuesta) => {
      this.empleados = respuesta;
    });
  }

  eliminarEmpleado(id: number, iControl: number) {
    this.empleadoService.deleteEmpleado(id).subscribe((data) => {
      this.empleados.splice(iControl, 1);
    });
  }
}
