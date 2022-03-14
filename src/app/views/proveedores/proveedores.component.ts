import { Component, OnInit } from '@angular/core';
import {Proveedor} from './proveedor';
import {ProveedorService} from './proveedor.service';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { ModalService } from '../../modal.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  proveedores: Proveedor[];

  paginador: any;
  proveedorSeleccionado: Proveedor;

  constructor(private proveedorService: ProveedorService, private activatedRoute: ActivatedRoute, public modalService: ModalService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');

      if (!page) {
        page = 0;
      }

      this.proveedorService.getProveedores(page)
        .pipe(
          tap(response => {
            console.log('ProveedoresComponent: tap 3');
            (response.content as Proveedor[]).forEach(proveedor => console.log(proveedor.nombre));
          })
        ).subscribe(response => {
          this.proveedores = response.content as Proveedor[];
          this.paginador = response;
        });
    });

  }

  delete(proveedor: Proveedor): void {
    const swalfire = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalfire.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al proveedor ${proveedor.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.proveedorService.delete(proveedor.id).subscribe(
          response => {
            this.proveedores = this.proveedores.filter(ven => ven !== proveedor)
            swal.fire(
              'Proveedor Eliminado',
              `Proveedor ${proveedor.nombre} eliminado con éxito.`,
              'success'
            )
          }
        )
      }
    });
  }

  abrirModal(proveedor: Proveedor) {
    this.proveedorSeleccionado = proveedor;
    this.modalService.abrirModal();
  }


}
