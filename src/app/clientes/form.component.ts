import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import swal from 'sweetalert2';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ciudad } from './ciudad';
import { TipoDocumento } from './tipo_documento';

@Component({
  selector: 'app-from',
  templateUrl: './form.component.html'
})
export class FromComponent implements OnInit {

  public cliente: Cliente = new Cliente();

  ciudades: Ciudad[];
  tipos_documentos: TipoDocumento[];
  titulo: string = "Crear Cliente";

  errores: string[];

  constructor(private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      if (id) {
        this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente);
      }
    });

    this.clienteService.getCiudades().subscribe(ciudades => this.ciudades = ciudades);
    this.clienteService.getTipoDocumento().subscribe(tipos_documentos => this.tipos_documentos = tipos_documentos);

  }

  create(): void {
    console.log(this.cliente);
    this.clienteService.create(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes']);
        swal.fire('Nuevo cliente', `El cliente ${cliente.nombre} ha sido creado con éxito`, 'success');
      },
      err => {
        this.errores = err.error.errors as string[];
        console.error('Código del error desde el backend: ' + err.status);
        console.error(err.error.errors);
      }
    );
  }

  update(): void {
    console.log(this.cliente);
    //this.cliente.facturas = null;
    this.clienteService.update(this.cliente).subscribe(
      json => {
        this.router.navigate(['/clientes']);
        swal.fire('Cliente Actualizado', `${json.mensaje}: ${json.cliente.nombre}`, 'success');
      },
      err => {
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

    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id === o2.id;
  }

  compararTipoDocumento(o1: TipoDocumento, o2: TipoDocumento): boolean {
    if (o1 === undefined && o2 === undefined) {
      return true;
    }

    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id === o2.id;
  }

}
