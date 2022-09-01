import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateEmpleadoComponent } from './components/Empleado/create-empleado/create-empleado.component';
import { EditEmpleadoComponent } from './components/Empleado/edit-empleado/edit-empleado.component';
import { ShowEmpleadoComponent } from './components/Empleado/show-empleado/show-empleado.component';
import { CrearMascotaComponent } from './components/Mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './components/Mascota/editar-mascota/editar-mascota.component';
import { ListaMascotaComponent } from './components/Mascota/lista-mascota/lista-mascota.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'empleado', component: ShowEmpleadoComponent },
  { path: 'crear', component: CreateEmpleadoComponent },
  { path: 'editar/:id', component: EditEmpleadoComponent },
  { path: 'mascotas', component: ListaMascotaComponent },
  { path: 'crearMascota', component: CrearMascotaComponent },
  { path: 'editarMascota/:id', component: EditarMascotaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
