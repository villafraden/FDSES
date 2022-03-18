import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { FormComponent } from './views/clientes/form.component';
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
import { DetallesComponents } from './views/proveedores/detalles/detalles.components';
import { FormProveedorComponent } from './views/proveedores/formProveedor.component';
import { LoginComponent } from './views/usuarios/login.component';
import { VendedoresComponent } from './views/vendedores/vendedores.component';
import { DetallesComponent } from './views/vendedores/detalles/detalles.component';
import { FormVendedorComponent } from './views/vendedores/formVendedor.component';
import { AuthGuard } from './views/usuarios/guards/auth.guard';
import { RoleGuard } from './views/usuarios/guards/role.guard';
import { TokenInterceptor } from './views/usuarios/interceptors/token.interceptor';
import { AuthInterceptor } from './views/usuarios/interceptors/auth.interceptor';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularEmojisModule } from 'angular-emojis';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { FacturasComponent } from './views/facturas/facturas.component';
import { DetalleFacturaComponent } from './views/facturas/detalle-factura.component';

registerLocaleData(localeES, 'es');

const routes: Routes = [
  //{path: '', redirectTo: '/clientes', pathMatch: 'full'},
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/form', component: FormComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  { path: 'clientes/form/:id', component: FormComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'proveedores/formProveedor', component: FormProveedorComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  { path: 'proveedores/formProveedor/:id', component: FormProveedorComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'vendedores', component: VendedoresComponent },
  { path: 'vendedores/formVendedor', component: FormVendedorComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  { path: 'vendedores/formVendedor/:id', component: FormVendedorComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'login', component: LoginComponent },
  { path: 'facturas/:id', component: DetalleFacturaComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'facturas/form/:clienteId', component: FacturasComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    ProveedoresComponent,
    FormComponent,
    DetalleComponent,
    LoginComponent,
    VendedoresComponent,
    DetallesComponent,
    LoginComponent,
    FormProveedorComponent,
    DetallesComponents,
    FormVendedorComponent,
    FacturasComponent
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
    AngularEmojisModule,
    NgxPaginationModule
  ],
  providers: [
    ClienteService,
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
