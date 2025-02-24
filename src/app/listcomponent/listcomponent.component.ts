import { Component } from '@angular/core';

@Component({
  selector: 'app-listcomponent',
  imports: [],
  templateUrl: './listcomponent.component.html',
  styleUrl: './listcomponent.component.css'
})
export class ListcomponentComponent {
  presidents: string[] = ["Higgins", "McAleese", "Robinson", "Hillery", "O Dalaigh"];
}
