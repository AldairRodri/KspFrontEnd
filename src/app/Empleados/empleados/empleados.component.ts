import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicioConsumoService } from 'src/app/service/servicio-consumo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {

  id!: any


get resultados(){
  console.log(this.service.resultados);
  return this.service.resultados;
}

constructor(public service:ServicioConsumoService, private http:HttpClient , private router:Router){
this.service.obtenerEmpleadosactivos();
}

DeleteEmpleado(id:any){
  const datos ={
    id : id,
    Estatus:false
  }

  let url="https://localhost:7054/api/Empleados/Delete"
  this.http.post(url,datos).toPromise().then(data=>{
    console.log(datos)
    console.log(data);
    window.location.reload()
  })

}


ActualizarEmpleado(id:any){

  this.router.navigate(['/Editar',id])
}


}
