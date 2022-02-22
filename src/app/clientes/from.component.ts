import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html'
})
export class FromComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  
  titulo: string = "Crear Cliente";


  constructor() { }

  ngOnInit(): void {
  }

}
