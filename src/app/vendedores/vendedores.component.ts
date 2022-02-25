import { Component, OnInit } from '@angular/core';
import {Vendedor} from './vendedor';
import {VendedorService} from './vendedor.service';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent implements OnInit {
  vendedores: Vendedor[];

  constructor(private vendedorService: VendedorService) { }

  ngOnInit(): void {

   /* this.vendedores = this.vendedorService.getVendedores();*/

  }

}
