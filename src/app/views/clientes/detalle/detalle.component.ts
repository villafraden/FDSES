import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from './modal.service';
import { AuthService } from '../../usuarios/auth.service';

@Component({
  selector: 'detalle-cliente',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() cliente: Cliente;
  titulo: string = "Detalle del Cliente";

  constructor(private clienteService: ClienteService, 
    private activatedRoute: ActivatedRoute,
    private authService:AuthService,
    public modalService: ModalService) { }

  ngOnInit(): void { }

  cerrarModal() {
    this.modalService.cerrarModal();
  }

}
