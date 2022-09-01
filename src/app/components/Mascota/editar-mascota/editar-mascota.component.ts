import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css'],
})
export class EditarMascotaComponent implements OnInit {
  idMascota: any;
  formularioMascota: FormGroup;
  constructor(
    private mascotaServicio: MascotaService,
    private ruteador: Router,
    private formulario: FormBuilder,
    private params: ActivatedRoute
  ) {
    this.idMascota = Number(this.params.snapshot.paramMap.get('id'));
    console.log(this.idMascota);
    this.mascotaServicio
      .obtenerMascota(this.idMascota)
      .subscribe((respuesta) => {
        console.log(respuesta);
        this.formularioMascota.setValue({
          nombre: respuesta.nombre,
          genero: respuesta.genero,
          peso: respuesta.peso,
          precio: respuesta.precio,
        });
      });
    this.formularioMascota = this.formulario.group({
      nombre: ['', Validators.required],
      genero: ['', Validators.required],
      peso: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  enviarDatos() {
    console.log(this.idMascota, this.formularioMascota.value);

    this.mascotaServicio
      .actualizarMascota(this.idMascota, this.formularioMascota.value)
      .subscribe((respuesta) => {
        this.ruteador.navigateByUrl('/mascotas');
      });
  }
}
