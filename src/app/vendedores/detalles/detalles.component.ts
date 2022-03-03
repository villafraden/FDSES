import { Component, Input, OnInit } from '@angular/core';
import { Vendedor } from '../vendedor';
import { VendedorService } from '../vendedor.service';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../../modal.service';

@Component({
  selector: 'detalle-vendedor',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  @Input() vendedores: Vendedor;
  titulo: string = "Detalle del Proveedor";

  constructor(private vendedorService: VendedorService,
    private activatedRoute: ActivatedRoute,
    public modalService: ModalService) { }

  ngOnInit(): void { }

  cerrarModal() {
    this.modalService.cerrarModal();
  }

}
