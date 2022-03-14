import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { FromComponent } from './views/clientes/form.component';
import { PaginatorComponent } from './views/paginator/paginator.component';
import { ClienteService } from './views/clientes/cliente.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DetalleComponent } from './views/clientes/detalle/detalle.component';
import { ProveedoresComponent } from './views/proveedores/proveedores.component';
import { LoginComponent } from './views/usuarios/login.component';
import { DetallesComponent } from './views/vendedores/detalles/detalles.component';
import { VendedoresComponent } from './views/vendedores/vendedores.component';
import { AuthGuard } from './views/usuarios/guards/auth.guard';
import { RoleGuard } from './views/usuarios/guards/role.guard';
import { TokenInterceptor } from './views/usuarios/interceptors/token.interceptor';
import { AuthInterceptor } from './views/usuarios/interceptors/auth.interceptor';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularEmojisModule } from 'angular-emojis';

/*import {
  AppHeaderModule
} from '@coreui/angular';*/

registerLocaleData(localeES, 'es');

const routes: Routes = [
  //{path: '', redirectTo: '/clientes', pathMatch: 'full'},
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/page/:page', component: ClientesComponent },
  { path: 'clientes/form', component: FromComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  { path: 'clientes/form/:id', component: FromComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'vendedores', component: VendedoresComponent },
  { path: 'login', component: LoginComponent },
  //{ path: 'imagenes', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    ProveedoresComponent,
    FromComponent,
    PaginatorComponent,
    DetalleComponent,
    VendedoresComponent,
    DetallesComponent,
    LoginComponent,
    //AppHeaderModule,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule, 
    AngularEmojisModule
  ],
  providers: [
    ClienteService,
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
