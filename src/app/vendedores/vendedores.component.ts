//import { Component, OnInit } from '@angular/core';
//import {Vendedor} from './vendedor';
//import {VendedorService} from './vendedor.service';
//import { tap } from 'rxjs/operators';
//import { ActivatedRoute } from '@angular/router';
//import swal from 'sweetalert2';
//import { ModalService } from './detalle/modal.service';

//@Component({
//  selector: 'app-vendedores',
//  templateUrl: './vendedores.component.html',
//  styleUrls: ['./vendedores.component.css']
//})
//export class VendedoresComponent implements OnInit {
//  vendedores: Vendedor[];

//  paginador: any;
//  vendedorSeleccionado: Vendedor;

//  constructor(private vendedorService: VendedorService) { }

//  ngOnInit(): void {
//    this.activatedRoute.paramMap.subscribe(params => {
//      let page: number = +params.get('page');

//      if (!page) {
//        page = 0;
//      }

//      this.vendedorService.getVendedores(page)
//        .pipe(
//          tap(response => {
//            console.log('ClientesComponent: tap 3');
//            (response.content as Vendedor[]).forEach(cliente => console.log(cliente.nombre));
//          })
//        ).subscribe(response => {
//          this.vendedores = response.content as    this.activatedRoute.paramMap.subscribe(params => {
//      let page: number = +params.get('page');

//      if (!page) {
//        page = 0;
//      }

//      this.vendedorService.getVendedores(page)
//        .pipe(
//          tap(response => {
//            console.log('ClientesComponent: tap 3');
//            (response.content as Vendedor[]).forEach(cliente => console.log(cliente.nombre));
//          })
//        ).subscribe(response => {
//          this.vendedores = response.content as Vendedor[];
//          this.paginador = response;
//        });
//    });[];
//          this.paginador = response;
//        });
//    });

//  }

//  delete(vendedor: Vendedor): void {
//    const swalfire = swal.mixin({
//      customClass: {
//        confirmButton: 'btn btn-success',
//        cancelButton: 'btn btn-danger'
//      },
//      buttonsStyling: false
//    })
//    swalfire.fire({
//      title: 'Está seguro?',
//      text: `¿Seguro que desea eliminar al vendedor ${venddor.nombre}?`,
//      icon: 'warning',
//      showCancelButton: true,
//      confirmButtonColor: '#3085d6',
//      cancelButtonColor: '#d33',
//      confirmButtonText: 'Si, eliminar',
//      cancelButtonText: 'No, cancelar',
//      buttonsStyling: false,
//      reverseButtons: true
//    }).then((result) => {
//      if (result.value) {

//        this.vendedorService.delete(vendedor.id).subscribe(
//          response => {
//            this.vendedores = this.vendedores.filter(ven => ven !== vendedor)
//            swal.fire(
//              'Vendedor Eliminado',
//              `Vendedor ${vendedor.nombre} eliminado con éxito.`,
//              'success'
//            )
//          }
//        )
//      }
//    });
//  }

//  abrirModal(vendedor: Vendedor) {
//    this.vendedorSeleccionado = vendedor;
//    this.modalService.abrirModal();
//  }


//}


