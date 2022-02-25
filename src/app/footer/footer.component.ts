import { Component } from '@angular/core';

@Component({
selector: 'app-footer',
templateUrl: './footer.component.html',
styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public autor: any = {nombre:'Nelson Rodrigo', apellido:'Villafrade Blanco ', empresa:' FUNDASES 2022 ',nombre2:'Sofia Paola', apellido2:'Gutierrez Guzman' };
}
