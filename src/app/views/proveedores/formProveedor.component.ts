import { Component, OnInit } from '@angular/core';
import { Proveedor } from './proveedor';
import swal from 'sweetalert2';
import { ProveedorService } from './proveedor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ciudad } from '../../ciudad';
import { TipoDocumento } from '../../tipo_documento';

@Component({
  selector: 'app-from',
  templateUrl: './formProveedor.component.html',
})
export class FormProveedorComponent implements OnInit {

  public proveedor: Proveedor = new Proveedor();

  ciudades: Ciudad[];
  tipos_documentos: TipoDocumento[];
  titulo: string = 'Crear Proveedor';

  errores: string[];

  constructor(
    private proveedorService: ProveedorService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id = +params.get('id');
      if (id) {
        this.proveedorService
          .getProveedor(id)
          .subscribe((proveedor) => (this.proveedor = proveedor));
      }
    });

    this.proveedorService
      .getCiudades()
      .subscribe((ciudades) => (this.ciudades = ciudades));
    this.proveedorService
      .getTipoDocumento()
      .subscribe(
        (tipos_documentos) => (this.tipos_documentos = tipos_documentos)
      );
  }

  create(): void {
    console.log(this.proveedor);
    this.proveedorService.create(this.proveedor).subscribe(
      (proveedor) => {
        this.router.navigate(['/proveedores']);
        swal.fire(
          'Nuevo proveedor',
          `El proveedor ${proveedor.nombre} ha sido creado con éxito`,
          'success'
        );
      },
      (err) => {
        this.errores = err.error.errors as string[];
        console.error('Código del error desde el backend: ' + err.status);
        console.error(err.error.errors);
      }
    );
  }

  update(): void {
    console.log(this.proveedor);
    //this.cliente.facturas = null;
    this.proveedorService.update(this.proveedor).subscribe(
      json => {
        this.router.navigate(['/proveedor']);
        swal.fire(
          'Proveedor Actualizado',
          `${json.mensaje}: ${json.proveedor.nombre}`,
          'success'
        );
      },
      (err) => {
        this.errores = err.error.errors as string[];
        console.error('Código del error desde el backend: ' + err.status);
        console.error(err.error.errors);
      }
    );
  }

  compararCiudad(o1: Ciudad, o2: Ciudad): boolean {
    if (o1 === undefined && o2 === undefined) {
      return true;
    }

    return o1 === null || o2 === null || o1 === undefined || o2 === undefined
      ? false
      : o1.id === o2.id;
  }

  compararTipoDocumento(o1: TipoDocumento, o2: TipoDocumento): boolean {
    if (o1 === undefined && o2 === undefined) {
      return true;
    }

    return o1 === null || o2 === null || o1 === undefined || o2 === undefined
      ? false
      : o1.id === o2.id;
  }
}
