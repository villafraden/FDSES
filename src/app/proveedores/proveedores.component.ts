import { Component, OnInit } from '@angular/core';
import {Proveedor} from './proveedor';
import {ProveedorService} from './proveedor.service';


@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',

})
export class ProveedoresComponent implements OnInit {

  proveedores: Proveedor[];
  constructor(private  proveedorService: ProveedorService) { }

  ngOnInit(): void {

   /* this.proveedorService.getProveedores().suscribe(
      proveedores => this.proveedores = proveedores);*/

    }

}
