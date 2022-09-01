import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css'],
})
export class CrearMascotaComponent implements OnInit {
  formularioMascota: FormGroup;

  constructor(
    private mascotaServicio: MascotaService,
    private ruteador: Router,
    private formulario: FormBuilder
  ) {
    this.formularioMascota = this.formulario.group({
      nombre: ['', Validators.required],
      genero: [''],
      peso: [''],
      precio: [''],
    });
  } 

  ngOnInit(): void {}

  enviarDatos(): void {
    console.log(this.formularioMascota.value);
    this.mascotaServicio
      .registrarMascota(this.formularioMascota.value)
      .subscribe((respuesta) => {
        this.ruteador.navigateByUrl('/mascotas');
      });
  }
}
