import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrls: ['./basics-pages.component.css']
})
export class BasicsPagesComponent {

  public nameLower: string = 'javier';
  public nameUpper: string = 'JAVIER';
  public fullName: string = 'JaViEr LoPeZ'

  public customDate: Date = new Date();

}
