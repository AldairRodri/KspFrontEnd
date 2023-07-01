import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioConsumoService {



  public resultados:any[]=[]
  constructor(private http:HttpClient) { }

  obtenerEmpleadosactivos(){
    this.http.get('https://localhost:7054/api/Empleados/Activos')
    .subscribe((res:any)=>{this.resultados=res})
  }


  

  
}
