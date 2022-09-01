import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './compartidos/header/header.component';
import { FooterComponent } from './compartidos/footer/footer.component';
import { ShowEmpleadoComponent } from './components/Empleado/show-empleado/show-empleado.component';
import { CreateEmpleadoComponent } from './components/Empleado/create-empleado/create-empleado.component';
import { EditEmpleadoComponent } from './components/Empleado/edit-empleado/edit-empleado.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListaMascotaComponent } from './components/Mascota/lista-mascota/lista-mascota.component';
import { CrearMascotaComponent } from './components/Mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './components/Mascota/editar-mascota/editar-mascota.component';
import { ImageFondoComponent } from './components/image-fondo/image-fondo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShowEmpleadoComponent,
    CreateEmpleadoComponent,
    EditEmpleadoComponent,
    DashboardComponent,
    ListaMascotaComponent,
    CrearMascotaComponent,
    EditarMascotaComponent,
    ImageFondoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    SweetAlert2Module.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
