import { Component } from '@angular/core';
//import { AuthService } from '../usuarios/auth.service';
//import { Router } from '@angular/router';
//import swal from 'sweetalert2'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  title: string = 'App Angular'

  constructor( ){}

  //logout(): void{
  //  let username = this.authService.usuario.nombre;
  //  this.authService.logout();
  //  swal.fire('Logout', `Adios ${username}, has cerrado sesion correctamente`, 'success');
  //  this.router.navigate(['/login']);
  //}

}
