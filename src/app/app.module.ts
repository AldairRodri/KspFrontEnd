import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './Empleados/empleados/empleados.component';
import { BeneficiariosComponent } from './Beneficiarios/beneficiarios/beneficiarios.component';
import { NewEmpleadoComponent } from './Empleados/new-empleado/new-empleado.component';
import { UpdateEmpleadosComponent } from './Empleados/update-empleados/update-empleados.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    BeneficiariosComponent,
    NewEmpleadoComponent,
    
    UpdateEmpleadosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
