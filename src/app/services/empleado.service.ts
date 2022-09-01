import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Empleado } from '../Models/Empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  API: string = environment.apiUrl + '/empleadoes/';
  //   httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //  }
  constructor(private http: HttpClient) {}

  getAll(): Observable<Empleado> {
    return this.http.get<Empleado>(this.API);
  }
  postEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.API, empleado);
  }

  deleteEmpleado(id: number): Observable<any> {
    return this.http.delete(this.API + id);
  }
  getEmpleado(id: number): Observable<any> {
    return this.http.get(this.API + id);
  }

  updateEmpleado(id: number, empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(this.API + id, empleado);

    // return this.http.put<Empleado>(this.API + id,JSON.stringify(empleado) , this.httpOptions);
  }
}
