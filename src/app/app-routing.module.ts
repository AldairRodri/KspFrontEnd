import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './Empleados/empleados/empleados.component';
import { NewEmpleadoComponent } from './Empleados/new-empleado/new-empleado.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmpleadosComponent } from './Empleados/update-empleados/update-empleados.component';

const routes: Routes = [

  {path:'Empleados',component:EmpleadosComponent},
  {path:'Agregar', component:NewEmpleadoComponent},
  {path:'Editar/:id', component:UpdateEmpleadosComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule, 
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
