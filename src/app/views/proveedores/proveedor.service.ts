import { Injectable } from '@angular/core';
import { Proveedor } from './proveedor';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Ciudad } from '../../ciudad';
import { TipoDocumento } from '../../tipo_documento';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private urlEndPoint: string = 'http://localhost:8080/api/proveedores';

  constructor(private http: HttpClient, private router: Router) { }

  getTipoDocumento(): Observable<TipoDocumento[]> {
    return this.http.get<TipoDocumento[]>(this.urlEndPoint + '/tipos_documentos')
  }

  getCiudades(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(this.urlEndPoint + '/proveedores');
  }

  getProveedores(page: number): Observable<any> {
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      tap((response: any) => {
        console.log('ProveedorService: tap 1');
        (response.content as Proveedor[]).forEach(proveedor => console.log(proveedor.nombre));
      }),
      map((response: any) => {
        (response.content as Proveedor[]).map(proveedor => {
          proveedor.nombre = proveedor.nombre.toUpperCase();
          return proveedor;
        });
        return response;
      }),
      tap(response => {
        console.log('ProveedorService: tap 2');
        (response.content as Proveedor[]).forEach(proveedor => console.log(proveedor.nombre));
      }));
  }


  create(proveedor:Proveedor): Observable<Proveedor> {
    return this.http.post(this.urlEndPoint, proveedor).pipe(
      map((response: any) => response.proveedor as Proveedor),
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }
      )
    );
  }

  getProveedor(id): Observable<Proveedor> {
    return this.http.get<Proveedor>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        if (e.status != 401 && e.error.mensaje) {
          this.router.navigate(['/proveedor']);
          console.error(e.error.mensaje);
        }

        return throwError(e);
      })
    );
  }

  update(proveedor: Proveedor): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${proveedor.id}`, proveedor).pipe(
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  delete(id: number): Observable<Proveedor> {
    return this.http.delete<Proveedor>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }
}
