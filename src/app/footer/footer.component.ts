import { Component } from '@angular/core';

@Component({
selector: 'app-footer',
templateUrl: './footer.component.html',
styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public empresa: any = {nombre:'Fundases'};
  public autor: any = {nombre: 'Sofia Gutierrez', nombre1:'Nelson Villafrade'}
}
