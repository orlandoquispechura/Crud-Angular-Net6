import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mascota } from '../Models/mascota';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  API = environment.apiUrl + '/mascota/';
  constructor(private http: HttpClient) {}

  obtenerMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(this.API);
  }
  registrarMascota(mascota: Mascota): Observable<Mascota> {
    return this.http.post<Mascota>(this.API, mascota);
  }
  obtenerMascota(id: number): Observable<Mascota> {
    return this.http.get<Mascota>(this.API + id);
  }
  eliminarMascota(id: number): Observable<any> {
    return this.http.delete(this.API + id);
  }

  actualizarMascota(id: number, mascota: Mascota): Observable<Mascota> {
    return this.http.put<Mascota>(this.API + id, mascota);
  }
}
