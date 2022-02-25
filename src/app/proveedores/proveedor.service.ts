import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from './proveedor';



@Injectable({
  providedIn: 'root'
})

export class ProveedorService {

  private urlEndPoint: string = 'http://localhost:8080/api/proveedores';

  constructor(private http: HttpClient) { }
}
