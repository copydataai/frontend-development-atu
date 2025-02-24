import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListcomponentComponent} from "./listcomponent/listcomponent.component"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
