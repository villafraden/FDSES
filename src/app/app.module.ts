import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { VendedoresComponent } from './vendedores/vendedores.component';


const routes: Routes = [
  //{path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'clientes', component: ClientesComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'vendedores', component: VendedoresComponent}



]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent ,
    FooterComponent,
    ClientesComponent,
    ProveedoresComponent,
    VendedoresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
