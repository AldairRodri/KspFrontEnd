import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-new-empleado',
  templateUrl: './new-empleado.component.html',
  styleUrls: ['./new-empleado.component.css']
})
export class NewEmpleadoComponent {
  Id: any
  FotoEmpleado!:any
  NombreEmpleado!:any
  ApellidoPaternoEmpleado!:any
  ApellidoMaternoEmpleado!:any
  PuestoTrabajo!:any
  Salario!:any
  Estatus!:any
  FechaContratacion!:any
  

constructor(private http:HttpClient, private sanitizer: DomSanitizer){}

  sendEmpleado(){

    const datos ={
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

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  
  handleReaderLoaded(readerEvent: any) {
    const binaryString = readerEvent.target.result;
    const base64textString = btoa(binaryString);
    console.log(base64textString);
    this.FotoEmpleado=base64textString;
  }

 
}
