import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-update-empleados',
  templateUrl: './update-empleados.component.html',
  styleUrls: ['./update-empleados.component.css']
})
export class UpdateEmpleadosComponent {
  
  id!: any
  FotoEmpleado!:any
  NombreEmpleado!:any
  ApellidoPaternoEmpleado!:any
  ApellidoMaternoEmpleado!:any
  PuestoTrabajo!:any
  Salario!:any
  Estatus!:any
  FechaContratacion!:any
  


  public resultados:any[]=[]
constructor(private http:HttpClient, private route:ActivatedRoute){
  this.id=this.route.snapshot.params['id'];
  this.obtenerEmpleadoId();

  
}

editarForm = new FormGroup({
  NombreEmpleado : new FormControl(''),
  ApellidoPaternoEmpleado : new FormControl(''),
  ApellidoMaternoEmpleado : new FormControl(''),
  PuestoTrabajo : new FormControl(''),
  Salario : new FormControl(''),
  Estatus : new FormControl(''),
  FechaContratacion : new FormControl('')


});





  obtenerEmpleadoId(){
    this.http.get(`https://localhost:7054/api/Empleados/Obtener?id=${this.id}`)
    .subscribe((res:any)=>{this.resultados=res}
    // 'NombreEmpleado' : this.NombreEmpleado,
    // 'ApellidoPaternoEmpleado' : this.ApellidoPaternoEmpleado,
    // 'ApellidoMaternoEmpleado' : this.ApellidoMaternoEmpleado,
    // 'PuestoTrabajo' : this.PuestoTrabajo,
    // 'Salario': this.Salario,
    // 'Estatus': this.Estatus,
    // 'FechaContratacion' : this.FechaContratacion
    
    )
  }


  GuardarDatos( id:any, FotoEmpleado:any,NombreEmpleado:any,ApellidoPaternoEmpleado:any,ApellidoMaternoEmpleado:any,
    PuestoTrabajo:any,Salario:any,Estatus:any,FechaContratacion:any){

    const datos ={
      id:this.id,
      fotoEmpleado:this.FotoEmpleado,
      NombreEmpleado:this.NombreEmpleado,
      ApellidoPaternoEmpleado:this.ApellidoPaternoEmpleado,
      ApellidoMaternoEmpleado:this.ApellidoMaternoEmpleado,
      PuestoTrabajo:this.PuestoTrabajo,
      salario:this.Salario,
      Estatus:true,
      FechaContratacion:this.FechaContratacion
    }

    let url="https://localhost:7054/api/Empleados/Add"
    this.http.post(url,datos).toPromise().then(data=>{
      console.log(datos)
      console.log(data);
    })
  }

  

 





}
