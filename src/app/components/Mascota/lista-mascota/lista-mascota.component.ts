import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/Models/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-lista-mascota',
  templateUrl: './lista-mascota.component.html',
  styleUrls: ['./lista-mascota.component.css'],
})
export class ListaMascotaComponent implements OnInit {
  mascotas: Mascota [] = [];
  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.mascotaService.obtenerMascotas().subscribe((data) => {
      this.mascotas = data;
    });
  }
  eliminarMascota(id: number, iControl: number) {
    this.mascotaService.eliminarMascota(id).subscribe((respuesta) => {
      this.mascotas.splice(iControl, 1); 
    });
  }
}
